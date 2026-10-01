// 포트폴리오에 표시되는 모든 내용은 이 파일에서 수정합니다.

export const profile = {
  name: "김혁진",
  logo: "KHJ Portfolio", // 상단 메뉴 왼쪽 로고
  role: "FULLSTACK DEVELOPER",
  intro: ["문제의 원인을 끝까지 찾아 해결하는", "풀스택 개발자 김혁진입니다."],
};

export type AboutIcon = "user" | "calendar" | "pin" | "phone" | "mail" | "school";

export const about: { icon: AboutIcon; label: string; value: string; href?: string }[] = [
  { icon: "user", label: "이름", value: "김혁진" },
  { icon: "calendar", label: "생년월일", value: "00.03.17" },
  { icon: "pin", label: "위치", value: "경기도 부천시" },
  { icon: "phone", label: "연락처", value: "010-9883-5116", href: "tel:010-9883-5116" },
  {
    icon: "mail",
    label: "이메일",
    value: "hyukjin0317@naver.com",
    href: "mailto:hyukjin0317@naver.com",
  },
  { icon: "school", label: "학력", value: "서경대학교 경영학과\n(일요일만 재학 중)" },
];

// 배지 색상은 Tailwind 클래스로 지정합니다.
export const skills: { category: string; items: { name: string; color: string }[] }[] = [
  {
    category: "Language",
    items: [
      { name: "Java", color: "bg-[#b07219] text-white" },
      { name: "TypeScript", color: "bg-[#3178c6] text-white" },
      { name: "JavaScript", color: "bg-[#f7df1e] text-black" },
      { name: "Python", color: "bg-[#3572a5] text-white" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", color: "bg-[#6db33f] text-white" },
      { name: "Spring Security", color: "bg-[#6db33f] text-white" },
      { name: "Spring Data JPA", color: "bg-[#6db33f] text-white" },
      { name: "WebSocket (STOMP)", color: "bg-[#333] text-white" },
      { name: "Flyway", color: "bg-[#cc0200] text-white" },
      { name: "Gradle", color: "bg-[#02303a] text-white" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL + PostGIS", color: "bg-[#336791] text-white" },
      { name: "Oracle", color: "bg-[#c74634] text-white" },
      { name: "MySQL", color: "bg-[#00758f] text-white" },
      { name: "Redis", color: "bg-[#dc382d] text-white" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", color: "bg-[#20232a] text-[#61dafb]" },
      { name: "Next.js", color: "bg-black text-white" },
      { name: "Vite", color: "bg-[#646cff] text-white" },
      { name: "TanStack Query", color: "bg-[#ff4154] text-white" },
      { name: "Tailwind CSS", color: "bg-[#06b6d4] text-white" },
    ],
  },
  {
    category: "Test",
    items: [
      { name: "JUnit 5", color: "bg-[#25a162] text-white" },
      { name: "Testcontainers", color: "bg-[#291a3f] text-white" },
      { name: "Playwright", color: "bg-[#2ead33] text-white" },
      { name: "Vitest", color: "bg-[#729b1b] text-white" },
      { name: "k6", color: "bg-[#7d64ff] text-white" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", color: "bg-[#2496ed] text-white" },
      { name: "GitHub Actions", color: "bg-[#2088ff] text-white" },
      { name: "Nginx", color: "bg-[#009639] text-white" },
      { name: "Vercel", color: "bg-black text-white" },
      { name: "Render", color: "bg-[#46e3b7] text-black" },
      { name: "Supabase", color: "bg-[#3ecf8e] text-black" },
    ],
  },
];

export const archiving: { title: string; url: string; description: string; bullets: string[] }[] = [
  {
    title: "GitHub",
    url: "https://github.com/khj0317",
    description: "소스 코드 저장소",
    bullets: ["프로젝트 소스 코드와 README 문서", "테스트 코드와 배포 설정까지 함께 공개"],
  },
];

export type Project = {
  title: string;
  category: string;
  period: string;
  team: string;
  images: { src: string; alt: string }[];
  summary: string;
  bullets: string[];
  demo?: string;
  github: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "FitMate",
    category: "풀스택",
    period: "2026.10",
    team: "1인 개인 프로젝트",
    images: [
      { src: "/projects/fitmate/matching.png", alt: "운동 메이트 추천" },
      { src: "/projects/fitmate/gatherings-map.jpg", alt: "모임 지도" },
      { src: "/projects/fitmate/chat.png", alt: "1:1 채팅" },
      { src: "/projects/fitmate/group-chat.png", alt: "모임 단체 채팅" },
      { src: "/projects/fitmate/community.png", alt: "동네 커뮤니티" },
      { src: "/projects/fitmate/admin.png", alt: "관리자 페이지" },
    ],
    summary: "내 주변에서 같이 운동할 사람을 찾고, 모임을 열고, 실시간 채팅으로 약속을 잡는 서비스",
    bullets: [
      "PostGIS 반경 검색(GIST 인덱스, ST_DWithin)과 거리·실력·운동 시간·매너 점수로 운동 메이트 추천",
      "WebSocket(STOMP)과 Redis Pub/Sub으로 여러 서버에서도 동작하는 실시간 채팅·읽음 표시·알림 구현",
      "커밋 이후에만 메시지를 발행(AFTER_COMMIT)해서 DB와 실시간 전송의 정합성 확보",
      "HttpOnly 쿠키 기반 1회용 리프레시 토큰, Safari 서드파티 쿠키 차단은 Vercel rewrite로 해결",
      "Testcontainers로 실제 PostGIS·Redis를 띄운 통합 테스트 189개 (동시성, WebSocket, 보안 포함)",
    ],
    demo: "https://fitmate-khj.vercel.app",
    github: "https://github.com/khj0317/FitMate",
    stack: ["Spring Boot", "JPA", "WebSocket", "PostgreSQL", "PostGIS", "Redis", "React", "TypeScript", "Docker"],
  },
  {
    title: "StoreFit",
    category: "풀스택",
    period: "2026.09",
    team: "1인 개인 프로젝트",
    images: [
      { src: "/projects/storefit/02-home-dashboard.png", alt: "홈 대시보드" },
      { src: "/projects/storefit/03-my-stores.png", alt: "짐 보관 현황" },
      { src: "/projects/storefit/04-category-picker.png", alt: "짐 보관하기" },
      { src: "/projects/storefit/05-store-history.png", alt: "짐 보관 내역" },
      { src: "/projects/storefit/06-payment-history.png", alt: "결제 내역" },
      { src: "/projects/storefit/07-mypage.png", alt: "마이페이지" },
    ],
    summary: "대학생·1인 가구를 위한 개인용 짐보관 관리 서비스 (실 결제 연동)",
    bullets: [
      "기획부터 백엔드, 프론트엔드, 결제 연동, 배포 준비까지 혼자 진행",
      "보관 상태 머신(예약중 → 픽업중 → 이용중 → 완료)과 결제 여부를 서버에서 검증하며 전이",
      "Toss Payments API로 결제 준비(ready) → 승인(confirm) 흐름 연동",
      "Docker로 MySQL 환경을 미리 띄워 H2 전용 마이그레이션 문법 문제를 배포 전에 발견하고 수정",
    ],
    github: "https://github.com/khj0317/StoreFit",
    stack: ["Spring Boot", "Spring Security", "JPA", "Flyway", "MySQL", "React", "TypeScript", "Docker", "Nginx"],
  },
  {
    title: "MBTI 성격 유형 검사",
    category: "프론트엔드",
    period: "2026.09",
    team: "1인 개인 프로젝트",
    images: [
      { src: "/projects/mbti/01-home.png", alt: "홈 화면" },
      { src: "/projects/mbti/02-quiz.png", alt: "질문 화면" },
      { src: "/projects/mbti/03-result.png", alt: "결과 화면" },
      { src: "/projects/mbti/04-mobile.png", alt: "모바일 화면" },
    ],
    summary: "40문항 리커트 척도로 16유형을 진단하고, 서버·DB 없이 링크 하나로 결과를 공유하는 웹 서비스",
    bullets: [
      "축마다 양극 진술을 균형 있게 배치해 묵인 편향을 줄인 40문항 설계",
      "유형과 축별 퍼센트를 쿼리스트링에 인코딩해서 DB 없이 URL만으로 결과 공유",
      "Web Share API로 모바일 공유 시트 연동, 미지원 환경은 클립보드 복사로 대체",
      "유형별 동적 OG 이미지 생성으로 메신저 링크 미리보기 카드 제공",
    ],
    demo: "https://mbti-khj.vercel.app",
    github: "https://github.com/khj0317/mbti-test",
    stack: ["Next.js", "React", "TypeScript", "Vitest", "Vercel"],
  },
];

export type Career = {
  company: string;
  start: string; // "YYYY.MM"
  end?: string; // 비워 두면 재직 중으로 표시하고, 근무 기간을 오늘 기준으로 계산합니다.
  description: string;
  roles: string[];
  works: { title: string; period?: string; description?: string; points: string[] }[];
};

// 비워 두면 CAREER 섹션이 숨겨집니다.
export const careers: Career[] = [
  {
    company: "대보정보통신(주)",
    start: "2023.10",
    description: "공공기관·기업 시스템 구축 프로젝트 개발과 사내 시스템 개발·운영",
    roles: ["Fullstack 개발", "보안 취약점 점검", "인프라·사업관리"],
    works: [
      {
        title: "예금보험공사 차세대 IT 프로젝트",
        description: "Spring 기반 미수령금 통합신청 시스템과 간편인증 API 연동 본인인증 시스템 개발",
        points: [
          "미수령금 통합신청 기능 개발: 신청 접수·조회 비즈니스 로직과 관련 SQL 개발",
          "간편인증 연계: 외부 간편인증 서비스와 인증 요청·결과 처리 연동 개발",
          "공공 서비스 특성에 맞춰 입력값 검증과 예외 처리를 강화해 데이터 정합성 확보",
        ],
      },
      {
        title: "강원랜드 ERP 개발 프로젝트",
        description: "더존 ERP 기반 안전·보건, 인사 관리 시스템 개발",
        points: [
          "인사 모듈: 인사 정보 조회·등록·수정 화면과 처리 로직, 업무 쿼리 개발",
          "안전/보건 모듈: 안전·보건 관리 업무 화면과 데이터 처리 로직 개발",
          "현업 담당자와 요구사항을 협의해 업무 프로세스를 시스템 기능으로 구현",
        ],
      },
      {
        title: "사내 시스템 개발",
        points: ["사내 수주·매출 관리 시스템 개발", "오즈리포트(OZReport)를 활용한 보고서 출력 기능 개발"],
      },
      {
        title: "보안·인프라 운영",
        points: [
          "스패로우(Sparrow)를 활용한 웹 취약점 점검 및 보안 취약점 해결",
          "NAS·NAC·Hiware 서버 관리 및 사업관리 업무 수행",
        ],
      },
    ],
  },
];
