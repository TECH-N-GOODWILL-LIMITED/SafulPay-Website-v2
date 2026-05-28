import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Strict validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Prepare simulated transmission details for email receipt log/storage
    // In a real-world integration, this sends to mail servers or DB:
    const mailTransmission = {
      to: "info@safulpay.com",
      from: trimmedEmail,
      subject: "email received or updated from safulpay.com website",
      timestamp: new Date().toISOString(),
    };

    console.log("Mail transmission logged:", mailTransmission);

    return NextResponse.json({
      success: true,
      message: "Email has been submitted successfully.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to submit request" },
      { status: 500 }
    );
  }
}
