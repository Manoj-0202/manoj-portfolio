export const profile = {
  name: 'Manoj Kumar R', role: 'Associate Software Engineer', company: 'VNC Digital Services Pvt Ltd',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'manojmanu3318@gmail.com',
  github: import.meta.env.VITE_GITHUB_URL || '', linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || '',
  intro: 'I build scalable web applications, APIs and AI-powered automation systems.'
}
export const navigation = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Services', 'Contact']
export const skills = {
  Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Python', 'FastAPI', 'REST APIs'],
  Databases: ['PostgreSQL', 'MySQL'],
  Architecture: ['Microservices', 'API Integration', 'Authentication & Authorization', 'SaaS architecture'],
  'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'VS Code'],
  'AI & Automation': ['AI Automation', 'Test Automation', 'Browser Extensions', 'OCR workflows', 'AI-assisted test generation']
}
export const experience = { role: 'Associate Software Engineer', company: 'VNC Digital Services Pvt Ltd', date: 'Present · Add dates in portfolioData.js', points: ['Develop frontend features with React and JavaScript.', 'Build and integrate REST APIs with Python and FastAPI services.', 'Contribute to Dockerized microservices, authentication flows and database-backed applications.', 'Investigate production issues and collaborate through Git-based development workflows.'] }
export const services = ['Responsive React websites', 'Business dashboards', 'REST API integrations', 'Python / FastAPI backend APIs', 'Full-stack applications', 'Authentication systems', 'Automation tools', 'AI-integrated applications', 'Dockerized applications']
export const projects = [{
  name: 'CoreDon AI Automation Studio', type: 'Enterprise AI Test Automation Platform', featured: true,
  description: 'A microservices-based AI automation platform supporting end-to-end UI and API testing workflows, from test creation to execution and reporting.',
  technologies: ['React', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
  features: ['AI-assisted test case generation', 'OCR and image-based UI extraction', 'Locator enrichment and Page Object Model generation', 'Browser extension integration', 'Execution reports and access management'], github: '', caseStudy: true
},
{ name: 'React Web Application', type: 'Replace with your project', description: 'Configurable project placeholder. Add a concise description and links in portfolioData.js.', technologies: ['React', 'JavaScript'], github: '' },
{ name: 'FastAPI Service', type: 'Replace with your project', description: 'Configurable project placeholder for an API or backend system.', technologies: ['Python', 'FastAPI', 'REST APIs'], github: '' },
{ name: 'Automation Utility', type: 'Replace with your project', description: 'Configurable project placeholder for an automation workflow or developer tool.', technologies: ['Python', 'Automation'], github: '' }]
