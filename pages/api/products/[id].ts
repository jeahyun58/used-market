import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const product = await client.product.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      //user: true 이런식으로 가져오면 user정보 전체를 가져오게됌. 괜히 delay되게 그럴필요는 없음.
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  //product 검색할때 공백으로 split해 배열을 만들도록
  const terms = product?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: product?.id,
        },
      },
    },
  });
  res.json({ ok: true, product, relatedProducts });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
