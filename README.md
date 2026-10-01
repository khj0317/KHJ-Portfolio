# KHJ Portfolio

풀스택 개발자 김혁진의 포트폴리오 사이트입니다. 한 페이지에서 소개, 기술, 프로젝트, 경력을 보여 줍니다.

## 구성

| 섹션 | 내용 |
|---|---|
| 첫 화면 | 소개 문구와 직접 그린 고양이 개발자 일러스트 |
| About me | 연락처와 학력 |
| Skills | 분류별 기술 스택 |
| Archiving | GitHub 링크 |
| Projects | FitMate, StoreFit, MBTI 검사. README는 GitHub에서 불러와 팝업으로 보여 주고, 스크린샷은 슬라이드로 봅니다 |
| Career | 실무 경력. 재직 기간은 오늘 날짜 기준으로 자동 계산합니다 |

## 기술

- Next.js (App Router), React, TypeScript
- Tailwind CSS, `@tailwindcss/typography`
- `react-markdown`, `remark-gfm`, `rehype-raw`, `rehype-sanitize`: README 팝업
- `mermaid`: README 안의 다이어그램을 그림으로 표시
- `next/og`: 링크 미리보기 이미지 생성

## 내용 수정

화면에 보이는 글은 대부분 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 고칩니다.

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 이름, 소개 문구, 로고 | `profile` |
| About me | `about` |
| 기술 스택 | `skills` |
| 프로젝트 | `projects` (스크린샷은 `public/projects/`) |
| 경력 | `careers` |
| 섹션 색상 | [`src/app/globals.css`](src/app/globals.css)의 `@theme` |

## 실행

```bash
npm install
npm run dev -- -p 3100
```

http://localhost:3100 에서 확인합니다.

```bash
npm run build
```

빌드할 때 링크 미리보기 이미지에 쓸 한글 폰트를 Google Fonts에서 받아오므로 인터넷 연결이 필요합니다.

## 배포

GitHub 저장소를 [Vercel](https://vercel.com)에 연결하면 `main` 브랜치에 push할 때마다 자동으로 배포됩니다. 별도 환경 변수는 필요 없습니다.
