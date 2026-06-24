"use client";

import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";

import { useJapaState } from "@/hooks/useJapaState";
import { CounterPanel, DeityDisplay } from "..";
import Link from "next/link";
import useSound from "use-sound";
import { useState } from "react";

const HeroSection = ({ imageSrc, altDescription, title }) => {
  const { handleIncreaseJapaCount } = useJapaState();
  const [isSoundOn, setIsSoundOn] = useState(false);

  const [play] = useSound("/audio/radha-radha.mp3", {
    volume: 0.5,
    interrupt: true,
  });

  const handleSoundStatus = (e) => {
    e.stopPropagation();
    setIsSoundOn((prev) => !prev);
  };

  const handleJapaCount = (e) => {
    handleIncreaseJapaCount();
    if (isSoundOn) {
      play();
    }
  };

  return (
    <section onClick={handleJapaCount} className="w-full relative select-none">
      <section className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Audio Mute and Unmute Toggle  */}
          <div
            className="flex items-center gap-2"
            onClick={(e) => handleSoundStatus(e)}
          >
            <BiSolidVolumeMute className="text-xl text-amber-950" />
            <div
              className={`${isSoundOn ? "bg-amber-900 justify-end" : "bg-gray-100"} w-14 h-6  transition-all duration-300 rounded-full flex items-center p-1 cursor-pointer`}
            >
              <div
                className={`${isSoundOn ? "bg-gray-50" : "bg-gray-600"} w-5 aspect-square rounded-full `}
              ></div>
            </div>
            <BiSolidVolumeFull className="text-xl text-amber-950" />
          </div>

          {/* Current Mantra Title  */}
          <h1 className="primary-heading text-center font-semibold text-amber-900">
            {title}
          </h1>

          {/* Select Mantra Dropdown  */}
          <div className="relative font-poppins">
            <select
              name=""
              id=""
              onClick={(e) => e.stopPropagation()}
              className="appearance-none bg-gray-50 rounded-full pl-4 pr-8 py-1.5 text-sm font-medium text-amber-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-saffron/50 transition-all duration-300 cursor-pointer"
            >
              <option value="" className="bg-amber-50 text-amber-900 text-sm">
                Radhe Radhe
              </option>
              <option value="" className="bg-amber-50 text-amber-900 text-sm">
                Om Nam Shivaye
              </option>
              <option value="" className="bg-amber-50 text-amber-900 text-sm">
                Ram Ram
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-4 h-4 text-saffron"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <CounterPanel />
        <DeityDisplay imgSrc={imageSrc} altDescription={altDescription} />

        <div className="flex justify-end">
          <Link
            href="/statistics"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 hover:bg-gray-100 bg-white outline-1 outline-amber-800 rounded-md fixed right-10 bottom-10"
          >
            Statistics
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
