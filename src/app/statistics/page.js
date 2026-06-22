"use client";

import { FaFire } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { useJapaState } from "@/hooks/useJapaState";
import { getLocalDateString } from "@/utils/helper";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getWeeklyData = (dailyStats) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  
  let totalJapaThisWeek = 0;
  const chartData = [];

  // Generate last 7 days ending with today
  for (let i = 6; i >= 0; i--) {
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() - i);

    const year = dayDate.getFullYear();
    const month = String(dayDate.getMonth() + 1).padStart(2, "0");
    const day = String(dayDate.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const count = dailyStats[dateStr]?.count || 0;
    totalJapaThisWeek += count;

    chartData.push({
      day: daysOfWeek[dayDate.getDay()],
      japa: count,
    });
  }

  // Calculate start date (6 days ago) and end date (today) for range label
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - 6);

  const startLabel = `${firstDay.getDate()} ${firstDay.toLocaleString("default", { month: "short" })}`;
  const endLabel = `${today.getDate()} ${today.toLocaleString("default", { month: "short" })}`;
  const rangeLabel = `${startLabel} - ${endLabel}`;

  return { chartData, total: totalJapaThisWeek, rangeLabel };
};

const getMonthlyData = (dailyStats) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed

  // Total days in the current month
  const totalDays = new Date(year, month + 1, 0).getDate();
  const heatmapData = [];

  for (let i = 1; i <= totalDays; i++) {
    const dayDate = new Date(year, month, i);
    const monthStr = String(month + 1).padStart(2, "0");
    const dayStr = String(i).padStart(2, "0");
    const dateStr = `${year}-${monthStr}-${dayStr}`;

    const count = dailyStats[dateStr]?.count || 0;

    heatmapData.push({
      dayNum: i,
      dateStr,
      count,
    });
  }

  const monthName = today.toLocaleString("default", { month: "long" });
  return { heatmapData, monthName };
};

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

  const { chartData, total, rangeLabel } = getWeeklyData(dailyStats);
  const { heatmapData, monthName } = getMonthlyData(dailyStats);

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

      {/* Weekly Progress  */}
      <section className="mt-8 bg-gray-50 outline-1 outline-amber-800/30 p-6 rounded-sm shadow-sm border border-amber-900/10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-amber-900">
              Weekly Progress
            </h2>
            <p className="text-sm text-amber-800">{rangeLabel}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-amber-800 font-medium uppercase tracking-wider">
              Total Japa
            </p>
            <p className="text-2xl font-bold text-amber-950">{total}</p>
          </div>
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F37420" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#F9BB4D" stopOpacity={0.6} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#78350f", fontSize: 13, fontWeight: 500 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#78350f", fontSize: 11 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(120, 53, 15, 0.05)" }}
                contentStyle={{
                  backgroundColor: "#fffbeb",
                  border: "1px solid #d97706",
                  borderRadius: "4px",
                  fontFamily: "var(--font-poppins)",
                }}
                labelStyle={{ color: "#78350f", fontWeight: "bold" }}
                itemStyle={{ color: "#F37420" }}
              />
              <Bar
                dataKey="japa"
                fill="url(#barGradient)"
                barSize={32}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Monthly Progress Section */}
      <section className="mt-8 bg-gray-50 outline-1 outline-amber-800/30 p-6 rounded-sm shadow-sm border border-amber-900/10">
        <h2 className="text-xl font-semibold text-amber-900 mb-2">Monthly Progress</h2>
        <p className="text-sm text-amber-800 mb-6">{monthName} {new Date().getFullYear()}</p>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-7 sm:grid-cols-10 gap-3 max-w-2xl">
          {heatmapData.map((day) => {
            let bgStyle = {};
            let borderClass = "border border-amber-800/20";
            let tooltipText = `${day.dayNum} ${monthName}: No chants`;

            if (day.count === 0) {
              // Diagonal stripes for unchanted days, matching the mockup!
              bgStyle = {
                background: "repeating-linear-gradient(45deg, #fafaf9, #fafaf9 4px, #ebd5c0 4px, #ebd5c0 8px)",
              };
            } else {
              tooltipText = `${day.dayNum} ${monthName}: ${day.count} chants`;
              if (day.count < 108) {
                bgStyle = { backgroundColor: "#FAE6B8" };
              } else if (day.count < 540) {
                bgStyle = { backgroundColor: "#FAD199" };
              } else if (day.count < 1080) {
                bgStyle = { backgroundColor: "#F37420" };
              } else {
                bgStyle = { backgroundColor: "#F9BB4D" };
              }
              borderClass = "border border-amber-600 shadow-[0_0_8px_rgba(243,116,32,0.2)]";
            }

            return (
              <div
                key={day.dateStr}
                style={bgStyle}
                className={`aspect-square rounded-md flex items-center justify-center text-xs font-semibold relative group cursor-pointer transition-all duration-300 hover:scale-105 ${borderClass} ${
                  day.count > 0 ? "text-amber-950" : "text-amber-800/50"
                }`}
              >
                {day.dayNum}

                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 bg-amber-950 text-amber-50 text-[10px] py-1 px-2 rounded-sm shadow-md whitespace-nowrap pointer-events-none">
                  {tooltipText}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 items-center mt-6 text-xs text-amber-800 border-t border-amber-800/10 pt-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div 
              style={{ background: "repeating-linear-gradient(45deg, #fafaf9, #fafaf9 2px, #ebd5c0 2px, #ebd5c0 4px)" }}
              className="w-4 h-4 rounded-sm border border-amber-800/20"
            />
            <span>0 chants</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm border border-amber-600" style={{ backgroundColor: "#FAE6B8" }} />
            <span>&lt; 108</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm border border-amber-600" style={{ backgroundColor: "#FAD199" }} />
            <span>108+</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm border border-amber-600" style={{ backgroundColor: "#F37420" }} />
            <span>540+</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm border border-amber-600 shadow-[0_0_8px_rgba(243,116,32,0.2)]" style={{ backgroundColor: "#F9BB4D" }} />
            <span>1080+</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
