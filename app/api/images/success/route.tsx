import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  // Generate a simple QR code pattern (this is just a visual representation, not a real QR code)
  const qrSize = 7;
  const qrMatrix = Array(qrSize).fill(0).map(() => Array(qrSize).fill(0));
  
  // Create a simple pattern
  qrMatrix[0][0] = qrMatrix[0][qrSize-1] = qrMatrix[qrSize-1][0] = 1;
  qrMatrix[1][1] = qrMatrix[1][qrSize-2] = qrMatrix[qrSize-2][1] = 1;
  qrMatrix[2][2] = qrMatrix[2][qrSize-3] = qrMatrix[qrSize-3][2] = 1;
  qrMatrix[3][3] = 1;
  qrMatrix[qrSize-2][qrSize-2] = 1;

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
          Registration Successful!
        </div>
        <div style={{ fontSize: '20px', marginBottom: '40px' }}>
          Your NFT ticket has been registered
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '250px',
            height: '250px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            marginBottom: '30px',
            padding: '25px',
          }}
        >
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: `repeat(${qrSize}, 1fr)`,
            gridTemplateRows: `repeat(${qrSize}, 1fr)`,
            gap: '5px',
            width: '200px',
            height: '200px',
          }}>
            {qrMatrix.flatMap((row, i) => 
              row.map((cell, j) => (
                <div key={`${i}-${j}`} style={{
                  backgroundColor: cell ? '#000' : 'transparent',
                  width: '100%',
                  height: '100%',
                }} />
              ))
            )}
          </div>
        </div>
        <div style={{ fontSize: '18px', maxWidth: '80%' }}>
          Use this QR code for event check-in at Rare Evo 2025
        </div>
        <div style={{ 
          fontSize: '14px', 
          marginTop: '20px',
          backgroundColor: '#ffffff20',
          padding: '10px 20px',
          borderRadius: '20px',
        }}>
          Ticket ID: RE2025-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}