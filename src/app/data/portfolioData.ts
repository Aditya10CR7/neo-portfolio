// Centralized portfolio data for Aditya Pandiarajan
// Source: resume.tex and linkedin.md

import profileImageUrl from "../../../image/about-profile.jpg";

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Aditya Pandiarajan",
    headline: "MSCS at USC || AI Systems Engineer || LLM & Backend Infrastructure",
    bio: "Computer Science graduate from the University of Southern California focused on building production-grade AI systems and scalable backend infrastructure.",
    email: "adityapandiarajan7@gmail.com",
    phone: "(213) 812-4871",
    location: "Los Angeles, CA",
    profileImage: profileImageUrl,
  },

  // About
  about: {
    paragraphs: [
      "I am a Computer Science graduate from the University of Southern California focused on building production-grade AI systems and scalable backend infrastructure. My work spans applied AI, distributed systems, cloud engineering, LLM-powered applications, RAG pipelines, multimodal AI systems, and backend platforms designed for real-world constraints such as latency, reliability, cost, and observability.",
      "At KVS Technologies, USC Information Sciences Institute, and IIT Roorkee, I have worked on multimodal LLM pipelines, real-time data processing workflows, agent-based systems, retrieval pipelines, and evaluation frameworks for measuring faithfulness, retrieval accuracy, and system latency. I enjoy working across the full stack of AI systems, from backend APIs and data pipelines to AWS/GCP deployment, and I am seeking opportunities in Applied AI Engineering, LLM Systems, and Backend Engineering."
    ],
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/aditya-pandiarajan7/",
    github: "https://github.com/Aditya10CR7",
    googleScholar: "https://scholar.google.com/citations?user=UlKY2ZQAAAAJ&hl=en",
    email: "adityapandiarajan7@gmail.com",
  },

  // External profiles
  externalProfiles: {
    leetcode: {
      username: "adityapandiarajan7",
      profileUrl: "https://leetcode.com/u/adityapandiarajan7/",
      totalSolved: "711",
      easySolved: "221",
      mediumSolved: "410",
      hardSolved: "80",
      lastUpdated: "Stats updated manually.",
      activityLabel: "Static 1-Year Activity Preview",
      activityPreview: {
        days: 365,
        counts: [0, 1, 0, 2, 1, 0, 3, 0, 2, 1, 0, 1, 4, 0, 2, 0, 1, 3, 1, 0, 2],
      },
    }
  },

  // Resume Download
  resume: {
    url: "/resume.pdf",
    label: "Resume",
  },

  // Education
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Southern California",
      location: "Los Angeles, CA",
      startDate: "Aug 2024",
      endDate: "May 2026",
      gpa: "3.6/4.0",
      coursework: ["Advance Algorithms", "Database Management", "Information Retrieval & Web Search Engine"],
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "SRM University",
      location: "Chennai, IN",
      startDate: "Aug 2020",
      endDate: "May 2024",
      gpa: "9.4/10.0",
      coursework: ["Operating Systems", "Computer Architecture", "AI & Applications in Cloud", "Data Centric Networking"],
    },
  ],

  // Experience
  experience: [
    {
      title: "Software Engineering Intern, Applied AI Systems",
      company: "KVS Technologies",
      location: "Marietta, GA",
      startDate: "Jul 2025",
      endDate: "Present",
      highlights: [
        "Translated client demo requirements into a real-time image-to-insight workflow, enabling a new AI-powered feature through FastAPI, Claude vision models, and SerpAPI-based retrieval.",
        "Processed 10K+ product workflow events/day by building a Kafka and Redis Streams event pipeline for user activity tracking, metadata synchronization, and asynchronous AI job execution.",
        "Reduced chatbot inference costs by 30% while stabilizing p95 latency by implementing prompt-level caching, complexity-based model routing, and provider fallback tracing.",
      ],
    },
    {
      title: "Backend Engineering Intern, Agentic Systems",
      company: "USC Information Sciences Institute",
      location: "Los Angeles, CA",
      startDate: "Nov 2024",
      endDate: "Jun 2025",
      highlights: [
        "Built a LangGraph-based human-in-the-loop workflow for ad-spend optimization, reducing risky autonomous budget changes by requiring manager approval before executing AI-recommended shifts.",
        "Improved backend throughput by 47% under high-concurrency workloads by optimizing C# async execution and batching PostgreSQL queries to reduce duplicate reads and database contention.",
        "Improved post-launch stability of backend services by containerizing workloads with Docker, adding Kubernetes health checks and rolling updates, and automating releases through CI/CD pipelines.",
      ],
    },
    {
      title: "Founding AI Engineer",
      company: "Quasitek Solutions",
      location: "India · Remote",
      startDate: "May 2022",
      endDate: "May 2024",
      highlights: [
        "Built backend workflows for AI inference, semantic search, document processing, and background task execution.",
        "Optimized APIs with authentication mechanisms, structured logging, error handling, and performance improvements.",
        "Managed Docker-based deployment pipelines and scalable service orchestration for production AI systems.",
      ],
    },
    {
      title: "Software Engineer Intern, AI & Data Systems",
      company: "Indian Institute of Technology, Roorkee",
      location: "Roorkee, India",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      highlights: [
        "Partnered with engineering stakeholders to evaluate fine-tuning versus prompt-based RAG for specification queries, selecting hybrid retrieval after comparing citation traceability and hallucination risk.",
        "Improved frontend update latency by building a TypeScript and Tailwind frontend backed by WebSocket streams, enabling real-time updates from backend processing workflows.",
        "Improved backend integration reliability by designing Node.js REST APIs with schema validation, structured data models, and error handling to reduce malformed workflow requests.",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Arjun Industries",
      location: "Pune District, Maharashtra, India · Remote",
      startDate: "Jan 2023",
      endDate: "May 2023",
      highlights: [
        "Built high-fidelity visual design components using HTML, CSS, and JavaScript under the guidance of the lead designer.",
        "Created site maps, user flows, and wireframes to support user navigation and web application planning.",
        "Collaborated with backend engineers on web application presentations and contributed to intranet application design and development.",
      ],
    },
    {
      title: "SDE Intern",
      company: "Premier Plus - AMG Corporation",
      location: "Pune District, Maharashtra, India · Remote",
      startDate: "Jul 2022",
      endDate: "Oct 2022",
      highlights: [
        "Implemented user-facing features, fixed defects, and refined application code for reliability and performance.",
        "Worked on frontend updates using HTML and CSS for a web-based consumer portal.",
        "Collaborated with technical writers, UI designers, and cross-functional teams on web application development tasks.",
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: "Banking Compliance RAG Evaluator",
      description:
        "Built a Ragas-based evaluation harness for banking policy QA, benchmarking chunk sizes, top-k retrieval, and prompt variants using faithfulness, answer relevancy, context precision, and context recall. Created a golden test set of compliance questions to detect hallucinated answers and weak retrieval paths.",
      technologies: ["Python", "Ragas", "LangChain", "OpenAI", "FAISS"],
      date: "Jan 2026",
      url: "", // TODO: Add project link if available
      impact: "RAG evaluation framework for production compliance QA",
    },
    {
      title: "Secure-Ops: Multi-Tenant HR & Payroll Agent",
      description:
        "Built a multi-tenant HR/payroll agent with JWT auth, RBAC middleware, and tenant-scoped LangGraph tools to enforce role-based access across salary, benefits, and employee-record workflows. Implemented permission guards and PII redaction with role-aware PostgreSQL filters and Presidio.",
      technologies: ["FastAPI", "LangGraph", "PostgreSQL", "JWT", "Presidio"],
      date: "Jan 2026",
      url: "#projects",
      impact: "Multi-tenant agent system with security and compliance",
    },
    {
      title: "Insurance Intake Triage Agent",
      description:
        "Built a FastAPI backend that converts messy commercial insurance intake text into structured JSON for AI-native brokerage workflows. The service uses deterministic regex and rule extraction first, then routes through an LLMExtractor interface with a local no-key mock implementation.",
      technologies: ["FastAPI", "Python", "Pydantic", "Regex", "Pytest"],
      date: "2026",
      url: "https://github.com/Aditya10CR7/insurance-intake-triage-agent",
      impact: "Structured insurance intake extraction for brokerage workflows",
    },
    {
      title: "Kafka Go Pipeline",
      description:
        "Implemented a real-time data streaming pipeline with a Go Kafka producer that fetches external API data and publishes messages to a Kafka topic, plus a consumer that reads messages and uploads JSON payloads to AWS S3.",
      technologies: ["Go", "Kafka", "AWS S3", "Sarama", "AWS SDK"],
      date: "2024",
      url: "https://github.com/Aditya10CR7/kafka-go-pipeline",
      impact: "Real-time Kafka producer and consumer pipeline with S3 storage",
    },
    {
      title: "Unity Game Web Engine: 3D Flight Arena",
      description:
        "Created a Unity project focused on exploring 3D scene navigation, editor workflows, and interactive scene design through the Unity Essentials flight and mural design exercises.",
      technologies: ["Unity", "C#", "3D Scene Design", "Game Development"],
      date: "2024",
      url: "https://github.com/Aditya10CR7/csci526-flight",
      impact: "Unity scene navigation and interactive design project",
    },
  ],

  // Publications
  publications: [
    {
      title: "A Comparative Analysis on Ophthalmology Board-Style Questions",
      venue: "IEEE Nature Publishing Group UK",
      year: "2025",
      url: "", // TODO: Add publication link
    },
    {
      title: "Analysing Migraine Patterns Using Ensemble Learning",
      venue: "IEEE IconDeepCom",
      year: "2024",
      url: "", // TODO: Add publication link
    },
    {
      title: "BlockFund -- Leveraging Escrow and Milestone Algorithm for Secure Crowdfunding",
      venue: "IEEE ICIMIA",
      year: "2023",
      url: "", // TODO: Add publication link
    },
  ],

  // Technical Skills
  skills: {
    languages: ["Python", "Java", "C++", "C#", "Go", "TypeScript", "JavaScript", "SQL"],
    backendApis: ["FastAPI", "Node.js", "ASP.NET Core", "Spring Boot", "REST APIs", "WebSockets"],
    frontendTools: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "WebSockets"],
    aiAgents: ["OpenAI", "Claude", "Gemini", "LangGraph", "LangChain", "RAG", "Prompt Engineering", "Tool Calling"],
    dataMessaging: ["PostgreSQL", "MongoDB", "FAISS", "Kafka", "Redis Streams", "Redis"],
    cloudInfra: ["AWS EC2", "Lambda", "S3", "CloudWatch", "Docker", "Kubernetes", "CI/CD"],
  },

  // Certifications & Awards
  certifications: [
    {
      title: "Merit-Based Scholarship Recipient",
      issuer: "SRM University",
      description: "Awarded to the top 0.1% of students for outstanding academic excellence combined with notable achievements in sports and extra-curricular.",
      date: "", // TODO: Add date if available
    },
    {
      title: "Kavach All-India Hackathon Runner-Up",
      issuer: "Kavach",
      description: "Developed a real-time license plate detection system to automate parking validation and streamline vehicle-based payment workflows.",
      date: "", // TODO: Add date if available
    },
    {
      title: "AI Tutor Hackathon Second Runner-Up",
      issuer: "USC",
      description: "Developed an intelligent tutoring system for all aged-students.",
      date: "", // TODO: Add date if available
    },
  ],

  // Social Proof / Fun Facts
  funFacts: [
    "🚀 Scaling AI systems in production",
    "🤖 Building agentic workflows",
    "⚡ Optimizing LLM inference & costs",
    "☁️ Deploying AI workloads on AWS & GCP",
  "🧠 Designing LLM evaluation frameworks",
    "🔍 RAG & retrieval systems expert",
    "📦 Distributed systems & event streams",
  ],
};

export default portfolioData;
