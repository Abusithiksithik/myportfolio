import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '/#hero', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#content-writing', label: 'Writing' },
  { href: '/#contact', label: 'Contact' },
  { href: '/hobbies', label: 'Hobbies 📸' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">
        <span>ABUBACKER SIDDIQ</span>
      </div>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            {l.href.startsWith('/hobbies') ? (
              <Link to="/hobbies" onClick={() => setOpen(false)}
                style={{ color: location.pathname === '/hobbies' ? 'var(--primary-light)' : undefined }}>
                {l.label}
              </Link>
            ) : (
              <a href={l.href} onClick={() => handleNavClick(l.href)}>{l.label}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-cta">
        <a className="btn-download" href="/resume.pdf" download="Abubacker_Siddiq_Resume.pdf"
          style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem' }}>
          ⬇ Resume
        </a>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}
