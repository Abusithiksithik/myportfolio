import React, { useEffect, useState, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import profileFormal from '../assets/profile-formal.jpg'

const FULL_NAME = 'Abubacker Siddiq. M'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx.current < FULL_NAME.length) {
        setDisplayed(FULL_NAME.slice(0, idx.current + 1))
        idx.current++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 90)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="particle" style={{
          width: `${Math.random() * 8 + 3}px`,
          height: `${Math.random() * 8 + 3}px`,
          left: `${Math.random() * 100}%`,
          bottom: `-10px`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
        }} />
      ))}

      <div className="container hero-content">
        {/* Left: Text */}
        <div>
          <div className="hero-greeting">👋 Hello, I'm</div>
          <h1 className="hero-name">
            {displayed}
            {!done && <span className="cursor" />}
          </h1>
          <div className="hero-title">Full Stack Developer &amp; AI Content Creator</div>

          <div className="hero-badges">
            <span className="badge badge-blue">⚛️ React / Next.js</span>
            <span className="badge badge-green">🟢 Node.js</span>
            <span className="badge badge-gold">🐍 Python</span>
            <span className="badge badge-pink">✍️ AI Writing</span>
          </div>

          <p className="hero-desc">
            Results-driven Full Stack Developer with hands-on experience building scalable,
            high-performance web applications using the MERN stack, RESTful APIs, and modern
            JavaScript frameworks. Also an AI Content Writer &amp; Story Script Creator at UQI Academy —
            crafting engaging narratives for digital platforms.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              🚀 View Projects
            </a>
            <a className="btn-outline" href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              📬 Contact Me
            </a>
            <a className="btn-download" href="/resume.pdf" download="Abubacker_Siddiq_Resume.pdf">
              ⬇ Download CV
            </a>
          </div>

          <div className="hero-social">
            <a className="social-icon" href="https://github.com/Abubashirhk" target="_blank" rel="noreferrer" title="GitHub">
              <FiGithub />
            </a>
            <a className="social-icon" href="https://linkedin.com/in/abubacker-siddiq-419b4b2a7" target="_blank" rel="noreferrer" title="LinkedIn">
              <FiLinkedin />
            </a>
            <a className="social-icon" href="mailto:abussiddiq1607@gmail.com" title="Email">
              <FiMail />
            </a>
            <a className="social-icon" href="tel:+917610230560" title="Phone">
              <FiPhone />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img src={profileFormal} alt="Abubacker Siddiq" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
