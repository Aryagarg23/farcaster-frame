import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect to a static image
  return NextResponse.redirect(new URL('/images/registration-form.png', process.env.NEXT_PUBLIC_BASE_URL));
}