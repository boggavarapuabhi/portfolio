"use client";

import { motion } from "framer-motion";

// Small Indian village/town with temple, school, houses, trees
export function IndianVillageSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Ground */}
      <rect x="0" y="180" width="800" height="20" fill="currentColor" opacity="0.15" />

      {/* Trees */}
      <g opacity="0.3">
        <circle cx="50" cy="150" r="18" fill="currentColor" />
        <rect x="47" y="165" width="6" height="15" fill="currentColor" />
        <circle cx="120" cy="140" r="22" fill="currentColor" />
        <rect x="117" y="158" width="6" height="22" fill="currentColor" />
      </g>

      {/* Small house 1 */}
      <g opacity="0.25">
        <rect x="160" y="140" width="50" height="40" fill="currentColor" />
        <polygon points="160,140 185,115 210,140" fill="currentColor" />
        <rect x="175" y="155" width="12" height="25" fill="#050505" opacity="0.5" />
        <rect x="195" y="148" width="8" height="8" fill="#050505" opacity="0.3" />
      </g>

      {/* School building */}
      <g opacity="0.35">
        <rect x="240" y="110" width="90" height="70" fill="currentColor" />
        <rect x="245" y="105" width="80" height="10" fill="currentColor" />
        <rect x="260" y="115" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="280" y="115" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="300" y="115" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="260" y="135" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="280" y="135" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="300" y="135" width="12" height="12" fill="#050505" opacity="0.3" />
        <rect x="275" y="155" width="18" height="25" fill="#050505" opacity="0.4" />
        {/* Flag */}
        <line x1="285" y1="105" x2="285" y2="85" stroke="currentColor" strokeWidth="2" />
        <rect x="285" y="85" width="15" height="10" fill="currentColor" opacity="0.6" />
      </g>

      {/* Temple */}
      <g opacity="0.3">
        <rect x="380" y="100" width="60" height="80" fill="currentColor" />
        <polygon points="380,100 410,55 440,100" fill="currentColor" />
        <polygon points="395,100 410,75 425,100" fill="currentColor" opacity="0.5" />
        {/* Temple dome/kalash */}
        <circle cx="410" cy="55" r="5" fill="currentColor" />
        <line x1="410" y1="50" x2="410" y2="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="410" cy="38" r="3" fill="currentColor" />
        {/* Pillars */}
        <rect x="388" y="130" width="6" height="50" fill="currentColor" opacity="0.7" />
        <rect x="426" y="130" width="6" height="50" fill="currentColor" opacity="0.7" />
        <rect x="395" y="150" width="30" height="30" fill="#050505" opacity="0.3" />
      </g>

      {/* More houses */}
      <g opacity="0.2">
        <rect x="480" y="145" width="40" height="35" fill="currentColor" />
        <polygon points="480,145 500,125 520,145" fill="currentColor" />
        <rect x="493" y="155" width="10" height="25" fill="#050505" opacity="0.4" />
      </g>

      {/* Water tank / tower */}
      <g opacity="0.2">
        <rect x="550" y="100" width="5" height="80" fill="currentColor" />
        <rect x="570" y="100" width="5" height="80" fill="currentColor" />
        <rect x="540" y="90" width="45" height="15" fill="currentColor" />
        <rect x="545" y="80" width="35" height="12" fill="currentColor" />
      </g>

      {/* Coconut trees */}
      <g opacity="0.25">
        <path d="M640 180 Q642 140 645 120" stroke="currentColor" strokeWidth="4" fill="none" />
        <ellipse cx="650" cy="115" rx="18" ry="8" fill="currentColor" transform="rotate(-20 650 115)" />
        <ellipse cx="638" cy="118" rx="16" ry="7" fill="currentColor" transform="rotate(15 638 118)" />

        <path d="M720 180 Q718 150 715 130" stroke="currentColor" strokeWidth="4" fill="none" />
        <ellipse cx="708" cy="125" rx="16" ry="7" fill="currentColor" transform="rotate(20 708 125)" />
        <ellipse cx="720" cy="128" rx="15" ry="6" fill="currentColor" transform="rotate(-15 720 128)" />
      </g>

      {/* Birds */}
      <g opacity="0.15">
        <path d="M200 50 Q205 45 210 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M220 40 Q225 35 230 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M180 60 Q185 55 190 60" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}

