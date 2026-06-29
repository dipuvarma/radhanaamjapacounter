import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { JapaStateProvider } from "@/context/JapaStateContext";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Radhanaam Japa Counter",
  description:
    "Track your daily chanting of Radhe Radhe — a devotional Japa counter for devotees.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-lighter-yellow)">
        <Navbar />
        <JapaStateProvider>{children}</JapaStateProvider>
        <Footer />
      </body>
    </html>
  );
}
