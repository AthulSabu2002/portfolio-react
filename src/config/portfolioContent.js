const portfolioContent = {
  hero: {
    name: "John Doe",
    title: "Full Stack Developer"
  },
  
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'Git'
  ],
  
  projects: [
    {
      name: 'Project Alpha',
      title: 'Project Alpha',
      tech: 'React, Node.js, MongoDB',
      desc: 'A modern web application for creative professionals',
      description: 'A modern web application for creative professionals'
    },
    {
      name: 'Design System Beta',
      title: 'Design System Beta',
      tech: 'React, TypeScript, Storybook',
      desc: 'Enterprise-grade component library',
      description: 'Enterprise-grade component library'
    }
  ],
  
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },

  terminal: {
    welcomeMessage: 'Welcome to my portfolio. Type "help" to see available commands.',
    prompt: '~',
    availableCommands: `
      Available commands:
      • projects - View my featured work
      • about - Learn about me
      • skills - See my technical skills
      • contact - Get my contact info
      • clear - Clear the terminal
    `
  }
};

export { portfolioContent };
