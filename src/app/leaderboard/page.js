"use client";

import { useState } from "react";
import { FaCrown, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useLeaderboard } from "@/hooks/useLeaderboard";

export default function LeaderboardPage() {
  const { user, signInWithGoogle } = useAuth();
  const { leaders, loading } = useLeaderboard();

  const topThree = leaders.slice(0, 3);

  // Podium order: 2nd (left), 1st (center), 3rd (right)
  const podiumOrder = [topThree[1], topThree[0], topThree[2]].filter(Boolean);

  const otherDevotees = leaders;

  return (
    <main
      className={`relative flex-1 bg-[#fffdf8] min-h-screen ${
        !user ? "h-screen overflow-hidden" : ""
      }`}
    >
      {/* Background Content with Blur if not signed in */}
      <div
        className={`${
          !user ? "blur-md pointer-events-none select-none" : ""
        } transition-all duration-500 p-4 sm:p-8 max-w-5xl mx-auto h-full pb-20`}
      >
        {/* Header */}
        <div className="text-center my-6 sm:my-10">
          <h1 className="text-4xl sm:text-5xl text-amber-900 font-bold mb-3">
            Community <span className="text-saffron">Leaderboard</span>
          </h1>
          <p className="text-amber-800/80 max-w-xl mx-auto">
            Live rankings for all devotees. Chant with devotion and rise to the
            top of the leaderboard.
          </p>

          <div className="flex justify-center gap-8 sm:gap-16 mt-8 border-b border-amber-100 pb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">
                {leaders.length}
              </div>
              <div className="text-xs font-semibold text-amber-700/70 tracking-wider uppercase mt-1">
                Participants
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">
                {leaders
                  .reduce((sum, d) => sum + (d.lifetimeCount || 0), 0)
                  .toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-amber-700/70 tracking-wider uppercase mt-1">
                Total Japas
              </div>
            </div>
          </div>
        </div>

        {/* Podium Section */}
        <div className="flex justify-center items-end gap-2 sm:gap-6 my-16 h-72">
          {loading ? (
            <p className="text-amber-700">Loading...</p>
          ) : (
            podiumOrder.map((devotee) => {
              if (!devotee) return null;
              const isFirst = devotee.rank === 1;
              const heightClass = isFirst
                ? "h-48"
                : devotee.rank === 2
                  ? "h-36"
                  : "h-28";
              const bgClass = isFirst
                ? "bg-gradient-to-t from-saffron to-light-yellow shadow-lg shadow-saffron/20 border-t border-white/40"
                : "bg-gradient-to-t from-amber-200 to-amber-100 border-t border-white/50";

              return (
                <div
                  key={devotee.uid}
                  className={`flex flex-col items-center ${
                    isFirst ? "w-28 sm:w-36 z-10" : "w-24 sm:w-32"
                  }`}
                >
                  <div className="relative flex flex-col items-center">
                    {isFirst && (
                      <FaCrown className="text-saffron text-3xl absolute -top-8 drop-shadow-md" />
                    )}
                    <div
                      className={`relative rounded-full overflow-hidden border-4 ${
                        isFirst
                          ? "border-saffron w-20 h-20 sm:w-24 sm:h-24"
                          : "border-white w-16 h-16 sm:w-20 sm:h-20"
                      } shadow-md bg-white mb-3`}
                    >
                      {devotee.photoURL ? (
                        <Image
                          src={devotee.photoURL}
                          alt={devotee.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-saffron font-bold text-xl">
                          {devotee.name?.charAt(0) || "?"}
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-amber-950 text-center truncate w-full px-1 text-sm sm:text-base">
                      {devotee.name}
                    </p>
                    <p
                      className={`text-sm font-bold mb-4 ${
                        isFirst ? "text-saffron" : "text-amber-700"
                      }`}
                    >
                      {devotee.lifetimeCount?.toLocaleString()} pts
                    </p>
                  </div>
                  <div
                    className={`w-full ${heightClass} ${bgClass} rounded-t-xl flex justify-center pt-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-50"></div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-inner ${
                        isFirst
                          ? "bg-amber-100/30 text-white border border-white/30"
                          : "bg-amber-50/50 text-amber-900"
                      }`}
                    >
                      {devotee.rank}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* List Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-amber-200/50 overflow-hidden mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border-b border-amber-100 bg-amber-50/30 gap-4">
            <h2 className="text-xl font-bold text-amber-900">All Rankings</h2>
          </div>

          <div className="bg-amber-50/10 px-6 py-3 border-b border-amber-100 hidden sm:grid grid-cols-12 gap-4 text-xs font-bold text-amber-700/60 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-8">Participant</div>
            <div className="col-span-3 text-right">Score</div>
          </div>

          <div className="divide-y divide-amber-100/50">
            {otherDevotees.map((devotee) => (
              <div
                key={devotee.uid}
                className="grid grid-cols-12 gap-4 items-center p-4 sm:px-6 hover:bg-amber-50/50 transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 flex justify-center sm:justify-start">
                  <span className="text-lg font-bold text-amber-900/50">
                    {devotee.rank}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-8 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold border border-saffron/30 shrink-0 overflow-hidden">
                    {devotee.photoURL ? (
                      <Image
                        src={devotee.photoURL}
                        alt={devotee.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    ) : (
                      devotee.name?.charAt(0) || "?"
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-amber-950">{devotee.name}</p>
                    <p className="text-xs text-amber-700/70 mt-0.5">
                      Best Streak: {devotee.longestStreak}
                    </p>
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-3 text-right">
                  <p className="font-bold text-amber-900 sm:text-lg">
                    {devotee.lifetimeCount?.toLocaleString()}
                  </p>
                  <p className="text-[10px] sm:text-xs text-amber-700/60 font-semibold uppercase">
                    Points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay modal for Sign In */}
      {!user && (
        <div className="absolute inset-0 flex items-start pt-10 justify-center z-50 bg-amber-950/20 backdrop-blur-[2px] -mx-4 sm:-mx-8 rounded-t-3xl sm:rounded-t-none">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full mx-4 text-center border border-amber-100 transform transition-all">
            <div className="w-20 h-20 bg-orange-saffron/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <FaLock className="w-8 h-8 text-saffron" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-amber-950 mb-3">
              Unlock Leaderboard
            </h2>
            <p className="text-amber-800 mb-8 leading-relaxed">
              Sign in to save your chanting progress, climb the ranks, and see
              your standing among fellow devotees worldwide.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={signInWithGoogle}
                className="w-full bg-saffron hover:bg-[#e0681b] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-saffron/25 active:scale-[0.98]"
              >
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
