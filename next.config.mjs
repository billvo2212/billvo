/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },

  // Redirect /resume.pdf to an externally-hosted PDF so you can update your
  // resume without redeploying. Set RESUME_URL in your Vercel project env
  // (and locally in .env.local). See .env.example.
  async redirects() {
    const url = process.env.RESUME_URL;
    if (!url) return [];
    return [
      {
        source: "/resume.pdf",
        destination: url,
        permanent: false, // 307 — browsers won't cache, so updates in Drive are picked up immediately
      },
    ];
  },
};

export default nextConfig;
