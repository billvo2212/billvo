// TODO: swap these out for things that are actually true about you.
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
    body: `Pour-over, mostly. I've been trying to figure out what makes a good light roast — turns out the answer is \`$EXPENSIVE_BEANS\` and water temperature discipline.

If you have cafe recs in Vancouver, send them.`,
  },
  {
    filename: "games.txt",
    size: "7.1K",
    title: "Games",
    body: `Mostly single-player story games — I don't have the reflexes for competitive FPS. Currently playing: TODO.

All-time: Hollow Knight, Celeste, Outer Wilds. I will not shut up about Outer Wilds.`,
  },
  {
    filename: "music.m3u",
    size: "128B",
    title: "Music",
    body: `Lo-fi for working, indie rock for walking, Vietnamese ballads when I'm feeling homesick.

I made a playlist. I will put it here eventually.`,
  },
  {
    filename: "cooking.recipe",
    size: "2.4K",
    title: "Cooking",
    body: `Mostly Vietnamese food — pho, bun bo hue, com tam. Trying to learn how to make bread that doesn't come out like a brick.

TODO: add my dad's pho broth recipe here (if he lets me).`,
  },
  {
    filename: "running.gpx",
    size: "9.8K",
    title: "Running",
    body: `Half-marathon-ish distances when I'm being honest with myself. Mostly along the seawall.`,
  },
  {
    filename: "photography.raw",
    size: "22M",
    title: "Photography",
    body: `Film cameras because the delay forces patience. See /photos.`,
  },
];
