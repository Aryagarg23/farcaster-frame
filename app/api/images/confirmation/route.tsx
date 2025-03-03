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
          Confirm Registration
        </div>
        <div style={{ fontSize: '20px', marginBottom: '40px' }}>
          Please review your registration details
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
            backgroundColor: '#ffffff20',
            borderRadius: '20px',
            padding: '30px',
            marginBottom: '30px',
          }}
        >
          <div style={{ 
            width: '100%', 
            backgroundColor: '#ffffff10', 
            borderRadius: '8px',
            marginBottom: '15px',
            padding: '15px',
            fontSize: '16px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '14px', color: '#ffffffaa', marginBottom: '5px' }}>Name:</div>
            <div>John Doe</div>
          </div>
          <div style={{ 
            width: '100%', 
            backgroundColor: '#ffffff10', 
            borderRadius: '8px',
            marginBottom: '15px',
            padding: '15px',
            fontSize: '16px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '14px', color: '#ffffffaa', marginBottom: '5px' }}>Email:</div>
            <div>john@example.com</div>
          </div>
          <div style={{ 
            width: '100%', 
            backgroundColor: '#ffffff10', 
            borderRadius: '8px',
            padding: '15px',
            fontSize: '16px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '14px', color: '#ffffffaa', marginBottom: '5px' }}>Company:</div>
            <div>Blockchain Inc</div>
          </div>
        </div>
        <div style={{ fontSize: '18px', maxWidth: '80%' }}>
          Click "Confirm" to complete your registration
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}