// Hyderabad skyline with Charminar, HITEC city buildings
export function HyderabadSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <rect x="0" y="185" width="800" height="15" fill="currentColor" opacity="0.15" />

      {/* HITEC City buildings (left) */}
      <g opacity="0.2">
        <rect x="30" y="80" width="35" height="105" fill="currentColor" />
        <rect x="33" y="85" width="6" height="6" fill="#050505" opacity="0.4" />
        <rect x="42" y="85" width="6" height="6" fill="#050505" opacity="0.4" />
        <rect x="51" y="85" width="6" height="6" fill="#050505" opacity="0.4" />
        <rect x="33" y="95" width="6" height="6" fill="#050505" opacity="0.4" />
        <rect x="42" y="95" width="6" height="6" fill="#050505" opacity="0.4" />
        <rect x="51" y="95" width="6" height="6" fill="#050505" opacity="0.4" />
      </g>

      <g opacity="0.25">
        <rect x="75" y="60" width="40" height="125" fill="currentColor" />
        <rect x="80" y="55" width="30" height="8" fill="currentColor" />
        {/* Windows grid */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <g key={`hw1-${i}`}>
            <rect x={80} y={68 + i * 13} width="5" height="5" fill="#050505" opacity="0.3" />
            <rect x={88} y={68 + i * 13} width="5" height="5" fill="#050505" opacity="0.3" />
            <rect x={96} y={68 + i * 13} width="5" height="5" fill="#050505" opacity="0.3" />
            <rect x={104} y={68 + i * 13} width="5" height="5" fill="#050505" opacity="0.3" />
          </g>
        ))}
      </g>

      {/* University-style building */}
      <g opacity="0.3">
        <rect x="150" y="100" width="80" height="85" fill="currentColor" />
        <rect x="155" y="95" width="70" height="8" fill="currentColor" />
        <polygon points="160,95 190,75 220,95" fill="currentColor" />
        {/* GITAM text area */}
        <rect x="170" y="110" width="40" height="6" fill="currentColor" opacity="0.6" />
        <rect x="165" y="125" width="10" height="10" fill="#050505" opacity="0.3" />
        <rect x="180" y="125" width="10" height="10" fill="#050505" opacity="0.3" />
        <rect x="195" y="125" width="10" height="10" fill="#050505" opacity="0.3" />
        <rect x="180" y="155" width="18" height="30" fill="#050505" opacity="0.4" />
      </g>

      {/* Charminar (center) */}
      <g opacity="0.35">
        {/* Base */}
        <rect x="330" y="100" width="140" height="85" fill="currentColor" />
        {/* Arches */}
        <path d="M355 185 L355 140 Q380 120 405 140 L405 185" fill="#050505" opacity="0.4" />
        <path d="M395 185 L395 140 Q420 120 445 140 L445 185" fill="#050505" opacity="0.4" />
        {/* Minarets */}
        <rect x="330" y="50" width="12" height="55" fill="currentColor" />
        <rect x="458" y="50" width="12" height="55" fill="currentColor" />
        <rect x="345" y="60" width="12" height="45" fill="currentColor" />
        <rect x="443" y="60" width="12" height="45" fill="currentColor" />
        {/* Minaret tops */}
        <polygon points="330,50 336,30 342,50" fill="currentColor" />
        <polygon points="458,50 464,30 470,50" fill="currentColor" />
        <polygon points="345,60 351,42 357,60" fill="currentColor" />
        <polygon points="443,60 449,42 455,60" fill="currentColor" />
        {/* Dome balls */}
        <circle cx="336" cy="28" r="3" fill="currentColor" />
        <circle cx="464" cy="28" r="3" fill="currentColor" />
        <circle cx="351" cy="40" r="3" fill="currentColor" />
        <circle cx="449" cy="40" r="3" fill="currentColor" />
        {/* Center dome */}
        <path d="M375 100 Q400 70 425 100" fill="currentColor" />
        <circle cx="400" cy="73" r="4" fill="currentColor" />
      </g>

      {/* More modern buildings */}
      <g opacity="0.2">
        <rect x="520" y="70" width="30" height="115" fill="currentColor" />
        <rect x="560" y="90" width="35" height="95" fill="currentColor" />
        <rect x="605" y="110" width="25" height="75" fill="currentColor" />
      </g>

      {/* Telecom tower */}
      <g opacity="0.15">
        <rect x="680" y="40" width="4" height="145" fill="currentColor" />
        <line x1="660" y1="60" x2="682" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="704" y1="60" x2="684" y2="50" stroke="currentColor" strokeWidth="2" />
        <circle cx="682" cy="45" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}

