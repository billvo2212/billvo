export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ScholarDash",
    title: "ScholarDash — Research Funding Intelligence",
    year: "2026",
    blurb: "End-to-end data pipeline for 1,000+ federal research grants. Star schema, 25+ tests, daily Airflow DAG.",
    description:
      "Ingests 1,000+ federal research grants from NSF and NIH APIs into a DuckDB warehouse with dual persistence (database + JSON archive), rate limiting, and per-record quality scoring. Modeled the warehouse as a star schema with 14 dbt models (2 staging, 5 dimensions, 1 fact, 5 marts) and 25+ automated tests covering uniqueness, referential integrity, and value ranges. Orchestrated via Apache Airflow on Docker Compose (4 services) with an 8-task daily DAG, retry logic, and DuckDB single-writer concurrency management.",
    stack: ["Python", "DuckDB", "dbt", "Airflow", "Docker", "Streamlit"],
    highlight: true,
  },
  {
    slug: "flashcard-app",
    title: "Full-Stack Flashcard Web App",
    year: "2024",
    blurb: "Quizlet-style flashcards, dockerized, Agile'd, tested.",
    description:
      "Collaborated with a team of 4 to build a Quizlet-style flashcard web app. Containerized with Docker, CI via GitHub Actions, tests in Jest, APIs tested with Postman. Agile delivery.",
    stack: ["React", "TypeScript", "Tailwind", "Docker", "Node.js", "Express", "MongoDB"],
    link: "https://www.dropbox.com/scl/fi/gloubcfhi6924uerce7y5/COSC310-project-jpbns.mp4?rlkey=fff6j79eh433lxkz2b7f8g7d0&st=g5rq2b6y&dl=0",
    highlight: true,
  },
    {
    slug: "split",
    title: "Split — ██████████",
    year: "2026",
    blurb: "Work in progress. Details are under wraps for now.",
    description: "████████ ██████ ████ ██████████ ███ ████ ████████. ██████ ████ ███████ ██████. [redacted until launch]",
    stack: ["████", "████", "████"],
  },
  {
    slug: "ml-food-waste",
    title: "ML Food Waste Recognition",
    year: "2023",
    blurb: "Image recognition for pantry management. 80% accuracy on realtime item detection.",
    description:
      "Team of 5. Image-detection pantry app that notifies users of near-expiry items and suggests recipes. Used Roboflow + YOLOv8. Flask backend with SQLite. Built a REST API for data manipulation.",
    stack: ["Python", "YOLOv8", "Flask", "SQLite", "Bootstrap"],
    link: "https://devpost.com/software/pantry_sidekick",
  },
  {
    slug: "sneaker-ecommerce",
    title: "Full-Stack Sneaker E-commerce",
    year: "2023",
    blurb: "Won top database web project (>90% score). Heroku + Docker auto-deploy.",
    description:
      "E-commerce app with shopping + admin flows. Deployed on Heroku via Docker. Auto-deploy on main branch push. Won the Database Web Development Award.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
    link: "https://docs.google.com/document/d/1no1-ON6vnDkrIJMDnQANWzKcdUVZYkYyTeE8BzDpHl8/edit?usp=sharing",
  },
  
];
