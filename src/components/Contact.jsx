import React, { useEffect, useRef, useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi'
import profileFormal from '../assets/profile-formal.jpg'

const contactItems = [
  { icon: <FiPhone />, label: 'Phone', value: '+91 7610230560', href: 'tel:+917610230560', color: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
  { icon: <FiMail />, label: 'Email', value: 'abussiddiq1607@gmail.com', href: 'mailto:abussiddiq1607@gmail.com', color: 'linear-gradient(135deg,#6c63ff,#9c95ff)' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'abubacker-siddiq-419b4b2a7', href: 'https://linkedin.com/in/abubacker-siddiq-419b4b2a7', color: 'linear-gradient(135deg,#0077b5,#00a0dc)' },
  { icon: <FiGithub />, label: 'GitHub', value: 'Abubashirhk', href: 'https://github.com/Abubashirhk', color: 'linear-gradient(135deg,#333,#666)' },
  { icon: <FiMapPin />, label: 'Location', value: 'Tirunelveli, Tamil Nadu', href: null, color: 'linear-gradient(135deg,#ff6584,#f6d860)' },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line" style={{margin:'0.5rem auto 0'}} />
        </div>

        <div className="contact-wrapper">
          {/* Contact Info Card */}
          <div className="contact-info-card fade-left">
            <div className="contact-card-header">
              <img src={profileFormal} alt="Abubacker" className="contact-avatar" />
              <div>
                <div className="contact-card-name">Abubacker Siddiq. M</div>
                <div className="contact-card-title">Full Stack Developer · AI Content Writer</div>
              </div>
            </div>

            <div className="contact-items">
              {contactItems.map((item, i) => (
                item.href ? (
                  <a key={i} className="contact-item" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <div className="contact-item-icon" style={{background:item.color}}>{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-item">
                    <div className="contact-item-icon" style={{background:item.color}}>{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>

            <div style={{marginTop:'1.5rem', padding:'1rem', background:'rgba(108,99,255,0.08)', borderRadius:'12px', border:'1px solid rgba(108,99,255,0.2)'}}>
              <p style={{fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:1.7}}>
                💬 Open to <strong style={{color:'var(--text)'}}>Full Stack</strong>, <strong style={{color:'var(--text)'}}>AI Writing</strong>, and <strong style={{color:'var(--text)'}}>freelance</strong> opportunities.
                Feel free to reach out anytime!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card fade-right">
            <h3 style={{marginBottom:'1.5rem', fontSize:'1.2rem', fontWeight:700}}>Send a Message</h3>
            {sent ? (
              <div style={{
                textAlign:'center', padding:'3rem',
                background:'rgba(67,233,123,0.1)', borderRadius:'16px',
                border:'1px solid rgba(67,233,123,0.3)'
              }}>
                <div style={{fontSize:'3rem', marginBottom:'1rem'}}>✅</div>
                <div style={{fontWeight:700, fontSize:'1.1rem'}}>Message Sent!</div>
                <div style={{color:'var(--text-secondary)', marginTop:'0.5rem', fontSize:'0.9rem'}}>I'll get back to you soon.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" placeholder="John Doe" required
                    value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" placeholder="john@example.com" required
                    value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell me about your project..." required
                    value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} />
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center', padding:'0.9rem'}}>
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
