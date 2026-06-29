"use client";

import { useState } from "react";
import { FiCalendar, FiAward, FiChevronDown, FiChevronUp, FiCheckCircle } from "react-icons/fi";

const ChallengeSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleJoinClick = () => {
    // Smooth scroll to the top hero section containing the japa counter
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <section 
      aria-labelledby="challenge-title"
      className="w-full bg-gradient-to-br from-[#D9531E] via-[#F37420] to-[#F9BB4D] py-16 px-4 sm:px-6 relative overflow-hidden text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      
      {/* Sparkle decorative SVGs */}
      <svg className="absolute left-6 bottom-8 w-12 h-12 text-white/15 animate-pulse hidden md:block" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>
      <svg className="absolute right-12 top-8 w-16 h-16 text-white/10 animate-bounce hidden md:block" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Pill Badge */}
        <div 
          className="bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-6 animate-pulse"
          role="status"
        >
          <span className="text-base">🔥</span> CHALLENGE IS LIVE! <span className="text-base">🔥</span>
        </div>

        {/* Section Heading */}
        <h2 
          id="challenge-title" 
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 tracking-wide drop-shadow-md leading-tight text-amber-50"
        >
          Radha Jap Streak Challenge 2026 🔥
        </h2>

        {/* Subtitle */}
        <p className="font-poppins text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-10 opacity-95 leading-relaxed text-amber-100">
          Jap daily 108 Radha naam and get a chance to win prizes every month.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          
          {/* Card 1: Schedule Info */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200 shadow-md text-amber-950 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-amber-100/80 rounded-2xl flex items-center justify-center mb-5 border border-amber-200">
              <FiCalendar className="text-3xl text-[#F37420]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-amber-950 mb-3">
              Starts Jan 1, 2026
            </h3>
            <p className="text-sm text-amber-900 leading-relaxed font-medium">
              Jap daily 108 Radha naam and win prizes
            </p>
          </div>

          {/* Card 2: Year End Prizes */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200 shadow-md text-amber-950 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-amber-100/80 rounded-2xl flex items-center justify-center mb-5 self-center border border-amber-200">
              <span className="text-3xl" role="img" aria-label="Money bag">💰</span>
            </div>
            <h3 className="text-xl font-bold font-poppins text-center text-amber-950 mb-4">
              Year End Prizes *
            </h3>
            <ul className="w-full space-y-2.5 text-sm font-medium text-amber-900 flex-1">
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-200">🥇</span>
                  <span>1st Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹10,000</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">🥈</span>
                  <span>2nd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹5,000</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200">🥉</span>
                  <span>3rd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹3,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">🏅</span>
                  <span>4th-13th Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹500 <span className="text-xs font-normal text-amber-700">each</span></span>
              </li>
            </ul>
          </div>

          {/* Card 3: Monthly Prizes */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200 shadow-md text-amber-950 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-amber-100/80 rounded-2xl flex items-center justify-center mb-5 self-center border border-amber-200">
              <FiAward className="text-3xl text-[#F37420]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-center text-amber-950 mb-4">
              Monthly prizes *
            </h3>
            <ul className="w-full space-y-2.5 text-sm font-medium text-amber-900 flex-1">
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-200">🥇</span>
                  <span>1st Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹500</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">🥈</span>
                  <span>2nd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹300</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200">🥉</span>
                  <span>3rd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹200</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">🏅</span>
                  <span>4th-8th Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹100 <span className="text-xs font-normal text-amber-700">each</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md justify-center">
          <button
            onClick={handleToggleDetails}
            aria-expanded={showDetails}
            aria-controls="challenge-details"
            className="flex items-center justify-center gap-2 bg-[#FFF8E7] text-[#D9531E] hover:text-[#B63E10] hover:bg-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 focus:outline-3 focus:outline-offset-2 focus:outline-white cursor-pointer active:scale-98"
          >
            <span>🔥 More details</span>
            {showDetails ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
          
          <button
            onClick={handleJoinClick}
            className="flex items-center justify-center gap-2 bg-[#2D0A00] text-amber-50 hover:bg-[#1C0600] font-bold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 focus:outline-3 focus:outline-offset-2 focus:outline-[#2D0A00] cursor-pointer active:scale-98"
          >
            <span>📱 Join Now Streak Challenge</span>
          </button>
        </div>

        {/* Collapsible Details Panel */}
        <div
          id="challenge-details"
          className={`w-full max-w-3xl overflow-hidden transition-all duration-500 ease-in-out ${
            showDetails ? "max-h-[800px] opacity-100 mb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 text-amber-950 border border-amber-200 shadow-lg text-left">
            <h4 className="text-xl font-bold font-poppins text-[#D9531E] mb-4 flex items-center gap-2 border-b border-amber-100 pb-3">
              <span className="text-2xl" role="img" aria-label="Clipboard">📋</span> Detailed Rules & Guidelines
            </h4>
            
            <div className="space-y-6 text-sm sm:text-base">
              <div>
                <h5 className="font-bold text-amber-950 mb-2 flex items-center gap-1.5">
                  <FiCheckCircle className="text-[#F37420]" /> How to Participate
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-amber-900 font-medium">
                  <li>Log in to your account so your daily progress is synced and saved.</li>
                  <li>Chant at least 1 full Mala (108 repetitions of the mantra) daily on this app.</li>
                  <li>Ensure you check-in and complete your japa before midnight local time to maintain your streak.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-amber-950 mb-2 flex items-center gap-1.5">
                  <FiCheckCircle className="text-[#F37420]" /> Streak Requirements
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-amber-900 font-medium">
                  <li><strong>Year-End Prizes:</strong> Devotees who successfully maintain a perfect, unbroken 365-day streak starting from Jan 1, 2026 (or their enrollment date) are eligible.</li>
                  <li><strong>Monthly Prizes:</strong> Winners are evaluated at the end of each month based on their continuous streak during that month.</li>
                  <li>In case of multiple perfect streaks, the ranking will be determined by the total lifetime count of chants.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/60 text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                <strong>* Disclaimer:</strong> This streak challenge is organized to inspire and support devotees in their daily sadhana. Prizes are distributed transparently based on verified app analytics database records. Devotional sincerity is the ultimate reward!
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="text-center font-poppins text-xs sm:text-sm opacity-90 space-y-2">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            <span className="text-[#FFF8E7] font-semibold">✔ Daily 108 japa required</span>
            <span className="opacity-60">•</span>
            <span>Monthly + Year-end prizes</span>
          </p>
          <p className="font-semibold text-amber-50 text-sm tracking-wide">
            Start your streak journey today! 📿
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
