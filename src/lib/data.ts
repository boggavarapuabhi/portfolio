export const siteConfig = {
  name: "Hemanth Boggavarapu",
  title: "Full Stack Developer",
  email: "boggavarapuabhi@gmail.com",
  phone: "+1 917-951-7080",
  github: "https://github.com/boggavarapuabhi",
  linkedin: "https://linkedin.com/in/hemanth-boggavarapu",
  location: "Jersey City, NJ",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  "Frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Responsive UI",
  ],
  "Backend & Data": [
    "Node.js",
    "Express",
    "Python",
    "REST APIs",
    "PostgreSQL",
    "Supabase",
  ],
  "AI & Analytics": [
    "OpenAI GPT",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Prompt Engineering",
    "Time-Series Forecasting",
  ],
  "Tools & Cloud": [
    "Azure",
    "Git & CI/CD",
    "Tableau",
    "Power BI",
    "Pandas",
    "OpenCV",
  ],
};

export const experiences = [
  {
    company: "Dhyanahitha",
    role: "Machine Learning Intern",
    period: "Jun 2022 — Jul 2022",
    location: "India",
    highlights: [
      "Completed intensive hands-on training in Machine Learning with Python, covering data preprocessing, model development, and hyperparameter tuning techniques",
      "Contributed to team-based ML project planning and strategic implementation discussions, bridging technical execution with business outcomes",
      "Collaborated using Git-based version-controlled workflows and rigorous code-review practices across cross-functional teams",
    ],
  },
];

export const education = [
  {
    degree: "Master of Business Administration",
    major: "Business Analytics",
    school: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "Sept 2023 — May 2025",
  },
  {
    degree: "Bachelor of Technology",
    major: "Computer Science",
    school: "GITAM University",
    location: "Hyderabad, India",
    period: "Aug 2019 — May 2023",
  },
];

export const certifications = [
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg", date: "April 2024" },
  { name: "Agile with Atlassian Jira", issuer: "Atlassian University", date: "November 2022" },
  { name: "Database Management Essentials", issuer: "University of Colorado System", date: "November 2021" },
];

export const projects = [
  {
    title: "Book Recommendation System Using SVD",
    tagline: "AI-powered reading, personalized.",
    problem:
      "Readers are overwhelmed by millions of books. Traditional recommendation systems lack personalization and interpretability — users get suggestions but never understand why a book was recommended.",
    solution:
      "Built a web-based recommendation engine using Singular Value Decomposition on the Book-Crossing dataset (1.1M+ ratings). Integrated a Gradio interface for real-time input and GPT-3.5 to generate human-readable explanations for every recommendation.",
    techStack: ["Python", "Surprise Library", "SVD", "Gradio", "OpenAI GPT-3.5", "REST APIs"],
    impact: [
      "RMSE of 1.6374 on 1.1M+ ratings",
      "Real-time AI-explained recommendations",
      "Prompt-engineered GPT responses for clarity",
    ],
    gradient: "from-indigo-500 to-purple-600",
    period: "Apr 2025 — May 2025",
    institution: "NYIT Manhattan",
  },
  {
    title: "Cryptocurrency Price Prediction",
    tagline: "ML-driven market intelligence.",
    problem:
      "Crypto markets are volatile and sentiment-driven. Investors need data-backed insights, not guesses. Traditional forecasting models fail to account for social sentiment and rapid market shifts.",
    solution:
      "Developed a machine learning forecasting model combining time-series analysis with sentiment analysis to deliver actionable investment insights. Built with TensorFlow/Keras, exposed via REST APIs, and connected to frontend dashboards for real-time visualization.",
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "REST APIs", "Git"],
    impact: [
      "Actionable investment insights from ML",
      "Sentiment + price trend correlation",
      "Full-stack: model to dashboard pipeline",
    ],
    gradient: "from-cyan-500 to-blue-600",
    period: "Mar 2023 — May 2023",
    institution: "GITAM Hyderabad",
  },
];

export const mindsetItems = [
  {
    icon: "product",
    title: "Data-Driven Decisions",
    description:
      "I don't build on assumptions — I validate with data. Whether it's A/B testing a feature or analyzing KPI metrics, every decision I make is grounded in evidence and user behavior.",
  },
  {
    icon: "speed",
    title: "Bridge Builder",
    description:
      "I sit at the intersection of business and technology. With an MBA in Analytics and a B.Tech in CS, I translate complex technical capabilities into business impact — and vice versa.",
  },
  {
    icon: "quality",
    title: "Ship with Craft",
    description:
      "Clean code, thoughtful architecture, and attention to detail aren't optional — they're the baseline. I write code that's readable, maintainable, and built to last.",
  },
  {
    icon: "ownership",
    title: "End-to-End Ownership",
    description:
      "From data pipeline to polished UI. I own the full stack because great products don't have seams. I gather requirements, build the solution, and measure the outcome.",
  },
];

export const buildingItems = [
  {
    emoji: "🧠",
    title: "AI-Powered Applications",
    description: "Exploring how LLMs and prompt engineering can create intelligent, user-facing products — beyond simple chatbots.",
  },
  {
    emoji: "📊",
    title: "Analytics Engineering",
    description: "Building data pipelines and dashboards that turn raw data into clear, actionable business insights at scale.",
  },
  {
    emoji: "⚡",
    title: "Full Stack Products",
    description: "Shipping end-to-end web apps with Next.js, Supabase, and modern tooling — from idea to deployment.",
  },
];

export const achievements = [
  { metric: "1.1M+", label: "Ratings Processed" },
  { metric: "MBA", label: "Business Analytics" },
  { metric: "B.Tech", label: "Computer Science" },
  { metric: "3", label: "Certifications" },
];
