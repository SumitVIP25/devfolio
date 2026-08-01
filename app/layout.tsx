import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "%s | Sumit Prashant",
    template: "%s | Sumit Prashant",
  },
  description:
    "Frontend Developer skilled in React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, and responsive web development. Explore my projects, experience, and portfolio.",
  keywords: [
    "Sumit Prashant",
    "Frontend Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Development",
    "Portfolio",
    "Web Developer",
  ],
  authors: [
    {
      name: "Sumit Prashant",
      url: "devfolio-sigma-six.vercel.app",
    },
  ],
  openGraph: {
    title: "Sumit Prashant | Frontend Developer",
    description:
      "Frontend Developer skilled in React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, and responsive web development. Explore my projects, experience, and portfolio.",
    url: "devfolio-sigma-six.vercel.app",
    siteName: "Sumit Prashant DevFolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sumit Prashant Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Prashant | Frontend Developer",
    description:
      "Frontend Developer skilled in React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, and responsive web development. Explore my projects, experience, and portfolio.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
