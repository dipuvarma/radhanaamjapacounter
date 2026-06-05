import { CounterPanel, DeityDisplay } from "@/features/chanting-engine";

export default function Home() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <h1 className="primary-heading font-semibold text-amber-900 cinzel-heading">Radhe Radhe</h1>
      <section>
        <CounterPanel />
        <DeityDisplay />
      </section>
    </main>
  );
}
