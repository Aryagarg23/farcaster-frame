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
        <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
          Rare Evo 2025
        </div>
        <div style={{ fontSize: '24px', marginBottom: '40px' }}>
          NFT Ticket Registration
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
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div style={{ fontSize: '20px', maxWidth: '80%' }}>
          Register your NFT ticket for the blockchain event
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}