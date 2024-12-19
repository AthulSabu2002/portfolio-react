const portfolioContent = {
  hero: {
    name: "Athul Sabu",
    title: "",
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
        name: 'ADcolumn',
        title: 'ADcolumn',
        tech: 'HTML, CSS, JavaScript, Node.js',
        desc: 'Responsive web application for booking newspaper ad slots',
        description: 'Created a responsive web application for booking newspaper ad slots using HTML, CSS, JavaScript, and Node.js. The web application allows users to select dates and ad spaces with real-time availability updates and integrates Stripe for secure payments. The design ensures a seamless experience across all devices.'
    },
    {
        name: 'CV-parser',
        title: 'CV-parser',
        tech: 'Node.js, Express.js, EJS, pdf-parse',
        desc: 'Web application for parsing and extracting key details from resume PDFs',
        description: 'Developed a Node.js web application to parse and extract key details from resume PDFs. Utilized Express.js, EJS, pdf-parse, compromise, and express-fileupload. The web application extracts and displays personal details such as name, email, qualifications, and more, showcasing skills in server-side JavaScript, file handling, and text processing.'
    }
  ],

  
  social: {
    github: 'https://github.com/AthulSabu2002',
    linkedin: 'https://www.linkedin.com/in/athul-sabu-417a5327b/'
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
