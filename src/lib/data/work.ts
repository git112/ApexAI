export interface WorkProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  colors: string[];
  typography: string;
  featured: boolean;
  accentColor: string;
  bgColor: string;
  year: string;
}

export const projects: WorkProject[] = [
  {
    slug: 'karat',
    title: 'Karat',
    client: 'Karat',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'Animations'],
    description: 'Reimagining the technical hiring experience with human-centric design.',
    overview:
      'Baunfire partnered with Karat, a global technical hiring platform, to redesign their digital presence and democratize the tech hiring landscape.',
    challenge:
      'Karat needed to establish a professional yet welcoming brand identity that reflected their commitment to equitable and inclusive recruitment practices while simplifying user navigation.',
    solution:
      'We created inviting, human-centric designs using rounded, organic shapes and harmonized imagery. Subtle animations and transitions enhanced professionalism while maintaining accessibility across all devices.',
    services: ['Website Design & Branding', 'UX/UI Design', 'Web Development', 'Animations & Interactions'],
    colors: ['#4ECDC4', '#FFE66D', '#FF6B9D', '#FFFFFF'],
    typography: 'Clean sans-serif pairing conveying openness and professionalism.',
    featured: true,
    accentColor: '#4ECDC4',
    bgColor: '#0B1B2B',
    year: '2024',
  },
  {
    slug: 'cellares',
    title: 'Cellares',
    client: 'Cellares',
    category: 'Corporate Website',
    tags: ['Web Design', 'Branding', 'Content Strategy'],
    description: 'A cutting-edge digital presence for cell therapy manufacturing innovation.',
    overview:
      'Cellares, a cell therapy manufacturing company, partnered with Baunfire to enhance its digital presence and communicate its innovative approach to integrated development and manufacturing.',
    challenge:
      'The organization needed to improve brand positioning, drive engagement, and educate prospective clients about advanced manufacturing technologies in the cell therapy space.',
    solution:
      'We created a minimalist, cutting-edge aesthetic balancing lab-like clarity with approachability. A monochromatic base with bright aqua accents directed attention to key calls-to-action.',
    services: ['Website Design', 'UI/UX Design', 'Development', 'Branding', 'Content Strategy'],
    colors: ['#00D4FF', '#FFFFFF', '#0A0A0A'],
    typography: 'Satoshi font conveying modernity and clarity.',
    featured: true,
    accentColor: '#00D4FF',
    bgColor: '#050F1A',
    year: '2024',
  },
  {
    slug: 'lumana',
    title: 'Lumana',
    client: 'Lumana',
    category: 'Corporate Website',
    tags: ['Web Design', 'Branding', 'CRO'],
    description: 'AI-powered video security with a brand identity that leaves a lasting impression.',
    overview:
      'Baunfire partnered with Lumana, an AI-powered video security platform, to redesign their corporate website and strengthen their brand identity.',
    challenge:
      'Lumana needed a website that conveys their unique personality and leaves a lasting impression while effectively communicating innovative security technology.',
    solution:
      'We employed a light clean design with minimal color usage, featuring an 80/20 light-to-dark contrast ratio. Hovers and micro animations guide user attention toward key content.',
    services: ['Website Design & Branding', 'Design Language Strengthening', 'Conversion Rate Optimization'],
    colors: ['#6C63FF', '#FFFFFF', '#F8F9FA'],
    typography: 'Modern sans-serif aligned with contemporary corporate branding.',
    featured: true,
    accentColor: '#6C63FF',
    bgColor: '#0D0D1A',
    year: '2023',
  },
  {
    slug: 'ambi-robotics',
    title: 'Ambi Robotics',
    client: 'Ambi Robotics',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'Motion'],
    description: 'Human-robot collaboration brought to life through motion and storytelling.',
    overview:
      'Baunfire redesigned the corporate website for Ambi Robotics, an AI-powered robotic sorting company in Berkeley, specializing in automated solutions for shipping and logistics.',
    challenge:
      'Ambi Robotics needed to establish itself as an industry leader and reimagine its digital brand presence to communicate its mission of enabling human-robot collaboration.',
    solution:
      'We created a site emphasizing the synergy between humans and machines through enhanced product storytelling, high-quality photography, videography, and motion graphics.',
    services: ['Website Design & Development', 'Design Direction', 'Content Strategy', 'Animations & Interactions'],
    colors: ['#FF4500', '#FFFFFF', '#111111'],
    typography: 'Clean sans-serif conveying helpfulness and simplicity.',
    featured: true,
    accentColor: '#FF4500',
    bgColor: '#0D0D0D',
    year: '2023',
  },
  {
    slug: 'google',
    title: 'Google San José',
    client: 'Google',
    category: 'Website & Brand Identity',
    tags: ['Branding', 'Web Design', 'Illustrations'],
    description: 'A community-first brand identity for Google\'s Downtown West expansion.',
    overview:
      'Baunfire collaborated with Google on a brand identity and digital presence for their Downtown West expansion in San José, honoring the city\'s cultural heritage and innovative spirit.',
    challenge:
      'Google needed to establish an authentic connection with San José\'s community while representing the Downtown West development in a way that resonated with local audiences.',
    solution:
      'We developed a color palette inspired by vibrant murals and historic San José buildings, combined corporate typography with handwritten script, and collaborated with local photographers and illustrators.',
    services: ['Website Design & Brand Identity', 'Design Direction', 'Illustrations & Animations', 'Content Production'],
    colors: ['#E8344E', '#F4C430', '#4285F4', '#34A853'],
    typography: 'Corporate type combined with handwritten script for a blueprint-like feel.',
    featured: false,
    accentColor: '#4285F4',
    bgColor: '#1A1A2E',
    year: '2022',
  },
  {
    slug: 'optimal-dynamics',
    title: 'Optimal Dynamics',
    client: 'Optimal Dynamics',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development'],
    description: 'AI-driven fleet optimization presented with clarity and confidence.',
    overview: 'A corporate website redesign for Optimal Dynamics, an AI-driven fleet optimization platform.',
    challenge: 'Communicating complex AI logistics technology to a non-technical enterprise audience.',
    solution: 'Clean, data-forward design with clear value proposition communication and enterprise-grade aesthetics.',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    colors: ['#00B4D8', '#FFFFFF', '#090E18'],
    typography: 'Professional sans-serif with strong hierarchy.',
    featured: false,
    accentColor: '#00B4D8',
    bgColor: '#090E18',
    year: '2023',
  },
  {
    slug: 'replicant',
    title: 'Replicant AI',
    client: 'Replicant',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'Animations'],
    description: 'Conversational AI made approachable through thoughtful design.',
    overview: 'A full website redesign for Replicant, a conversational AI platform for contact centers.',
    challenge: 'Making complex AI technology feel accessible and trustworthy to enterprise decision-makers.',
    solution: 'Warm, approachable design language with clear product demonstrations and strong social proof.',
    services: ['Website Design', 'UI/UX Design', 'Web Development', 'Animations & Interactions'],
    colors: ['#7B2FBE', '#FFFFFF', '#0F0F1A'],
    typography: 'Modern sans-serif balancing tech and humanity.',
    featured: false,
    accentColor: '#7B2FBE',
    bgColor: '#0F0F1A',
    year: '2022',
  },
  {
    slug: 'incorta',
    title: 'Incorta',
    client: 'Incorta',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development'],
    description: 'Data analytics positioned as the unfair advantage.',
    overview: 'Corporate website redesign for Incorta, a unified data analytics platform.',
    challenge: 'Differentiating in a crowded data analytics market with a compelling digital story.',
    solution: 'Bold, confident design language that positions Incorta as the definitive analytics platform.',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    colors: ['#FF6B35', '#FFFFFF', '#111827'],
    typography: 'Strong display type with dynamic hierarchy.',
    featured: false,
    accentColor: '#FF6B35',
    bgColor: '#111827',
    year: '2022',
  },
  {
    slug: 'benchling',
    title: 'Benchling',
    client: 'Benchling',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development'],
    description: 'Life sciences R&D platform with a design built for discovery.',
    overview: 'Corporate website for Benchling, the life sciences R&D cloud platform.',
    challenge: 'Communicating the depth and breadth of a complex scientific platform to diverse stakeholders.',
    solution: 'Clear, structured design with strong information architecture supporting complex product storytelling.',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    colors: ['#00C2A8', '#FFFFFF', '#0A1628'],
    typography: 'Clean scientific aesthetic with strong legibility.',
    featured: false,
    accentColor: '#00C2A8',
    bgColor: '#0A1628',
    year: '2021',
  },
  {
    slug: 'windfall',
    title: 'Windfall',
    client: 'Windfall',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'Branding'],
    description: 'Wealth intelligence platform with a design that commands trust.',
    overview: 'Corporate website for Windfall, a wealth intelligence and prospect research platform.',
    challenge: 'Building credibility and trust for a platform dealing with sensitive financial intelligence.',
    solution: 'Sophisticated, authoritative design language with strong data visualization elements.',
    services: ['Website Design', 'Branding', 'Web Development'],
    colors: ['#2DD4BF', '#FFFFFF', '#0F172A'],
    typography: 'Premium serif and sans-serif pairing for financial gravitas.',
    featured: false,
    accentColor: '#2DD4BF',
    bgColor: '#0F172A',
    year: '2022',
  },
  {
    slug: 'instabase',
    title: 'Instabase',
    client: 'Instabase',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development'],
    description: 'AI automation platform with enterprise presence.',
    overview: 'A corporate website redesign for Instabase, an AI-powered automation platform.',
    challenge: 'Elevating brand presence to match the enterprise scale of the product.',
    solution: 'Bold, modern design with strong product-led storytelling and clear enterprise focus.',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    colors: ['#4F46E5', '#FFFFFF', '#0A0A0A'],
    typography: 'Modern sans-serif with confident weight distribution.',
    featured: false,
    accentColor: '#4F46E5',
    bgColor: '#0A0A0A',
    year: '2023',
  },
  {
    slug: 'nvp-year-in-review',
    title: 'Norwest Year in Review',
    client: 'Norwest Venture Partners',
    category: 'Year in Review Microsite',
    tags: ['Microsite', 'Web Design', 'Animations'],
    description: 'Annual highlight reel for one of Silicon Valley\'s top VC firms.',
    overview: 'An annual year-in-review microsite for Norwest Venture Partners showcasing portfolio achievements.',
    challenge: 'Creating an engaging, narrative-driven experience for annual reporting.',
    solution: 'Immersive scrolling experience with rich animations and data storytelling.',
    services: ['Microsite Design', 'Web Development', 'Animations & Interactions'],
    colors: ['#C9A96E', '#FFFFFF', '#111111'],
    typography: 'Elegant display type with editorial feel.',
    featured: false,
    accentColor: '#C9A96E',
    bgColor: '#111111',
    year: '2022',
  },
  {
    slug: 'arlo',
    title: 'Arlo',
    client: 'Arlo',
    category: 'eCommerce Website',
    tags: ['eCommerce', 'Web Design', 'Development'],
    description: 'Smart home security made irresistible online.',
    overview: 'eCommerce website design for Arlo, the smart home security camera brand.',
    challenge: 'Driving consumer conversions for premium security hardware in a competitive market.',
    solution: 'Product-forward design with strong lifestyle imagery and streamlined purchase flows.',
    services: ['eCommerce Design', 'UI/UX Design', 'Web Development'],
    colors: ['#00A8E0', '#FFFFFF', '#1A1A1A'],
    typography: 'Consumer-friendly sans-serif with strong product hierarchy.',
    featured: false,
    accentColor: '#00A8E0',
    bgColor: '#1A1A1A',
    year: '2020',
  },
  {
    slug: 'netgear',
    title: 'Netgear',
    client: 'Netgear',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'eCommerce'],
    description: 'Global networking brand with a world-class digital presence.',
    overview: 'A comprehensive website redesign for Netgear, a global networking technology leader.',
    challenge: 'Unifying a complex product portfolio under a cohesive, modern digital experience.',
    solution: 'Scalable design system supporting enterprise and consumer product lines with clear navigation.',
    services: ['Website Design', 'UI/UX Design', 'Web Development', 'Content Strategy'],
    colors: ['#E40046', '#FFFFFF', '#1A1A1A'],
    typography: 'Bold, confident type system for global brand recognition.',
    featured: false,
    accentColor: '#E40046',
    bgColor: '#1A1A1A',
    year: '2019',
  },
  {
    slug: 'dlight',
    title: 'd.light',
    client: 'd.light',
    category: 'Corporate Website',
    tags: ['Web Design', 'Development', 'Impact'],
    description: 'Solar energy access for the underserved, told with purpose.',
    overview: 'A corporate website for d.light, providing solar energy solutions to off-grid communities globally.',
    challenge: 'Communicating social impact alongside commercial business goals to diverse stakeholders.',
    solution: 'Purpose-driven design that balances emotional storytelling with clear business value proposition.',
    services: ['Website Design', 'UI/UX Design', 'Web Development'],
    colors: ['#F59E0B', '#FFFFFF', '#1C1917'],
    typography: 'Warm, human-centered type system reflecting the brand mission.',
    featured: false,
    accentColor: '#F59E0B',
    bgColor: '#1C1917',
    year: '2021',
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): WorkProject[] {
  return projects.filter((p) => p.featured);
}

export function generateWorkStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
