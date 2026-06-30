import {
  getAnalyticsData,
  saveAnalyticsData,
} from "@/features/analytics/utils/analyticsStorage";

export const FormatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const getLocalDateString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
};

export const updateChatAnalytics = (countToAdd = 1) => {
  const data = getAnalyticsData();
  const today = getLocalDateString();

  if (!data.dailyStats[today]) {
    data.dailyStats[today] = { count: 0, duration: 0, malas: 0 };
  }

  data.dailyStats[today].count += countToAdd;
  data.dailyStats[today].malas = Math.floor(data.dailyStats[today].count / 108);

  // B. Summary Update
  data.summary.lifetimeCount += countToAdd;

  // C. Streak Calculation
  const lastActive = data.summary.lastChantedDate;

  if (!lastActive) {
    data.summary.currentStreak = 1;
  } else if (lastActive === today) {
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastActive === yesterdayStr) {
      data.summary.currentStreak += 1;
    } else {
      data.summary.currentStreak = 1;
    }
  }

  data.summary.lastChantedDate = today;
  if (data.summary.currentStreak > data.summary.longestStreak) {
    data.summary.longestStreak = data.summary.currentStreak;
  }

  saveAnalyticsData(data);
  return data;
};

export const verifyStreakValidity = () => {
  const data = getAnalyticsData();
  const today = getLocalDateString();
  const lastActive = data.summary.lastChantedDate;

  if (lastActive && lastActive !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastActive !== yesterdayStr) {
      data.summary.currentStreak = 0;
      saveAnalyticsData(data);
    }
  }
  return data;
};

export const updateDurationAnalytics = (secondsToAdd) => {
  const data = getAnalyticsData();
  const today = getLocalDateString();

  if (!data.dailyStats[today]) {
    data.dailyStats[today] = { count: 0, duration: 0, malas: 0 };
  }

  // Daily aur Lifetime summary dono mein duration add karein
  data.dailyStats[today].duration += secondsToAdd;
  data.summary.lifetimeDuration += secondsToAdd;

  saveAnalyticsData(data);
  return data;
};

export const getCurrentMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[currentMonth];
};
