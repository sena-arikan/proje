import React from 'react';
import { FaGlobe, FaMobileAlt, FaDatabase, FaBrain } from 'react-icons/fa';

function NelerYapabilirim() {
    const skills = [
        {
            title: "Yazılım",
            description: "JavaScript, Java, C# ve Python dillerinde projeler geliştirebilirim, daha fazla yazılım dili öğrenmek ve şu an bildiklerimi geliştirmek için çaba gösteriyorum.",
            icon: <FaGlobe size={40} color="#fff" />
        },
        {
            title: "Web Tasarım",
            description: "HTML ve CSS'i verimli kullanabilir ve çeşitli tasarım, proje ve sayfalar yapabilirim.",
            icon: <FaMobileAlt size={40} color="#fff" />
        },
        {
            title: "Veritabanı Yönetimi",
            description: "React, Pandas gibi kütüphaneleri ve SQLite, MySQL gibi veritabanlarını verimli kullanabilirim.",
            icon: <FaDatabase size={40} color="#fff" />
        },
        {
            title: "Veri Bilimi",
            description: "Veri bilimi ve yapay zekaya ilgiliyim, çeşitli eğitim ve sertifikalar alma üzerinde çalışıyorum.",
            icon: <FaBrain size={40} color="#fff" />
        },
    ];

    return (
        <div style={{
            backgroundImage: "url('/sayfa.jpg')",
            backgroundColor: '#C8A2C8',
            minHeight: '100vh',
            padding: '3rem 1rem',
            color: 'purple',
            boxSizing: 'border-box',
        }}>
            <h1 className="page-title">Neler Yapabilirim?</h1>
            <p className="page-subtitle">
                Yazılım ve teknoloji alanında sahip olduğum beceriler:
            </p>
            <div className="skills-container">
                {skills.map(({ title, description, icon }, index) => (
                    <div
                        key={index}
                        className="skill-card"
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                        }}
                    >
                        <div>{icon}</div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>

            <style>{`
                .page-title {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    text-align: center;
                }
                .page-subtitle {
                    font-size: 1.4rem;
                    max-width: 600px;
                    margin: 0 auto 3rem auto;
                    text-align: center;
                }
                .skills-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                }
                .skill-card {
                    background-color: #A67FBF;
                    border-radius: 12px;
                    padding: 1.5rem;
                    width: 260px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                .skill-card h3 {
                    margin-top: 1rem;
                    margin-bottom: 0.7rem;
                }
                .skill-card p {
                    font-size: 1rem;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .page-title {
                        font-size: 2rem;
                    }
                    .page-subtitle {
                        font-size: 1.1rem;
                        padding: 0 1rem;
                    }
                    .skill-card {
                        width: 90%;
                        max-width: 320px;
                    }
                }
            `}</style>
        </div>
    );
}

export default NelerYapabilirim;
