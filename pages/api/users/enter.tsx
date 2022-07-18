import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
      /* ...(phone ? { phone: +phone } : {}),
      ...(email ? { email } : {}), */
    },
    create: {
      name: "Anonymous",
      ...payload,
      /* ...(phone ? { phone: +phone } : {}),
      ...(email ? { email } : {}), */
    },
    update: {},
  });
  console.log(user);
  //유저가 있는지 확인
  //findunique는 User \ null만을 return
  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("Found it. Success Login!");
    //유저가 없다면 유저 생성
    if (!user) {
      console.log("Did not find. Would you create?");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }

  //phone 로그인 경우 작성
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone, //+phone을 해주는 이유 = 그대로 보내면 prisma에서 Int가 아닌 string이므로 에러를 일으킴
      },
    });
    if (user) console.log("Found it. Success Login!");
    //유저가 없다면 유저 생성
    if (!user) {
      console.log("Did not find. Would you create?");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  return res.json({ ok: true });
} //handler function을 먼저 작성한뒤

//withHandler의 핵심은 "POST"코드를 대신 실행시켜주는 것
export default withHandler("POST", handler); //export default withHandler을 해서 진행
