import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

/*export default withApiSession(withHandler("GET", handler, true));
이와 같이 인자를 ("GET", handler, true) 하면 로그인이 되지않은 브라우저에서 내용을 볼 수 없지만
true, false 등으로 나열되어 어떤 정보를 표현하는지 모르는 인자를 전달하는 것은 협업 과정에서 비효율적임
*/
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
); //export default withHandler을 해서 진행
