const STORAGE_KEY = "japa_analytics_db";

const DEFAULT_DATA = {
  summary: {
    currentStreak: 0,
    longestStreak: 0,
    lastChantedDate: "",
    lifetimeCount: 0,
    lifetimeDuration: 0,
  },
  dailyStats: {},
};

//For Data loading from localstorage
export const getAnalyticsData = () => {
  if (typeof window === "undefined") return DEFAULT_DATA;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_DATA;
  } catch (error) {
    console.log("LocalStorage Read Error:", error);
    return DEFAULT_DATA;
  }
};

// For Data Save in LocalStorage
export const saveAnalyticsData = (data) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Localstorage write error", error);
  }
};
