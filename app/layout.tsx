import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Engineer & Builder",
  description:
    "Software engineer focused on mobile products, useful systems, and the details that make them hold up in the real world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

