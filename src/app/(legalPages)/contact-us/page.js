import Link from "next/link";

export const metadata = {
  title: "Contact Us — Radha Naam Japa Counter",
  description:
    "Get in touch with the Radha Naam Japa Counter team. We'd love to hear from you — feedback, suggestions, or devotional queries.",
  keywords: ["contact radha naam japa", "japa app support", "devotional app contact", "japa counter help"],
  alternates: { canonical: "https://radhanaamjapa.com/contact-us" },
  openGraph: {
    title: "Contact Us — Radha Naam Japa Counter",
    description: "Reach out to the Radha Naam Japa Counter team with feedback, suggestions, or devotional queries.",
    url: "https://radhanaamjapa.com/contact-us",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "Contact Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "Contact Us — Radha Naam Japa Counter",
    description: "Reach out to the Radha Naam Japa Counter team with your feedback or queries.",
    images: ["/images/radha.jpg"],
  },
};

export default function ContactUsPage() {
  const pageFAQs = [
    {
      q: "How quickly will I get a reply?",
      a: "We typically respond within 24 hours on weekdays. During spiritual observances (Ekadashi, festivals), it may take slightly longer.",
    },
    {
      q: "Can I suggest a new mantra to be added?",
      a: "Absolutely! We welcome suggestions for new mantras and features. Send us an email and we'll consider it for the next update.",
    },
    {
      q: "How can I report a bug or issue?",
      a: "Please use the contact form above with the subject 'Bug Report'. Include your browser name and what you were doing when the issue occurred.",
    },
    {
      q: "Do you offer collaborations or partnerships?",
      a: "For spiritual organizations, temples, or bhakti communities who want to collaborate, please reach out to us via email.",
    },
  ];

  return (
    <main className="flex-1 w-full px-4 py-12 md:py-20">
      {/* JSON-LD Structured Data */}
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
                  { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://radhanaamjapa.com/contact-us" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Contact Us — Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/contact-us",
                description: "Contact the Radha Naam Japa Counter team with feedback, suggestions, or queries.",
                inLanguage: "en",
                isPartOf: { "@type": "WebSite", url: "https://radhanaamjapa.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: pageFAQs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-amber-700"
        >
          <Link href="/" className="hover:text-amber-900 transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-900 font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
            We&apos;d Love to Hear from You
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4A1C00]">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 text-center hover:border-[#F37420] transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h2 className="font-bold text-[#4A1C00] mb-1">Email Us</h2>
            <p className="text-[#78350F] text-sm">support@radhanaamjapa.com</p>
            <p className="text-[#78350F] text-xs mt-1">
              We reply within 24 hours
            </p>
          </div>

          <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 text-center hover:border-[#F37420] transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌸</span>
            </div>
            <h2 className="font-bold text-[#4A1C00] mb-1">Community</h2>
            <p className="text-[#78350F] text-sm">Join our devotee community</p>
            <p className="text-[#78350F] text-xs mt-1">
              Share your japa journey
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#4A1C00] mb-6">
            Send a Message
          </h2>
          <form className="space-y-5" aria-label="Contact form">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Radha Das"
                className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="What is this about?"
                className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#F37420] to-[#F9BB4D] text-white font-bold py-3.5 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-amber-600"
            >
              Send Message 🙏
            </button>
          </form>
        </div>

        {/* FAQ */}
        <section aria-labelledby="contact-faq" className="mt-16">
          <h2
            id="contact-faq"
            className="text-2xl font-bold text-[#4A1C00] mb-6 text-center"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {pageFAQs.map((item, i) => (
              <div
                key={i}
                className="bg-[#FFFDF9] border border-[#FDE68A] rounded-xl p-5"
              >
                <h3 className="font-bold text-[#4A1C00] mb-2">{item.q}</h3>
                <p className="text-[#78350F] text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
