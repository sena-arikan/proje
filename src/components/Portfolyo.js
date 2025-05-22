import React from 'react';
import './Portfolyo.css';
import { FaGithub } from 'react-icons/fa';


const projects = [
    {
        title: 'Günlük Uygulaması',
        description: 'PyQt5 ile geliştirilen çok pencereli görev uygulaması.',
        github: 'https://github.com/sena-arikan/To-Do-List',
    },
    {
        title: 'Portföy Sitesi',
        description: 'React ile oluşturulmuş kişisel portföy web sitesi.',
        github: 'https://github.com/sena-arikan/proje',
    },
    {
        title: 'Soru Bankası',
        description: 'Python & SQL kullanarak dijital bir soru bankası sistemi.',
        github: 'https://github.com/sena-arikan/soru_bankasi',
    },
    {
        title: 'Kişilik Testi',
        description: 'Eğlenceli bir kişilik testi sitesi.',
        github: 'https://github.com/sena-arikan/kisilik_testi',
    },

];

const Portfolyo = () => {
    return (

        <div className="projects-container"

             style={{
                 backgroundImage: "url('/sayfa2.jpg')",
                 WebkitBackdropFilter: 'blur(10px)',
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 minHeight: "100vh",
                 padding: "3rem 2rem",
                 color: "white"
             }}>
            <h1 className="projects-title">PORTFOLYO</h1>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                    <div key={index} className="project-card">
                        <h2>{proj.title}</h2>
                        <p>{proj.description}</p>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-button">
                            <FaGithub style={{ marginRight: '8px' }} />
                            GitHub
                        </a>
                    </div>
                ))}
            </div>
            <style>{`
            
                .projects-title {
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 3rem;
                    margin-bottom: 10rem;
                    color: #663399;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
                    column-gap: 0.5rem; 
                    gap: 0.5rem;     
                    padding: 0.5rem;
                    justify-items: center;
                }

                .project-card {
                    
                    border-radius: 12px;
                    padding: 1.5rem;
                    width: 360px;
                    text-align: center;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                }

                .github-button {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                    color: #fff;
                    
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                    
                }

                .github-button:hover {
                    
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Portfolyo;
