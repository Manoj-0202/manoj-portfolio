import { Check } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { Section } from './common'
export default function Experience() { return <Section id="experience" kicker="02 / EXPERIENCE" title="Building in production."><article className="timeline"><div className="dot" /><p className="date">{experience.date}</p><h3>{experience.role}</h3><p className="company">{experience.company}</p><ul>{experience.points.map(point => <li key={point}><Check size={15} />{point}</li>)}</ul></article></Section> }
