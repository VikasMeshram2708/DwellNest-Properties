import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function getUser(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  if (!session) {
    return new Error("Un-Authenticated. Login Required");
  } else {
    return session;
  }
}
