import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import TerminalShell from "@/components/terminal/TerminalShell";
import { profile } from "@/data/profile";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://billvvo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "billvo@portfolio:~$",
    template: "%s · billvo",
  },
  description: `${profile.name} — ${profile.tagline}. A terminal-flavored portfolio.`,
  keywords: [
    "Bill Vo",
    "billvo",
    "software engineer",
    "data engineering",
    "portfolio",
    "UBC",
    "Safari AI",
    "Vancouver",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "billvo",
    title: `${profile.name} — ${profile.tagline}`,
    description: "A terminal-flavored portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.tagline}`,
    description: "A terminal-flavored portfolio.",
    creator: "@billvo2212",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: profile.location },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <TerminalShell>{children}</TerminalShell>
        <Analytics />
      </body>
    </html>
  );
}
