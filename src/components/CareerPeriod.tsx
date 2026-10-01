"use client";

// "2023.10" 형식의 시작·종료 월로 기간과 근무 개월 수를 보여 줍니다.
// 종료 월이 없으면 재직 중으로 보고, 방문한 날짜 기준으로 계산합니다.

function toMonthIndex(value: string) {
  const [year, month] = value.split(".").map(Number);
  return year * 12 + (month - 1);
}

function formatDuration(months: number) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years > 0 && `${years}년`, rest > 0 && `${rest}개월`].filter(Boolean).join(" ");
}

export default function CareerPeriod({ start, end }: { start: string; end?: string }) {
  const now = new Date();
  const endIndex = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
  // 시작 월과 마지막 월을 모두 포함해서 셉니다. (예: 2023.10 - 2023.12 → 3개월)
  const months = endIndex - toMonthIndex(start) + 1;

  return (
    <p className="mt-1 text-sm text-ink/50">
      {start} - {end ?? "(재직 중)"}
      <br />
      {/* 빌드한 날과 방문한 날의 달이 다르면 숫자가 달라질 수 있어 경고를 끕니다. */}
      <span suppressHydrationWarning className="font-bold text-accent">
        {formatDuration(months)}
      </span>
    </p>
  );
}
