import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const existingEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return new NextResponse("Email already in use", { status: 409 });
    }

    const user = await db.user.create({
      data: {
        email,
        password,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