// Manhattan / NYC skyline with Empire State, Freedom Tower, Brooklyn Bridge
export function NYCSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <rect x="0" y="200" width="800" height="20" fill="currentColor" opacity="0.15" />

      {/* Brooklyn Bridge (left) */}
      <g opacity="0.2">
        <rect x="20" y="120" width="8" height="80" fill="currentColor" />
        <rect x="110" y="120" width="8" height="80" fill="currentColor" />
        {/* Cables */}
        <path d="M24 120 Q67 160 114 120" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M24 120 Q67 155 114 120" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Vertical cables */}
        {[30,45,60,75,90,100].map(x => (
          <line key={`bc-${x}`} x1={x} y1={145} x2={x} y2={200} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        ))}
        {/* Road */}
        <rect x="20" y="170" width="100" height="4" fill="currentColor" opacity="0.3" />
        {/* Gothic arches */}
        <path d="M22 140 L24 125 L26 140" fill="currentColor" opacity="0.4" />
        <path d="M112 140 L114 125 L116 140" fill="currentColor" opacity="0.4" />
      </g>

      {/* Building cluster 1 */}
      <g opacity="0.25">
        <rect x="140" y="90" width="30" height="110" fill="currentColor" />
        <rect x="175" y="110" width="25" height="90" fill="currentColor" />
        <rect x="205" y="80" width="35" height="120" fill="currentColor" />
      </g>

      {/* Freedom Tower / One WTC */}
      <g opacity="0.35">
        <polygon points="280,200 290,20 310,20 320,200" fill="currentColor" />
        {/* Antenna */}
        <line x1="300" y1="20" x2="300" y2="-5" stroke="currentColor" strokeWidth="2" />
        <circle cx="300" cy="-8" r="3" fill="currentColor" />
        {/* Windows */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
          <g key={`wtc-${i}`}>
            <rect x={288 + (i * 0.3)} y={30 + i * 13} width="3" height="8" fill="#050505" opacity="0.2" />
            <rect x={297 + (i * -0.1)} y={30 + i * 13} width="3" height="8" fill="#050505" opacity="0.2" />
            <rect x={306 + (i * -0.3)} y={30 + i * 13} width="3" height="8" fill="#050505" opacity="0.2" />
          </g>
        ))}
      </g>

      {/* Mid buildings */}
      <g opacity="0.2">
        <rect x="330" y="100" width="28" height="100" fill="currentColor" />
        <rect x="362" y="120" width="22" height="80" fill="currentColor" />
      </g>

      {/* Empire State Building */}
      <g opacity="0.35">
        <rect x="400" y="60" width="50" height="140" fill="currentColor" />
        <rect x="408" y="40" width="34" height="25" fill="currentColor" />
        <rect x="415" y="25" width="20" height="18" fill="currentColor" />
        <rect x="420" y="10" width="10" height="18" fill="currentColor" />
        {/* Antenna */}
        <line x1="425" y1="10" x2="425" y2="-15" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="425" cy="-18" r="2" fill="currentColor" />
        {/* Windows */}
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <g key={`esb-${i}`}>
            <rect x="405" y={68 + i * 14} width="5" height="8" fill="#050505" opacity="0.2" />
            <rect x="414" y={68 + i * 14} width="5" height="8" fill="#050505" opacity="0.2" />
            <rect x="423" y={68 + i * 14} width="5" height="8" fill="#050505" opacity="0.2" />
            <rect x="432" y={68 + i * 14} width="5" height="8" fill="#050505" opacity="0.2" />
            <rect x="441" y={68 + i * 14} width="5" height="8" fill="#050505" opacity="0.2" />
          </g>
        ))}
      </g>

      {/* Chrysler-style building */}
      <g opacity="0.25">
        <rect x="470" y="80" width="35" height="120" fill="currentColor" />
        <polygon points="470,80 487,50 505,80" fill="currentColor" />
        {/* Art deco crown */}
        <polygon points="475,80 487,60 500,80" fill="currentColor" opacity="0.6" />
        <line x1="487" y1="50" x2="487" y2="40" stroke="currentColor" strokeWidth="2" />
      </g>

      {/* More skyscrapers */}
      <g opacity="0.2">
        <rect x="520" y="100" width="28" height="100" fill="currentColor" />
        <rect x="555" y="75" width="32" height="125" fill="currentColor" />
        <rect x="593" y="95" width="25" height="105" fill="currentColor" />
        <rect x="625" y="110" width="30" height="90" fill="currentColor" />
      </g>

      {/* Statue of Liberty (far right, small) */}
      <g opacity="0.2" transform="translate(700, 100)">
        {/* Pedestal */}
        <polygon points="10,100 0,80 40,80 30,100" fill="currentColor" />
        <rect x="8" y="60" width="24" height="22" fill="currentColor" />
        {/* Body */}
        <rect x="14" y="25" width="12" height="38" fill="currentColor" />
        {/* Head */}
        <circle cx="20" cy="22" r="6" fill="currentColor" />
        {/* Crown */}
        <polygon points="14,18 20,8 26,18" fill="currentColor" />
        {/* Torch arm */}
        <line x1="26" y1="35" x2="35" y2="15" stroke="currentColor" strokeWidth="3" />
        <circle cx="36" cy="12" r="4" fill="currentColor" />
        {/* Tablet */}
        <rect x="8" y="35" width="4" height="12" fill="currentColor" transform="rotate(-15 10 40)" />
      </g>

      {/* Stars */}
      <g opacity="0.1">
        <circle cx="100" cy="20" r="1" fill="currentColor" />
        <circle cx="250" cy="10" r="1.5" fill="currentColor" />
        <circle cx="500" cy="15" r="1" fill="currentColor" />
        <circle cx="650" cy="8" r="1.5" fill="currentColor" />
        <circle cx="750" cy="25" r="1" fill="currentColor" />
      </g>
    </svg>
  );
}

