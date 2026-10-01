import type { Metadata } from "next";
import { Do_Hyeon, Noto_Sans_KR } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const doHyeon = Do_Hyeon({
  variable: "--font-do-hyeon",
  weight: "400",
  subsets: ["latin"],
});

// Vercel에 배포하면 실제 사이트 주소를, 로컬에서는 개발 서버 주소를 씁니다.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3100";

const title = `${profile.name} | 개발자 포트폴리오`;
const description = `${profile.intro.join(" ")} 직접 만든 서비스와 실무 경력을 소개합니다.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
    siteName: profile.logo,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${doHyeon.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
