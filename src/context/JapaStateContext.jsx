"use client";

import { createContext, useEffect, useState } from "react";

export const JapaStateContext = createContext();

export const JapaStateProvider = ({ children }) => {
  const [japaCount, setJapaCount] = useState(0);
  const [malaCount, setMalaCount] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [elapseSeconds, setElapseSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapseSeconds((prev) => prev + 1);
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
  };

  const values = {
    japaCount,
    malaCount,
    elapseSeconds,
    handleIncreaseJapaCount,
  };

  return (
    <JapaStateContext.Provider value={values}>
      {children}
    </JapaStateContext.Provider>
  );
};
