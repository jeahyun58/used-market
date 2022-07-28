import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

// 먼저 fn을 어떻게 쓸지 적고 그후에 세부사항을 구현하는 작업방식 추천
export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    //Promise<any>를 하는이유 confirm.tsx에서 password void문제 해결
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
