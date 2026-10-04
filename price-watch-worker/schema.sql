CREATE TABLE IF NOT EXISTS snapshots (
  asin TEXT NOT NULL,
  captured_at TEXT NOT NULL,
  price REAL,
  list_price REAL,
  currency TEXT,
  availability TEXT,
  PRIMARY KEY (asin, captured_at)
);

CREATE INDEX IF NOT EXISTS idx_snapshots_asin_time
  ON snapshots(asin, captured_at DESC);

CREATE TABLE IF NOT EXISTS products (
  asin TEXT PRIMARY KEY,
  slug TEXT NOT NULL,
  title TEXT,
  image_url TEXT,
  detail_url TEXT,
  updated_at TEXT
);
