import React from 'react';

function BenKimim() {
    return (
        <div
            style={{
                backgroundColor: '#C8A2C8',
                minHeight: '100vh',
                padding: '2rem',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <h1
                className="title-animate"
                style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    marginBottom: '1rem',
                    textAlign: 'center',
                }}
            >
                Ben Kimim?
            </h1>

            <div
                onClick={() => (window.location.href = '/')}
                style={{
                    alignSelf: 'flex-end',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                }}
            >
                Ana Sayfa
            </div>

            <img
                src="/profil.jpg"
                alt="Profil"
                className="image-animate"
                style={{
                    width: '90%',
                    maxWidth: '400px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '3px solid white',
                    marginBottom: '1.5rem',
                }}
            />

            <div
                style={{
                    maxWidth: '700px',
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                }}
            >
                <p>
                    Ben Sena Arıkan, 21 yaşında, Balıkesir'de Bilgisayar Mühendisliği 2. sınıf öğrencisiyim; C1 seviyesinde İngilizce biliyor, veri bilimi alanında sertifikalı eğitimler alarak kendimi geliştiriyorum. Sporları takip etmeyi, buz pateni yapmayı, okumayı ve öğrendiklerimi paylaşmayı severim.
                </p>
                <p><strong>E-mail:</strong> senaarikan06@gmail.com</p>
                <p><strong>Konum:</strong> Balıkesir/Bigadiç</p>
            </div>

            <style>{`
                .title-animate {
                    animation: slideGrowTitle 2s ease forwards;
                }
                .image-animate {
                    animation: slideGrowImage 2s ease 0.5s forwards;
                }
                @keyframes slideGrowTitle {
                    0% { transform: translateX(-100%) scale(0.5); opacity: 0; }
                    100% { transform: translateX(0) scale(1); opacity: 1; }
                }
                @keyframes slideGrowImage {
                    0% { transform: translateX(-100%) scale(0.5); opacity: 0; }
                    100% { transform: translateX(0) scale(1); opacity: 1; }
                }

                @media (max-width: 600px) {
                    h1.title-animate {
                        font-size: 2rem !important;
                    }
                    div[style*="font-size: 1.2rem"] {
                        font-size: 1rem !important;
                        padding: 0 1rem;
                    }
                    img.image-animate {
                        max-width: 90% !important;
                        height: auto !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default BenKimim;
