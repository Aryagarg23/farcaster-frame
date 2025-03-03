import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Rare Evo 2025</CardTitle>
          <CardDescription>NFT Ticket Registration Frame</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a Farcaster Frame for Rare Evo 2025 NFT ticket registration. 
            Users can connect their wallet, verify NFT ownership, and register for the event.
          </p>
          <div className="space-y-2">
            <p>Features:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wallet connection</li>
              <li>NFT verification</li>
              <li>Registration form</li>
              <li>QR code generation</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Link href="/api/frame" className="w-full">
            <Button className="w-full">View Frame</Button>
          </Link>
          <Link href="/preview" className="w-full">
            <Button variant="outline" className="w-full">Interactive Preview</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}