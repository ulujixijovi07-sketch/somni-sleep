import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const email = searchParams.get("email");

  if (secret !== process.env.AUTH_SECRET) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  if (!email) {
    return Response.json({ error: "email required" }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { email },
    data: { role: "ADMIN" },
  });

  return Response.json({ success: true, user: { email: user.email, role: user.role } });
}
