import { AboutCard, ProcessStep, ProjectItem, SkillItem, ServiceItem, PricingPackage } from '../types.ts';

export const personalInfo = {
  name: "Clarity Creative",
  preferredName: "Clarity",
  brandName: "Clarity Creative",
  logoTag: "C²",
  supportingTitle: "Web Developer • Digital Creative",
  headline: "Building Modern Digital Experiences.",
  tagline: "Modern Websites. Clear Solutions.",
  role: "Computer Science Student & Aspiring Web Developer",
  status: "Available for new projects",
  bioHeadline: "Modern Websites. Clear Solutions.",
  shortDescription: "I build fast, responsive and user-friendly websites that help businesses, organizations and individuals establish a strong online presence.",
  email: "fatiufaruk7@gmail.com",
  location: "Available Worldwide / Remote",
  experience: "Computer Science & Modern Web Development",
  socials: {
    github: "https://github.com",
    twitter: "https://x.com/Toriblackm8j9",
    whatsapp: "https://wa.me/2348137941486",
    whatsappNumber: "08137941486",
  }
};

export const codeSnippetString = `const developer = {
  brand: "Clarity Creative",
  role: "Web Developer & CS Student",
  tagline: "Modern Websites. Clear Solutions.",
  stack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "GitHub"],
  status: "Available for projects"
};

function craftDigitalExperience(project) {
  return {
    speed: "Blazing Fast & Optimized",
    design: "Clean, Responsive & Intuitive",
    solution: "Clear Solutions for Real Growth"
  };
};`;

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive websites using clean, maintainable and performant code.",
    iconName: "Code"
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    description: "Create websites that look and work properly on phones, tablets, laptops and desktops.",
    iconName: "Smartphone"
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional websites designed for businesses and organizations to build credibility and trust.",
    iconName: "Briefcase"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting modern landing pages designed to present your product, service or campaign clearly.",
    iconName: "Target"
  },
  {
    id: "website-deployment",
    title: "Website Deployment",
    description: "Deploy websites and make them accessible, fast and reliable online using Vercel, Firebase & modern hosts.",
    iconName: "Rocket"
  },
  {
    id: "digital-solutions",
    title: "Digital Solutions",
    description: "Build practical, tailored digital experiences and workflows based on your unique goals.",
    iconName: "Layers"
  }
];

export const pricingPackagesData: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "From ₦30,000",
    bestFor: "For simple personal or small business websites.",
    features: [
      "Responsive mobile-first design",
      "Up to 3–5 clean pages/sections",
      "Contact section & inquiry forms",
      "Basic SEO & meta configuration",
      "Fast deployment & launch setup",
      "Cross-browser compatibility"
    ],
    ctaText: "Choose Starter",
    budgetRange: "₦30k – ₦50k"
  },
  {
    id: "professional",
    name: "Professional",
    price: "From ₦50,000",
    badge: "Recommended",
    popular: true,
    bestFor: "For businesses that need a stronger online presence.",
    features: [
      "Custom responsive design & modern UI",
      "Multiple pages with tailored content",
      "Contact form & WhatsApp integration",
      "Basic SEO & social share cards",
      "Performance optimization & fast load",
      "Website deployment on custom domain",
      "PWA installable app support"
    ],
    ctaText: "Start Professional",
    budgetRange: "₦50k – ₦80k"
  },
  {
    id: "custom",
    name: "Custom",
    price: "From ₦80,000",
    bestFor: "For larger or specialized digital projects.",
    features: [
      "Fully customized UI/UX design",
      "Advanced interactive functionality",
      "Database / backend integration where required",
      "Custom forms, portals or product flows",
      "Advanced SEO & analytics setup",
      "Deployment & continuous integration",
      "Priority post-launch support"
    ],
    ctaText: "Discuss Custom",
    budgetRange: "₦80k – ₦100k"
  }
];

export const aboutCards: AboutCard[] = [
  {
    title: "Web Developer",
    icon: "Code",
    description: "Building modern responsive websites using clean and semantic architecture.",
  },
  {
    title: "Computer Science",
    icon: "GraduationCap",
    description: "Studying Computer Science with a passion for software design and problem solving.",
  },
  {
    title: "Clean UI Design",
    icon: "Palette",
    description: "Focusing on intuitive, accessible interfaces that balance aesthetics with speed.",
  },
  {
    title: "Digital Solutions",
    icon: "Lightbulb",
    description: "Turning real client challenges into clear, reliable, high-impact web solutions.",
  }
];

export const skillsData: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    icon: "fa-brands fa-html5",
    lucideIconName: "Code2",
    description: "Semantic web architecture, accessible markup, and structured data.",
    level: 95
  },
  {
    id: "css3",
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: "fa-brands fa-css3-alt",
    lucideIconName: "Palette",
    description: "Responsive flexbox, CSS grid, custom properties, and fluid typography.",
    level: 94
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: "fa-brands fa-js",
    lucideIconName: "FileCode",
    description: "DOM manipulation, modern asynchronous logic, APIs, and modern ES features.",
    level: 92
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "fa-brands fa-react",
    lucideIconName: "Atom",
    description: "Component modularity, declarative hooks, state management, and Vite builds.",
    level: 90
  },
  {
    id: "responsive",
    name: "Responsive Web Design",
    category: "frontend",
    icon: "fa-solid fa-mobile-screen",
    lucideIconName: "Smartphone",
    description: "Mobile-first ergonomic experiences optimized for mobile, tablet and desktop.",
    level: 96
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "tools",
    icon: "fa-brands fa-git-alt",
    lucideIconName: "GitBranch",
    description: "Source code version control, structured commits, branching and repository management.",
    level: 90
  },
  {
    id: "ui-design",
    name: "UI Design & Tailwind",
    category: "frontend",
    icon: "fa-solid fa-paintbrush",
    lucideIconName: "Layers",
    description: "Glassmorphic interfaces, high-contrast dark modes, and design token consistency.",
    level: 92
  },
  {
    id: "deployment-vercel",
    name: "Website Deployment & Vercel",
    category: "tools",
    icon: "fa-solid fa-cloud-arrow-up",
    lucideIconName: "Rocket",
    description: "Automated continuous deployments, custom domains, HTTPS, and CDN edge routing.",
    level: 91
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "backend",
    icon: "fa-solid fa-fire",
    lucideIconName: "Server",
    description: "Firestore database schemas, client integration, and hosting workflows.",
    level: 85
  }
];

