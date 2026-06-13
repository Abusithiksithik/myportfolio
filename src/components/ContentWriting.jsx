import React, { useEffect, useRef } from 'react'
import showcase1 from '../assets/showcase-1.jpg'
import showcase2 from '../assets/showcase-2.jpg'

export default function ContentWriting() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="content-writing" ref={ref}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <div className="section-label">Current Role</div>
          <h2 className="section-title">AI Content &amp; Story Writing</h2>
          <div className="section-line" style={{margin:'0.5rem auto 0'}} />
        </div>

        <div className="writing-grid">
          {/* Features */}
          <div className="fade-left">
            <div style={{marginBottom:'1.5rem'}}>
              <span style={{
                background:'linear-gradient(135deg,rgba(255,101,132,0.2),rgba(246,216,96,0.2))',
                border:'1px solid rgba(255,101,132,0.4)',
                borderRadius:'50px', padding:'0.3rem 1rem',
                fontSize:'0.78rem', fontWeight:700, color:'#ff9ab0'
              }}>🔴 Currently Active at UQI Academy</span>
            </div>

            <p style={{color:'var(--text-secondary)', lineHeight:'1.9', marginBottom:'2rem'}}>
              As an <strong style={{color:'var(--text)'}}>AI Content Writer &amp; Story Script Creator</strong>, I blend artificial intelligence
              with human creativity to produce compelling narratives that captivate audiences and drive engagement
              across digital platforms.
            </p>

            <div className="writing-features">
              {[
                { icon:'🤖', title:'AI-Powered Content', desc:'Leveraging advanced AI tools to craft promotional content that resonates with target audiences at scale.' },
                { icon:'📖', title:'Story Script Creation', desc:'Developing narrative-driven scripts for educational videos, marketing campaigns, and promotional reels.' },
                { icon:'📱', title:'Social Media Writing', desc:'Creating platform-specific captions, blog posts, and viral content for Instagram, YouTube, and LinkedIn.' },
                { icon:'🎯', title:'Campaign Strategy', desc:'Assisting in content planning, editorial calendars, and campaign execution for maximum reach.' },
              ].map((f, i) => (
                <div key={i} className="writing-feature fade-in" style={{animationDelay:`${i*0.1}s`}}>
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <div className="feat-title">{f.title}</div>
                    <div className="feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase images */}
          <div className="writing-showcase fade-right">
            <div className="showcase-item">
              <img src={showcase1} alt="AI Content Showcase" className="showcase-img" />
              <div className="showcase-overlay">
                <div>
                  <div className="showcase-label">Story Script Creation</div>
                  <div className="showcase-title">AI-Powered Educational Content</div>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <img src={showcase2} alt="Content Writing Showcase" className="showcase-img" />
              <div className="showcase-overlay">
                <div>
                  <div className="showcase-label">Visual Storytelling</div>
                  <div className="showcase-title">Character-Driven Narratives</div>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div style={{
              display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem',
              background:'var(--card)', border:'1px solid var(--card-border)',
              borderRadius:'16px', padding:'1.5rem'
            }}>
              {[
                { num:'100+', label:'Content Pieces' },
                { num:'5+', label:'Campaigns' },
                { num:'∞', label:'Creativity' },
              ].map((s, i) => (
                <div key={i} style={{textAlign:'center'}}>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif", fontSize:'1.8rem', fontWeight:800, background:'linear-gradient(135deg,#ff6584,#f6d860)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>{s.num}</div>
                  <div style={{fontSize:'0.78rem', color:'var(--text-secondary)'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
