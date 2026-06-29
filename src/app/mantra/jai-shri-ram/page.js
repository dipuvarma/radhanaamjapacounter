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
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12">
            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
              Jai Shri Ram Jap Benefits
            </h2>
            <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
              Chanting the name of Lord Ram (जय श्री राम) fills the heart with righteousness, peace, and spiritual strength. It is a powerful practice to connect with Maryada Purushottam Lord Ram.
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Why do we chant it */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
              Why do we chant it?
            </h3>
            <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
              Devotees chant the name of Lord Ram to cultivate noble virtues like truth, duty, humility, and courage. Chanting "Ram" is considered equal to chanting the entire Vishnu Sahasranama, instantly purifying the chanter's mind and consciousness.
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Benefits */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Brings absolute peace of mind, calmness, and mental clarity",
                "Instills courage, inner strength, and shields against negativity",
                "Purifies past karmic blockages and promotes righteousness (dharma)",
                "Brings harmony, joy, and peace to household and relationships",
                "Dissolves fear, stress, and anxiety, building confidence",
                "Connects the devotee with the supreme divine qualities of Lord Ram",
                "Purifies speech, mind, and body through sacred sound vibrations",
                "Grants steady spiritual growth, devotion, and liberation",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F37420] font-bold mt-0.5">·</span>
                  <span className="text-[#78350F] text-xs sm:text-sm leading-relaxed">
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
