import { PrismaClient } from "@prisma/client";
import { env } from "./env";

declare global {
  var cachedPrisma: PrismaClient;
}

let db: PrismaClient;

if (env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  db = global.cachedPrisma;
}

export default db;