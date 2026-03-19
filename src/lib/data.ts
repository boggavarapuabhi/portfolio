export const siteConfig = {
  name: "Abhi Boggavarapu",
  title: "Full Stack Developer",
  email: "abhi.boggavarapu@gmail.com",
  github: "https://github.com/boggavarapuabhi",
  linkedin: "https://linkedin.com/in/boggavarapuabhi",
  location: "United States",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Mindset", href: "#mindset" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  "Frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "HTML5/CSS3",
  ],
  "Backend": [
    "Node.js",
    "Express",
    "Python",
    "REST APIs",
    "GraphQL",
    "Microservices",
  ],
  "Data & AI": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "OpenAI API",
    "LangChain",
    "Vector DBs",
  ],
  "DevOps & Tools": [
    "AWS",
    "Docker",
    "CI/CD",
    "Git",
    "Vercel",
    "Terraform",
  ],
};

export const experiences = [
  {
    company: "Enterprise SaaS Company",
    role: "Full Stack Developer",
    period: "2022 — Present",
    location: "United States",
    highlights: [
      "Architected and shipped a real-time analytics dashboard serving 10K+ daily active users, reducing data latency from 30s to under 2s",
      "Led migration from monolithic REST API to microservices architecture, improving deployment frequency by 4x",
      "Built AI-powered search feature using OpenAI embeddings + vector database, increasing user engagement by 35%",
      "Mentored 3 junior developers and established code review practices that reduced production bugs by 40%",
    ],
  },
  {
    company: "Growth-Stage Startup",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "United States",
    highlights: [
      "Developed customer-facing React application from 0→1 that onboarded 5,000+ users in first quarter",
      "Designed and implemented payment integration (Stripe) processing $2M+ in annual transactions",
      "Optimized database queries and implemented caching layer, reducing API response times by 60%",
      "Introduced automated testing pipeline achieving 85% code coverage across the platform",
    ],
  },
  {
    company: "Tech Consultancy",
    role: "Junior Developer",
    period: "2018 — 2020",
    location: "India",
    highlights: [
      "Built 8+ client-facing web applications using React and Node.js across healthcare and fintech verticals",
      "Created reusable component library used across 4 internal projects, saving ~200 dev hours quarterly",
      "Collaborated directly with product managers to translate user research into technical specifications",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Code Review Assistant",
    tagline: "Ship better code, faster.",
    problem:
      "Engineering teams spend 30% of their time on code reviews. Most feedback is repetitive — style issues, common bugs, missing tests. Senior engineers get bottlenecked reviewing junior code.",
    solution:
      "Built an AI-powered code review tool that integrates with GitHub PRs. It analyzes diffs using LLMs, provides contextual feedback, flags potential bugs, and suggests improvements — all before a human reviewer even looks at the code.",
    techStack: ["Next.js", "Python", "OpenAI API", "GitHub API", "PostgreSQL", "Redis"],
    impact: [
      "Reduced average code review time by 45%",
      "Caught 23% more bugs before production",
      "Adopted by 3 internal teams within first month",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Real-Time Collaboration Platform",
    tagline: "Google Docs meets Figma for product teams.",
    problem:
      "Product teams juggle between Notion, Slack, Figma, and Jira. Context gets lost. Decisions aren't documented. Alignment meetings waste hours every week.",
    solution:
      "Created a unified workspace where product specs, designs, and tasks live together. Real-time multiplayer editing, embedded design previews, and automated standup summaries powered by AI.",
    techStack: ["React", "WebSockets", "Node.js", "MongoDB", "AWS S3", "OpenAI"],
    impact: [
      "Supported 50+ concurrent users with <100ms latency",
      "Reduced alignment meetings by 60%",
      "Processed 10K+ documents in first 3 months",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Smart Expense Tracker",
    tagline: "Financial clarity in 30 seconds.",
    problem:
      "Most expense trackers require manual categorization. Users start with enthusiasm but abandon the app within 2 weeks because logging expenses is tedious.",
    solution:
      "Built a mobile-first expense tracker with AI auto-categorization. Users snap a receipt photo or forward an email — the app extracts amount, vendor, and category automatically using OCR and NLP.",
    techStack: ["React Native", "Node.js", "Tesseract OCR", "PostgreSQL", "Stripe", "Chart.js"],
    impact: [
      "92% auto-categorization accuracy",
      "3x higher 30-day retention vs competitors",
      "5,000+ receipts processed in beta",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const mindsetItems = [
  {
    icon: "product",
    title: "Product-First Engineering",
    description:
      "I don't just write code — I ask why we're building it. Every feature I ship starts with a user problem, not a ticket. I think in user flows, not just data flows.",
  },
  {
    icon: "speed",
    title: "Bias for Speed",
    description:
      "Ship fast, learn faster. I prototype in days, not weeks. I believe the best architecture is the one that lets you iterate quickly while keeping the system reliable.",
  },
  {
    icon: "quality",
    title: "Craft & Quality",
    description:
      "Clean code is a feature. I write code that other developers enjoy reading. Thoughtful naming, clear abstractions, and comprehensive tests aren't optional — they're the baseline.",
  },
  {
    icon: "ownership",
    title: "End-to-End Ownership",
    description:
      "From database schema to pixel-perfect UI. I own the full stack because great products don't have seams between frontend and backend. I deploy what I build and monitor what I deploy.",
  },
];

export const buildingItems = [
  {
    emoji: "🧠",
    title: "AI-Native Developer Tools",
    description: "Exploring how LLMs can make developers 10x more productive — beyond just code completion.",
  },
  {
    emoji: "⚡",
    title: "Performance Engineering",
    description: "Deep-diving into edge computing, streaming SSR, and sub-100ms page loads at scale.",
  },
  {
    emoji: "🎨",
    title: "Design Engineering",
    description: "Bridging the gap between design and code with component systems that designers can actually use.",
  },
];

export const achievements = [
  { metric: "10K+", label: "Users Served" },
  { metric: "45%", label: "Faster Reviews" },
  { metric: "99.9%", label: "Uptime Delivered" },
  { metric: "15+", label: "Projects Shipped" },
];
