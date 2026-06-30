import { HeroSection } from "@/features/chanting-engine";
import ChallengeSection from "@/components/ChallengeSection";
import DownloadAppCTA from "@/components/DownloadAppCTA";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section  */}
      <HeroSection
        title="Radhe Radhe"
        imageSrc="/images/radha.jpg"
        altDescription="Lord Radha Ji"
      />
      {/* Radha Jap Streak Challenge 2026 section  */}
      <ChallengeSection />

      {/* ===== OUR FEATURES SECTION ===== */}
      <section className="w-full bg-[#FFF8E7] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
              Everything You Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A1C00]">
              Features Built for Bhakts
            </h2>
            <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Weekly Progress */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Weekly Progress
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Visualize your chanting journey with beautiful weekly bar
                charts. See which days you chanted the most and stay consistent.
              </p>
            </div>

            {/* Feature 2 - Leaderboard */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Community Leaderboard
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Compete with devotees worldwide. Climb the ranks, earn your
                place on the podium, and inspire others with your dedication.
              </p>
            </div>

            {/* Feature 3 - Personal Dashboard */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">🪔</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Personal Dashboard
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Your own sadhana space — today's japa, lifetime count, total
                time spent chanting, all in one beautiful instant view.
              </p>
            </div>

            {/* Feature 4 - Monthly Progress */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Monthly Heatmap
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Track every single day of the month with a color-coded heatmap.
                Never miss a day and build an unbreakable chanting habit.
              </p>
            </div>

            {/* Feature 5 - Streak */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Streak Tracker
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Build your daily chanting streak and protect it. See your
                current and longest streak — consistency is the true sadhana.
              </p>
            </div>

            {/* Feature 6 - Multiple Mantras */}
            <div className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">📿</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">
                Multiple Mantras
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Choose from sacred mantras — Radhe Radhe, Hare Krishna, Om Namah
                Shivaya and more. Each chant tracked separately with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA Section  */}
      <DownloadAppCTA />
    </main>
  );
}
