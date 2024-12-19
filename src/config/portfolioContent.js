const portfolioContent = {
  hero: {
    name: "John Doe",
    title: "Full Stack Developer",
    description: "I'm a passionate full-stack developer with a strong foundation in web technologies. With a keen eye for detail and a love for clean code, I specialize in creating responsive and user-friendly applications. I'm constantly learning and adapting to new technologies while maintaining a focus on writing maintainable and scalable code. My goal is to build solutions that make a positive impact on users' lives.",
    profileImage: "/src/assets/profile-pic.png"
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
