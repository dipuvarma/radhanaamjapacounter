import { BiLogoPlayStore } from "react-icons/bi";

export default function DownloadAppCTA() {
  return (
    <section className="relative max-w-5xl mx-auto my-20 overflow-hidden rounded-[28px] border border-white/40 bg-[#FF7A1A] p-10 sm:p-14 lg:p-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] sm:block">
        <div className="absolute -right-32 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-[#FFD8AE]/40" />
        <div className="absolute -right-16 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#FFC18A]/45" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#FFA968]/50" />
        <div className="absolute right-16 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#FF9450]/55" />
        <div className="absolute right-32 top-1/2 h-[160px] w-[160px] -translate-y-1/2 rounded-full bg-[#FF8533]/60" />
      </div>

      <div className="relative z-10 max-w-xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Download Mobile App
        </h2>

        <p className="mt-4 max-w-md text-base text-white/90 sm:text-lg">
          Your laboratory instruments should serve you, not the other way
          around. We&rsquo;re happy to help you.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="group flex items-center justify-between gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:text-base"
          >
            <BiLogoPlayStore className="text-xl" />
            <span>Download on Play Store</span>
          </button>
        </div>
      </div>
    </section>
  );
}
