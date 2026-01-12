import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "../../../models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    console.log("Login attempt for:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log(" User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log(" User found:", user.email);

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log(" Invalid password");
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    console.log(" Password matched");

    if (!process.env.JWT_SECRET) {
      console.log(" JWT_SECRET missing");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log(" Token generated");
    return NextResponse.json({ token });
  } catch (error) {
    console.error(" Login error:", error);
    return NextResponse.json({ error: "Login failed", details: error.message }, { status: 500 });
  }
}

