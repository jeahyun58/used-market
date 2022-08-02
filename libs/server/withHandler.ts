import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

// 먼저 fn을 어떻게 쓸지 적고 그후에 세부사항을 구현하는 작업방식 추천
export default function withHandler({
  methods,
  isPrivate = true, // 기본값을 false로 처음부터 설정함
  handler,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    //Promise<any>를 하는이유 confirm.tsx에서 password void문제 해결
    //req.method가 있는지 먼저 확인을 하고 다음으로 methods배열안에 any타입의 req.method가 없는지 확인
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Plz log in." });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
