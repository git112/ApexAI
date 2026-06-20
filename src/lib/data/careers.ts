export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Freelance' | 'Contract';
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: 'freelance-designer',
    title: 'Freelance Designer',
    department: 'Creative',
    type: 'Freelance',
    location: 'San Jose, CA / Remote',
    description:
      'We\'re looking for a talented freelance designer to collaborate on client projects. You\'ll work closely with our creative team to deliver world-class digital experiences.',
    responsibilities: [
      'Design visually compelling web experiences for B2B and technology clients',
      'Create UI components, page layouts, and design systems',
      'Collaborate with developers to ensure pixel-perfect implementation',
      'Present and defend design decisions to clients',
      'Iterate based on feedback while maintaining design integrity',
    ],
    requirements: [
      'Strong portfolio demonstrating web design expertise',
      'Proficiency in Figma',
      'Understanding of responsive design principles',
      'Experience with technology or B2B brands preferred',
      'Strong communication and presentation skills',
    ],
  },
  {
    id: 'freelance-senior-pm',
    title: 'Freelance Senior Project Manager',
    department: 'Project Management',
    type: 'Freelance',
    location: 'San Jose, CA / Remote',
    description:
      'We\'re seeking an experienced project manager to help lead complex client engagements. You\'ll own project timelines, budgets, and client relationships.',
    responsibilities: [
      'Manage multiple concurrent client projects from kickoff to launch',
      'Develop and maintain project schedules, budgets, and resource plans',
      'Serve as the primary client point of contact for project status and escalations',
      'Coordinate cross-functional teams including design, development, and strategy',
      'Identify and mitigate project risks proactively',
    ],
    requirements: [
      '5+ years of digital project management experience',
      'Experience managing website design and development projects',
      'Strong proficiency with project management tools (Asana, Jira, or similar)',
      'Excellent written and verbal communication',
      'Agency background strongly preferred',
    ],
  },
  {
    id: 'junior-visual-designer',
    title: 'Junior Visual Designer',
    department: 'Creative',
    type: 'Full-time',
    location: 'San Jose, CA',
    description:
      'Start your design career at a Silicon Valley agency working with world-class brands. You\'ll grow under the mentorship of senior designers and contribute to meaningful client work from day one.',
    responsibilities: [
      'Assist senior designers in creating digital assets and web designs',
      'Create social media graphics, email templates, and marketing materials',
      'Support visual QA on development projects',
      'Contribute to brand guidelines and design system documentation',
      'Participate in creative brainstorms and design critiques',
    ],
    requirements: [
      'Bachelor\'s degree in design, visual communication, or related field',
      'Strong foundation in visual design principles',
      'Proficiency in Figma and Adobe Creative Suite',
      'A portfolio that demonstrates range and growth',
      'Eagerness to learn and receive feedback',
    ],
  },
  {
    id: 'senior-project-manager',
    title: 'Senior Project Manager',
    department: 'Project Management',
    type: 'Full-time',
    location: 'San Jose, CA',
    description:
      'Lead our most strategic client engagements as a Senior Project Manager. You\'ll shape how we deliver work, mentor junior PMs, and build lasting client relationships.',
    responsibilities: [
      'Own end-to-end delivery of complex, multi-month client engagements',
      'Develop project scopes, proposals, and statements of work',
      'Mentor junior project managers and establish delivery best practices',
      'Partner with new business team on scoping and pitch strategy',
      'Build and maintain senior-level client relationships',
    ],
    requirements: [
      '7+ years of digital project management experience',
      'Proven track record delivering websites and digital products on time and budget',
      'Strong financial acumen and experience managing project P&L',
      'Exceptional interpersonal and client management skills',
      'Agency experience required',
    ],
  },
  {
    id: 'seo-specialist',
    title: 'SEO Specialist',
    department: 'Creative',
    type: 'Full-time',
    location: 'San Jose, CA / Remote',
    description:
      'Join our growing digital marketing practice as an SEO Specialist. You\'ll develop and execute search strategies for B2B technology clients across Silicon Valley.',
    responsibilities: [
      'Conduct technical SEO audits and develop remediation plans',
      'Perform keyword research and develop content strategies',
      'Analyze performance data and provide actionable recommendations',
      'Collaborate with content and design teams on SEO-optimized deliverables',
      'Stay current with algorithm updates and industry best practices',
    ],
    requirements: [
      '3+ years of in-house or agency SEO experience',
      'Strong analytical skills and proficiency with SEO tools (SEMrush, Ahrefs, Screaming Frog)',
      'Experience with Google Search Console, GA4, and similar analytics platforms',
      'Understanding of technical SEO including site architecture, schema, and Core Web Vitals',
      'B2B or technology client experience preferred',
    ],
  },
];
