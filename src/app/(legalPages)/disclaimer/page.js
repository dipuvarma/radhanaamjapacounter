import Link from "next/link";

export const metadata = {
  title: "Disclaimer — Radha Naam Japa Counter",
  description:
    "Disclaimer for Radha Naam Japa Counter. Understand the limitations and nature of this devotional tool.",
};

const LAST_UPDATED = "July 1, 2026";

export default function DisclaimerPage() {
  const sections = [
    {
      title: "1. General Disclaimer",
      content:
        "Radha Naam Japa Counter is a free devotional tool designed to help individuals track their japa (mantra chanting) practice. The App is provided for personal, spiritual use only. We make no warranties, express or implied, about the completeness, accuracy, reliability, or suitability of the App.",
    },
    {
      title: "2. Spiritual & Religious Disclaimer",
      content:
        "The App supports various Hindu mantras and devotional practices. While we present spiritual information with sincerity and respect, we are not a religious institution or authority. The spiritual benefits of chanting are personal and subjective. We do not make any claims about guaranteed spiritual outcomes from using this App.",
    },
    {
      title: "3. Health Disclaimer",
      content:
        "Chanting and meditation practices may have positive effects on mental wellbeing. However, Radha Naam Japa Counter is not a medical or therapeutic tool. It should not replace professional medical or psychological advice.",
    },
    {
      title: "4. Japa Points & Leaderboard",
      content:
        "The Japa Points System is an algorithmic tool designed to detect and discourage cheating. While we have taken care to make it fair, the scores are estimates and may not perfectly reflect every user's genuine practice. Decisions about leaderboard positions are final.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "The App uses Firebase (Google) for authentication and data storage, and Google Fonts for typography. We are not responsible for any issues arising from these third-party services. Their respective privacy policies and terms apply.",
    },
    {
      title: "6. Audio Content",
      content:
        "Audio content (mantra chants) used in the App is sourced from publicly available, royalty-free sources or recorded with proper permissions. If you believe any audio infringes on your rights, please contact us immediately.",
    },
    {
      title: "7. Accuracy of Information",
      content:
        "We strive to ensure the information about mantras, their meanings, and benefits is accurate and respectfully presented. However, religious texts and traditions are vast. We encourage users to consult learned practitioners or their guru for deeper spiritual guidance.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, Radha Naam Japa Counter and its creators shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the App, including but not limited to loss of data, loss of goodwill, or business interruption.",
    },
    {
      title: "9. No Endorsement",
      content:
        "Reference to any specific deity, scripture, or spiritual practice does not constitute an endorsement of any particular religious organization. The App is inclusive and welcomes all sincere devotees.",
    },
    {
      title: "10. Changes to Disclaimer",
      content:
        "This Disclaimer may be updated periodically. Continued use of the App after changes are posted indicates acceptance of the revised Disclaimer.",
    },
  ];

  return (
    <main className="flex-1 w-full px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-amber-700">
          <Link href="/" className="hover:text-amber-900 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-900 font-semibold">Disclaimer</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4A1C00]">
            Disclaimer
          </h1>
          <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
          <p className="text-sm text-amber-700 mt-4">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 mb-8">
          <p className="text-[#78350F] leading-relaxed">
            By using Radha Naam Japa Counter, you acknowledge that you have read,
            understood, and agree to the following disclaimer. This App is a devotional
            tool offered freely with love and sincerity.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section, i) => (
            <div key={i} className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6">
              <h2 className="text-base font-bold text-[#4A1C00] mb-3">{section.title}</h2>
              <p className="text-[#78350F] text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section aria-labelledby="disclaimer-faq" className="mt-16">
          <h2 id="disclaimer-faq" className="text-2xl font-bold text-[#4A1C00] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this app affiliated with any temple or religious organization?",
                a: "No. Radha Naam Japa Counter is an independent digital tool. It is not affiliated with any temple, institution, or religious authority.",
              },
              {
                q: "Are the spiritual benefits of chanting guaranteed?",
                a: "No. We cannot guarantee specific spiritual outcomes. Chanting benefits are personal experiences that vary by individual and practice.",
              },
              {
                q: "Is the audio in the app original?",
                a: "Audio files used in the app are from publicly available sources. If you have concerns about any audio content, contact us.",
              },
              {
                q: "Is this app endorsed by any spiritual leader?",
                a: "No. We have not sought or received endorsements from any specific spiritual personalities or institutions.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFFDF9] border border-[#FDE68A] rounded-xl p-5">
                <h3 className="font-bold text-[#4A1C00] mb-2">{item.q}</h3>
                <p className="text-[#78350F] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
