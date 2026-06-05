"use client";

import { useJapaState } from "@/hooks/useJapaState";
import { CounterPanel, DeityDisplay } from "..";

const HeroSection = () => {
  const { handleIncreaseJapaCount } = useJapaState();

  const handleJapaCount = () => {
    handleIncreaseJapaCount();
  };

  return (
    <section onClick={handleJapaCount} className="w-full select-none">
      <section className=" max-w-4xl mx-auto px-4 py-8">
        <h1 className="primary-heading text-center font-semibold text-amber-900 cinzel-heading">
          Radhe Radhe
        </h1>

        <CounterPanel />
        <DeityDisplay />
      </section>
    </section>
  );
};

export default HeroSection;
