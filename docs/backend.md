# Backend — API Routes & Server Logic

## Next.js App Router API

### API Route Vorlage
```ts
// src/app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    // Logik hier
    return NextResponse.json({ data: {} });
  } catch (error) {
    return NextResponse.json({ error: "Fehler" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validierung, Verarbeitung
  return NextResponse.json({ success: true });
}
```

### Server Actions (für Formulare)
```ts
"use server";
// Immer return { error } statt throw
export async function submitForm(formData: FormData) {
  const name = formData.get("name") as string;
  if (!name) return { error: "Name fehlt" };
  
  // Verarbeitung...
  return { success: true };
}
```

## Umgebungsvariablen
- `.env.local` — lokal, wird nicht committed
- `.env.example` — Vorlage (ohne echte Werte), wird committed
- Server-only Vars: kein `NEXT_PUBLIC_` Prefix
- Client-seitig erreichbar: `NEXT_PUBLIC_` Prefix nötig

## Formular-Handling (Contact)
- Kontaktformular: via Resend oder Nodemailer
- Spam-Schutz: Honeypot-Felder + Rate Limiting
- Validierung: Zod für Input-Schemas

## Sicherheits-Checkliste
- Keine Secrets im Frontend-Code
- Input immer validieren (Zod)
- CORS-Headers in API Routes setzen wenn nötig
- SQL-Injection unmöglich (kein raw SQL, Parameterized queries)
