import { contactSchema } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedBody = contactSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: parsedBody.error.format() },
        { status: 400 }
      );
    }

    const { email, name, message, subject } = parsedBody.data;

    const recipient = process.env.EMAIL_TO;

    if (!recipient) {
      throw new Error(
        "Recipient email is not defined in environment variables."
      );
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
      })

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
                <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Message from Your Portfolio</h2>
                
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0070f3;">${email}</a></p>
                
                <div style="background-color: #f8f8f8; padding: 15px; border-radius: 4px; margin-top: 15px;">
                    <h3 style="margin-top: 0; color: #333;">Message:</h3>
                    <p style="white-space: pre-wrap; color: #555;">${message}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eaeaea; font-size: 12px; color: #777;">
                    <p>Thank you for reaching out through my portfolio. I’ll get back to you soon!</p>
                </div>
            </div>
        `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", info },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error },
      { status: 500 }
    );
  }
}
