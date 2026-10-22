import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import TerminalShell from "@/components/terminal/TerminalShell";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "billvo@portfolio:~$",
  description: "Bill Vo — software engineer. A terminal-flavored portfolio.",
  icons: { icon: "/ubc-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <TerminalShell>{children}</TerminalShell>
      </body>
    </html>
  );
}
