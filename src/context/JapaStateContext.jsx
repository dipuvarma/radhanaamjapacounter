"use client";

import {
  updateChatAnalytics,
  updateDurationAnalytics,
  verifyStreakValidity,
} from "@/utils/helper";
import { createContext, useEffect, useState } from "react";

export const JapaStateContext = createContext();

export const JapaStateProvider = ({ children }) => {
  const [japaCount, setJapaCount] = useState(0);
  const [malaCount, setMalaCount] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [elapseSeconds, setElapseSeconds] = useState(0);

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const initialData = verifyStreakValidity();
    setAnalytics(initialData);
  }, []);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapseSeconds((prev) => prev + 1);
        const updatedData = updateDurationAnalytics(10);
        setAnalytics(updatedData);
      }, 10000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIsRunning(false);
      }
    };
  }, [isRunning]);

  const handleIncreaseJapaCount = () => {
    if (japaCount == 0 && malaCount == 0 && !isRunning) {
      setIsRunning(true);
    }
    if (japaCount < 108) {
      setJapaCount((prev) => prev + 1);
    } else {
      setMalaCount((prev) => prev + 1);
      setJapaCount(0);
    }

    //LocalStorage
    const updatedData = updateChatAnalytics();
    setAnalytics(updatedData);
  };

  const values = {
    japaCount,
    malaCount,
    elapseSeconds,
    handleIncreaseJapaCount,
    analytics,
  };

  return (
    <JapaStateContext.Provider value={values}>
      {children}
    </JapaStateContext.Provider>
  );
};
