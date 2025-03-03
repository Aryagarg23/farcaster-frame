import { NextRequest, NextResponse } from 'next/server';
import { getFrameHtmlResponse, FrameState, parseFrameRequest, FrameRequest } from '@/lib/frame-utils';

export async function POST(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const frameRequest = await parseFrameRequest(req);
  
  if (!frameRequest) {
    return NextResponse.json({ error: 'Invalid frame request' }, { status: 400 });
  }

  const { buttonIndex } = frameRequest.untrustedData;
  const currentState = req.nextUrl.searchParams.get('state') as FrameState || FrameState.INITIAL;
  const inputText = req.nextUrl.searchParams.get('text') || '';

  // Handle different states and button clicks
  switch (currentState) {
    case FrameState.INITIAL:
      // Button 1: Register with NFT, Button 2: Demo Mode
      return handleInitialState(baseUrl, buttonIndex);
    
    case FrameState.CONNECT_WALLET:
      // Button 1: Connect Wallet, Button 2: Back
      return handleConnectWalletState(baseUrl, buttonIndex);
    
    case FrameState.REGISTRATION_FORM:
      // Button 1: Submit, Button 2: Back
      return handleRegistrationFormState(baseUrl, buttonIndex, inputText);
    
    case FrameState.CONFIRMATION:
      // Button 1: Confirm, Button 2: Edit
      return handleConfirmationState(baseUrl, buttonIndex);
    
    case FrameState.SUCCESS:
      // Button 1: Start Over
      return handleSuccessState(baseUrl, buttonIndex);
    
    default:
      return NextResponse.json({ error: 'Invalid state' }, { status: 400 });
  }
}

function handleInitialState(baseUrl: string, buttonIndex: number) {
  if (buttonIndex === 1) {
    // Register with NFT - Go to wallet connection
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Connect Your Wallet",
        description: "Connect your wallet to verify your NFT ticket ownership",
        image: `${baseUrl}/api/images/connect-wallet`,
        buttons: ["Connect Wallet", "Back"],
        state: FrameState.CONNECT_WALLET,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.CONNECT_WALLET}`,
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  } else {
    // Demo Mode - Skip wallet connection, go to registration form
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Registration Form",
        description: "Enter your details for event registration (Demo Mode)",
        image: `${baseUrl}/api/images/registration-form`,
        buttons: ["Submit", "Back"],
        state: FrameState.REGISTRATION_FORM,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.REGISTRATION_FORM}`,
        inputText: { placeholder: "Your Name, Email, Company" },
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function handleConnectWalletState(baseUrl: string, buttonIndex: number) {
  if (buttonIndex === 1) {
    // Connect Wallet - Simulate successful connection and go to registration form
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Registration Form",
        description: "Enter your details for event registration",
        image: `${baseUrl}/api/images/registration-form`,
        buttons: ["Submit", "Back"],
        state: FrameState.REGISTRATION_FORM,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.REGISTRATION_FORM}`,
        inputText: { placeholder: "Your Name, Email, Company" },
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  } else {
    // Back - Return to initial state
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Rare Evo 2025 NFT Ticket Registration",
        description: "Register your NFT ticket for the Rare Evo 2025 blockchain event",
        image: `${baseUrl}/api/images/initial`,
        buttons: ["Register with NFT", "Demo Mode"],
        state: FrameState.INITIAL,
        postUrl: `${baseUrl}/api/frame/action`,
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function handleRegistrationFormState(baseUrl: string, buttonIndex: number, inputText: string) {
  if (buttonIndex === 1) {
    // Submit - Go to confirmation
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Confirm Registration",
        description: `Please confirm your details: ${inputText || "No details provided"}`,
        image: `${baseUrl}/api/images/confirmation`,
        buttons: ["Confirm", "Edit"],
        state: FrameState.CONFIRMATION,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.CONFIRMATION}&text=${encodeURIComponent(inputText)}`,
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  } else {
    // Back - Return to initial state
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Rare Evo 2025 NFT Ticket Registration",
        description: "Register your NFT ticket for the Rare Evo 2025 blockchain event",
        image: `${baseUrl}/api/images/initial`,
        buttons: ["Register with NFT", "Demo Mode"],
        state: FrameState.INITIAL,
        postUrl: `${baseUrl}/api/frame/action`,
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function handleConfirmationState(baseUrl: string, buttonIndex: number) {
  if (buttonIndex === 1) {
    // Confirm - Go to success
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Registration Successful!",
        description: "Your NFT ticket has been registered. Use this QR code for event check-in.",
        image: `${baseUrl}/api/images/success`,
        buttons: ["Start Over"],
        state: FrameState.SUCCESS,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.SUCCESS}`,
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  } else {
    // Edit - Return to registration form
    return new NextResponse(
      getFrameHtmlResponse({
        title: "Registration Form",
        description: "Enter your details for event registration",
        image: `${baseUrl}/api/images/registration-form`,
        buttons: ["Submit", "Back"],
        state: FrameState.REGISTRATION_FORM,
        postUrl: `${baseUrl}/api/frame/action?state=${FrameState.REGISTRATION_FORM}`,
        inputText: { placeholder: "Your Name, Email, Company" },
      }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function handleSuccessState(baseUrl: string, buttonIndex: number) {
  // Start Over - Return to initial state
  return new NextResponse(
    getFrameHtmlResponse({
      title: "Rare Evo 2025 NFT Ticket Registration",
      description: "Register your NFT ticket for the Rare Evo 2025 blockchain event",
      image: `${baseUrl}/api/images/initial`,
      buttons: ["Register with NFT", "Demo Mode"],
      state: FrameState.INITIAL,
      postUrl: `${baseUrl}/api/frame/action`,
    }),
    { headers: { 'Content-Type': 'text/html' } }
  );
}