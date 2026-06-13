import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiX } from 'react-icons/fi'
import photo1 from '../assets/hobby-rain.jpg'
import photo2 from '../assets/hobby-moon.jpg'
import photo3 from '../assets/hobby-birds.jpg'
import photo4 from '../assets/hobby-sunset.jpg'
import photo5 from '../assets/hobby-sky.jpg'

const photos = [
  { src: photo1, caption: 'Raining at Night ✨🌧️', desc: 'Captured at 4am — the beauty of midnight rain', size: 'tall' },
  { src: photo2, caption: 'The Moon 🌕', desc: 'Blood moon through dark clouds', size: 'normal' },
  { src: photo3, caption: "It's Beauty 🕊️", desc: 'Birds soaring under a moody sky', size: 'normal' },
  { src: photo4, caption: 'Evening POV 🌟', desc: 'Golden hour at the railway tracks', size: 'wide' },
  { src: photo5, caption: 'Just Enjoy Weather ☁️', desc: 'Dramatic fiery sunset sky', size: 'tall' },
]

const hobbies = [
  { emoji: '📸', title: 'Photography', desc: 'Capturing the world through a lens — from midnight rains to golden sunsets. I find beauty in everyday moments most people walk past.' },
  { emoji: '✍️', title: 'Story Writing', desc: 'Crafting narratives that evoke emotion and spark imagination. I write stories that connect with people on a human level.' },
  { emoji: '🤖', title: 'AI Exploration', desc: 'Experimenting with the latest AI tools, models, and prompts to push creative boundaries and automate workflows.' },
  { emoji: '🎬', title: 'Script Creation', desc: 'Writing engaging video scripts, educational content, and promotional reels for digital platforms.' },
  { emoji: '🌙', title: 'Night Photography', desc: "There's something magical about the world at 4am — quiet, raw, and full of unexpected beauty waiting to be captured." },
  { emoji: '💻', title: 'Open Source', desc: 'Contributing to and learning from open-source projects. I believe in building and sharing knowledge with the developer community.' },
]

export default function Hobbies() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      {/* Hero */}
      <div className="hobbies-hero">
        <div className="container" style={{position:'relative', zIndex:1}}>
          <Link to="/" style={{display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'var(--primary)', textDecoration:'none', fontWeight:600, marginBottom:'2rem', fontSize:'0.9rem'}}>
            <FiArrowLeft /> Back to Portfolio
          </Link>
          <div className="section-label">Beyond the Code</div>
          <h1 className="section-title" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>Hobbies &amp; Interests</h1>
          <div className="section-line" />
          <p style={{color:'var(--text-secondary)', maxWidth:'600px', lineHeight:1.8, fontSize:'1rem'}}>
            When I'm not writing code or crafting content, I explore the world through photography,
            storytelling, and creative expression. Here's a glimpse of the things that inspire me.
          </p>
        </div>
      </div>

      {/* Photography Gallery */}
      <div className="photo-gallery" style={{background:'var(--bg)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <div className="section-label">My Captures</div>
            <h2 className="section-title">Photography Gallery</h2>
            <div className="section-line" style={{margin:'0.5rem auto 0'}} />
            <p style={{color:'var(--text-secondary)', marginTop:'1rem', fontSize:'0.9rem'}}>
              Each photo tells a story — click to explore
            </p>
          </div>

          <div className="masonry-grid">
            {photos.map((photo, i) => (
              <div key={i} className="masonry-item" onClick={() => setLightbox(photo)}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{
                    width:'100%',
                    height: photo.size === 'tall' ? '420px' : photo.size === 'wide' ? '280px' : '300px',
                    objectFit:'cover',
                    display:'block',
                  }}
                />
                <div className="masonry-overlay">
                  <div>
                    <div className="masonry-caption">{photo.caption}</div>
                    <div style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.7)', marginTop:'0.2rem'}}>{photo.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies Cards */}
      <div className="hobbies-cards-section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <div className="section-label">Interests</div>
            <h2 className="section-title">What I'm Passionate About</h2>
            <div className="section-line" style={{margin:'0.5rem auto 0'}} />
          </div>
          <div className="hobbies-cards">
            {hobbies.map((h, i) => (
              <div key={i} className="hobby-card">
                <div className="hobby-emoji">{h.emoji}</div>
                <div className="hobby-title">{h.title}</div>
                <div className="hobby-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div style={{padding:'4rem 2rem', textAlign:'center', background:'var(--bg)'}}>
        <div style={{maxWidth:'700px', margin:'0 auto'}}>
          <div style={{fontSize:'4rem', marginBottom:'1rem'}}>📷</div>
          <blockquote style={{
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize:'clamp(1.2rem,3vw,1.8rem)',
            fontWeight:600, lineHeight:1.5,
            background:'linear-gradient(135deg,#fff,#8b9ab5)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
          }}>
            "Photography is the art of frozen time — the ability to store emotion and raw beauty in a single frame."
          </blockquote>
          <p style={{color:'var(--text-muted)', marginTop:'1rem', fontSize:'0.9rem'}}>— Abubacker Siddiq. M</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>
          Made with ❤️ by <span>Abubacker Siddiq. M</span> · Full Stack Developer &amp; AI Content Creator
        </p>
        <p style={{marginTop:'0.4rem', fontSize:'0.78rem'}}>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><FiX /></button>
          <div onClick={e => e.stopPropagation()} style={{textAlign:'center'}}>
            <img src={lightbox.src} alt={lightbox.caption} className="lightbox-img" />
            <p style={{color:'white', marginTop:'1rem', fontWeight:600}}>{lightbox.caption}</p>
            <p style={{color:'rgba(255,255,255,0.6)', fontSize:'0.85rem'}}>{lightbox.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}
