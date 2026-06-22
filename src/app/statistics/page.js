"use client";

import { FaFire } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { useJapaState } from "@/hooks/useJapaState";
import { getLocalDateString } from "@/utils/helper";

const page = () => {
  const { analytics } = useJapaState();

  const summary = analytics?.summary || {
    currentStreak: 0,
    longestStreak: 0,
    lifetimeCount: 0,
    lifetimeDuration: 0,
  };

  const dailyStats = analytics?.dailyStats || {};

  const todayDateStr = getLocalDateString();

  const todayJapaCount = dailyStats[todayDateStr]?.count || 0;

  const totalMinutes = Math.round(summary.lifetimeDuration / 60);

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Statistics</h1>
      <section className="grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-2">
        <div className="md:col-span-2 bg-amber-800 text-gray-50 p-2 rounded-sm flex items-center gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-100">Current Streaks</p>
            <p className="text-4xl font-semibold">
              {summary.currentStreak}{" "}
              {summary.currentStreak === 1 ? "day" : "days"}
            </p>
            <p className="text-xs text-gray-200">
              {summary.currentStreak > 0
                ? "Great Start! See you tomorrow!"
                : "Start chanting today to build your streak!"}
            </p>
          </div>
          <div>
            <FaFire className="text-5xl" />
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <GiPrayerBeads className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Today Japa</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              {todayJapaCount}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <FaRegUser className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Life Time</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              {summary.lifetimeCount}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <GiSandsOfTime className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Total Time</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              {totalMinutes} Min
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
