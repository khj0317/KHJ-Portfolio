// 첫 화면의 고양이 개발자 일러스트입니다. 직접 그린 SVG라 저작권 걱정 없이 쓸 수 있습니다.

const ink = "#2b2f4a";
const pink = "#ff9db5";
const fur = "#ffd8a8";
const furDark = "#f5b97a";

const codeLines = [
  { x: 230, w: 60, color: "#ff9db5" },
  { x: 244, w: 96, color: "#9be7d8" },
  { x: 244, w: 70, color: "#ffe08a" },
  { x: 258, w: 84, color: "#b9a8ff" },
  { x: 244, w: 50, color: "#9be7d8" },
  { x: 230, w: 30, color: "#ff9db5" },
];

function Sparkle({ x, y, size, delay }: { x: number; y: number; size: number; delay: string }) {
  const s = size;
  return (
    <path
      className="twinkle"
      style={{ animationDelay: delay }}
      d={`M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s}Z`}
      fill="#ffe08a"
    />
  );
}

export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 340" className={className} role="img" aria-label="안경 쓴 고양이가 모니터 앞에서 손을 흔드는 그림">
      {/* 뒤쪽 둥근 배경 */}
      <circle cx="210" cy="190" r="150" fill="#5764a2" />
      <circle cx="210" cy="190" r="118" fill="#6170b0" />

      <Sparkle x={36} y={150} size={7} delay="0s" />
      <Sparkle x={395} y={30} size={6} delay="0.8s" />
      <Sparkle x={290} y={14} size={5} delay="1.4s" />
      <Sparkle x={130} y={24} size={4} delay="0.4s" />

      {/* 떠다니는 배지 */}
      <g className="float" style={{ animationDelay: "0.3s" }}>
        <rect x="16" y="48" width="58" height="34" rx="12" fill="#ffe08a" />
        <text x="45" y="71" textAnchor="middle" fontFamily="monospace" fontSize="17" fontWeight="700" fill={ink}>
          {"{ }"}
        </text>
      </g>
      <g className="float" style={{ animationDelay: "1.1s" }}>
        <rect x="330" y="62" width="66" height="34" rx="12" fill="#9be7d8" />
        <text x="363" y="85" textAnchor="middle" fontFamily="monospace" fontSize="16" fontWeight="700" fill={ink}>
          {"</>"}
        </text>
      </g>

      {/* 말풍선 */}
      <g className="float-slow">
        <rect x="150" y="34" width="138" height="40" rx="14" fill="#ffffff" />
        <path d="M170 72 L160 92 L188 72 Z" fill="#ffffff" />
        <text x="219" y="59" textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="700" fill={ink}>
          Hello, World!
        </text>
      </g>

      {/* 모니터 */}
      <rect x="205" y="112" width="195" height="138" rx="14" fill="#eef1ff" />
      <rect x="217" y="124" width="171" height="104" rx="8" fill="#1b2140" />
      {codeLines.map((line, i) => (
        <rect key={i} x={line.x} y={138 + i * 14} width={line.w} height="6" rx="3" fill={line.color} />
      ))}
      <rect className="cursor-blink" x="266" y="208" width="8" height="10" rx="1" fill="#ffffff" />
      <circle cx="302" cy="239" r="3" fill="#cfd6f5" />
      <rect x="290" y="250" width="24" height="36" fill="#cfd6f5" />
      <rect x="258" y="284" width="88" height="16" rx="8" fill="#dfe4fb" />

      {/* 몸통과 머리 */}
      <ellipse cx="115" cy="296" rx="70" ry="56" fill={fur} />
      <path d="M70 168 L62 110 L110 150 Z" fill={fur} stroke={fur} strokeWidth="12" strokeLinejoin="round" />
      <path d="M160 168 L168 110 L120 150 Z" fill={fur} stroke={fur} strokeWidth="12" strokeLinejoin="round" />
      <path d="M77 156 L73 126 L98 148 Z" fill={pink} stroke={pink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M153 156 L157 126 L132 148 Z" fill={pink} stroke={pink} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="115" cy="202" r="58" fill={fur} />
      <path d="M104 150 v12 M115 147 v14 M126 150 v12" stroke={furDark} strokeWidth="5" strokeLinecap="round" />

      {/* 안경과 눈 */}
      <g className="blink">
        <ellipse cx="93" cy="207" rx="5" ry="7" fill={ink} />
        <ellipse cx="137" cy="207" rx="5" ry="7" fill={ink} />
        <circle cx="95" cy="204" r="2" fill="#ffffff" />
        <circle cx="139" cy="204" r="2" fill="#ffffff" />
      </g>
      <circle cx="93" cy="206" r="17" fill="#ffffff" fillOpacity="0.15" stroke={ink} strokeWidth="4" />
      <circle cx="137" cy="206" r="17" fill="#ffffff" fillOpacity="0.15" stroke={ink} strokeWidth="4" />
      <path d="M110 204 Q115 200 120 204" stroke={ink} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* 볼, 코, 입 */}
      <ellipse cx="74" cy="234" rx="10" ry="6" fill={pink} opacity="0.7" />
      <ellipse cx="156" cy="234" rx="10" ry="6" fill={pink} opacity="0.7" />
      <path d="M110 224 Q115 230 120 224 Z" fill="#ff7f9c" stroke="#ff7f9c" strokeWidth="2" strokeLinejoin="round" />
      <path d="M105 233 Q110 239 115 233 Q120 239 125 233" stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path
        d="M62 222 L34 216 M62 230 L34 236 M168 222 L196 216 M168 230 L196 236"
        stroke={ink}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 손 흔드는 앞발 */}
      <g className="wave">
        <ellipse cx="182" cy="262" rx="15" ry="19" fill={fur} />
        <circle cx="176" cy="254" r="3" fill={pink} />
        <circle cx="184" cy="251" r="3" fill={pink} />
        <circle cx="191" cy="256" r="3" fill={pink} />
        <ellipse cx="183" cy="266" rx="6" ry="5" fill={pink} />
      </g>

      {/* 책상 */}
      <rect x="0" y="298" width="420" height="16" rx="8" fill="#f3d9b1" />
      <rect x="14" y="314" width="392" height="26" fill="#e2bf8e" />
      <ellipse cx="88" cy="300" rx="16" ry="9" fill={fur} />

      {/* 커피잔과 김 */}
      <path className="steam" d="M24 252 q-6 -8 0 -16 q6 -8 0 -16" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path
        className="steam"
        style={{ animationDelay: "0.9s" }}
        d="M36 252 q-6 -8 0 -16 q6 -8 0 -16"
        stroke="#ffffff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M12 272 q-12 0 -12 10 q0 10 12 10" stroke="#b9a8ff" strokeWidth="5" fill="none" />
      <rect x="12" y="260" width="36" height="40" rx="7" fill="#b9a8ff" />
      <path d="M30 287 l-6 -6 a3.5 3.5 0 0 1 6 -4 a3.5 3.5 0 0 1 6 4 Z" fill="#ffffff" />

      {/* 무당벌레 */}
      <g>
        <circle cx="382" cy="290" r="5" fill={ink} />
        <ellipse cx="370" cy="291" rx="11" ry="9" fill="#ff7f9c" />
        <path d="M370 282 V300" stroke={ink} strokeWidth="1.5" />
        <circle cx="365" cy="288" r="2" fill={ink} />
        <circle cx="375" cy="294" r="2" fill={ink} />
        <path d="M380 291 q2 2 4 0" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
