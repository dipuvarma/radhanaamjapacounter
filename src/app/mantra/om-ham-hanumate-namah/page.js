import { HeroSection } from "@/features/chanting-engine";

export default function OmHamHanumateyNamah() {
  return (
    <main className="flex-1">
      <HeroSection
        title="Om Ham Hanumate Namah"
        imageSrc="/images/hanuman.jpg"
        altDescription="Lord Hanuman"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12">
            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
              Om Ham Hanumate Namah Jap Benefits
            </h2>
            <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
              Chanting the Hanuman Mantra (ॐ हं हनुमते नमः) invokes the divine presence of Lord Hanuman, the embodiment of selfless service, supreme strength, fearlessness, and devotion.
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Why do we chant it */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
              Why do we chant it?
            </h3>
            <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
              Devotees chant this mantra to overcome weaknesses, eliminate fears, and seek protection from negative forces. Lord Hanuman represents the power of unbreakable devotion (Bhakti), spiritual discipline, and protective energy.
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Benefits */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Eliminates fear, panic, anxiety, and depression from the mind",
                "Grants immense physical strength, stamina, and vital energy",
                "Shields the chanter from external negative energies and dark forces",
                "Cultivates noble qualities of loyalty, service, and humility",
                "Reduces the negative astrological effects of Saturn (Shani Dev)",
                "Enhances willpower, focus, and self-discipline to face challenges",
                "Purifies the mind and heart, aligning them with selfless love",
                "Grants protection and triggers quick resolution to life's obstacles",
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
