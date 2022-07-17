import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.json({ ok: true });
} //handler function을 먼저 작성한뒤

//withHandler의 핵심은 "POST"코드를 대신 실행시켜주는 것
export default withHandler("POST", handler); //export default withHandler을 해서 진행
