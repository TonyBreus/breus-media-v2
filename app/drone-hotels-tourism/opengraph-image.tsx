import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Аэросъёмка отелей и курортов в Тбилиси и по всей Грузии — Breus Media';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)',
                    padding: '80px',
                    fontFamily: 'Inter, sans-serif',
                    position: 'relative',
                }}
            >
                <svg width="1200" height="280" viewBox="0 0 1200 280" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                    <path d="M0,180 L100,100 L200,140 L320,60 L450,120 L580,40 L720,110 L860,50 L1000,100 L1100,70 L1200,110 L1200,280 L0,280 Z" fill="#141414" />
                    <path d="M0,220 L150,140 L300,190 L450,120 L600,170 L750,130 L900,180 L1050,140 L1200,190 L1200,280 L0,280 Z" fill="#0d0d0d" />
                </svg>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFD23F',
                        fontSize: '20px',
                        fontWeight: 700,
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                    }}
                >
                    Breus Media · Тбилиси
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            color: 'white',
                            fontSize: '72px',
                            fontWeight: 700,
                            lineHeight: 1.05,
                            maxWidth: '900px',
                        }}
                    >
                        Аэросъёмка отелей в Грузии
                    </div>
                    <div
                        style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '32px',
                            marginTop: '24px',
                            maxWidth: '900px',
                        }}
                    >
                        Дрон + FPV для Booking, сайта и соцсетей · от 250 ₾
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '20px',
                        }}
                    >
                        breus.media/drone-hotels-tourism
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            color: '#FFD23F',
                            fontSize: '18px',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Тбилиси · Кахетия · Казбеги
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
