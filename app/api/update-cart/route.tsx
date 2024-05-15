import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export default async function PUT(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    const products = JSON.stringify({
      [productId]: quantity,
    });

    const updatedCart = await sql`UPDATE carts SET products = ${products} WHERE user_id = ${Number(userId)}`;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
