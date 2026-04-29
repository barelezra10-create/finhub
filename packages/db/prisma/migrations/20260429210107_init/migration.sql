-- CreateEnum
CREATE TYPE "Vertical" AS ENUM ('MORTGAGE', 'HYSA', 'CD', 'PERSONAL_LOAN', 'AUTO_LOAN', 'CREDIT_CARD', 'CHECKING', 'MONEY_MARKET', 'INVESTING');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('MORTGAGE_30Y_FIXED', 'MORTGAGE_15Y_FIXED', 'MORTGAGE_5Y_ARM', 'REFI_30Y_FIXED', 'HELOC', 'JUMBO_30Y_FIXED', 'HYSA', 'CD_3M', 'CD_6M', 'CD_12M', 'CD_24M', 'CD_60M', 'PERSONAL_LOAN', 'AUTO_LOAN_NEW', 'AUTO_LOAN_USED', 'AUTO_LOAN_REFI', 'CREDIT_CARD_CASHBACK', 'CREDIT_CARD_TRAVEL', 'CREDIT_CARD_BALANCE_TRANSFER', 'CREDIT_CARD_ZERO_APR', 'CREDIT_CARD_NO_FEE', 'CREDIT_CARD_BUSINESS', 'CREDIT_CARD_STUDENT', 'CREDIT_CARD_SECURED', 'CHECKING', 'MONEY_MARKET', 'BROKERAGE');

-- CreateEnum
CREATE TYPE "Confidence" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "Lender" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "logoUrl" TEXT,
    "fdic" BOOLEAN NOT NULL DEFAULT false,
    "ncua" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "lenderId" TEXT NOT NULL,
    "productType" "ProductType" NOT NULL,
    "url" TEXT NOT NULL,
    "selector" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "lastScrapedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rate" (
    "id" TEXT NOT NULL,
    "lenderId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "productType" "ProductType" NOT NULL,
    "productSubtype" TEXT,
    "apyApr" DECIMAL(8,5) NOT NULL,
    "termMonths" INTEGER,
    "minDeposit" DECIMAL(12,2),
    "minCreditScore" INTEGER,
    "fees" JSONB,
    "sourceUrl" TEXT NOT NULL,
    "scrapedAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "confidence" "Confidence" NOT NULL DEFAULT 'HIGH',
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "vertical" "Vertical" NOT NULL,
    "template" TEXT NOT NULL,
    "geoSlug" TEXT,
    "variantSlug" TEXT,
    "title" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "bodyJson" JSONB NOT NULL,
    "schemaOrgJson" JSONB,
    "versionNumber" INTEGER NOT NULL DEFAULT 1,
    "publishedAt" TIMESTAMP(3),
    "lastWrittenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleVersion" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "bodyJson" JSONB NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generatedBy" TEXT NOT NULL,

    CONSTRAINT "ArticleVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScrapeError" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT,
    "url" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "stack" TEXT,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapeError_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lender_slug_key" ON "Lender"("slug");

-- CreateIndex
CREATE INDEX "Source_active_lastScrapedAt_idx" ON "Source"("active", "lastScrapedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Source_lenderId_productType_url_key" ON "Source"("lenderId", "productType", "url");

-- CreateIndex
CREATE INDEX "Rate_productType_isCurrent_scrapedAt_idx" ON "Rate"("productType", "isCurrent", "scrapedAt");

-- CreateIndex
CREATE INDEX "Rate_lenderId_productType_isCurrent_idx" ON "Rate"("lenderId", "productType", "isCurrent");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE INDEX "Article_vertical_template_idx" ON "Article"("vertical", "template");

-- CreateIndex
CREATE INDEX "Article_publishedAt_idx" ON "Article"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleVersion_articleId_versionNumber_key" ON "ArticleVersion"("articleId", "versionNumber");

-- CreateIndex
CREATE INDEX "ScrapeError_sourceId_occurredAt_idx" ON "ScrapeError"("sourceId", "occurredAt");

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_lenderId_fkey" FOREIGN KEY ("lenderId") REFERENCES "Lender"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_lenderId_fkey" FOREIGN KEY ("lenderId") REFERENCES "Lender"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleVersion" ADD CONSTRAINT "ArticleVersion_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
