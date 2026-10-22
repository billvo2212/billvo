// TODO: drop images in /public/photos/*.jpg and update the entries below.
// if an image is missing, the page shows a placeholder tile — that's fine.
export type Photo = {
  src: string;
  location: string;
  date: string;
  camera?: string;
  caption?: string;
};

export const photos: Photo[] = [
  { src: "/photos/01.jpg", location: "Da Nang, Vietnam", date: "2024-07", camera: "Fuji X-T30", caption: "home" },
  { src: "/photos/02.jpg", location: "Vancouver, BC", date: "2024-11", camera: "iPhone 15", caption: "seawall at dusk" },
  { src: "/photos/03.jpg", location: "Kelowna, BC", date: "2023-10", camera: "Fuji X-T30", caption: "last week of fall" },
  { src: "/photos/04.jpg", location: "Hanoi, Vietnam", date: "2024-07", camera: "35mm film", caption: "" },
  { src: "/photos/05.jpg", location: "Banff, AB", date: "2024-03", camera: "iPhone 15", caption: "cold" },
  { src: "/photos/06.jpg", location: "Vancouver, BC", date: "2025-01", camera: "Fuji X-T30", caption: "" },
];
