import { profile } from "@/data/portfolio";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="flex min-h-svh items-center bg-hero px-4 pt-20 pb-12 text-white sm:px-6 sm:pt-24 sm:pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <HeroIllustration className="mx-auto w-full max-w-[270px] sm:max-w-sm lg:order-2 lg:max-w-lg" />

        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-[#b9caff]">
            {profile.role}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">
            {profile.name}
            <br />
            개발자 <span className="text-[#ffd8a8]">포트폴리오</span>
          </h1>
          <div className="my-6 flex justify-center gap-1.5 sm:my-8 lg:justify-start">
            <span className="h-1.5 w-10 rounded-full bg-[#ffd8a8]" />
            <span className="h-1.5 w-3 rounded-full bg-white/30" />
          </div>
          <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
            {profile.intro.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
