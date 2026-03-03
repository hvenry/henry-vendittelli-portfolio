import { handleAuth } from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

const handler = handleAuth();

export const GET = async (
  req: NextRequest,
  ctx: { params: Promise<{ auth0: string }> }
) => {
  const params = await ctx.params;
  return handler(req, { params });
};
