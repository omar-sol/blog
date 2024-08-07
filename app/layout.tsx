import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/sidebar";
import { Analytics } from "@vercel/analytics/react";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omarsolano.com"),
  title: {
    default: "Omar Solano",
    template: "%s | Omar Solano",
  },
  description: "Machine Learning Engineer, writer, and creator.",
  openGraph: {
    title: "Omar Solano",
    description: "Machine Learning Engineer, writer, and creator.",
    url: "https://omarsolano.com",
    siteName: "Omar Solano",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: "Omar Solano",
  //   card: "summary_large_image",
  // },
  // verification: {
  //   google: "",
  //   yandex: "",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]"
        // graphik.variable
      )}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <div className="flex-auto flex flex-row md:justify-end">
            <Navbar />
          </div> */}
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
