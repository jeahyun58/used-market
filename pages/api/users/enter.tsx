import mail from "@sendgrid/mail";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + ""; // + ""을 추가하면 string으로 바꿔줌
  const token = await client.token.create({
    data: {
      payload,
      user: {
        //connect는 이미 존재하는 user와 연결해준다.
        //connectOrCreate를 사용해서 유저를 찾으면 token과 연결하고 찾지못하면 create한다.
        connectOrCreate: {
          where: {
            ...user,
            /* ...(phone ? { phone: +phone } : {}),
          ...(email ? { email } : {}), */
          },
          create: {
            name: "Anonymous",
            ...user,
            /* ...(phone ? { phone: +phone } : {}),
          ...(email ? { email } : {}), */
          },
        },
      },
    },
  });
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}.`,
    });
    console.log(message); */
  } else if (email) {
    /* const email = await mail.send({
      from: "nico@nomadcoders.co",
      to: "nico@nomadcoders.co",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
    console.log(email); */
  }
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
  return res.json({
    ok: true,
  });
} //handler function을 먼저 작성한뒤

//withHandler의 핵심은 "POST"코드를 대신 실행시켜주는 것

export default withHandler({ method: "POST", handler, isPrivate: false }); //export default withHandler을 해서 진행
