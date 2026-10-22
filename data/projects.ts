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
  {
    slug: "sphere-platformer",
    title: "Sphere Platformer Game",
    year: "2022",
    blurb: "A simple Unity game to learn physics + C#.",
    description:
      "Built a simple platformer game in Unity using built-in physics. Mostly an excuse to learn C# and Unity's component model.",
    stack: ["Unity", "C#"],
    repo: "https://github.com/billvo2212/SpherePlatformerGame",
  },
];
