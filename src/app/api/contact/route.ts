import { NextResponse } from "next/server";

const recipient = "janakirampedireddi@gmail.com";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!
  );

export async function POST(request: Request) {
  const payload = await request.json();
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (process.env.CONTACT_FORM_MOCK === "true") {
    return NextResponse.json({ success: true, mocked: true });
  }

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 }
    );
  }

  const fields = ["name", "phone", "email", "childAge", "message"] as const;
  const values = Object.fromEntries(
    fields.map((field) => [field, typeof payload[field] === "string" ? payload[field].trim() : ""])
  ) as Record<(typeof fields)[number], string>;

  if (!values.name || !values.phone || !values.email || !values.message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email) || values.message.length > 5000) {
    return NextResponse.json({ error: "Please enter a valid email and message." }, { status: 400 });
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "Kids-Palace-Website/1.0",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: values.email,
      subject: `New Kids Palace enquiry from ${values.name}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(values.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
        <p><strong>Child's age:</strong> ${escapeHtml(values.childAge || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json({ error: "We couldn't send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
