import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(_: any, { params }: any) {
  try {
    const { userId } = params;
    console.log('userId:', userId);

    const carts = await sql`SELECT * FROM carts WHERE user_id = ${Number(userId)};`;

    return NextResponse.json({ carts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
