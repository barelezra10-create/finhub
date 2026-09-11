import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { db } from "./db";

export const ADMIN_COOKIE = "fintiex_admin_session";
export const SESSION_SECONDS = 8 * 60 * 60;
const digest = (value: string) => createHash("sha256").update(value).digest();
const sessionDigest = (token: string) => digest(token).toString("hex");

export function validCredentials(username: string, password: string) {
  const expected = process.env.ANALYTICS_ADMIN_PASSWORD;
  if (!expected || expected.length < 20) return false;
  const validPassword = timingSafeEqual(digest(password), digest(expected));
  return username === "admin" && validPassword;
}
export async function validSession(token?: string) {
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return false;
  try {
    const result = await db().query("SELECT 1 FROM fintiex_admin_sessions WHERE token_hash=$1 AND expires_at > now() AND credential_hash=$2", [sessionDigest(token), digest(process.env.ANALYTICS_ADMIN_PASSWORD || "").toString("hex")]);
    return result.rowCount === 1;
  } catch { return false; }
}
export async function createSession() {
  const token = randomBytes(32).toString("hex");
  await db().query("INSERT INTO fintiex_admin_sessions(token_hash, credential_hash, expires_at) VALUES($1,$2,now() + interval '8 hours')", [sessionDigest(token), digest(process.env.ANALYTICS_ADMIN_PASSWORD || "").toString("hex")]);
  return token;
}
export async function revokeSession(token?: string) {
  if (token && /^[a-f0-9]{64}$/.test(token)) await db().query("DELETE FROM fintiex_admin_sessions WHERE token_hash=$1",[sessionDigest(token)]);
}
export async function allowLogin(ip: string) {
  const secret = process.env.ANALYTICS_HASH_SECRET;
  if (!secret || secret.length < 32) throw new Error("Login protection unavailable");
  const bucket = Math.floor(Date.now() / (15 * 60 * 1000));
  const key = createHmac("sha256",secret).update(`login|${bucket}|${ip}`).digest("hex");
  const result = await db().query("INSERT INTO fintiex_admin_login_attempts(key, attempts, expires_at) VALUES($1,1,now()+interval '30 minutes') ON CONFLICT(key) DO UPDATE SET attempts=fintiex_admin_login_attempts.attempts+1 RETURNING attempts", [key]);
  return result.rows[0].attempts <= 10;
}
