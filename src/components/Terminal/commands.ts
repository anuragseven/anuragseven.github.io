export interface CommandOutput {
  type: 'text' | 'error' | 'success' | 'link';
  content: string;
  href?: string;
}

export type CommandResult = CommandOutput[];

export interface BlogData {
  title: string;
  slug: string;
  date: string;
  category: string;
}

export interface PatentData {
  title: string;
  slug: string;
  patentNumber: string;
  status: 'granted' | 'pending';
  grantDate?: string;
  filingDate: string;
}

export interface ProjectData {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  hasDemo: boolean;
  hasGithub: boolean;
}

export interface DynamicData {
  blogs: BlogData[];
  patents: PatentData[];
  projects: ProjectData[];
}

const invalidResponses = [
  "Command not found. But have you tried 'help'?",
  "I don't know that one. Type 'help' for available commands.",
  "Hmm, that's not a command I recognize. Try 'help'.",
  "Nice try, but that's not in my repertoire. Use 'help' to see what I can do.",
];

const getRandomInvalidResponse = (): string => {
  return invalidResponses[Math.floor(Math.random() * invalidResponses.length)];
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
};

export const createCommands = (data: DynamicData): Record<string, () => CommandResult> => ({
  help: () => [
    { type: 'text', content: 'Available commands:' },
    { type: 'text', content: '' },
    { type: 'success', content: '  about      ' },
    { type: 'text', content: '- Learn about me' },
    { type: 'success', content: '  skills     ' },
    { type: 'text', content: '- View my technical skills' },
    { type: 'success', content: '  projects   ' },
    { type: 'text', content: '- Browse my projects' },
    { type: 'success', content: '  patents    ' },
    { type: 'text', content: '- View my patents' },
    { type: 'success', content: '  blogs      ' },
    { type: 'text', content: '- Read my blog posts' },
    { type: 'success', content: '  experience ' },
    { type: 'text', content: '- See my work history' },
    { type: 'success', content: '  resume     ' },
    { type: 'text', content: '- Download my resume' },
    { type: 'success', content: '  contact    ' },
    { type: 'text', content: '- Get in touch' },
    { type: 'success', content: '  socials    ' },
    { type: 'text', content: '- Find me online' },
    { type: 'success', content: '  clear      ' },
    { type: 'text', content: '- Clear the terminal' },
    { type: 'success', content: '  whoami     ' },
    { type: 'text', content: '- Quick intro' },
  ],

  about: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Anurag Tripathi' },
    { type: 'text', content: '===============' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Senior Software Engineer | B.Tech in Computer Science' },
    { type: 'text', content: '4+ years building scalable systems & intelligent solutions' },
    { type: 'text', content: '' },
    { type: 'success', content: 'Expertise:' },
    { type: 'text', content: '  Backend Development | Cloud & DevOps | AI/ML & Computer Vision' },
    { type: 'text', content: '' },
    { type: 'success', content: 'Highlights:' },
    { type: 'text', content: '  - 2 Granted Patents (Virtual Scribe, Land Scanner Drone)' },
    { type: 'text', content: '  - Built assistive tech for differently-abled individuals' },
    { type: 'text', content: '  - Cloud-native apps on Azure with Python, Node.js' },
    { type: 'text', content: '' },
    { type: 'link', content: '-> Visit /about for full profile', href: '/about' },
  ],

  skills: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Technical Skills' },
    { type: 'text', content: '================' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Languages:' },
    { type: 'text', content: '  Python, JavaScript, SQL, Bash' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Backend & Frameworks:' },
    { type: 'text', content: '  FastAPI, Node.js, Express, REST APIs' },
    { type: 'text', content: '' },
    { type: 'text', content: 'AI/ML & Computer Vision:' },
    { type: 'text', content: '  OpenCV, Azure Cognitive Services, Speech Recognition' },
    { type: 'text', content: '  Text-to-Speech, Azure Face API, NumPy, Pandas' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Cloud & Azure:' },
    { type: 'text', content: '  Azure VMs, Blob Storage, Cosmos DB, Docker, CI/CD' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Databases:' },
    { type: 'text', content: '  Cosmos DB, PostgreSQL, MongoDB, Redis, MySQL' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Mobile:' },
    { type: 'text', content: '  Flutter, Cross-Platform Apps' },
    { type: 'text', content: '' },
    { type: 'link', content: '-> Visit /skills for full breakdown', href: '/skills' },
  ],

  projects: () => {
    const output: CommandResult = [
      { type: 'text', content: '' },
      { type: 'success', content: `Projects (${data.projects.length})` },
      { type: 'text', content: '='.repeat(11 + data.projects.length.toString().length) },
      { type: 'text', content: '' },
    ];

    data.projects.slice(0, 5).forEach((project, index) => {
      output.push({
        type: 'link',
        content: `[${index + 1}] ${project.title}`,
        href: `/projects/${project.slug}`
      });
      output.push({ type: 'text', content: `    ${project.description}` });
      output.push({ type: 'text', content: '' });
    });

    output.push({ type: 'link', content: '-> Visit /projects for all projects', href: '/projects' });
    return output;
  },

  patents: () => {
    const output: CommandResult = [
      { type: 'text', content: '' },
      { type: 'success', content: `Patents (${data.patents.length})` },
      { type: 'text', content: '='.repeat(12 + data.patents.length.toString().length) },
      { type: 'text', content: '' },
    ];

    data.patents.slice(0, 5).forEach((patent, index) => {
      const status = patent.status.toUpperCase();
      const date = patent.grantDate ? formatDate(patent.grantDate) : formatDate(patent.filingDate);
      const dateLabel = patent.grantDate ? 'Granted' : 'Filed';

      output.push({ type: 'text', content: `[${status}] ${patent.title}` });
      output.push({ type: 'text', content: `        #${patent.patentNumber} | ${dateLabel}: ${date}` });
      output.push({ type: 'link', content: `        -> View details`, href: `/patents/${patent.slug}` });
      output.push({ type: 'text', content: '' });
    });

    output.push({ type: 'link', content: '-> Visit /patents for all patents', href: '/patents' });
    return output;
  },

  blogs: () => {
    const output: CommandResult = [
      { type: 'text', content: '' },
      { type: 'success', content: `Blog Posts (${data.blogs.length})` },
      { type: 'text', content: '='.repeat(14 + data.blogs.length.toString().length) },
      { type: 'text', content: '' },
    ];

    data.blogs.slice(0, 5).forEach((blog, index) => {
      output.push({
        type: 'link',
        content: `[${index + 1}] ${blog.title}`,
        href: `/blog/${blog.slug}`
      });
      output.push({ type: 'text', content: `    ${blog.category} | ${formatDate(blog.date)}` });
      output.push({ type: 'text', content: '' });
    });

    output.push({ type: 'link', content: '-> Visit /blog for all posts', href: '/blog' });
    return output;
  },

  experience: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Work Experience' },
    { type: 'text', content: '===============' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Senior Software Engineer @ Careervira' },
    { type: 'text', content: 'Oct 2021 - Present | Remote' },
    { type: 'text', content: '  - Built e-commerce micro-service boosting revenue by 25%' },
    { type: 'text', content: '  - Migrated Elasticsearch, reducing costs by 50%' },
    { type: 'text', content: '  - Improved Search Relevance by 50% with ML Personalization' },
    { type: 'text', content: '  - Deployed ML models with FastAPI, Celery on Linux' },
    { type: 'text', content: '  - Built SAML 2.0 Identity Provider, reducing login time 75%' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Software Developer Intern @ Nirmitee.io' },
    { type: 'text', content: 'Oct 2020 - Dec 2020 | Remote' },
    { type: 'text', content: '  - Developed Flutter apps for agri-tech marketplace' },
    { type: 'text', content: '  - Built delivery personnel app with REST APIs' },
    { type: 'text', content: '' },
    { type: 'link', content: '-> Visit /experience for full history', href: '/experience' },
  ],

  resume: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Resume' },
    { type: 'text', content: '' },
    { type: 'link', content: '-> Click here to view resume (PDF)', href: '/resume.pdf' },
  ],

  contact: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Contact Me' },
    { type: 'text', content: '==========' },
    { type: 'text', content: '' },
    { type: 'text', content: "I'm always open to discussing new projects," },
    { type: 'text', content: 'opportunities, or just tech in general.' },
    { type: 'text', content: '' },
    { type: 'link', content: '-> Visit /contact to get in touch', href: '/contact' },
  ],

  socials: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Find Me Online' },
    { type: 'text', content: '==============' },
    { type: 'text', content: '' },
    { type: 'link', content: 'GitHub:   github.com/anuragseven', href: 'https://github.com/anuragseven' },
    { type: 'link', content: 'LinkedIn: linkedin.com/in/anuragtripathi7', href: 'https://www.linkedin.com/in/anuragtripathi7' },
  ],

  whoami: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'Anurag Tripathi' },
    { type: 'text', content: 'Senior Software Engineer | 2x Patent Holder | Problem Solver' },
  ],

  clear: () => [],

  // Easter eggs
  sudo: () => [
    { type: 'error', content: "Nice try! You don't have root access here." },
  ],

  'rm -rf /': () => [
    { type: 'error', content: "Whoa there! This isn't that kind of terminal..." },
  ],

  matrix: () => [
    { type: 'success', content: 'Wake up, Neo...' },
    { type: 'text', content: 'The Matrix has you...' },
    { type: 'text', content: 'Follow the white rabbit.' },
  ],

  vim: () => [
    { type: 'error', content: "You're stuck now. Press Ctrl+C... just kidding!" },
    { type: 'text', content: "(Pro tip: :q! to exit)" },
  ],

  exit: () => [
    { type: 'error', content: "There is no escape. You're here forever now." },
    { type: 'text', content: "(Just kidding, close the browser tab)" },
  ],

  ls: () => [
    { type: 'text', content: '' },
    { type: 'success', content: 'about/  projects/  patents/  skills/  blogs/  experience/  contact/' },
  ],

  pwd: () => [
    { type: 'text', content: '/home/visitor/anuragtripathi.com' },
  ],

  'cat readme': () => [
    { type: 'text', content: '' },
    { type: 'success', content: '=== Welcome to my portfolio! ===' },
    { type: 'text', content: '' },
    { type: 'text', content: "Thanks for visiting! This terminal is fully functional." },
    { type: 'text', content: "Type 'help' to see what you can do." },
    { type: 'text', content: '' },
    { type: 'text', content: 'Or just use the navigation above if terminals' },
    { type: 'text', content: "aren't your thing. No judgment!" },
  ],

  ping: () => [
    { type: 'success', content: 'Pong!' },
  ],

  coffee: () => [
    { type: 'text', content: '' },
    { type: 'text', content: '    ( (' },
    { type: 'text', content: '     ) )' },
    { type: 'text', content: '  ........' },
    { type: 'text', content: '  |      |]' },
    { type: 'text', content: '  \\      /' },
    { type: 'text', content: '   `----`' },
    { type: 'text', content: '' },
    { type: 'success', content: 'Here\'s your coffee! Now get coding.' },
  ],
});

export function createExecuteCommand(data: DynamicData) {
  const commands = createCommands(data);

  return function executeCommand(input: string): CommandResult {
    const trimmed = input.trim().toLowerCase();

    if (!trimmed) {
      return [];
    }

    // Handle cd command
    if (trimmed.startsWith('cd ')) {
      const section = trimmed.slice(3).trim();
      const validSections = ['about', 'projects', 'patents', 'skills', 'blogs', 'blog', 'experience', 'contact'];
      if (validSections.includes(section)) {
        const href = section === 'blogs' ? '/blog' : `/${section}`;
        return [{ type: 'link', content: `Navigating to /${section}...`, href }];
      }
      return [{ type: 'error', content: `cd: no such directory: ${section}` }];
    }

    // Check if command exists
    const command = commands[trimmed];
    if (command) {
      return command();
    }

    // Unknown command
    return [{ type: 'error', content: getRandomInvalidResponse() }];
  };
}
