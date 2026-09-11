import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/portfolioData'
import { Section } from './common'
export default function Services() { return <Section id="services" kicker="05 / SERVICES" title="What I can build."><div className="services">{services.map((service, index) => <div key={service}><span>0{index + 1}</span>{service}<ArrowUpRight size={18} /></div>)}</div></Section> }
