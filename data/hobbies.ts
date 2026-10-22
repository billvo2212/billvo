// each hobby renders as a "file" — the preview is what shows when hovered/opened.
export type Hobby = {
  filename: string;
  size: string; // fake file size for flavor
  title: string;
  body: string; // multi-paragraph OK — markdown-ish
};

export const hobbies: Hobby[] = [
  {
    filename: "coffee.md",
    size: "4.2K",
    title: "Coffee",
    body: `Coffee to me is like gas to cars you know, ... I'm not addicted to it, ... it just ... yeh`,
  },
  {
    filename: "games.txt",
    size: "7.1K",
    title: "Games",
    body: `Mostly just League.`,
  },
  {
    filename: "music.m3u",
    size: "128B",
    title: "Music",
    body: `Shout out to Post Malone, Kendrick Lamar, B-ray, HIEUTHUHAI, MCK (and many more) to keep my brain "sane".`,
  },
  {
    filename: "cooking.recipe",
    size: "2.4K",
    title: "Cooking",
    body: `Mostly Vietnamese food dishes. Trying to learn how to make bread that doesn't come out like a brick.`,
  },
  {
    filename: "running.gpx",
    size: "9.8K",
    title: "Running",
    body: `They said CS student should touch grass. yk yk.`,
  },
  {
    filename: "photography.raw",
    size: "22M",
    title: "Photography",
    body: `Take a snapshot whenever I feel good so that can re-visit it in memories. See /photos.`,
  },
];
