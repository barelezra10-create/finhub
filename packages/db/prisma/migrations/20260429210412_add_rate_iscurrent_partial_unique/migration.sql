-- Enforce: at most one current rate per (lenderId, productType, productSubtype).
-- Uses COALESCE because productSubtype is nullable and Postgres treats NULL as
-- distinct in unique indexes by default.
CREATE UNIQUE INDEX "Rate_current_per_product_unique"
  ON "Rate" ("lenderId", "productType", COALESCE("productSubtype", ''))
  WHERE "isCurrent" = true;
