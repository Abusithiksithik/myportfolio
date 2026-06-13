import React, { useEffect, useRef } from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    company: 'SmackCoders Inc',
    role: 'Software Engineering Intern',
    date: '06/2025 – 12/2025',
    location: 'Tirunelveli',
    type: 'Internship',
    color: 'var(--gradient1)',
    bullets: [
      'Built 15+ production-grade RESTful APIs using Node.js, Express.js & NestJS achieving 99.5% uptime and sub-200ms response time via load balancing & caching.',
      'Integrated Gmail API, Google Sheets API & Zoho CRM via OAuth2.0 enabling automated workflow sync for 100+ daily transactions.',
      'Wrote automated testing with Jest achieving 85% code coverage, reducing manual QA effort by 60%.',
      'Optimized PostgreSQL DB performance by 40% using B-tree indexing, reducing execution time from 350ms to 210ms.',
    ],
    badge: 'MERN · NestJS · PostgreSQL · Jest',
  },
  {
    company: 'UQI Academy',
    role: 'AI Content Writer & Story Script Creator',
    date: '15/05/2025 – Present',
    location: 'Remote',
    type: 'Full-time',
    color: 'var(--gradient2)',
    bullets: [
      'Created AI-powered promotional content for digital platforms reaching broad audiences.',
      'Developed engaging story scripts for educational and marketing campaigns.',
      'Wrote social media captions, blog content, and promotional materials for various brands.',
      'Collaborated with creative teams to produce audience-focused, high-conversion content.',
      'Assisted in content planning, editorial calendars, and campaign execution strategies.',
    ],
    badge: 'AI Writing · Storytelling · Marketing',
  },
]

export default function Experience() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-line" style={{margin:'0.5rem auto 0'}} />
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              {i % 2 === 0 ? (
                <>
                  <div className="timeline-content fade-in">
                    <ExpCard exp={exp} />
                  </div>
                  <div><div className="timeline-dot" /></div>
                  <div className="timeline-empty" />
                </>
              ) : (
                <>
                  <div className="timeline-empty" />
                  <div><div className="timeline-dot" style={{background:'linear-gradient(135deg,#ff6584,#f6d860)'}} /></div>
                  <div className="timeline-content fade-in">
                    <ExpCard exp={exp} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpCard({ exp }) {
  return (
    <>
      <div className="exp-company">{exp.company}</div>
      <div className="exp-role">{exp.role}</div>
      <div className="exp-meta">
        <span className="exp-date"><FiCalendar size={12} /> {exp.date}</span>
        <span className="exp-loc"><FiMapPin size={12} /> {exp.location}</span>
      </div>
      <ul className="exp-bullets">
        {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
      </ul>
      <div className="exp-badge">{exp.badge}</div>
    </>
  )
}
