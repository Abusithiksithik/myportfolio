import React, { useEffect, useRef } from 'react'
import profileCasual from '../assets/profile-casual.jpg'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.15 })
    ref.current?.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo-wrap fade-left">
            <div className="about-deco" />
            <div className="about-deco2" />
            <div className="about-photo-container">
              <img src={profileCasual} alt="Abubacker Siddiq" className="about-photo" />
              <div className="about-photo-overlay" />
              <div className="about-photo-tag">
                <div className="tag-name">Abubacker Siddiq. M</div>
                <div className="tag-role">Full Stack Developer · AI Writer</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-right">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Crafting Digital Experiences</h2>
            <div className="section-line" />

            <p className="about-text">
              I'm a <strong style={{color:'var(--text)'}}>results-driven Full Stack Developer</strong> based in Tirunelveli, Tamil Nadu —
              skilled in building scalable, high-performance web applications using the MERN stack,
              RESTful APIs, and modern JavaScript frameworks.
            </p>
            <p className="about-text">
              Beyond coding, I work as an <strong style={{color:'var(--text)'}}>AI Content Writer &amp; Story Script Creator</strong> at
              UQI Academy — where I craft compelling narratives, promotional content, and engaging
              stories for digital platforms and marketing campaigns.
            </p>
            <p className="about-text">
              I hold a <strong style={{color:'var(--text)'}}>B.E. in Computer Science &amp; Engineering</strong> from P.E.T Engineering College
              (Anna University), graduating with a GPA of 8.5/10. I'm passionate about blending
              technology with creativity to deliver impactful solutions.
            </p>

            <div className="about-stats">
              <div className="stat-card fade-in">
                <div className="stat-number">15+</div>
                <div className="stat-label">APIs Built</div>
              </div>
              <div className="stat-card fade-in" style={{animationDelay:'0.1s'}}>
                <div className="stat-number">4</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card fade-in" style={{animationDelay:'0.2s'}}>
                <div className="stat-number">8.5</div>
                <div className="stat-label">GPA Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
