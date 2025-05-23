import React from 'react';


function BenKimim() {
    return (
        <div style={{ backgroundColor: '#C8A2C8', minHeight: '100vh', padding: '2rem', position: 'relative' }}>
            <h1 className="title-animate" style={{ fontSize: '5rem', fontWeight: '900', color: 'white', position: 'absolute', top: '3%', left: '38.5%' }}>
                Ben Kimim?
            </h1>
            <div onClick={() => window.location.href = '/'} style={{ position: 'absolute', top: '11%', right: '5%', fontSize: '1.3rem', color: 'white', cursor: 'pointer' }}>
                Ana Sayfa
            </div>
            <img src="/profil.jpg" alt="Profil" className="image-animate" style={{ position: 'absolute', top: '20%', left: '37%', width: '450px', height: '380px', objectFit: 'cover', borderRadius: '8px', border: '3px solid white' }} />
            <div
                style={{
                    position: 'absolute',
                    top: 'calc(25% + 380px + 20px)', // resmin altına
                    left: '50%',                     // yatayda ortalamak için
                    transform: 'translateX(-50%)',  // yatayda tam ortala
                    color: 'white',
                    fontSize: '1.4rem',
                    width: '700px',                 // isteğe bağlı genişlik
                    textAlign: 'center'             // yazıyı ortalamak istersen
                }}
            >
                <p style={{ marginTop: '1rem' }}>
                    Ben Sena Arıkan, 21 yaşında, Balıkesir'de Bilgisayar Mühendisliği 2. sınıf öğrencisiyim; C1 seviyesinde İngilizce biliyor, veri bilimi alanında sertifikalı eğitimler alarak kendimi geliştiriyorum. Sporları takip etmeyi, buz pateni yapmayı, okumayı ve öğrendiklerimi paylaşmayı severim.
                </p>
                <p><strong>E-mail:</strong> senaarikan06@gmail.com</p>
                <p><strong>Konum:</strong> Balıkesir/Bigadiç</p>
            </div>

            <style>{`
                .fancy-title {
                    font-size: 4rem;
                    font-weight: 900;
                    color: white;
                    position: absolute;
                    top: 3%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                }

                .home-link {
                    position: absolute;
                    top: 11%;
                    right: 5%;
                    font-size: 1.3rem;
                    color: white;
                    cursor: pointer;
                }

                .profile-image {
                    position: relative;
                    display: block;
                    margin: 0 auto;
                    margin-top: 7rem;
                    width: 90%;
                    max-width: 400px;
                    height: auto;
                    object-fit: cover;
                    border-radius: 8px;
                    border: 3px solid white;
                    z-index: 2;
                }

                .text-container {
                    margin: 2rem auto;
                    margin-top: 2.5rem;
                    color: white;
                    font-size: 1.1rem;
                    width: 90%;
                    max-width: 700px;
                    text-align: center;
                }

                /* Animasyonlar */
                .title-animate {
                    animation: slideGrowTitle 2s ease forwards;
                }

                .image-animate {
                    animation: slideGrowImage 2s ease 0.5s forwards;
                }

                @keyframes slideGrowTitle {
                    0% { transform: translateX(-100%) scale(0.5); opacity: 0; }
                    100% { transform: translateX(-50%) scale(1); opacity: 1; }
                }

                @keyframes slideGrowImage {
                    0% { transform: translateX(-100%) scale(0.5); opacity: 0; }
                    100% { transform: translateX(0) scale(1); opacity: 1; }
                }

                /* Mobil uyumluluk */
                @media (max-width: 768px) {
                    .fancy-title {
                        font-size: 2.2rem;
                        top: 2%;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .home-link {
                        top: 8%;
                        right: 4%;
                        font-size: 1rem;
                    }

                    .text-container {
                        font-size: 1rem;
                        margin-top: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default BenKimim;
