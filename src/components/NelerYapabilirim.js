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
            description: "HTML ve CSS'i verimli kullanabilir v eçeşitli tasarım, proje ve sayfalar yapabilirim.",
            icon: <FaMobileAlt size={40} color="#fff" />
        },
        {
            title: "Veritabanı Yönetimi",
            description: "React, Pandas gibi kütüphaneleri ve SQLite, MySQL gibi veritabanlarını verimli kullanabilirim.",
            icon: <FaDatabase size={40} color="#fff" />
        },
        {
            title: "Veri Bilimi",
            description: "Veri bilimi ve yapay zekaya ilgiliyim çeşitli eğitim ve sertifikalar alma üzerinde çalışıyorum.",
            icon: <FaBrain size={40} color="#fff" />
        },
    ];

    return (
        <div style={{ backgroundImage: "url('/sayfa.jpg')",backgroundColor: '#C8A2C8', minHeight: '100vh', padding: '3rem 2rem', color: 'purple' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '2rem' ,marginLeft: '500px'}}>Neler Yapabilirim?</h1>
            <p style={{ fontSize: '1.6rem', maxWidth: '600px', marginBottom: '3rem',marginLeft: '490px' }}>
                Yazılım ve teknoloji alanında sahip olduğum beceriler:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                {skills.map(({ title, description, icon }, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#A67FBF',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            width: '260px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                        }}
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
                        <h3 style={{ marginTop: '1rem', marginBottom: '0.7rem' }}>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NelerYapabilirim;
