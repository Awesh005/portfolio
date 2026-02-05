import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Force Node.js runtime (IMPORTANT for nodemailer)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Validate input
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Check env variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASS");
      return NextResponse.json(
        { error: "Server email configuration error." },
        { status: 500 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Awesh receives here
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border-radius: 14px; border: 1px solid #e5e7eb;">
          <h2 style="color: #6366f1; margin-bottom: 16px;">
            📩 New Portfolio Contact
          </h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 10px;">
            <p style="white-space: pre-line; line-height: 1.6; color: #374151;">
              ${message}
            </p>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Sent from MD Awesh Portfolio
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
