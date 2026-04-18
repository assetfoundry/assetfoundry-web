import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Foundry | AI Automation & Voice Agents",
  description:
    "Asset Foundry builds production AI systems — intelligent process automation, real-time voice agents, and agentic workflows for government and enterprise. FedRAMP IL5, AWS GovCloud.",
  keywords: [
    "AI automation",
    "voice agents",
    "agentic workflows",
    "AWS GovCloud",
    "FedRAMP",
    "government AI",
    "large language models",
    "LLM",
  ],
  openGraph: {
    title: "Asset Foundry | AI Automation & Voice Agents",
    description:
      "Production AI systems for government and enterprise. FedRAMP IL5 · AWS GovCloud · CAGE 55L75.",
    url: "https://assetfoundry.com",
    siteName: "Asset Foundry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Foundry | AI Automation & Voice Agents",
    description: "Production AI systems for government and enterprise.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
