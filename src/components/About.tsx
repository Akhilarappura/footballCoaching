import React from 'react';
import '../assets/styles/AboutCoach.scss';
import coachImg from '../assets/images/gallery9.jpg'; // Replace with your actual path


function About() {
  return (
    <section className="about-coach">
      <div className="coach-container">
        <div className="coach-image">
          <img src={coachImg} alt="Coach" />
        </div>

        <div className="coach-details">
          <h2>About Coach </h2>

          <p className="bio">
            <strong>👤 Bio:</strong> Coach  has over a decade of experience training youth and professional footballers. He’s passionate about building players with skill, character, and confidence.
          </p>

          <p className="philosophy">
            <strong>⚽ Coaching Philosophy:</strong> “Football is not just about winning — it's about growth, discipline, and teamwork. I focus on making every player better every day.”
          </p>

          <div className="achievements">
            <h3> Certifications & Achievements</h3>
            <ul>
              <li> AFC 'C' License Certified Coach</li>
              <li> Head Coach – Kerala Youth League 2022</li>
              <li> Trained 500+ players of various levels</li>
              <li> Certified in Sports Psychology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
