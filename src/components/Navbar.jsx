import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navigation } from '../data/portfolioData'
import { ResumeButton, SocialLinks, scrollToSection } from './common'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-45% 0px -50%' }); document.querySelectorAll('section[id]').forEach(section => observer.observe(section)); return () => observer.disconnect() }, [])
  return <header><a className="brand" onClick={() => scrollToSection('home')} href="#home"><span>MR</span> Manoj Kumar R</a><nav className={open ? 'open' : ''}>{navigation.map(item => <a className={active === item.toLowerCase() ? 'active' : ''} onClick={() => { scrollToSection(item.toLowerCase()); setOpen(false) }} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav><div className="nav-right"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button><ResumeButton /><SocialLinks /><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></header>
}
