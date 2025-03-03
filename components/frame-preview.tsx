'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FrameState } from '@/lib/frame-utils';

export default function FramePreview() {
  const [state, setState] = useState<FrameState>(FrameState.INITIAL);
  const [inputText, setInputText] = useState('');
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const getImageUrl = () => {
    switch (state) {
      case FrameState.INITIAL:
        return `${baseUrl}/api/images/initial`;
      case FrameState.CONNECT_WALLET:
        return `${baseUrl}/api/images/connect-wallet`;
      case FrameState.REGISTRATION_FORM:
        return `${baseUrl}/api/images/registration-form`;
      case FrameState.CONFIRMATION:
        return `${baseUrl}/api/images/confirmation`;
      case FrameState.SUCCESS:
        return `${baseUrl}/api/images/success`;
      default:
        return `${baseUrl}/api/images/initial`;
    }
  };

  const getTitle = () => {
    switch (state) {
      case FrameState.INITIAL:
        return "Rare Evo 2025 NFT Ticket Registration";
      case FrameState.CONNECT_WALLET:
        return "Connect Your Wallet";
      case FrameState.REGISTRATION_FORM:
        return "Registration Form";
      case FrameState.CONFIRMATION:
        return "Confirm Registration";
      case FrameState.SUCCESS:
        return "Registration Successful!";
      default:
        return "Rare Evo 2025 NFT Ticket Registration";
    }
  };

  const getDescription = () => {
    switch (state) {
      case FrameState.INITIAL:
        return "Register your NFT ticket for the Rare Evo 2025 blockchain event";
      case FrameState.CONNECT_WALLET:
        return "Connect your wallet to verify your NFT ticket ownership";
      case FrameState.REGISTRATION_FORM:
        return "Enter your details for event registration";
      case FrameState.CONFIRMATION:
        return `Please confirm your details: ${inputText || "No details provided"}`;
      case FrameState.SUCCESS:
        return "Your NFT ticket has been registered. Use this QR code for event check-in.";
      default:
        return "Register your NFT ticket for the Rare Evo 2025 blockchain event";
    }
  };

  const getButtons = () => {
    switch (state) {
      case FrameState.INITIAL:
        return [
          { label: "Register with NFT", onClick: () => setState(FrameState.CONNECT_WALLET) },
          { label: "Demo Mode", onClick: () => setState(FrameState.REGISTRATION_FORM) }
        ];
      case FrameState.CONNECT_WALLET:
        return [
          { label: "Connect Wallet", onClick: () => setState(FrameState.REGISTRATION_FORM) },
          { label: "Back", onClick: () => setState(FrameState.INITIAL) }
        ];
      case FrameState.REGISTRATION_FORM:
        return [
          { label: "Submit", onClick: () => {
            setRegistrationData({
              name: inputText.split(',')[0]?.trim() || 'John Doe',
              email: inputText.split(',')[1]?.trim() || 'john@example.com',
              company: inputText.split(',')[2]?.trim() || 'Blockchain Inc',
            });
            setState(FrameState.CONFIRMATION);
          }},
          { label: "Back", onClick: () => setState(FrameState.INITIAL) }
        ];
      case FrameState.CONFIRMATION:
        return [
          { label: "Confirm", onClick: () => setState(FrameState.SUCCESS) },
          { label: "Edit", onClick: () => setState(FrameState.REGISTRATION_FORM) }
        ];
      case FrameState.SUCCESS:
        return [
          { label: "Start Over", onClick: () => {
            setState(FrameState.INITIAL);
            setInputText('');
          }}
        ];
      default:
        return [{ label: "Start Over", onClick: () => setState(FrameState.INITIAL) }];
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{getTitle()}</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-[1.91/1] relative bg-muted rounded-lg overflow-hidden">
          <img 
            src={getImageUrl()} 
            alt="Frame preview" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/1200x630/3b82f6/ffffff?text=Rare+Evo+2025';
            }}
          />
        </div>
        
        {state === FrameState.REGISTRATION_FORM && (
          <Input
            placeholder="Your Name, Email, Company"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-4"
          />
        )}
        
        {state === FrameState.CONFIRMATION && (
          <div className="bg-muted p-4 rounded-md text-left">
            <p><strong>Name:</strong> {registrationData.name}</p>
            <p><strong>Email:</strong> {registrationData.email}</p>
            <p><strong>Company:</strong> {registrationData.company}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        {getButtons().map((button, index) => (
          <Button 
            key={index} 
            onClick={button.onClick}
            variant={index === 0 ? "default" : "outline"}
            className="flex-1"
          >
            {button.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}