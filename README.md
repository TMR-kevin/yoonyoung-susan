# 윤영수산(구 오미수산) 쇼핑몰

윤영수산(구 오미수산) 쇼핑몰 웹사이트입니다. Next.js와 Firebase를 사용하여 구축되었습니다.

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Firebase** - 호스팅, 배포 및 Realtime Database

## 프로젝트 구조

```
├── app/              # Next.js App Router
│   ├── layout.tsx   # 루트 레이아웃
│   ├── page.tsx     # 메인 페이지
│   └── globals.css  # 전역 스타일
├── app/              # Next.js App Router
│   ├── login/       # 로그인 페이지
│   └── signup/      # 회원가입 페이지
├── components/       # React 컴포넌트
│   ├── Header.tsx   # 헤더 및 네비게이션
│   ├── Footer.tsx   # 푸터
│   ├── ProductCard.tsx      # 상품 카드
│   └── ProductSection.tsx   # 상품 섹션
├── lib/              # 유틸리티 함수
│   └── auth.ts      # Firebase Database 인증 함수
├── firebase.json    # Firebase 호스팅 설정
└── .firebaserc      # Firebase 프로젝트 설정
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:9002](http://localhost:9002)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

## Firebase 배포

### 1. Firebase 프로젝트 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트를 생성합니다.
2. Firebase CLI를 설치합니다:
   ```bash
   npm install -g firebase-tools
   ```
3. Firebase에 로그인합니다:
   ```bash
   firebase login
   ```
4. 프로젝트를 초기화합니다:
   ```bash
   firebase init hosting
   ```
   - 기존 프로젝트 선택 또는 새 프로젝트 생성
   - Public directory: `out`
   - Single-page app: `Yes`
   - Set up automatic builds: `No` (선택사항)

5. `.firebaserc` 파일에서 프로젝트 ID를 업데이트합니다:
   ```json
   {
     "projects": {
       "default": "your-project-id"
     }
   }
   ```

### 2. Firebase Realtime Database 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 프로젝트를 선택합니다.
2. 왼쪽 메뉴에서 **Realtime Database**를 클릭합니다.
3. **데이터베이스 만들기**를 클릭합니다.
4. 위치를 선택하고 **테스트 모드에서 시작**을 선택합니다 (개발 단계).
5. 데이터베이스가 생성되면 규칙을 다음과 같이 설정합니다:

```json
{
  "rules": {
    "users": {
      "$userId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

**주의**: 프로덕션 환경에서는 보안 규칙을 더 엄격하게 설정해야 합니다.

### 3. 배포

```bash
npm run deploy
```

또는 수동으로:

```bash
npm run build
firebase deploy
```

배포가 완료되면 Firebase 호스팅 URL에서 사이트를 확인할 수 있습니다.

## 주요 기능

- ✅ 반응형 디자인
- ✅ 상품 카테고리 메뉴
- ✅ 상품 목록 및 상세 정보
- ✅ 오늘의 상품 및 추천 상품 섹션
- ✅ 회원가입/로그인 기능 (Firebase Realtime Database)
- ✅ 사업자 정보 표시
- ✅ Firebase 호스팅 준비 완료

## 회원가입/로그인

- 회원가입: 아이디, 비밀번호, 비밀번호 확인 입력
- 로그인: 아이디, 비밀번호 입력
- 사용자 정보는 Firebase Realtime Database에 저장됩니다
- 로그인 상태는 localStorage에 저장되어 유지됩니다

## 라이선스

이 프로젝트는 개인 사용을 위한 것입니다.