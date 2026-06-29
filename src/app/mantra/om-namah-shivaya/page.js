import { HeroSection } from "@/features/chanting-engine";

export default function OmNamahShivaya() {
  return (
    <main className="flex-1">
      <HeroSection
        title="Om Namah Shivaya"
        imageSrc="/images/shivji.png"
        altDescription="Lord Shiva"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12">
            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
              Om Namah Shivaya Jap Benefits
            </h2>
            <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
              Chanting the Shiva Mantra (ॐ नमः शिवाय) is a powerful practice that honors Lord Shiva, the supreme consciousness, and represents the five elements of creation (earth, water, fire, air, and space).
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Why do we chant it */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
              Why do we chant it?
            </h3>
            <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
              Devotees chant this mantra to dissolve the ego, purify the soul, and align themselves with deep inner peace and self-realization. Chanting "Namah Shivaya" establishes quietness in the mind, connecting it with cosmic silence.
            </p>
 
            {/* Divider */}
            <div className="w-full h-px bg-[#FDE68A] mb-8" />
 
            {/* Benefits */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Deeply calms the mind, eliminating stress, anger, and anxiety",
                "Purifies the energetic body and dissolves past negative karmas",
                "Harmonizes and balances the five natural elements inside the body",
                "Enhances focus, intellectual clarity, and concentration power",
                "Establishes a state of deep inner peace, stability, and joy",
                "Acts as a protective spiritual shield against negative influences",
                "Awakens higher consciousness and opens the channels of intuition",
                "Brings spiritual growth, absolute mental freedom, and liberation",
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
