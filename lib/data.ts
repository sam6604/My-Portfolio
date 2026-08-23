export const profile = {
  name: "Sai Samanvith S",
  role: "Software Engineer",
  tagline: "Generative AI systems, RAG pipelines, and full-stack products.",
  bio: "Builds AI-powered applications and scalable backend systems. Comfortable across the stack — Python and FastAPI on one end, React and TypeScript on the other — with a focus on shipping software that solves a real problem, not just a demo.",
  email: "iamsamanvith@gmail.com",
  github: "https://github.com/sam6604",
  githubLabel: "github.com/sam6604",
  linkedin: "https://linkedin.com/in/samanvith",
  linkedinLabel: "linkedin.com/in/samanvith",
};

export type Project = {
  year: string;
  name: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    year: "2026",
    name: "Conversational AI Voice Agent",
    description:
      "Real-time AI voice assistant with speech-to-text input and AI-generated responses, backed by WebSocket streaming.",
    stack: ["FastAPI", "WebSockets", "AssemblyAI", "JavaScript"],
  },
  {
    year: "2025",
    name: "AI Resume Analyzer",
    description:
      "AI-based resume analyzer that extracts content from a PDF and returns an ATS score with recommendations.",
    stack: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Puter.js"],
  },
  {
    year: "2025",
    name: "Cadence HR — AI-Powered HR Automation",
    description:
      "AI-powered HR automation platform for timesheets, leave, and invoices, with automated reminders across the workflow.",
    stack: ["Express.js", "MongoDB", "AI APIs"],
  },
  {
    year: "2025",
    name: "Qoollege",
    description:
      "Full-stack web application with responsive UI, backend integration, authentication, and database management.",
    stack: ["React.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Better Auth"],
  },
  {
    year: "2024",
    name: "AI-Based Colorectal Cancer Grading",
    description:
      "CNN-based deep learning model for colorectal cancer histopathology image classification, aiding medical imaging with AI.",
    stack: ["TensorFlow/Keras", "OpenCV", "CNN", "Scikit-learn"],
  },
];

export type Experience = {
  role: string;
  org: string;
  mode: string;
  start: string;
  end: string;
  tools: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Generative AI Engineer Intern",
    org: "Leo Does IT Inc",
    mode: "Hybrid",
    start: "Apr 2026",
    end: "Present",
    tools: "Ollama, Llama 3, Node.js, pgvector, Cloudinary",
    bullets: [
      "Developed and deployed generative AI chatbot apps using Ollama, Llama, Node.js, PostgreSQL, and pgvector to build RAG capabilities, enabling context-aware responses.",
      "Implemented a scalable backend with PM2, integrated Cloudinary for media handling, and tuned the LLM for production-ready AI implementations.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Vedteq",
    mode: "Remote",
    start: "Dec 2025",
    end: "Feb 2026",
    tools: "React.js, TypeScript, Drizzle ORM, NeonDB, Better Auth",
    bullets: [
      "Contributed to a live web app in production, supporting the design and implementation of new features.",
      "Focused on UI and client-side coding with React and TypeScript, prioritizing a well-planned user experience.",
      "Assisted with backend integration and database work using Drizzle ORM, NeonDB, and authentication.",
    ],
  },
  {
    role: "Data Analysis Intern",
    org: "Leo Does IT Inc",
    mode: "Onsite",
    start: "Jun 2025",
    end: "Jul 2025",
    tools: "Excel, SQL, Python, Power BI",
    bullets: [
      "Built data pipelines using Python and SQL for data collection, and automated Power BI report generation.",
      "Analyzed user behavior and system performance data to produce actionable insights for engineering teams.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"] },
  { group: "AI / LLM", items: ["Ollama", "Llama 3", "OpenAI API", "RAG", "Prompt Engineering"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "pgvector", "NeonDB"] },
];

export const tickerSkills = [
  "Python", "TypeScript", "React", "Next.js", "FastAPI", "Node.js",
  "Ollama", "Llama 3", "RAG", "OpenAI API", "PostgreSQL", "pgvector",
];

export type Certification = {
  name: string;
  issuer: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    name: "Vision AI Hackathon — Winner",
    issuer: "Vision AI Hackathon",
    description:
      "Developed an AI-powered system for intelligent multi-format timesheet processing and automated work-hour calculation.",
  },
  {
    name: "Software Engineer Certification",
    issuer: "HackerRank",
    description:
      "Cleared assessments in problem-solving, SQL, and REST APIs, demonstrating core software development skills.",
  },
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    description:
      "300-hour certification covering Python fundamentals, algorithms, data processing, and automation scripting.",
  },
  {
    name: "Introduction to Generative AI Studio",
    issuer: "Google Cloud · Simplilearn SkillUp",
    description: "LLM basics, prompt design, and hands-on use of AI generation tools.",
  },
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    description:
      "LLM concepts, prompt engineering, and applied generative AI tools for automation and real-world use cases.",
  },
];

export const education = {
  degree: "Undergraduate in Data Science",
  school: "Amity University Mumbai",
  start: "Jul 2022",
  end: "Jun 2026",
};
