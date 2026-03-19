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
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Mindset", href: "#mindset" },
  { label: "Contact", href: "#contact" },
];

export const journeyChapters = [
  {
    id: "school",
    year: "2005 — 2017",
    era: "The Foundation",
    title: "Where it all began",
    location: "India",
    emoji: "🏫",
    color: "from-amber-500 to-orange-600",
    accentColor: "#f59e0b",
    description:
      "Growing up in India, I was the kid who took apart every gadget in the house just to see how it worked. School wasn't just about grades — it was where I first discovered that I think differently. Math felt like a puzzle game. Science was magic with rules.",
    milestone: "Built my first website at 15 — a cricket score tracker in HTML that my friends actually used.",
    image: "🇮🇳",
    // Indian village / rural India — Photo by Loren Joseph on Unsplash
    photo: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80&fit=crop",
    photoCredit: "Loren Joseph",
  },
  {
    id: "intermediate",
    year: "2017 — 2019",
    era: "The Spark",
    title: "Discovering the code",
    location: "India",
    emoji: "💡",
    color: "from-rose-500 to-pink-600",
    accentColor: "#f43f5e",
    description:
      "Intermediate was when programming stopped being a hobby and became an obsession. I stayed up late writing Python scripts, automating everything I could. I realized I didn't want to just use technology — I wanted to build it.",
    milestone: "Wrote my first Python automation script. Placed in regional coding competitions. Decided: Computer Science is the path.",
    image: "💻",
    // Coding / programming setup — Photo by Clément Hélardot on Unsplash
    photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&fit=crop",
    photoCredit: "Clément Hélardot",
  },
  {
    id: "btech",
    year: "2019 — 2023",
    era: "The Engineering Years",
    title: "Building the engineer",
    location: "GITAM University, Hyderabad",
    emoji: "🎓",
    color: "from-cyan-500 to-blue-600",
    accentColor: "#06b6d4",
    description:
      "Four years of intense engineering at GITAM University. I went deep — data structures, algorithms, machine learning, databases. But I didn't just study theory. I built real projects, contributed to teams, and developed a forecasting model for cryptocurrency prices using TensorFlow and Keras.",
    milestone: "B.Tech in Computer Science. Built a crypto price prediction model. Completed ML internship at Dhyanahitha.",
    image: "🏗️",
    // Charminar, Hyderabad — Photo by Sunny Suman on Unsplash
    photo: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=1200&q=80&fit=crop",
    photoCredit: "Sunny Suman",
    subEvents: [
      {
        year: "2022",
        title: "ML Internship — Dhyanahitha",
        desc: "Hands-on machine learning with Python: data preprocessing, model development, hyperparameter tuning, and Git-based collaboration.",
      },
      {
        year: "2023",
        title: "Crypto Price Prediction",
        desc: "Built ML forecasting model with TensorFlow, Keras, and Pandas. Sentiment analysis + time-series predictions via REST APIs.",
      },
    ],
  },
  {
    id: "nyc",
    year: "2023 — 2025",
    era: "The New York Chapter",
    title: "Leveling up in Manhattan",
    location: "NYIT, Manhattan, New York",
    emoji: "🗽",
    color: "from-indigo-500 to-purple-600",
    accentColor: "#6366f1",
    description:
      "Moving to New York wasn't just changing cities — it was changing the scale of my ambition. Pursuing an MBA in Business Analytics at NYIT Manhattan, I learned to think like a strategist while building like an engineer. Data visualization, statistical analysis, A/B testing, KPI metrics — I added the business layer to my engineering core.",
    milestone: "MBA in Business Analytics from NYIT. Built AI-powered book recommendation system with SVD + GPT-3.5. Bloomberg certified.",
    image: "🌆",
    // Manhattan skyline at night — Photo by Zoshua Colah on Unsplash
    photo: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80&fit=crop",
    photoCredit: "Zoshua Colah",
    subEvents: [
      {
        year: "2024",
        title: "Bloomberg Market Concepts",
        desc: "Certified in financial markets, economics, and data-driven investment analysis.",
      },
      {
        year: "2025",
        title: "Book Recommendation System",
        desc: "SVD-based engine processing 1.1M+ ratings with Gradio UI and GPT-3.5 explainability. RMSE: 1.6374.",
      },
    ],
  },
  {
    id: "now",
    year: "2025 — Present",
    era: "The Builder",
    title: "What I'm building now",
    location: "Jersey City, NJ",
    emoji: "🚀",
    color: "from-violet-500 to-fuchsia-600",
    accentColor: "#8b5cf6",
    description:
      "Today, I stand at the intersection of engineering, data science, and business. I'm not just looking for a job — I'm looking for the right problem to solve. I build full-stack applications with AI at the core, and I bring a unique combination of technical depth and business acumen that most developers don't have.",
    milestone: "Actively building AI-powered applications. Seeking high-impact roles where I can ship products that matter.",
    image: "⚡",
    // Jersey City skyline from waterfront — Photo by Joey Pedras on Unsplash
    photo: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=1200&q=80&fit=crop",
    photoCredit: "Joey Pedras",
  },
];

