// ─── JAPA POINTS SCORING SYSTEM ──────────────────────────────────────────────
// Formula: Final Points = MalaCount × TimeScore × StreakMultiplier × TapScore
// Designed to reward genuine bhakts and assign 0 to auto-clickers/bots.

// ─── 1. MALA COUNT ───────────────────────────────────────────
// Only complete malas count. 107 japa = 0 mala.
export function getMalaCount(japaCount) {
  return Math.floor(japaCount / 108);
}

// ─── 2. TIME SCORE ───────────────────────────────────────────
// 1 mala = ~4 minutes for average person
// Checks if speed is human-like
export function getTimeScore(malaCount, sessionDurationSeconds) {
  if (malaCount === 0) return 0;

  const expectedSeconds = malaCount * 4 * 60; // 4 min per mala
  const ratio = sessionDurationSeconds / expectedSeconds;

  if (ratio < 0.5) return 0;   // Too fast → bot
  if (ratio < 1.0) return 0.7; // Fast but human possible
  if (ratio <= 2.0) return 1.0; // Perfect range
  if (ratio <= 4.0) return 0.8; // A bit slow
  return 0.3;                   // Phone rakh diya
}

// ─── 3. STREAK MULTIPLIER ────────────────────────────────────
// Rewards daily consistency
export function getStreakMultiplier(streakDays) {
  if (streakDays >= 30) return 2.0;
  if (streakDays >= 14) return 1.5;
  if (streakDays >= 7)  return 1.2;
  return 1.0;
}

// ─── 4. TAP AUTHENTICITY SCORE ───────────────────────────────
// Measures average gap between taps
// Too fast = bot, too slow = phone left on table
export function getTapScore(tapIntervals) {
  if (tapIntervals.length < 5) return 0.5; // Not enough data

  const avg = tapIntervals.reduce((a, b) => a + b, 0) / tapIntervals.length;

  if (avg < 0.3)  return 0;   // Auto-clicker
  if (avg <= 2.0) return 1.0; // Human range (0.3s to 2s per tap)
  if (avg <= 10)  return 0.7; // Distracted
  return 0.2;                  // Phone rakha tha
}

// ─── FINAL POINTS CALCULATOR ─────────────────────────────────
export function calculatePoints({
  japaCount,
  sessionDurationSeconds,
  streakDays,
  tapIntervals,
}) {
  const mala      = getMalaCount(japaCount);
  const timeScore = getTimeScore(mala, sessionDurationSeconds);
  const streak    = getStreakMultiplier(streakDays);
  const tapScore  = getTapScore(tapIntervals);

  const raw = mala * timeScore * streak * tapScore;
  return Math.round(raw * 100) / 100; // Round to 2 decimal places
}
