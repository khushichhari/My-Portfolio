import React from 'react';
import './styles/Portfolio.css';
import GIF from './assets/port.gif';
export default function Portfolio() {
  return (
    <>
      <div className="port-container">
        <div className="gif">
          <img src={GIF} alt="Portfolio Animation" />
        </div>
        <div className="port-text">
          <h1>My Portfolio</h1>
          <br/>
          <p>
            Here are some of the projects I have worked on. Each project demonstrates my skills and experience in
            developing web applications, designing user interfaces, and solving real-world problems. Feel free to explore my projects and reach out if you'd like to collaborate or hire me.
          </p>
        </div>

        <div className = "port-buttons">
            <h2>Interested in know more about me? Check out my GitHub!</h2>
            <button>Resume</button>

        </div>
      </div>
    </>
  );
}
