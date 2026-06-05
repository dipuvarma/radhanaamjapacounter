"use client";

import { useJapaState } from "@/hooks/useJapaState";

const TOTAL_BEADS = 108;
const RING_RADIUS = 170;
const BEAD_R = 8;
const SUMERU_R = 12; // special top bead (sumeru / guru bead)
const SVG_SIZE = (RING_RADIUS + BEAD_R + SUMERU_R + 16) * 2;
const CX = SVG_SIZE / 2;
const CY = SVG_SIZE / 2;

// Pre-compute bead positions once (outside component for perf)
const beads = Array.from({ length: TOTAL_BEADS }, (_, i) => {
  const angle = (i / TOTAL_BEADS) * 2 * Math.PI - Math.PI / 2; // start at top
  return {
    index: i,
    x: CX + RING_RADIUS * Math.cos(angle),
    y: CY + RING_RADIUS * Math.sin(angle),
    isSumeru: i === 0, // first bead = sumeru (guru bead)
  };
});

const BeadCircle = () => {
  const { japaCount } = useJapaState();

  return (
    <div className="flex flex-col items-center gap-2">
      {/* SVG Mala */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <svg
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="108 bead mala circle"
          role="img"
          className="w-full h-auto drop-shadow-lg"
        >
          {/* Gradient definitions */}
          <defs>
            {/* Bead gradient — saffron to yellow */}
            <radialGradient id="bead-grad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FAD199" />
              <stop offset="60%" stopColor="#F37420" />
              <stop offset="100%" stopColor="#c45a10" />
            </radialGradient>

            {/* Unchanted/Sandalwood bead gradient */}
            <radialGradient id="unchanted-bead-grad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFEAD2" />
              <stop offset="60%" stopColor="#EBC39A" />
              <stop offset="100%" stopColor="#C89D7C" />
            </radialGradient>

            {/* Sumeru (guru) bead gradient — gold */}
            <radialGradient id="sumeru-grad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fffde7" />
              <stop offset="50%" stopColor="#F9BB4D" />
              <stop offset="100%" stopColor="#b8860b" />
            </radialGradient>

            {/* Center glow */}
            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FAE6B8" stopOpacity="1" />
              <stop offset="70%" stopColor="#FAD199" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F9BB4D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer glow ring */}
          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS + BEAD_R + 6}
            fill="none"
            stroke="#F9BB4D"
            strokeWidth="1"
            opacity="0.25"
          />

          {/* Dashed guide ring (the mala string) */}
          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS}
            fill="none"
            stroke="#FAD199"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            opacity="0.5"
          />

          {/* Inner decorative ring */}
          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS - BEAD_R - 10}
            fill="none"
            stroke="#F9BB4D"
            strokeWidth="0.8"
            opacity="0.2"
          />

          {/* Center soft glow */}
          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS - BEAD_R - 14}
            fill="url(#center-glow)"
          />

          {/* 108 Beads */}
          {beads.map(({ x, y, index, isSumeru }) => {
            const isChanted = !isSumeru && index <= japaCount;
            const isActive = !isSumeru && index === japaCount + 1;

            return isSumeru ? (
              /* Sumeru / Guru bead — larger, gold */
              <g key={index}>
                {/* Halo */}
                <circle
                  cx={x}
                  cy={y}
                  r={SUMERU_R + 5}
                  fill="#F9BB4D"
                  opacity="0.25"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={SUMERU_R}
                  fill="url(#sumeru-grad)"
                  stroke="#b8860b"
                  strokeWidth="1.5"
                />
                {/* Tiny cross mark on sumeru */}
                <line
                  x1={x - 4}
                  y1={y}
                  x2={x + 4}
                  y2={y}
                  stroke="#7a5400"
                  strokeWidth="1.2"
                  opacity="0.6"
                />
                <line
                  x1={x}
                  y1={y - 4}
                  x2={x}
                  y2={y + 4}
                  stroke="#7a5400"
                  strokeWidth="1.2"
                  opacity="0.6"
                />
              </g>
            ) : (
              /* Regular bead */
              <g key={index}>
                {/* Active bead pulsing glow */}
                {isActive && (
                  <circle
                    cx={x}
                    cy={y}
                    r={BEAD_R + 6}
                    fill="none"
                    stroke="#F37420"
                    strokeWidth="1.5"
                    opacity="0.7"
                    className="animate-ping"
                    style={{
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={
                    isActive ? BEAD_R + 2.5 : isChanted ? BEAD_R + 0.5 : BEAD_R
                  }
                  fill={
                    isChanted || isActive
                      ? "url(#bead-grad)"
                      : "url(#unchanted-bead-grad)"
                  }
                  stroke={isChanted || isActive ? "#c45a10" : "#A7724C"}
                  strokeWidth={isActive ? "1.5" : "0.8"}
                  opacity={isActive ? "1" : isChanted ? "0.95" : "0.6"}
                  style={{
                    transition: "all 0.3s ease-in-out",
                    transformOrigin: `${x}px ${y}px`,
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BeadCircle;
