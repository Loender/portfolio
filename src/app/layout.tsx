import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksii - Software Developer",
  description: "Welcome to my portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
