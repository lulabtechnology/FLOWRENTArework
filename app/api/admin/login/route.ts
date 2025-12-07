import { NextResponse } from "next/server";

interface LoginBody {
  password: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;

  const expectedPassword = process.env.ADMIN_PASSWORD || "cambia-esta-clave";

  if (!body.password) {
    return NextResponse.json(
      { ok: false, message: "Debes escribir la contraseña." },
      { status: 400 }
    );
  }

  if (body.password !== expectedPassword) {
    return NextResponse.json(
      { ok: false, message: "Contraseña incorrecta." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set("admin_token", "admin-autenticado", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