export const marqueeTechList = [
  { name: "HTML5", symbol: "HTML" },
  { name: "CSS3", symbol: "CSS" },
  { name: "JavaScript", symbol: "JS" },
  { name: "React", symbol: "REACT" },
  { name: "Git", symbol: "GIT" },
  { name: "GitHub", symbol: "GITHUB" },
  { name: "Vercel", symbol: "VERCEL" },
  { name: "Firebase", symbol: "FIREBASE" },
  { name: "Tailwind CSS", symbol: "TAILWIND" },
  { name: "TypeScript", symbol: "TS" }
];

export const projectsData: ProjectItem[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    projectType: "Personal Project",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description: "A modern responsive developer portfolio designed to showcase skills, projects and services with clean visual motion.",
    overview: "A custom personal portfolio website designed from the ground up for Clarity Creative. Features a sleek dark glassmorphism interface, interactive project modals, responsive touch controls, and smooth entrance sequences.",
    objective: "To present web development skills, live client services, and transparent pricing in a polished, highly accessible digital showcase.",
    previewClass: "preview-one",
    previewGradient: "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(11, 16, 32, 0.9) 80%)",
    previewIcon: "Code",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "High-performance responsive design across desktop, tablet, and mobile",
      "Interactive case study showcase with full technical specifications",
      "Preloader experience, dark mode palette, and accessible color contrast"
    ]
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Business Website",
    projectType: "Demo Project",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    description: "A modern restaurant website featuring responsive design, appetizing menu presentation, reservation flow and clear calls to action.",
    overview: "A vibrant dining website crafted to help culinary businesses attract patrons online. Features categorized digital menus, chef specials, mobile booking forms, and clear location/contact integration.",
    objective: "To demonstrate responsive dining catalog layout, interactive mobile menus, and seamless client conversion journeys.",
    previewClass: "preview-two",
    previewGradient: "radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(11, 16, 32, 0.9) 80%)",
    previewIcon: "Utensils",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Mobile-optimized visual menu card layout with dietary tags",
      "Integrated reservation inquiry and direct WhatsApp order button",
      "Fast image loading and accessible typographic scale"
    ]
  },
  {
    id: "clarity-sell",
    title: "Clarity Sell",
    category: "Digital Commerce",
    projectType: "Concept Project",
    tags: ["React", "TypeScript", "Tailwind", "Cart UI"],
    description: "A digital product and data-selling platform concept designed around a simple, friction-free purchasing and checkout experience.",
    overview: "Clarity Sell is an innovative concept for digital creators, merchants, and data providers to distribute products online. It features clean product previews, instant checkout calculations, and modern digital asset delivery.",
    objective: "To explore seamless digital asset distribution, cart state management, and intuitive checkout micro-interactions in modern web apps.",
    previewClass: "preview-three",
    previewGradient: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(11, 16, 32, 0.9) 80%)",
    previewIcon: "ShoppingBag",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Streamlined digital checkout flow with live order summary",
      "Responsive product grids with instant search and filter controls",
      "Clean glassmorphism card surfaces with subtle purple glow"
    ]
  },
  {
    id: "school-portal",
    title: "School Portal",
    category: "Educational Web App",
    projectType: "Concept Project",
    tags: ["React", "TypeScript", "Dashboard", "Student UI"],
    description: "A modern university portal concept featuring student-focused academic schedules, course tracking and administrative functionality.",
    overview: "A student-centered educational portal interface designed for university and college workflows. Includes student result checking, semester course registration, announcement boards, and department resources.",
    objective: "To build an organized, accessible dashboard interface solving real student navigation challenges with clear visual hierarchy.",
    previewClass: "preview-four",
    previewGradient: "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(11, 16, 32, 0.9) 80%)",
    previewIcon: "GraduationCap",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Student result portal and semester grade overview interface",
      "Course schedule calendar with upcoming lecture time indicators",
      "Responsive sidebar navigation and accessible data tables"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: "Compass",
    description: "Understanding your goals, defining project scope, target audience, and structuring key website requirements.",
    details: [
      "Project requirements analysis & goal definition",
      "Information architecture and wireframe planning"
    ]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    icon: "PenTool",
    description: "Designing modern, responsive layouts with clean typography, clear visual hierarchy, and cohesive branding.",
    details: [
      "Modern UI/UX design with responsive grids",
      "High-contrast color styling and intuitive controls"
    ]
  },
  {
    number: "03",
    title: "Clean Development",
    icon: "Code",
    description: "Writing semantic, performant, and well-structured code with modern web standards and responsive behaviors.",
    details: [
      "Component modularity and clean TypeScript/React",
      "Performance optimization and smooth motion transitions"
    ]
  },
  {
    number: "04",
    title: "Testing & Launch",
    icon: "Rocket",
    description: "Conducting thorough cross-device verification, SEO checks, and deploying the website online for global access.",
    details: [
      "Cross-device responsiveness and accessibility audit",
      "Fast deployment on Vercel or cloud hosts with custom domain"
    ]
  }
];

