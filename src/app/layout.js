import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { JapaStateProvider } from "@/context/JapaStateContext";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://radhanaamjapa.com"),
  title: {
    default: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
    template: "%s | Radha Naam Japa Counter",
  },
  description:
    "Track your daily Radhe Radhe japa with our free online counter. Build chanting streaks, earn points, and join thousands of devotees on the community leaderboard.",
  keywords: [
    "japa counter",
    "radhe radhe",
    "japa mala",
    "chanting tracker",
    "bhakti",
    "radha krishna",
    "mantra counter",
    "japa sadhana",
    "hare krishna",
    "om namah shivaya",
  ],
  authors: [{ name: "Radha Naam Japa" }],
  creator: "Radha Naam Japa",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Radha Naam Japa Counter",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@radhanaamjapa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Radha Naam Japa Counter",
  url: "https://radhanaamjapa.com",
  logo: "https://radhanaamjapa.com/favicon.ico",
  sameAs: [],
  description:
    "A free devotional platform for tracking japa sadhana — Radhe Radhe, Hare Krishna, Om Namah Shivaya and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-(--color-lighter-yellow)">
        <Navbar />
        <JapaStateProvider>{children}</JapaStateProvider>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#FFFDF9",
              color: "#4A1C00",
              border: "1px solid #FDE68A",
              fontFamily: "var(--font-poppins)",
              fontWeight: "600",
            },
          }}
        />
      </body>
    </html>
  );
}
