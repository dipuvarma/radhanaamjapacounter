import { HeroSection } from "@/features/chanting-engine";

export default function JaiShriRam() {
  return (
    <main className="flex-1">
      <HeroSection
        title="Jai Shri Ram"
        imageSrc="/images/ram.jfif"
        altDescription="Lord Ram"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-8 sm:p-12">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
              Hare Krishna Maha Mantra Jap Benefits
            </h2>
            <p className="text-[#78350F] text-sm text-center leading-relaxed mb-8">
              The Hare Krishna Maha Mantra (हरे कृष्ण...) is the great chanting
              prayer for deliverance. It is praised in scriptures as the most
              effective mantra for Kali Yuga.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />

            {/* Why do we chant it */}
            <h3 className="text-lg font-bold text-[#4A1C00] mb-3">
              Why do we chant it?
            </h3>
            <p className="text-[#78350F] text-sm leading-relaxed mb-8">
              Devotees chant this mantra to cleanse consciousness, awaken love
              for Krishna, and seek liberation. It is recommended for daily japa
              because it directly connects the soul with the Supreme Lord.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />

            {/* Benefits */}
            <h3 className="text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Cleanses the heart and consciousness (ceto-darpana-marjanam)",
                "Awakens love and devotion for Lord Krishna",
                "Reduces anxiety, stress, and restlessness",
                "Removes the bad effects of Kali Yuga",
                "Brings spiritual happiness and inner bliss",
                "Helps one remember Krishna throughout the day",
                "Purifies past karma through nama-sankirtan",
                "Leads toward liberation (moksha) through bhakti",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F37420] font-bold mt-0.5">·</span>
                  <span className="text-[#78350F] text-sm leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
