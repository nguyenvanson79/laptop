

// Kết nối dữ liệu cho các file thay vì tạo nhiều PrismaClient mới
// const prisma = new PrismaClient()
// Khi gõ "prisma" ở bất kỳ file nào thì sẽ import từ đây

import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Chỉ gán prisma vào global khi không phải môi trường production
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