// Jersey City skyline (modern, shorter than NYC)
export function JerseyCitySkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <rect x="0" y="165" width="800" height="15" fill="currentColor" opacity="0.15" />

      {/* Goldman Sachs Tower */}
      <g opacity="0.3">
        <rect x="100" y="30" width="40" height="135" fill="currentColor" />
        <rect x="95" y="25" width="50" height="8" fill="currentColor" />
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <g key={`gs-${i}`}>
            <rect x="105" y={38 + i * 12} width="5" height="6" fill="#050505" opacity="0.2" />
            <rect x="115" y={38 + i * 12} width="5" height="6" fill="#050505" opacity="0.2" />
            <rect x="125" y={38 + i * 12} width="5" height="6" fill="#050505" opacity="0.2" />
          </g>
        ))}
      </g>

      {/* Various buildings */}
      <g opacity="0.2">
        <rect x="160" y="60" width="30" height="105" fill="currentColor" />
        <rect x="200" y="80" width="35" height="85" fill="currentColor" />
        <rect x="250" y="50" width="28" height="115" fill="currentColor" />
        <rect x="290" y="70" width="32" height="95" fill="currentColor" />
      </g>

      {/* Waterfront */}
      <g opacity="0.1">
        <path d="M0 170 Q100 165 200 170 Q300 175 400 170 Q500 165 600 170 Q700 175 800 170" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>

      {/* Trees/park area */}
      <g opacity="0.15">
        <circle cx="450" cy="145" r="15" fill="currentColor" />
        <circle cx="480" cy="148" r="12" fill="currentColor" />
        <circle cx="510" cy="142" r="16" fill="currentColor" />
        <circle cx="540" cy="150" r="10" fill="currentColor" />
      </g>

      {/* More buildings right side */}
      <g opacity="0.2">
        <rect x="600" y="75" width="30" height="90" fill="currentColor" />
        <rect x="640" y="90" width="25" height="75" fill="currentColor" />
        <rect x="680" y="60" width="35" height="105" fill="currentColor" />
        <rect x="725" y="85" width="28" height="80" fill="currentColor" />
      </g>

      {/* Airplane */}
      <g opacity="0.12">
        <polygon points="380,25 400,20 395,25 400,30" fill="currentColor" />
        <line x1="385" y1="25" x2="370" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      </g>
    </svg>
  );
}

