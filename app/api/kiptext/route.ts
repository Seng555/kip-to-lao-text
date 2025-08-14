// app/api/kiptext/route.ts
import { NextResponse } from "next/server";
import { KIPTEXTOKE, KIPTEXT, mapFromOrigin } from "@/app/kiptext"; // Adjust path if needed

// ✅ Add this line for Edge compatibility
export const runtime = 'edge';

const MAX_NUMBER = 9999999999;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const numberParam = searchParams.get("number");

  const number = numberParam ? parseFloat(numberParam) : null;

  if (number === null || isNaN(number)) {
    return NextResponse.json(
      {
        error: "Invalid number",
        example: "/api/kiptext?number=123456789",
      },
      { status: 400 }
    );
  }

  if (number > MAX_NUMBER) {
    return NextResponse.json(
      {
        error: `Number too large. Max allowed is ${MAX_NUMBER}.`,
        max: MAX_NUMBER,
      },
      { status: 400 }
    );
  }

  const result = {
    number: numberParam,
    lo: KIPTEXT(number),
    origin: mapFromOrigin(number),
    oke: KIPTEXTOKE(number),
  };

  return NextResponse.json(result);
}
