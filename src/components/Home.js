import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

    // slugify fonksiyonu: Türkçe karakterleri ASCII'ye indirger
    function slugify(str) {
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // diakritikleri kaldır
            .replace(/ı/g, 'i')              // ı → i
            .replace(/\s+/g, '-')
            .replace(/[?]/g, '');
    }

    return (
        <div
            className="App"
            style={{

                backgroundImage: "url('/Anasayfa3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'Light Pink',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',  // bu çok önemli: tıklama olaylarını engelleme
                    zIndex: 1,
                }}
            ></div>
            <h1 className="fancy-title" style={{ color: '#FFFFF0' }}>Sena Arıkan</h1>
            <p
                className="fade-in-scale"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    color: '#FF69B4',
                    fontSize: '1.8rem',
                    marginTop: '1rem',
                    animationDelay: '0.2s'
                }}
            >
                Meraklı,tutukulu,öğrenci.
            </p>

            <div
                className="fade-in-scale"
                style={{
                    color: 'white',
                    marginTop: '2rem',
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    animationDelay: '0.4s',
                    transition: 'transform 0.3s ease',
                    fontWeight: '700'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                {['Ben Kimim?', 'Neler Yapabilirim', 'Portfolyo', 'İletişim'].map((menu, index) => {
                    const path = slugify(menu);
                    const routes = {
                        'ben-kimim': '/ben-kimim',
                        'neler-yapabilirim': '/neler-yapabilirim',
                        'portfolyo': '/portfolyo',
                        'egitim': '/egitim',
                        'iletisim': '/iletisim'
                    };
                    return (
                        <Link
                            key={index}
                            to={routes[path] || '#'}
                            className="menu-link"
                            style={{ color: 'whitesmoke', textDecoration: 'none',fontSize: '1.5rem',fontWeight: '700' }}
                        >
                            {menu}
                        </Link>
                    );
                })}
            </div>
            <div className="social-icons" style={{ marginTop: '3rem' }}>
                <a href="https://github.com/sena-arikan" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/github-preview.png')" }}
                    ></div>
                </a>
                <a href="https://www.instagram.com/sena_arikan?igsh=NXU4cmJ1eHZveHZz&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/instagram-preview.png')" }}
                    ></div>
                </a>
                <a href="https://www.linkedin.com/in/_sena_arikan_aa7194339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/linkedin-preview.png')" }}
                    ></div>
                </a>
            </div>

        </div>
    );
}

export default Home;
