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
