import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { app } from '@/firebase.config';

// Firebase Firestore 초기화 (클라이언트 사이드에서만)
let db: ReturnType<typeof getFirestore> | null = null;

function getDb() {
  if (typeof window === 'undefined') {
    console.warn('Firestore는 클라이언트 사이드에서만 사용할 수 있습니다.');
    return null;
  }
  
  if (!db) {
    try {
      db = getFirestore(app);
      console.log('Firebase Firestore 초기화 성공');
    } catch (error) {
      console.error('Firebase Firestore 초기화 실패:', error);
      return null;
    }
  }
  
  return db;
}

export interface User {
  id: string;
  password: string;
}

// 회원가입
export async function signUp(userId: string, password: string): Promise<{ success: boolean; message: string }> {
  console.log('=== 회원가입 시작 ===');
  console.log('사용자 ID:', userId);
  
  try {
    // Firestore 초기화 확인
    const database = getDb();
    if (!database) {
      const errorMsg = '데이터베이스 연결에 실패했습니다. Firebase Firestore가 활성화되어 있는지 확인해주세요.';
      console.error('Database initialization failed');
      return { success: false, message: errorMsg };
    }

    // 사용자 ID 유효성 검사
    if (!userId || userId.trim().length === 0) {
      console.warn('사용자 ID가 비어있음');
      return { success: false, message: '아이디를 입력해주세요.' };
    }

    // 비밀번호 유효성 검사
    if (!password || password.trim().length === 0) {
      console.warn('비밀번호가 비어있음');
      return { success: false, message: '비밀번호를 입력해주세요.' };
    }

    // 사용자 ID 정규화 (공백 제거)
    const normalizedUserId = userId.trim();

    // 사용자 ID 중복 확인
    const userDocRef = doc(database, 'user', normalizedUserId);
    console.log('사용자 존재 확인 중...', normalizedUserId);
    
    let userDoc;
    try {
      userDoc = await getDoc(userDocRef);
      console.log('사용자 존재 확인 완료:', userDoc.exists());
    } catch (getError: any) {
      console.error('사용자 존재 확인 중 오류:', getError);
      console.error('에러 코드:', getError.code);
      console.error('에러 메시지:', getError.message);
      
      if (getError.code === 'permission-denied') {
        return { 
          success: false, 
          message: '데이터베이스 접근 권한이 없습니다. Firebase 콘솔에서 Firestore 규칙을 확인해주세요. (규칙: allow read, write: if true)' 
        };
      }
      
      throw getError;
    }
    
    if (userDoc.exists()) {
      console.log('이미 존재하는 사용자:', normalizedUserId);
      return { success: false, message: '이미 존재하는 아이디입니다.' };
    }

    // 새 사용자 생성
    console.log('새 사용자 생성 중...', normalizedUserId);
    const userData = {
      id: normalizedUserId,
      password: password, // 실제 프로덕션에서는 해시화 필요
      createdAt: new Date().toISOString(),
    };
    
    console.log('저장할 사용자 데이터:', { ...userData, password: '***' }); // 비밀번호는 로그에 표시하지 않음
    
    try {
      await setDoc(userDocRef, userData);
      console.log('사용자 생성 성공:', normalizedUserId);
      console.log('=== 회원가입 완료 ===');
      return { success: true, message: '회원가입이 완료되었습니다.' };
    } catch (setError: any) {
      console.error('사용자 생성 중 오류:', setError);
      console.error('에러 코드:', setError.code);
      console.error('에러 메시지:', setError.message);
      console.error('전체 에러 객체:', setError);
      
      if (setError.code === 'permission-denied') {
        return { 
          success: false, 
          message: '데이터베이스 쓰기 권한이 없습니다. Firebase 콘솔에서 Firestore 규칙을 확인해주세요. (규칙: allow read, write: if true)' 
        };
      } else if (setError.code === 'unavailable') {
        return { 
          success: false, 
          message: '데이터베이스에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.' 
        };
      } else if (setError.code === 'failed-precondition') {
        return { 
          success: false, 
          message: '데이터베이스가 준비되지 않았습니다. Firebase 콘솔에서 Firestore가 활성화되어 있는지 확인해주세요.' 
        };
      }
      
      throw setError;
    }
  } catch (error: any) {
    console.error('=== 회원가입 오류 ===');
    console.error('에러 타입:', typeof error);
    console.error('에러 객체:', error);
    console.error('에러 코드:', error?.code);
    console.error('에러 메시지:', error?.message);
    console.error('에러 스택:', error?.stack);
    
    // Firebase 에러 코드에 따른 메시지
    if (error?.code === 'permission-denied') {
      return { 
        success: false, 
        message: '데이터베이스 접근 권한이 없습니다. Firebase 콘솔에서 Firestore 규칙을 확인해주세요.' 
      };
    } else if (error?.code === 'unavailable') {
      return { 
        success: false, 
        message: '데이터베이스에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.' 
      };
    } else if (error?.code === 'failed-precondition') {
      return { 
        success: false, 
        message: '데이터베이스가 준비되지 않았습니다. Firebase 콘솔에서 Firestore가 활성화되어 있는지 확인해주세요.' 
      };
    }
    
    const errorMessage = error?.message || error?.toString() || '알 수 없는 오류';
    return { 
      success: false, 
      message: `회원가입 중 오류가 발생했습니다: ${errorMessage}` 
    };
  }
}

// 로그인
export async function signIn(userId: string, password: string): Promise<{ success: boolean; message: string; user?: User }> {
  try {
    const database = getDb();
    if (!database) {
      console.error('Database not initialized');
      return { success: false, message: '데이터베이스 연결에 실패했습니다. Firebase Firestore가 활성화되어 있는지 확인해주세요.' };
    }

    if (!userId || userId.trim().length === 0 || !password) {
      return { success: false, message: '아이디와 비밀번호를 입력해주세요.' };
    }

    const userDocRef = doc(database, 'user', userId);
    console.log('Fetching user data:', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      console.log('User not found:', userId);
      return { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }

    const userData = userDoc.data();
    console.log('User data retrieved:', userId);
    
    if (userData.password !== password) {
      console.log('Password mismatch for user:', userId);
      return { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }

    console.log('Login successful:', userId);
    return { 
      success: true, 
      message: '로그인되었습니다.',
      user: {
        id: userData.id,
        password: userData.password,
      }
    };
  } catch (error: any) {
    console.error('Sign in error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // Firebase 에러 코드에 따른 메시지
    if (error.code === 'permission-denied') {
      return { success: false, message: '데이터베이스 접근 권한이 없습니다. Firebase 콘솔에서 데이터베이스 규칙을 확인해주세요.' };
    } else if (error.code === 'unavailable') {
      return { success: false, message: '데이터베이스에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.' };
    }
    
    return { success: false, message: `로그인 중 오류가 발생했습니다: ${error.message || '알 수 없는 오류'}` };
  }
}

// 현재 사용자 확인
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const userStr = localStorage.getItem('currentUser');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

// 로그아웃
export function signOut(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
  }
}