export const skills = {
  "Languages": [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "SQL", level: 90 },
    { name: "C", level: 70 },
  ],
  "Frontend": [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Responsive Design", level: 85 },
  ],
  "Backend & Data": [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "Supabase", level: 75 },
    { name: "REST APIs", level: 90 },
  ],
  "AI & ML": [
    { name: "OpenAI GPT", level: 85 },
    { name: "TensorFlow", level: 75 },
    { name: "Keras", level: 75 },
    { name: "Scikit-learn", level: 80 },
    { name: "Prompt Engineering", level: 85 },
  ],
  "Analytics & Tools": [
    { name: "Tableau", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Pandas", level: 85 },
    { name: "Git & CI/CD", level: 85 },
    { name: "Azure", level: 70 },
  ],
};

export const projects = [
  {
    title: "Book Recommendation System",
    tagline: "AI-powered reading, personalized and explained.",
    problem:
      "Readers drown in millions of titles. Traditional recommendation engines are black boxes — they suggest books but never explain why, killing user trust and engagement.",
    solution:
      "Engineered an SVD-based recommendation engine on the Book-Crossing dataset (1.1M+ ratings). Built a Gradio interface for real-time interaction and integrated GPT-3.5 to generate human-readable explanations for every recommendation using prompt engineering.",
    techStack: ["Python", "SVD / Surprise", "Gradio", "OpenAI GPT-3.5", "REST APIs", "Prompt Engineering"],
    impact: [
      "1.1M+ ratings processed",
      "RMSE of 1.6374",
      "AI-explained recommendations",
    ],
    gradient: "from-indigo-500 to-purple-600",
    period: "Apr 2025 — May 2025",
    institution: "NYIT Manhattan",
  },
  {
    title: "Cryptocurrency Price Prediction",
    tagline: "ML-driven market intelligence for smarter investing.",
    problem:
      "Crypto markets move on sentiment, not just data. Traditional models miss the human factor — social media buzz, fear, greed. Investors need predictions that account for both numbers and noise.",
    solution:
      "Built a hybrid forecasting model combining time-series analysis with sentiment analysis. Developed with TensorFlow, Keras, and Pandas for model training. Exposed predictions through REST API endpoints integrated with interactive frontend dashboards.",
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "REST APIs", "Git Workflows"],
    impact: [
      "Sentiment + price correlation",
      "Real-time dashboard predictions",
      "Full ML pipeline: data to deploy",
    ],
    gradient: "from-cyan-500 to-blue-600",
    period: "Mar 2023 — May 2023",
    institution: "GITAM Hyderabad",
  },
];

export const mindsetItems = [
  {
    icon: "bridge",
    title: "Business × Engineering",
    description:
      "MBA + B.Tech isn't just two degrees — it's a superpower. I translate boardroom strategy into production code and engineering constraints into business language.",
  },
  {
    icon: "data",
    title: "Data-Driven Everything",
    description:
      "I don't guess. I measure. From A/B testing to KPI dashboards, every decision I make is backed by evidence. Intuition is good. Intuition plus data is unstoppable.",
  },
  {
    icon: "craft",
    title: "Craft Over Shortcuts",
    description:
      "Clean architecture, thoughtful naming, comprehensive tests. I write code that my future self (and teammates) will thank me for. Quality isn't a phase — it's the default.",
  },
  {
    icon: "ship",
    title: "Ship, Learn, Iterate",
    description:
      "Perfect is the enemy of shipped. I prototype fast, gather feedback faster, and iterate until the product clicks. The best architecture is the one that actually launches.",
  },
];

export const certifications = [
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg", date: "April 2024", emoji: "📈" },
  { name: "Agile with Atlassian Jira", issuer: "Atlassian University", date: "Nov 2022", emoji: "🏃" },
  { name: "Database Management Essentials", issuer: "Univ. of Colorado", date: "Nov 2021", emoji: "🗄️" },
];

export const achievements = [
  { metric: "1.1M+", label: "Ratings Processed", icon: "📊" },
  { metric: "2", label: "Countries Lived In", icon: "🌍" },
  { metric: "3", label: "Certifications", icon: "🏆" },
  { metric: "∞", label: "Curiosity", icon: "🧠" },
];
