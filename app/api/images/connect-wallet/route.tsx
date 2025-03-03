import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          color: '#fff',
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          backgroundImage: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
        }}
      >
        <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
          Connect Your Wallet
        </div>
        <div style={{ fontSize: '20px', marginBottom: '40px' }}>
          Verify your NFT ticket ownership
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '200px',
            backgroundColor: '#ffffff20',
            borderRadius: '20px',
            marginBottom: '30px',
          }}
        >
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div style={{ fontSize: '18px', maxWidth: '80%' }}>
          Click "Connect Wallet" to verify your NFT ticket
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}