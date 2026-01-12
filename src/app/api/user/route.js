import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  try {

    const user = verifyToken(req);
    return Response.json({ message: "Welcome user", user });
  } catch (err) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}