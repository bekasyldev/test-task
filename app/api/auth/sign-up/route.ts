// pages/api/login.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@/lib/db";
import store from "@/store"; // Import your Redux store
import { loginSuccess } from "@/store/auth/actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new NextResponse("Invalid email or password", { status: 400 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return new NextResponse("Invalid email or password", { status: 400 });
    }

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
