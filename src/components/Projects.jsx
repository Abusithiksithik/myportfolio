import React, { useEffect, useRef } from 'react'
import { FiMail, FiShoppingCart, FiUsers, FiActivity } from 'react-icons/fi'

const projects = [
  {
    icon: <FiMail />,
    title: 'Email Template Customizer',
    desc: 'A drag-and-drop email builder with WYSIWYG & HTML export, allowing teams to create professional email templates without code.',
    impact: '⚡ Cut template creation time by 70%',
    tags: ['React', 'TypeScript', 'Material-UI', 'WYSIWYG'],
    color: 'linear-gradient(135deg,#6c63ff,#9c95ff)',
    link: '#'
  },
  {
    icon: <FiShoppingCart />,
    title: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce solution with secure checkout, OAuth2 authentication, and Redux state management supporting 1000+ SKUs.',
    impact: '🛡️ Secure auth · 1000+ SKUs supported',
    tags: ['MERN Stack', 'Redux', 'Payment Gateway', 'OAuth2'],
    color: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    link: 'https://github.com/Abusithiksithik/E_commerce'
  },
  {
    icon: <FiUsers />,
    title: 'Student Management System',
    desc: 'Comprehensive student management platform with role-based access control, JWT auth, and optimized MongoDB data pipelines for 200+ users.',
    impact: '⚡ Reduced query time by 51%',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'MongoDB'],
    color: 'linear-gradient(135deg,#f6d860,#ff6584)',
    link: 'https://github.com/Abusithiksithik/student-management-system'
  },
  {
    icon: <FiActivity />,
    title: 'Hospital Management System',
    desc: 'Multi-role hospital management platform built with Django and PostgreSQL, featuring role-based access control and patient record management.',
    impact: '🏥 Multi-role · Secure data access',
    tags: ['Django', 'Python', 'PostgreSQL', 'RBAC'],
    color: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    link: '#'
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line" style={{ margin: '0.5rem auto 0' }} />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div
                className="project-card fade-in"
                style={{ animationDelay: `${i * 0.1}s`, cursor: 'pointer' }}
              >
                <div className="project-icon" style={{ background: p.color }}>
                  {p.icon}
                </div>

                <div className="project-title">{p.title}</div>

                <div className="project-desc">{p.desc}</div>

                <div className="project-impact">{p.impact}</div>

                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}