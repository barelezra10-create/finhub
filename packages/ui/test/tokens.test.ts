import { describe, it, expect } from "vitest";
import { tokens } from "../src/tokens.js";

describe("brand tokens", () => {
  it("exposes the Fintiex palette", () => {
    expect(tokens.color.primary).toBe("#0F4C81");
    expect(tokens.color.accent).toBe("#1F8A70");
    expect(tokens.color.ink).toBe("#0B1220");
    expect(tokens.color.paper).toBe("#FBFAF7");
  });

  it("exposes typography stacks", () => {
    expect(tokens.font.display).toContain("IBM Plex Serif");
    expect(tokens.font.body).toContain("Inter");
  });

  it("is immutable", () => {
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      tokens.color.primary = "#FF0000";
    }).toThrow();
  });
});
