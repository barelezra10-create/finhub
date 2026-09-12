CREATE TABLE IF NOT EXISTS fintiex_analytics (
  event_id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  kind text NOT NULL CHECK (kind IN ('pageview','outbound')),
  visitor char(64) NOT NULL,
  path varchar(400) NOT NULL,
  source varchar(200) NOT NULL,
  medium varchar(80) NOT NULL DEFAULT '',
  campaign varchar(80) NOT NULL DEFAULT '',
  target varchar(200) NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS fintiex_analytics_time ON fintiex_analytics(created_at);
CREATE INDEX IF NOT EXISTS fintiex_analytics_visitor_time ON fintiex_analytics(visitor, created_at);
CREATE TABLE IF NOT EXISTS fintiex_admin_sessions (
  token_hash char(64) PRIMARY KEY,
  credential_hash char(64) NOT NULL,
  expires_at timestamptz NOT NULL
);
CREATE TABLE IF NOT EXISTS fintiex_admin_login_attempts (
  key char(64) PRIMARY KEY,
  attempts integer NOT NULL,
  expires_at timestamptz NOT NULL
);
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS country varchar(2) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS region varchar(100) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS city varchar(120) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS device varchar(30) NOT NULL DEFAULT 'Unknown';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS browser varchar(60) NOT NULL DEFAULT 'Unknown';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS os varchar(60) NOT NULL DEFAULT 'Unknown';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS language varchar(30) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS referrer varchar(200) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS channel varchar(40) NOT NULL DEFAULT 'Unclassified';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS search_engine varchar(30) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS keyword varchar(120) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS keyword_type varchar(30) NOT NULL DEFAULT '';
CREATE INDEX IF NOT EXISTS fintiex_analytics_dimensions ON fintiex_analytics(country, device, created_at);
CREATE TABLE IF NOT EXISTS fintiex_search_reports (
  engine varchar(10) NOT NULL,
  period_days integer NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  fetched_at timestamptz NOT NULL DEFAULT now(),
  origin varchar(30) NOT NULL,
  payload jsonb NOT NULL,
  PRIMARY KEY(engine, period_days)
);

ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS offer varchar(80) NOT NULL DEFAULT '';
ALTER TABLE fintiex_analytics ADD COLUMN IF NOT EXISTS placement varchar(80) NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS fintiex_conversions (
 network varchar(100) NOT NULL,
 conversion_id varchar(100) NOT NULL,
 occurred_at date NOT NULL,
 offer varchar(100) NOT NULL,
 status varchar(20) NOT NULL CHECK(status IN ('submitted','approved','paid','rejected')),
 revenue numeric(11,2) NOT NULL CHECK(revenue>=0),
 currency char(3) NOT NULL,
 imported_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(network,conversion_id)
);
CREATE INDEX IF NOT EXISTS fintiex_conversions_date ON fintiex_conversions(occurred_at);
