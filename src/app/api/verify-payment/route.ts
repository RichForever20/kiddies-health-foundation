import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { reference } = await req.json();

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = await paystackRes.json();

    if (data.status && data.data.status === "success") {
      return NextResponse.json({
        success: true,
        amount: data.data.amount / 100,
        email: data.data.customer.email,
      });
    }

    return NextResponse.json({ success: false }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
