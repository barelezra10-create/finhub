import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.lender.upsert({
    where: { slug: "marcus" },
    create: {
      slug: "marcus",
      name: "Marcus by Goldman Sachs",
      websiteUrl: "https://www.marcus.com",
      fdic: true,
    },
    update: {},
  });

  await prisma.lender.upsert({
    where: { slug: "ally" },
    create: {
      slug: "ally",
      name: "Ally Bank",
      websiteUrl: "https://www.ally.com",
      fdic: true,
    },
    update: {},
  });

  console.log("seed: 2 lenders upserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
