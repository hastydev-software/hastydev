import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'HastyDev - Soluções Web3 e Blockchain'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0e1e31 0%, #1a2f47 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'radial-gradient(circle at 50% 50%, #35a7ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            HastyDev
          </h1>
          <div
            style={{
              width: '100px',
              height: '4px',
              background: '#35a7ff',
              marginBottom: '30px',
            }}
          />
          <p
            style={{
              fontSize: '36px',
              color: '#99e9ff',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Soluções Web3, Blockchain e Desenvolvimento Descentralizado
          </p>
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '60px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', color: '#aab4cf', fontSize: '24px' }}>
              ⚡ HastyP2P Core
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#aab4cf', fontSize: '24px' }}>
              💎 HastyPay Engine
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#aab4cf', fontSize: '24px' }}>
              🚀 Web3 Solutions
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
