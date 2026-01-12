import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import HardwarePopup from "@/models/HardwarePopup";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const saved = await HardwarePopup.create(body);

    return NextResponse.json({ success: true, data: saved });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}

