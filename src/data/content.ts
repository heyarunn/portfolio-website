export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
];

export const services = [
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Modern, responsive designs that enhance user experience and reflect your brand",
    link: "Explore designing services",
  },
  {
    icon: "📈",
    title: "Web Development",
    desc: "Clean, scalable websites built with the latest web technologies, with seamless deployment with ongoing support and updates.",
    link: "Explore development services",
  },
  {
    icon: "🛒",
    title: "Software Development",
    desc: "Custom software tailored to solve real business problems.",
    link: "Explore s/w development services",
  }
];

export const careers = [
  {
    no: "01",
    type: "Experience",
    destination: "Nissan Digital India LLP",
    role: "Software Engineer I",
    period: "Sept 2022 – Present",
    desc: "Building enterprise-level applications with a focus on full-stack development using Java, Spring Boot, React.js, and PostgreSQL. Built a microservices platform with Eureka and OpenFeign, and a Spring Cloud Gateway (WebFlux) for centralized JWT auth and routing. Contributed to the ROMDR automation platform used by 1,000+ enterprise users and improved report delivery time by 18%. Recognized with the Standing Ovation Award for ownership and strong contributions.",
  },
  {
    no: "02",
    type: "Education",
    destination: "National Institute of Technology, Calicut",
    role: "B.Tech, Mechanical Engineering",
    period: "June 2018 – May 2022",
    desc: "Bachelor of Technology in Mechanical Engineering with a GPA of 7.86. Built a strong foundation in engineering principles, analytical thinking, and problem-solving.",
  },
  {
    no: "03",
    type: "Internship",
    destination: "PocketFM",
    role: "Translator",
    period: "Feb 2021 – Apr 2021",
    desc: "During a 3-month internship at PocketFM, my primary responsibility was transcribing audio content in Malayalam, which was later used as input for AI language model training. This experience significantly improved my content development skills, particularly in transcription, and provided valuable exposure to AI-related projects.",
  },
];

export const processFlow = [
  { step: "Discover", desc: "Understanding your business needs and defining the perfect solution architecture" },
  { step: "Design", desc: "Crafting intuitive interfaces and scalable system designs that users love" },
  { step: "Development", desc: "Building robust, high-performance systems using cutting-edge technologies" },
  { step: "Delivery", desc: "Launching your product and providing ongoing support for continuous growth" }
];

export const contact = {
  phone: "+91 7356569164",
  email: "arunalakkalpalla@gmail.com",
  location: "Trivandrum, Kerala",
  region: "Trivandrum, Kerala",
  linkedin: "https://www.linkedin.com/in/arunalakkal/",
};

export const projects = [
  {
    name: "Rideflow",
    icon: "🚕",
    period: "2026-Present",
    tagline: "Ride-booking backend on Java microservices",
    desc: "A ride-booking backend that connects riders with drivers, built to go deep on Java backend development, microservices architecture, and DSA — graph algorithms, geospatial indexing, and real-time event workflows.",
    features: [
      "Java 21 & Spring Boot 3 multi-module monorepo",
      "Spring Cloud Gateway with OAuth2 + JWT security",
      "Independent user, driver & ride lifecycle services",
      "Kafka event-driven messaging across services",
      "PostgreSQL + Flyway, Redis for caching & geo",
      "Resilience4j, Testcontainers, Docker & Kubernetes",
    ],
    cta: "View On Github",
    link: "https://github.com/Arun-mec/ride-flow",
  },
  {
    name: "Portfolio",
    icon: "💼",
    period: "2026",
    tagline: "Portfolio built with Next.js",
    desc: "A personal portfolio built with Next.js and Tailwind CSS, featuring an interactive particle-network hero, animated skill marquees and a fully themeable dark design.",
    features: [
      "Next.js App Router with TypeScript",
      "Tailwind CSS design system & custom theme",
      "Interactive pointer-driven particle background",
      "Seamless infinite-scrolling skills marquee",
      "Responsive, accessible, reduced-motion aware",
    ],
    cta: "View project",
    link: "/",
  },
  {
    name: "Netflix Clone",
    icon: "🎬",
    period: "Jul 2022 – Aug 2022",
    tagline: "Streaming app built with React.js",
    desc: "A Netflix clone featuring genre-based movie listings, email/phone login and signup, and a personal \u201cMy List\u201d feature, with a Node.js backend handling auth and storage.",
    features: [
      "Genre-based movie listings",
      "User login & signup via email or phone",
      "Personal \u201cMy List\u201d watchlist",
      "TMDB API for movie data",
      "Node.js backend for auth & storage",
      "Deployed on Netlify, versioned with Git",
    ],
    cta: "View project",
    link: "https://netlfix-clone-app-arunmec.netlify.app/",
  },
  {
    name: "WhatsApp Broadcasting",
    icon: "💬",
    period: "Jun 2022",
    tagline: "Bulk messaging app built with Node.js",
    desc: "A WhatsApp broadcasting web app for sending text messages and media files to multiple contacts, built with Node.js and Express.js.",
    features: [
      "Broadcast text messages to many contacts",
      "Send media files in bulk",
      "Built with Node.js & Express.js",
      "WhatsApp connectivity via whatsapp-web.js",
    ],
    cta: "View On Github",
    link: "https://bitbucket.org/your-workspace/whatsapp-broadcasting",
  },
];

// `featured: true` renders the pill highlighted in the skills cloud.
export const skills: { name: string; featured?: boolean }[] = [
  { name: "Java", featured: true },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Spring Boot", featured: true },
  { name: "Spring MVC" },
  { name: "React JS" },
  { name: "Next JS", featured: true },
  { name: "JPA" },
  { name: "Redux" },
  { name: "PostgreSQL", featured: true },
  { name: "MongoDB" },
  { name: "AWS", featured: true },
  { name: "CI/CD" },
  { name: "Git" },
  { name: "Docker" },
  { name: "Microservices", featured: true },
  { name: "Jira" },
  { name: "Postman" },
  { name: "RESTful API", featured: true },
  { name: "Event-Driven Architecture" },
  { name: "SDLC" },
  { name: "Agile" },
  { name: "Code Reviews" },
  { name: "DBMS" },
];
