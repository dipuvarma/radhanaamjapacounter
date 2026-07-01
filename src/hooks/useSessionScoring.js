"use client";

import { useState, useRef } from "react";
import { calculatePoints } from "@/lib/scoring";
import { saveSession } from "@/lib/storage";

/**
 * useSessionScoring — tracks tap intervals and session duration.
 * Call recordTap() on every japa tap.
 * Call endSession(japaCount) when the user ends their session.
 */
export function useSessionScoring(streakDays = 0) {
  const sessionStart = useRef(Date.now());
  const [tapIntervals, setTapIntervals] = useState([]);
  const lastTapTime = useRef(null);
  const totalSessionJapa = useRef(0); // ✅ Ye kabhi reset nahi hoga

  // Call this on every japa tap
  const recordTap = () => {
    const now = Date.now();
    totalSessionJapa.current += 1; // ✅ Har tap pe +1
    if (lastTapTime.current !== null) {
      const interval = (now - lastTapTime.current) / 1000;
      setTapIntervals((prev) => [...prev, interval]);
    }
    lastTapTime.current = now;
  };

  // Call this when session ends (user clicks "End Session" button)
  const endSession = () => {
    const japaCount = totalSessionJapa.current;
    const sessionDurationSeconds = (Date.now() - sessionStart.current) / 1000;
    const pointsEarned = calculatePoints({
      japaCount,
      sessionDurationSeconds,
      streakDays,
      tapIntervals,
    });

    const session = {
      date: new Date().toISOString().slice(0, 10),
      malaCount: Math.floor(japaCount / 108),
      japaCount,
      sessionDurationSeconds,
      tapIntervals,
      streakDays,
      pointsEarned,
    };

    saveSession(session);

    // Reset for next session
    sessionStart.current = Date.now();
    setTapIntervals([]);
    lastTapTime.current = null;

    return pointsEarned;
  };

  return { recordTap, endSession, tapIntervals };
}
