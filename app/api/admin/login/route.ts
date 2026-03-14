import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    // ✅ COOKIE SET
    res.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
