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
          Registration Form
        </div>
        <div style={{ fontSize: '20px', marginBottom: '40px' }}>
          Enter your details for event registration
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
            height: '40px', 
            backgroundColor: '#ffffff40', 
            borderRadius: '8px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            fontSize: '16px',
            color: '#ffffffaa'
          }}>
            Name
          </div>
          <div style={{ 
            width: '100%', 
            height: '40px', 
            backgroundColor: '#ffffff40', 
            borderRadius: '8px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            fontSize: '16px',
            color: '#ffffffaa'
          }}>
            Email
          </div>
          <div style={{ 
            width: '100%', 
            height: '40px', 
            backgroundColor: '#ffffff40', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            fontSize: '16px',
            color: '#ffffffaa'
          }}>
            Company
          </div>
        </div>
        <div style={{ fontSize: '18px', maxWidth: '80%' }}>
          Enter your information in the text field below
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}