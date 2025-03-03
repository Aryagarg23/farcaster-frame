import { NextRequest, NextResponse } from 'next/server';
import { getFrameHtmlResponse, FrameState, parseFrameRequest } from '@/lib/frame-utils';

export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  
  // Initial frame with options
  const frameHtml = getFrameHtmlResponse({
    title: "Rare Evo 2025 NFT Ticket Registration",
    description: "Register your NFT ticket for the Rare Evo 2025 blockchain event",
    image: `${baseUrl}/api/images/initial`,
    buttons: ["Register with NFT", "Demo Mode"],
    state: FrameState.INITIAL,
    postUrl: `${baseUrl}/api/frame/action`,
  });

  return new NextResponse(frameHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "Use the /api/frame/action endpoint for POST requests" });
}