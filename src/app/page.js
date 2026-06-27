import { HeroSection } from "@/features/chanting-engine";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section  */}
      <HeroSection
        title="Radhe Radhe"
        imageSrc="/images/radha.jpg"
        altDescription="Lord Radha Ji"
      />

      {/* ===== LIVE STATS BAR ===== */}
      <section className="max-w-5xl mx-auto rounded-sm bg-gray-50 translate-y-[50%] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-around gap-4">
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-(--color-saffron) rounded-lg flex items-center justify-center text-[#4A1C00] font-bold text-xs border border-white/30">
              <GiPrayerBeads className="text-xl text-gray-50" />
            </div>
            <div>
              <p className="text-[#4A1C00] font-bold text-xl leading-tight">
                4.2 Crore+
              </p>
              <p className="text-[#4A1C00] text-sm">Japas Chanted</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-black/30 hidden sm:block" />

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-(--color-saffron) rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-[#4A1C00] text-lg">
                <FaUsers className="text-gray-50 text-xl" />
              </span>
            </div>
            <div>
              <p className="text-[#4A1C00] font-bold text-xl leading-tight">
                4,586
              </p>
              <p className="text-[#4A1C00] text-sm">Devotees Active</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-black/30 hidden sm:block" />

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-(--color-saffron) rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-[#4A1C00] text-lg">
                <FaGlobeAmericas className="text-gray-50 text-xl" />
              </span>
            </div>
            <div>
              <p className="text-[#4A1C00] font-bold text-xl leading-tight">
                32
              </p>
              <p className="text-[#4A1C00] text-sm">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO USE — 3 STEPS ===== */}
      <section className="w-full bg-gradient-to-br from-(--color-saffron) to-(--color-lighter-yellow) pb-14 pt-30 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="sm:text-5xl text-3xl font-bold text-gray-50">
              Start Your Japa Journey
            </h2>
            <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-sm p-8 text-center outline-1 outline-amber-900">
              <div className="w-12 h-12 bg-[#F37420] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-3">
                Select Your Mantra
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Choose from a variety of sacred Radha and Krishna names to begin
                your daily meditation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-sm p-8 text-center outline-1 outline-amber-900">
              <div className="w-12 h-12 bg-[#F37420] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-3">
                Digital Mala Counter
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Tap to count each bead. Immerse yourself in the sound and
                rhythmic flow of the mantra.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-sm p-8 text-center outline-1 outline-amber-900">
              <div className="w-12 h-12 bg-[#F37420] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-3">
                Track Your Progress
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Watch your spiritual habits grow with beautiful charts and
                detailed daily stats.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
