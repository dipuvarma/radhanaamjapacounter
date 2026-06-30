"use client";

import { useJapaState } from "@/hooks/useJapaState";
import { FormatTime } from "@/utils/helper";

const CounterPanel = () => {
  const { japaCount, malaCount, elapseSeconds } = useJapaState();

  return (
    <div className="mt-8 sm:mt-2 flex justify-center">
      <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-amber-100 via-gray-50 to-amber-100 outline-1 outline-amber-300 py-1 px-4 shadow-sm rounded-full">
        <p className="text-sm text-amber-900">Japa: {japaCount}</p>
        <p className="text-sm text-amber-900">Mala: {malaCount}</p>
        <p className="text-sm text-amber-900">
          Time: {FormatTime(elapseSeconds)}
        </p>
      </div>
    </div>
  );
};

export default CounterPanel;
