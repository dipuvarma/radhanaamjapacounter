import Image from "next/image";
import BeadCircle from "./BeadCircle";

const DeityDisplay = ({ imgSrc, altDescription }) => {
  return (
    <div className="relative sm:mt-0 mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <BeadCircle />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative rounded-full overflow-hidden
                     border-4 border-(--color-light-yellow)
                     shadow-[0_0_24px_6px_rgba(249,187,77,0.45)]"
          style={{ width: "72%", aspectRatio: "1 / 1" }}
        >
          <Image
            src={imgSrc}
            alt={altDescription}
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
