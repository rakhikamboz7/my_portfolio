import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import rakhiImage from '../assets/rakhi.jpg';
import '../styl/rakhi.css';

const Portfolio = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="portfolio-title">Rakhi Kamboj</h1>
            <h2 className="job-title">Web Developer</h2>
          </div>
          <div className="links-section">
            <a href="#certifications" className="link-button">Certifications</a>
            <a href="https://www.linkedin.com/in/rakhi-kamboj-4aa841237/" className="link-button">LinkedIn</a>
            <a href="/assets/Resume Rakhi Kamboj(BS21BCS013) (1).pdf" className="link-button">Resume</a>
            <a href="https://github.com/rakhikamboz7" className="link-button">GitHub</a>
            <button className="contact-button" onClick={toggleContact}>Contact Me</button>
          </div>
        </div>

        <div className="contact-section">
          {showContact && (
            <ul className="contact-list">
              <li style={{ backgroundColor: '#f0f8ff', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <a href="mailto:rakhikamboz7@gmail.com" className="contact-link">
                                  <strong>Email: rakhikamboz7@gmail.com</strong>
                </a>
              </li>
              <li style={{ backgroundColor: '#e6f7ff', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <a href="tel:+1234567890" className="contact-link">
               
                  <strong>Phone: 7807413796</strong>
                </a>
              </li>
              <li style={{ backgroundColor: '#e0ffe0', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <a href="https://www.linkedin.com/in/rakhi-kamboj-4aa841237/" className="contact-link">
                
                  <strong>LinkedIn</strong>
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>

      <section className="intro-section">
        <img src={rakhiImage} alt="Rakhi Kamboj" className="profile-img" />
        <div className="intro-text">
          <p>Hi, my name is Rakhi and I am studying at Eternal University. Pursuing B.Tech in Computer Science and Engineering.</p>
        </div>
      </section>

      <section className="skills-section" style={{ backgroundColor: '#f0f8ff', padding: '20px', textAlign: 'center' }}>
        <h3>Skills</h3>
        <ul className="skills-list" style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#e34c26', fontSize: '60px' }} />
            <p>HTML</p>
          </li>
          <li style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#2965f1', fontSize: '60px' }} />
            <p>CSS</p>
          </li>
          <li style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faJs} style={{ color: '#f0db4f', fontSize: '60px' }} />
            <p>JavaScript</p>
          </li>
          <li style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faPhp} style={{ color: '#777bb4', fontSize: '60px' }} />
            <p>PHP</p>
          </li>
          <li style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faReact} style={{ color: '#61DBFB', fontSize: '60px' }} />
            <p>React JS</p>
          </li>
        </ul>
      </section>

      <section id="certifications" className="certifications-section" style={{ backgroundColor: '#e6e6fa', padding: '20px' }}>
        <h3>Certifications</h3>
        <div className="certifications-list" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="cert-card" style={{ backgroundColor: '#fff', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
            <h4>Python Basic assesment skills</h4>
            <p>Issued by: Hacker Rank</p>
            <button>View Details <a href="https://www.linkedin.com/in/rakhi-kamboj-4aa841237/" className="contact-link"></a></button>
          </div>
          <div className="cert-card" style={{ backgroundColor: '#fff', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
            <h4>Web Development</h4>
            <p>Issued by: Skillvertex</p>
            <button>View Details <a href="https://www.linkedin.com/in/rakhi-kamboj-4aa841237/" className="contact-link"></a> </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;





