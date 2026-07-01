import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Choose Your Mantra — Japa Counter for Radhe Radhe, Hare Krishna & More",
  description:
    "Select from sacred Hindu mantras — Radhe Radhe, Hare Krishna, Om Namah Shivaya, Jai Shri Ram, Om Gam Ganapataye Namah, Om Ham Hanumate Namah. Start your japa sadhana online.",
  keywords: [
    "mantra japa counter",
    "radhe radhe counter",
    "hare krishna counter",
    "om namah shivaya counter",
    "jai shri ram counter",
    "ganesh mantra counter",
    "hanuman mantra counter",
    "digital mala counter",
    "online japa tracker",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra" },
  openGraph: {
    title: "Choose Your Mantra — Japa Counter for Radhe Radhe, Hare Krishna & More",
    description:
      "Select from sacred Hindu mantras and start your digital japa practice with our free online counter.",
    url: "https://radhanaamjapa.com/mantra",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/krishna.jfif",
        width: 1200,
        height: 630,
        alt: "Choose Your Mantra for Japa Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Choose Your Mantra — Japa Counter",
    description: "Select from sacred Hindu mantras and start your digital japa practice for free.",
    images: ["/images/krishna.jfif"],
  },
};

const mantras = [
  {
    id: 1,
    name: "Om Gam Ganapataye Namah",
    deity: "Lord Ganesha",
    description:
      "Invoke the remover of obstacles and begin your journey with grace.",
    image: "/images/ganesh.jpg",
    href: "/mantra/om-gam-ganapataye-namah",
    accent: "#F37420",
  },
  {
    id: 2,
    name: "Om Ham Hanumate Namah",
    deity: "Lord Hanuman",
    description:
      "Seek the blessings of the divine devotee for strength and courage.",
    image: "/images/hanuman.jpg",
    href: "/mantra/om-ham-hanumate-namah",
    accent: "#F37420",
  },
  {
    id: 3,
    name: "Hare Krishna Hare Krishna",
    deity: "Lord Krishna",
    description: "Chant the Maha Mantra and immerse yourself in divine bliss.",
    image: "/images/krishna.jfif",
    href: "/mantra/hare-krishna",
    accent: "#F9BB4D",
  },
  {
    id: 4,
    name: "Radhe Radhe",
    deity: "Radha Rani",
    description:
      "Sing the name of Radha Rani and feel her boundless love and grace.",
    image: "/images/radha.jpg",
    href: "/",
    accent: "#F9BB4D",
  },
  {
    id: 5,
    name: "Jai Shri Ram",
    deity: "Lord Ram",
    description: "Chant the name of Shri Ram, the embodiment of righteousness.",
    image: "/images/ram.jfif",
    href: "/mantra/jai-shri-ram",
    accent: "#F37420",
  },
  {
    id: 6,
    name: "Om Namah Shivaya",
    deity: "Lord Shiva",
    description:
      "Bow to Lord Shiva, the supreme being of cosmic consciousness.",
    image: "/images/shivji.png",
    href: "/mantra/om-namah-shivaya",
    accent: "#F9BB4D",
  },
];

const MantraPage = () => {
  return (
    <main className="flex-1 w-full px-4 py-10 md:py-16">
      {/* JSON-LD: BreadcrumbList + ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://radhanaamjapa.com/" },
                  { "@type": "ListItem", position: 2, name: "Mantras", item: "https://radhanaamjapa.com/mantra" },
                ],
              },
              {
                "@type": "ItemList",
                name: "Sacred Mantras for Japa Practice",
                description: "A curated list of Hindu mantras available for digital japa counting.",
                numberOfItems: mantras.length,
                itemListElement: mantras.map((m, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: m.name,
                  url: `https://radhanaamjapa.com${m.href}`,
                })),
              },
            ],
          }),
        }}
      />
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="primary-heading font-bold mb-3"
          style={{ color: "#F37420" }}
        >
          Choose Your Mantra
        </h1>
        <p
          className="paragraph-text max-w-xl mx-auto"
          style={{ color: "#7a5c2e" }}
        >
          Select a sacred mantra below to begin your japa practice. Tap anywhere
          on the counter page to count your repetitions.
        </p>
      </div>

      {/* Grid */}
      <div 
        role="list"
        aria-label="List of available mantras for japa chanting"
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {mantras.map((mantra) => (
          <div
            key={mantra.id}
            role="listitem"
            className="mantra-card group rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "#fff8ee",
              border: "1.5px solid #FAD199",
              boxShadow: "0 4px 20px 0 rgba(243,116,32,0.06)",
            }}
          >
            {/* Image */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "200px" }}
            >
              <Image
                src={mantra.image}
                alt={mantra.deity}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(243,116,32,0.55) 0%, transparent 60%)",
                }}
              />
              {/* Deity name on image */}
              <span
                className="absolute bottom-3 left-4 font-bold text-white text-sm tracking-wide"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {mantra.deity}
              </span>
            </div>
 
            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2
                className="text-xl font-bold leading-snug"
                style={{ color: "#F37420" }}
              >
                {mantra.name}
              </h2>
              <p
                className="paragraph-text leading-relaxed font-medium text-xs sm:text-sm"
                style={{ color: "#7a5c2e" }}
              >
                {mantra.description}
              </p>
 
              {/* Button */}
              <Link
                href={mantra.href}
                aria-label={`Start chanting ${mantra.name}`}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-bold button-text transition-all duration-200 hover:scale-[1.01] active:scale-95 cursor-pointer focus:outline-3 focus:outline-offset-2 focus:outline-amber-600"
                style={{
                  background:
                    "linear-gradient(135deg, #F37420 0%, #F9BB4D 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(243,116,32,0.22)",
                  textDecoration: "none",
                }}
              >
                Start Chanting
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MantraPage;
