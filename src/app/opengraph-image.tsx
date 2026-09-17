import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'K.M.FIBER Ι.Κ.Ε. - Τηλεπικοινωνιακές Υποδομές & Οπτικές Ίνες';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #090d16 0%, #0f172a 50%, #082f49 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
          border: '2px solid rgba(6, 182, 212, 0.4)',
        }}
      >
        {/* Optical Fiber Glow Accent Lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4)',
          }}
        />

        {/* Top bar with Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '2px solid #06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22d3ee',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              KM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1px', color: '#ffffff' }}>
                K.M.FIBER <span style={{ color: '#22d3ee' }}>Ι.Κ.Ε.</span>
              </span>
              <span style={{ fontSize: '15px', color: '#94a3b8', letterSpacing: '1px' }}>
                TELECOM INFRASTRUCTURE &amp; OPTICAL NETWORKS
              </span>
            </div>
          </div>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              color: '#38bdf8',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            Επίσημη Δημοσιότητα Γ.Ε.ΜΗ.
          </div>
        </div>

        {/* Center Main Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '950px' }}>
          <div
            style={{
              fontSize: '52px',
              fontWeight: '900',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              color: '#ffffff',
            }}
          >
            Τηλεπικοινωνιακές Υποδομές &amp; Δίκτυα Οπτικών Ινών
          </div>
          <div style={{ fontSize: '24px', color: '#cbd5e1', lineHeight: 1.4 }}>
            FTTH / FTTB • Οριζόντιες Διατρήσεις • Εγκατάσταση Εξοπλισμού • OTDR Μετρήσεις
          </div>
        </div>

        {/* Bottom Legal Identifiers Box */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '16px',
            padding: '20px 30px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>ΑΡ. Γ.Ε.ΜΗ.</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#22d3ee' }}>188525832000</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>Α.Φ.Μ.</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>803064377</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>ΕΠΙΜΕΛΗΤΗΡΙΟ</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>ΚΑΣΤΟΡΙΑΣ</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>ΕΔΡΑ</span>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>Άργος Ορεστικό, 52200</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
