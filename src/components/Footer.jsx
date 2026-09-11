import { profile } from '../data/portfolioData'
import { SocialLinks } from './common'
export default function Footer() { return <footer><a className="brand" href="#home"><span>MR</span> Manoj Kumar R</a><p>{profile.role}</p><div><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a><SocialLinks /></div><small>Designed & built by Manoj Kumar R · © {new Date().getFullYear()}</small></footer> }
