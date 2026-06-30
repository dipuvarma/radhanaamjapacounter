"use client";

import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { BsThreadsFill } from "react-icons/bs";

const Footer = () => {
  const footerNavigateLinks = [
    {
      name: "Home",
      pathUrl: "/",
    },
    {
      name: "Statistics",
      pathUrl: "/statistics",
    },
    {
      name: "Leaderboard",
      pathUrl: "/leaderboard",
    },
    {
      name: "Mantra",
      pathUrl: "/mantra",
    },
  ];

  const devotionLinks = [
    {
      name: "Om Namah Shivaya",
      pathUrl: "/mantra/om-namah-shivaya",
    },
    {
      name: "Om Gam Ganapataye Namah",
      pathUrl: "/mantra/om-gam-ganapataye-namah",
    },
    {
      name: "Om Ham Hanumate Namah",
      pathUrl: "/mantra/om-ham-hanumate-namah",
    },
    {
      name: "Hare Krishna",
      pathUrl: "/mantra/hare-krishna",
    },
    {
      name: "Jai Shri Ram",
      pathUrl: "/mantra/jai-shri-ram",
    },
    {
      name: "Radhe Radhe",
      pathUrl: "/",
    },
  ];

  const legalPages = [
    {
      name: "About",
      pathUrl: "/about",
    },
    {
      name: "Privay & Policy",
      pathUrl: "/privacy-policy",
    },
    {
      name: "Contact Us",
      pathUrl: "/contact-us",
    },
    {
      name: "Disclaimer",
      pathUrl: "/disclaimer",
    },
  ];

  return (
    <footer className="w-full bg-[#2D0A00] px-6 pt-12 pb-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Logo + Description */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F37420] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">📿</span>
              </div>
              <span className="text-white font-bold text-lg">
                Radha Naam Japa
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Radha Naam Japa — Chant with Devotion.
              <br />
              A sacred space for daily japa sadhana and
              <br />
              Radha Krishna bhakti.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <IoLogoLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <BsInstagram />
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <FaSquareXTwitter />
              </a>

              {/* Youtube */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <IoLogoYoutube />
              </a>

              {/* Threads */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <BsThreadsFill />
              </a>
            </div>
          </div>

          {/* Navigate Links */}
          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerNavigateLinks.map(({ name, pathUrl }) => (
                <li key={name}>
                  <Link
                    href={pathUrl}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devotion Links */}
          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">
              Devotion
            </h4>
            <ul className="space-y-3">
              {devotionLinks.map(({ name, pathUrl }) => (
                <li key={name}>
                  <Link
                    href={pathUrl}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {legalPages.map(({ name, pathUrl }) => (
                <li key={name}>
                  <Link
                    href={pathUrl}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-3">
          <p className="text-white/30 text-xs">
            © 2025 Radha Naam Japa. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Made with <span className="text-[#F37420]">♥</span> for Radha Bhakts
            · Jai Shri Radhe!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
