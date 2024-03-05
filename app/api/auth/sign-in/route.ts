import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import store from "@/store";
import { loginSuccess } from "@/store/auth/actions";

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
      return new NextResponse("Email already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // Dispatch login success action
    store.dispatch(loginSuccess({ token, user }));

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
