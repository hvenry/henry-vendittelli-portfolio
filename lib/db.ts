import { PrismaClient } from "@prisma/client";

/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}
/* eslint-enable no-var */

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ["error"]
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
