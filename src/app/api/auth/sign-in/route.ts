import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const response = await fetch(`${process.env.API_URL}/auth/sign-in`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Đăng nhập thất bại" }, { status: 401 });
  }

  const data = await response.json();

  return NextResponse.json(data);
}
