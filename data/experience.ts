export type Role = {
  company: string;
  title: string;
  period: string;
  commit: string; // fake commit sha
  bullets: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Safari AI",
    title: "Software Engineer Intern",
    period: "Jan 2026 – Present",
    commit: "f4a9d21",
    bullets: [
      "Proposed and built Pipeline Tracker, an internal GTM automation (React, FastAPI, HubSpot CRM API, S3) that replaced manual sales-pipeline reporting with a change-data-capture layer producing analyst-ready data.",
      "Delivered ahead of schedule an executive-summary feature I proposed beyond assigned scope, adopted by customers who hadn't requested it.",
      "Moved the NFC-sticker redirect engine to AWS Lambda behind API Gateway (instead of an always-on EC2 instance), cutting compute cost and the engineering overhead of maintaining EC2.",
      "Chose FastAPI with the lightweight Strands Agents SDK (good for per-conversation session persistence in PostgreSQL) over a full agent framework like LangChain: our flows are fixed sequences, so deterministic Python routes the workflow while the model only narrates results.",
    ],
    tags: ["React", "FastAPI", "HubSpot CRM", "AWS Services", "PostgreSQL", "LLM", "AI Agents"],
  },
  {
    company: "UBC",
    title: "VLM Research Assistant",
    period: "Sep 2025 – Apr 2026",
    commit: "b2c5e37",
    bullets: [
      "Conducting research on fine-tuning and evaluation of Remote Sensing VLMs — RS-LLaVA, RSGPT, RemoteCLIP — on datasets like RSICD, UCM Captions, and RSVQA.",
      "Evaluating outputs on BLEU-1/2/3/4, METEOR, ROUGE-L, and CIDEr.",
    ],
    tags: ["PyTorch", "VLMs", "Fine-tuning", "Remote Sensing", "Evaluation"],
  },
  {
    company: "UBC",
    title: "Software Developer Intern",
    period: "Sep 2025 – Dec 2025",
    commit: "a1f3c82",
    bullets: [
      "Developed an MCP tool (Python, FastAPI) that translates natural-language queries into Elasticsearch DSL, integrating open-source models like Qwen-2.5 and TinyLlama for keyword extraction and query generation — enabling STASER Lab researchers to access data via NLQ.",
      "Designed and tested modular pipelines connecting the MCP client to Elasticsearch indices, and implemented evaluation scripts for semantic correctness and retrieval accuracy.",
    ],
    tags: ["Python", "FastAPI", "Elasticsearch", "MCP", "LLM"],
  },
  {
    company: "WhiteSpace Inc.",
    title: "Software Engineer Intern",
    period: "2024",
    commit: "7e9d012",
    bullets: [
      "Shipped web app features in React and Node.js.",
      "Trained PaddleOCR models to improve accuracy on form extraction.",
    ],
    tags: ["React", "Node.js", "PaddleOCR", "Python"],
  },
  {
    company: "UBC",
    title: "Summer Student Software Developer",
    period: "2023",
    commit: "3d8b4e1",
    bullets: [
      "Worked with a professor to build a TypeScript web app helping students plan their degrees.",
    ],
    tags: ["TypeScript", "React"],
  },
];

export const education = [
  {
    school: "The University of British Columbia",
    degree: "B.Sc. Computer Science (Honours)",
    period: "Sep 2023 – Present",
    note: "Coursework: DSA, Data Analysis, Data Processing, Software Engineering, ML/DL/AI, Parallel Computing, OS, Networking",
  },
];
