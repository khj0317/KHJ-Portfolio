// 포트폴리오에 표시되는 모든 내용은 이 파일에서 수정합니다.

export const profile = {
  name: "김혁진",
  logo: "KHJ Portfolio", // 상단 메뉴 왼쪽 로고
  siteUrl: "https://hyeokjin-portfolio.vercel.app", // 배포 주소 (링크 미리보기에 쓰임)
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
    title: "KHJ Portfolio",
    category: "프론트엔드",
    period: "2026.10",
    team: "1인 개인 프로젝트",
    images: [
      { src: "/projects/portfolio/01-hero.png", alt: "첫 화면" },
      { src: "/projects/portfolio/02-about.png", alt: "About me" },
      { src: "/projects/portfolio/07-archiving.png", alt: "Archiving" },
      { src: "/projects/portfolio/04-projects.png", alt: "Projects" },
      { src: "/projects/portfolio/05-readme-popup.png", alt: "README 팝업" },
      { src: "/projects/portfolio/06-career.png", alt: "Career" },
      { src: "/projects/portfolio/08-mobile-hero.png", alt: "모바일 화면" },
    ],
    summary: "소개·기술·프로젝트·경력을 한 페이지에 담은 포트폴리오 사이트 (지금 보고 있는 이 사이트)",
    bullets: [
      "한 페이지 구성에 스크롤 위치에 맞춰 상단 메뉴를 강조하고, 전체·풀스택·프론트엔드 분류 탭과 모바일 화면까지 대응",
      "다른 저장소의 README를 GitHub에서 불러와 팝업으로 표시 (상대 경로 이미지·접기 메뉴 변환, rehype-sanitize로 위험한 태그 차단)",
      "README를 고쳐도 팝업에 예전 내용이 보이던 문제를 GitHub 원본의 5분 캐시로 파악하고, 열 때마다 바뀐 내용을 확인하도록 해결",
      "폭 2,887px짜리 ERD(mermaid)는 다이어그램이 있을 때만 라이브러리를 불러와 그리고, 팝업 폭 맞춤과 원래 크기 보기를 전환",
      "링크 미리보기 이미지가 Vercel 초기 주소를 가리키던 문제를 실제 도메인 기준으로 고치고, 한글은 쓰는 글자만 담은 폰트 조각으로 그림",
    ],
    demo: "https://hyeokjin-portfolio.vercel.app",
    github: "https://github.com/khj0317/KHJ-Portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "react-markdown", "mermaid", "Vercel"],
  },
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
      { src: "/projects/storefit/01-home.jpg", alt: "홈" },
      { src: "/projects/storefit/03-my-stores.jpg", alt: "짐 보관 현황" },
      { src: "/projects/storefit/04-checkin-qr.jpg", alt: "체크인 QR" },
      { src: "/projects/storefit/05-branch-picker.jpg", alt: "지점 선택 (남은 자리)" },
      { src: "/projects/storefit/06-owner-dashboard.jpg", alt: "사장님 운영 대시보드" },
      { src: "/projects/storefit/07-owner-scan.jpg", alt: "사장님 QR 체크인" },
      { src: "/projects/storefit/02-demo-login.jpg", alt: "가입 없이 둘러보기" },
    ],
    summary: "이용자는 정식 지점에 짐을 예약·결제하고, 지점 사장님은 QR을 스캔해 짐을 받고 돌려주는 짐 보관 플랫폼",
    bullets: [
      "이용자·지점 사장님·본사 관리자 3가지 역할: 지점 운영 신청·승인, QR 체크인·체크아웃, 매출·연체료 운영 대시보드",
      "비관적 락으로 동시 예약 정원 초과를 막고 테스트로 증명 (수용량 5에 20명 → 정확히 5건), 동시 승인 deadlock은 락 순서 통일로 해결",
      "휴대폰 인증 가입(목적·번호에 묶인 일회용 토큰)과 리프레시 토큰 재사용 감지, 인증 문자는 IP별·하루 상한으로 비용 남용 방지",
      "문자 알림을 커밋 이후 비동기로 보내고 결과를 DB에 남겨, 배포 직후 문자 미발송 원인(발신 IP 차단)을 바로 찾음",
      "무료 서버가 잠들어도 알림이 하루 한 번만 나가도록 스케줄러를 재설계하고, 백엔드 테스트 78개·Playwright E2E 7개를 CI에서 실행",
    ],
    demo: "https://storefit-khj.vercel.app",
    github: "https://github.com/khj0317/StoreFit",
    stack: ["Spring Boot", "Spring Security", "JPA", "Flyway", "PostgreSQL", "React", "TypeScript", "Docker", "Supabase", "Render", "Vercel"],
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
      "주소를 손으로 고쳐 들어와도 깨지지 않게 값 검사 (없는 유형은 404, 범위 밖 퍼센트는 0~100으로 보정), Vitest·Playwright로 검증",
      "Web Share API로 모바일 공유 시트 연동, 미지원 환경은 클립보드 복사로 대체",
      "유형별 동적 OG 이미지로 링크 미리보기 카드 제공, 한글 폰트 500KB 제한은 카드에 쓰는 글자만 담은 폰트 조각으로 해결",
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
