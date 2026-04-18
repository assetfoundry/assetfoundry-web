import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const TO = process.env.CONTACT_TO_EMAIL ?? "gwh@assetfoundry.com";
const FROM = "noreply@assetfoundry.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    await sgMail.send({
      to: TO,
      from: FROM,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
