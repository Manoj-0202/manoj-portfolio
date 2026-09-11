import { skills } from '../data/portfolioData'
import { Section } from './common'
export default function Skills() { return <Section id="skills" kicker="03 / TOOLKIT" title="Technologies I work with."><div className="skill-grid">{Object.entries(skills).map(([group, items]) => <article className="skill-card" key={group}><h3>{group}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></Section> }
