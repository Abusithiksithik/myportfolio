import React, { useEffect, useRef, useState } from 'react'
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool, FiEdit3 } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout />,
    color: 'linear-gradient(135deg,#6c63ff,#9c95ff)',
    skills: [
      { name: 'React.js', rating: 8 },
      { name: 'Next.js', rating: 7 },
      { name: 'TypeScript', rating: 7 },
      { name: 'JavaScript (ES6+)', rating: 8 },
      { name: 'HTML5 & CSS3', rating: 9 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <FiServer />,
    color: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    skills: [
      { name: 'Node.js', rating: 8 },
      { name: 'NestJS', rating: 7 },
      { name: 'Express.js', rating: 8 },
      { name: 'REST API Design', rating: 8 },
      { name: 'GraphQL', rating: 6 },
    ],
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    color: 'linear-gradient(135deg,#f6d860,#ff6584)',
    skills: [
      { name: 'MongoDB', rating: 8 },
      { name: 'PostgreSQL', rating: 7 },
      { name: 'MySQL', rating: 7 },
    ],
  },
  {
    title: 'Python & Frameworks',
    icon: <FiCode />,
    color: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    skills: [
      { name: 'Python', rating: 7 },
      { name: 'Django', rating: 7 },
      { name: 'FastAPI', rating: 6 },
    ],
  },
  {
    title: 'UI Libraries',
    icon: <FiLayout />,
    color: 'linear-gradient(135deg,#fa709a,#fee140)',
    skills: [
      { name: 'Material-UI', rating: 8 },
      { name: 'Tailwind CSS', rating: 7 },
      { name: 'Bootstrap', rating: 8 },
    ],
  },
  {
    title: 'AI & Content Writing',
    icon: <FiEdit3 />,
    color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    skills: [
      { name: 'AI Content Writing', rating: 9 },
      { name: 'Story Script Creation', rating: 9 },
      { name: 'SEO & Marketing Copy', rating: 8 },
    ],
  },
]

function SkillBar({ name, rating, animate }) {
  const pct = (rating / 10) * 100
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-rating">{rating}/10</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: animate ? `${pct}%` : '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setAnimate(true)
          e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">What I Work With</h2>
          <div className="section-line" style={{margin:'0.5rem auto 0'}} />
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category fade-in" style={{animationDelay:`${i*0.1}s`}}>
              <div className="skill-cat-title">
                <div className="skill-cat-icon" style={{background:cat.color}}>{cat.icon}</div>
                {cat.title}
              </div>
              {cat.skills.map((s, j) => (
                <SkillBar key={j} name={s.name} rating={s.rating} animate={animate} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
