export type Role = {
  company: string;
  title: string;
  period: string;
  commit: string; // fake commit sha
  summary: string;
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "WhiteSpace Inc.",
    title: "Software Engineer Intern",
    period: "2024",
    commit: "a1f3c82",
    summary:
      "Shipped web app features in React + Node.js. Trained PaddleOCR models to improve accuracy on form extraction.",
    tags: ["React", "Node.js", "PaddleOCR", "Python"],
  },
  {
    company: "UBC Okanagan",
    title: "Summer Student Software Developer",
    period: "2023",
    commit: "7e9d012",
    summary:
      "Worked with a professor to build a TypeScript web app helping students plan their degrees.",
    tags: ["TypeScript", "React"],
  },
];

export const education = [
  {
    school: "The University of British Columbia (Okanagan)",
    degree: "B.Sc. Computer Science",
    period: "2021 – 2025",
    note: "Database Web Dev Award · side-questing in data engineering",
  },
];
