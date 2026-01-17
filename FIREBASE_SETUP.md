# Firebase Firestore 설정 가이드

## 1. Firebase 콘솔에서 Firestore 활성화

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. 프로젝트 `yoonyoung-susan` 선택
3. 왼쪽 메뉴에서 **"Cloud Firestore"** 클릭
4. **"데이터베이스 만들기"** 버튼 클릭
5. 데이터베이스 모드 선택:
   - **프로덕션 모드** 선택 (권장)
   - 또는 **테스트 모드** 선택 (개발 중)
6. 데이터베이스 위치 선택 (가장 가까운 지역 선택, 예: `asia-northeast3` (서울))
7. **"사용 설정"** 버튼 클릭

## 2. 데이터베이스 보안 규칙 설정

Firebase 콘솔 > Cloud Firestore > 규칙 탭에서 다음 규칙을 설정:

### 개발/테스트용 규칙 (임시)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /user/{userId} {
      allow read, write: if true;
    }
  }
}
```

### 프로덕션용 규칙 (권장)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /user/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**중요**: 현재는 인증 없이 사용하므로, 개발 중에는 테스트 모드 규칙을 사용하세요.

**규칙 적용 방법:**
1. 규칙 탭에서 위의 규칙을 입력
2. **"게시"** 버튼 클릭

## 3. 데이터 구조

Firestore는 다음과 같은 구조를 사용합니다:

- **컬렉션**: `user`
- **문서 ID**: 사용자 ID (userId)
- **필드**:
  - `id`: string (사용자 ID)
  - `password`: string (비밀번호)
  - `createdAt`: string (생성 일시)

### 예시 데이터 구조:
```
user (컬렉션)
  └── user1 (문서 ID)
      ├── id: "user1"
      ├── password: "password123"
      └── createdAt: "2024-01-01T00:00:00.000Z"
```

## 4. 테스트

1. 개발 서버 실행: `npm run dev`
2. 회원가입 페이지에서 테스트 계정 생성
3. 브라우저 콘솔(F12)에서 로그 확인
4. Firebase 콘솔 > Cloud Firestore > 데이터 탭에서 사용자 데이터 확인

## 5. 데이터 확인 방법

1. Firebase 콘솔 > Cloud Firestore > 데이터 탭
2. `user` 컬렉션 클릭
3. 생성된 사용자 문서 확인
4. 문서를 클릭하여 `id`, `password`, `createdAt` 필드 확인

## 문제 해결

### "permission-denied" 에러
- Firebase 콘솔에서 Firestore 규칙을 확인하세요
- 테스트 모드로 설정되어 있는지 확인하세요
- 규칙이 올바르게 게시되었는지 확인하세요

### "unavailable" 에러
- 인터넷 연결을 확인하세요
- Firebase 프로젝트가 활성화되어 있는지 확인하세요
- Firestore 데이터베이스가 생성되었는지 확인하세요

### 데이터베이스가 보이지 않음
- Cloud Firestore가 생성되었는지 확인하세요
- Firebase 프로젝트가 올바른지 확인하세요
- 왼쪽 메뉴에서 "Cloud Firestore"가 보이는지 확인하세요

### 데이터가 저장되지 않음
- 브라우저 콘솔에서 에러 메시지 확인
- Firestore 규칙이 읽기/쓰기를 허용하는지 확인
- 네트워크 탭에서 Firebase API 호출이 성공했는지 확인

## Realtime Database vs Firestore

현재 프로젝트는 **Firestore**를 사용합니다:
- ✅ 문서 기반 NoSQL 데이터베이스
- ✅ 더 강력한 쿼리 기능
- ✅ 자동 확장성
- ✅ 더 나은 보안 규칙

**Realtime Database**가 아닌 **Cloud Firestore**를 사용하고 있습니다.
