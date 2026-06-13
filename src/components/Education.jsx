import React, { useEffect, useRef } from 'react'
import { FiAward, FiCalendar } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <div className="section-label">Qualifications</div>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <div className="section-line" style={{margin:'0.5rem auto 0'}} />
        </div>

        <div className="edu-grid">
          {/* Education */}
          <div className="edu-card fade-in">
            <div className="edu-icon">🎓</div>
            <div className="edu-degree">B.E. in Computer Science &amp; Engineering</div>
            <div className="edu-school">P.E.T Engineering College · Anna University</div>
            <div className="edu-meta" style={{marginTop:'0.8rem'}}>
              <span className="edu-year"><FiCalendar size={12}/> May 2025</span>
              <span className="edu-gpa">📊 GPA: 8.5 / 10</span>
            </div>
            <p style={{fontSize:'0.85rem', color:'var(--text-secondary)', marginTop:'1rem', lineHeight:'1.7'}}>
              Specialized in software engineering, data structures, algorithms, and web technologies.
              Graduated with distinction from Anna University, Tirunelveli, Tamil Nadu.
            </p>
          </div>

          {/* Certifications */}
          <div className="fade-in">
            <div style={{display:'grid', gap:'1rem'}}>
              <div className="cert-card">
                <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                  <div style={{width:'48px', height:'48px', borderRadius:'12px', background:'linear-gradient(135deg,#6c63ff,#9c95ff)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0}}>
                    🐍
                  </div>
                  <div>
                    <div style={{fontWeight:700}}>Python Full Stack Web Development</div>
                    <div style={{fontSize:'0.8rem', color:'var(--primary-light)', marginTop:'0.2rem'}}>
                      <FiCalendar size={11}/> January 2025
                    </div>
                  </div>
                  <FiAward style={{marginLeft:'auto', color:'var(--gold)', fontSize:'1.5rem'}} />
                </div>
              </div>

              <div className="cert-card">
                <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                  <div style={{width:'48px', height:'48px', borderRadius:'12px', background:'linear-gradient(135deg,#43e97b,#38f9d7)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0}}>
                    🗣️
                  </div>
                  <div>
                    <div style={{fontWeight:700}}>English Communication Skills</div>
                    <div style={{fontSize:'0.8rem', color:'var(--primary-light)', marginTop:'0.2rem'}}>
                      English Partner · <FiCalendar size={11}/> August 2024
                    </div>
                  </div>
                  <FiAward style={{marginLeft:'auto', color:'var(--gold)', fontSize:'1.5rem'}} />
                </div>
              </div>

              <div className="cert-card" style={{background:'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(255,101,132,0.05))'}}>
                <div style={{textAlign:'center', padding:'0.5rem'}}>
                  <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>📍</div>
                  <div style={{fontWeight:700}}>Tirunelveli, Tamil Nadu</div>
                  <div style={{fontSize:'0.82rem', color:'var(--text-secondary)', marginTop:'0.3rem'}}>Available for Remote &amp; Hybrid roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
