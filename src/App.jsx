import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  return <><Navbar theme={theme} toggleTheme={toggleTheme} /><main><Hero /><About /><Experience /><Skills /><Projects /><Services /><Contact /></main><Footer /></>
}
