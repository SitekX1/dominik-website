import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    // TODO: E-Mail-Versand einrichten (z.B. via Resend: npm install resend)
    // Beispiel-Integration:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@lelo-service.de",
    //   to: "lelo.kontakt@gmail.com",
    //   subject: `Neue Anfrage: ${service} von ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Tel: ${phone}</p><p>Leistung: ${service}</p><p>Nachricht: ${message}</p>`,
    // });

    console.log("Kontaktanfrage eingegangen:", { name, email, phone, service });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Interner Fehler" },
      { status: 500 }
    );
  }
}
