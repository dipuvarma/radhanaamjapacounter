import Image from "next/image";
import BeadCircle from "./BeadCircle";

/**
 * DeityDisplay
 *
 * Renders the 108-bead mala ring (BeadCircle SVG) with a circular deity
 * image overlaid at the center of the ring.
 *
 * How the overlay works:
 *  - The parent div is `relative` and sized to match BeadCircle's SVG container.
 *  - The SVG viewBox is 412×412; the inner circle radius is 148 SVG units.
 *  - Inner circle diameter ÷ total SVG size = 296 / 412 ≈ 72% → that's the image size.
 *  - `absolute inset-0 flex items-center justify-center` puts the image
 *    exactly in the visual center of the rendered SVG.
 */
const DeityDisplay = () => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {/* The 108-bead mala ring */}
      <BeadCircle />

      {/* Deity image — centered inside the bead ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative rounded-full overflow-hidden
                     border-4 border-(--color-light-yellow)
                     shadow-[0_0_24px_6px_rgba(249,187,77,0.45)]"
          style={{ width: "72%", aspectRatio: "1 / 1" }}
        >
          <Image
            src="/images/radha.jpg"
            alt="Radha Ji"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DeityDisplay;
