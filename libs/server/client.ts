import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

//prisma client가 계속해서 connect 되는 문제를 해결하기위해 파일 수정
const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
