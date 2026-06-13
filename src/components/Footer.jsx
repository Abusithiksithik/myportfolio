import React from 'react'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer>
      <div style={{display:'flex', justifyContent:'center', gap:'1.2rem', marginBottom:'1rem'}}>
        <a href="https://github.com/Abubashirhk" target="_blank" rel="noreferrer"
          style={{color:'var(--text-muted)', fontSize:'1.2rem', transition:'color 0.3s'}}
          onMouseOver={e => e.target.style.color='var(--primary)'}
          onMouseOut={e => e.target.style.color='var(--text-muted)'}>
          <FiGithub />
        </a>
        <a href="https://linkedin.com/in/abubacker-siddiq-419b4b2a7" target="_blank" rel="noreferrer"
          style={{color:'var(--text-muted)', fontSize:'1.2rem', transition:'color 0.3s'}}
          onMouseOver={e => e.target.style.color='var(--primary)'}
          onMouseOut={e => e.target.style.color='var(--text-muted)'}>
          <FiLinkedin />
        </a>
      </div>
      <p>
        Made with <FiHeart style={{color:'var(--accent)', display:'inline', verticalAlign:'middle'}} /> by{' '}
        <span>Abubacker Siddiq. M</span> · Full Stack Developer &amp; AI Content Creator
      </p>
      <p style={{marginTop:'0.4rem', fontSize:'0.78rem'}}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}
