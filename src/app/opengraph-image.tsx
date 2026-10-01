import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// 카카오톡·슬랙 등에 링크를 붙여 넣을 때 보이는 미리보기 이미지입니다.
export const alt = `${profile.name} 개발자 포트폴리오`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const title = [profile.name, "개발자 포트폴리오"];

// 이미지에 들어가는 글자만 골라 Google Fonts에서 받아옵니다.
async function loadFont(family: string, text: string) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`).then((res) =>
    res.text(),
  );
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`${family} 폰트를 불러오지 못했어요`);
  return fetch(url).then((res) => res.arrayBuffer());
}

// 첫 화면 고양이를 단순하게 옮긴 그림입니다.
const catSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230">
  <circle cx="115" cy="125" r="105" fill="#5764a2"/>
  <ellipse cx="115" cy="225" rx="75" ry="55" fill="#ffd8a8"/>
  <path d="M70 98 L62 40 L110 80 Z" fill="#ffd8a8" stroke="#ffd8a8" stroke-width="12" stroke-linejoin="round"/>
  <path d="M160 98 L168 40 L120 80 Z" fill="#ffd8a8" stroke="#ffd8a8" stroke-width="12" stroke-linejoin="round"/>
  <path d="M77 86 L73 56 L98 78 Z" fill="#ff9db5"/>
  <path d="M153 86 L157 56 L132 78 Z" fill="#ff9db5"/>
  <circle cx="115" cy="132" r="58" fill="#ffd8a8"/>
  <path d="M104 80 v12 M115 77 v14 M126 80 v12" stroke="#f5b97a" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="93" cy="137" rx="5" ry="7" fill="#2b2f4a"/>
  <ellipse cx="137" cy="137" rx="5" ry="7" fill="#2b2f4a"/>
  <circle cx="93" cy="136" r="17" fill="none" stroke="#2b2f4a" stroke-width="4"/>
  <circle cx="137" cy="136" r="17" fill="none" stroke="#2b2f4a" stroke-width="4"/>
  <path d="M110 134 Q115 130 120 134" stroke="#2b2f4a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse cx="74" cy="164" rx="10" ry="6" fill="#ff9db5" opacity="0.7"/>
  <ellipse cx="156" cy="164" rx="10" ry="6" fill="#ff9db5" opacity="0.7"/>
  <path d="M110 154 Q115 160 120 154 Z" fill="#ff7f9c"/>
  <path d="M105 163 Q110 169 115 163 Q120 169 125 163" stroke="#2b2f4a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;

export default async function Image() {
  const text = [...title, profile.role, ...profile.intro].join("");
  const [doHyeon, notoSans] = await Promise.all([loadFont("Do+Hyeon", text), loadFont("Noto+Sans+KR:wght@500", text)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "#4a5794",
          color: "#ffffff",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 22px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "#b9caff",
              fontSize: 24,
              letterSpacing: 6,
            }}
          >
            {profile.role}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontFamily: "Do Hyeon", fontSize: 96, lineHeight: 1.15 }}>
            <span>{title[0]}</span>
            <span style={{ display: "flex" }}>
              개발자&nbsp;<span style={{ color: "#ffd8a8" }}>포트폴리오</span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 30, fontSize: 30, color: "rgba(255,255,255,0.8)" }}>
            {profile.intro.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/svg+xml;base64,${Buffer.from(catSvg).toString("base64")}`} width={380} height={380} alt="" />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Do Hyeon", data: doHyeon, weight: 400, style: "normal" },
        { name: "Noto Sans KR", data: notoSans, weight: 500, style: "normal" },
      ],
    },
  );
}