// Growing avatar SVG component
export function Avatar({
  stage,
  size = 48,
  color = "#6366f1",
}: {
  stage: "kid" | "teen" | "college" | "professional" | "builder";
  size?: number;
  color?: string;
}) {
  const configs = {
    kid: { bodyH: 12, headR: 7, legH: 8, hasBackpack: true, hasCap: false, hasTie: false, hasLaptop: false, hasCape: false },
    teen: { bodyH: 15, headR: 7, legH: 10, hasBackpack: false, hasCap: true, hasTie: false, hasLaptop: false, hasCape: false },
    college: { bodyH: 18, headR: 7.5, legH: 12, hasBackpack: false, hasCap: false, hasTie: false, hasLaptop: true, hasCape: false },
    professional: { bodyH: 20, headR: 8, legH: 13, hasBackpack: false, hasCap: false, hasTie: true, hasLaptop: true, hasCape: false },
    builder: { bodyH: 20, headR: 8, legH: 13, hasBackpack: false, hasCap: false, hasTie: true, hasLaptop: false, hasCape: true },
  };

  const c = configs[stage];
  const totalH = c.headR * 2 + c.bodyH + c.legH + 4;
  const cx = 25;
  const headY = c.headR + 2;
  const bodyTop = headY + c.headR + 1;
  const legTop = bodyTop + c.bodyH;

  return (
    <motion.svg
      viewBox={`0 0 50 ${totalH + 4}`}
      width={size}
      height={size * ((totalH + 4) / 50)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
    >
      {/* Cape */}
      {c.hasCape && (
        <motion.path
          d={`M${cx - 6} ${bodyTop + 2} Q${cx - 18} ${bodyTop + c.bodyH} ${cx - 10} ${legTop + c.legH} L${cx + 10} ${legTop + c.legH} Q${cx + 18} ${bodyTop + c.bodyH} ${cx + 6} ${bodyTop + 2}`}
          fill={color}
          opacity="0.3"
          animate={{ d: [
            `M${cx - 6} ${bodyTop + 2} Q${cx - 18} ${bodyTop + c.bodyH} ${cx - 10} ${legTop + c.legH} L${cx + 10} ${legTop + c.legH} Q${cx + 18} ${bodyTop + c.bodyH} ${cx + 6} ${bodyTop + 2}`,
            `M${cx - 6} ${bodyTop + 2} Q${cx - 20} ${bodyTop + c.bodyH + 3} ${cx - 12} ${legTop + c.legH + 2} L${cx + 12} ${legTop + c.legH + 2} Q${cx + 20} ${bodyTop + c.bodyH + 3} ${cx + 6} ${bodyTop + 2}`,
            `M${cx - 6} ${bodyTop + 2} Q${cx - 18} ${bodyTop + c.bodyH} ${cx - 10} ${legTop + c.legH} L${cx + 10} ${legTop + c.legH} Q${cx + 18} ${bodyTop + c.bodyH} ${cx + 6} ${bodyTop + 2}`,
          ]}}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      )}

      {/* Head */}
      <circle cx={cx} cy={headY} r={c.headR} fill={color} opacity="0.8" />

      {/* Eyes */}
      <circle cx={cx - 2.5} cy={headY - 0.5} r="1" fill="white" opacity="0.9" />
      <circle cx={cx + 2.5} cy={headY - 0.5} r="1" fill="white" opacity="0.9" />

      {/* Smile */}
      <path
        d={`M${cx - 2.5} ${headY + 2} Q${cx} ${headY + 4} ${cx + 2.5} ${headY + 2}`}
        stroke="white"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />

      {/* Graduation cap */}
      {c.hasCap && (
        <g>
          <polygon
            points={`${cx - 10},${headY - c.headR + 1} ${cx},${headY - c.headR - 4} ${cx + 10},${headY - c.headR + 1}`}
            fill={color}
          />
          <rect x={cx - 8} y={headY - c.headR} width="16" height="2" fill={color} />
          <line x1={cx + 8} y1={headY - c.headR + 1} x2={cx + 12} y2={headY - c.headR + 6} stroke={color} strokeWidth="1" />
          <circle cx={cx + 12} cy={headY - c.headR + 7} r="1.5" fill={color} />
        </g>
      )}

      {/* Body */}
      <rect
        x={cx - 6}
        y={bodyTop}
        width="12"
        height={c.bodyH}
        rx="3"
        fill={color}
        opacity="0.7"
      />

      {/* Tie */}
      {c.hasTie && (
        <g>
          <polygon
            points={`${cx - 1.5},${bodyTop + 1} ${cx + 1.5},${bodyTop + 1} ${cx},${bodyTop + 8}`}
            fill="white"
            opacity="0.6"
          />
        </g>
      )}

      {/* Arms */}
      <line x1={cx - 6} y1={bodyTop + 3} x2={cx - 12} y2={bodyTop + c.bodyH - 2} stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1={cx + 6} y1={bodyTop + 3} x2={cx + 12} y2={bodyTop + c.bodyH - 2} stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.7" />

      {/* Backpack (kid) */}
      {c.hasBackpack && (
        <rect x={cx + 5} y={bodyTop + 2} width="6" height={c.bodyH - 4} rx="2" fill={color} opacity="0.5" />
      )}

      {/* Laptop */}
      {c.hasLaptop && (
        <g>
          <rect x={cx + 11} y={bodyTop + c.bodyH - 6} width="8" height="5" rx="1" fill={color} opacity="0.5" />
          <rect x={cx + 12} y={bodyTop + c.bodyH - 5} width="6" height="3" rx="0.5" fill="white" opacity="0.2" />
        </g>
      )}

      {/* Legs */}
      <line x1={cx - 3} y1={legTop} x2={cx - 4} y2={legTop + c.legH} stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
      <line x1={cx + 3} y1={legTop} x2={cx + 4} y2={legTop + c.legH} stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
    </motion.svg>
  );
}

// Animated building construction
export function ConstructingBuilding({ progress, color = "#6366f1" }: { progress: number; color?: string }) {
  const floors = 8;
  const visibleFloors = Math.ceil(progress * floors);

  return (
    <svg viewBox="0 0 60 120" width={60} height={120} className="opacity-20">
      {/* Crane */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 0.1 ? 0.4 : 0 }}
      >
        <line x1="50" y1="0" x2="50" y2="120" stroke={color} strokeWidth="1" />
        <line x1="20" y1="5" x2="50" y2="5" stroke={color} strokeWidth="1" />
        <line x1="30" y1="5" x2="30" y2="15" stroke={color} strokeWidth="0.5" />
      </motion.g>

      {/* Floors */}
      {Array.from({ length: floors }).map((_, i) => {
        const floorY = 110 - i * 13;
        const isVisible = i < visibleFloors;
        return (
          <motion.rect
            key={i}
            x="5"
            y={floorY}
            width="40"
            height="11"
            rx="1"
            fill={color}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isVisible ? { opacity: 0.3, scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{ transformOrigin: "5px center" }}
          />
        );
      })}
    </svg>
  );
}
