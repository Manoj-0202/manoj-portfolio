import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function SocialLinks() {
  return <div className="socials">
    {profile.github && <a href={profile.github} aria-label="GitHub"><Github /></a>}
    {profile.linkedin && <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin /></a>}
  </div>
}

export function Section({ id, kicker, title, children }) {
  return <section id={id} className="section"><p className="eyebrow">{kicker}</p><h2 className="section-title">{title}</h2>{children}</section>
}
