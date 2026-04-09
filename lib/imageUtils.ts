/**
 * 상품 이미지 유틸리티
 */

// 이미지 정보 타입
interface ImageInfo {
  url: string;
  title: string;
}

// 로컬 상품 이미지 (public/images/products/)
const hepungImages: ImageInfo[] = [
  { url: '/images/products/product-0.jpg', title: '홍게 다리 1kg' },
  { url: '/images/products/product-1.png', title: '국내산 손질 새조개 200g' },
  { url: '/images/products/product-2.png', title: '완도 왕바지락 1kg' },
  { url: '/images/products/product-3.jpg', title: '자연산 쥐치회 1kg' },
  { url: '/images/products/product-4.jpg', title: '대방어 통마리 1마리' },
  { url: '/images/products/product-5.jpg', title: '제주 손질 갈치 3마리' },
  { url: '/images/products/product-6.png', title: '남해안 대왕 새꼬막 1kg' },
  { url: '/images/products/product-7.png', title: '통영생굴 깐굴 매생이 세트' },
  { url: '/images/products/product-8.jpg', title: '멸치회 급냉 세트' },
  { url: '/images/products/product-9.jpg', title: '국내산 홍가리비' },
  { url: '/images/products/product-10.jpg', title: '손질오징어 특대사이즈' },
  { url: '/images/products/product-11.png', title: '목포 활 병어 1kg' },
  { url: '/images/products/product-12.png', title: '국내산 손질 전복' },
  { url: '/images/products/product-13.png', title: '추젓 2kg' },
  { url: '/images/products/product-14.png', title: '멍게' },
  { url: '/images/products/product-15.jpg', title: '피홍합 무료배송' },
  { url: '/images/products/product-16.jpg', title: '물미역 1kg' },
  { url: '/images/products/product-17.jpg', title: '간장게장' },
  { url: '/images/products/product-18.png', title: '활 전복' },
  { url: '/images/products/product-19.png', title: '국내산 손질 순살갈치 5팩' },
  { url: '/images/products/product-20.png', title: '연평도 손질 게장 세트' },
  { url: '/images/products/product-21.jpg', title: '구룡포 과메기 야채세트' },
  { url: '/images/products/product-22.jpg', title: '반건조 갈치포 30마리' },
  { url: '/images/products/product-23.jpg', title: '국내산 마른오징어 10마리' },
  { url: '/images/products/product-24.jpg', title: '국산 멸치 중멸 1.5kg' },
  { url: '/images/products/product-25.jpg', title: '국산 멸치 다시용 대멸' },
  { url: '/images/products/product-26.jpg', title: '두꺼운 바베큐맛 오징어채' },
  { url: '/images/products/product-27.jpg', title: '경상도 밥식해 500g' },
  { url: '/images/products/product-28.jpg', title: '된장콩잎 단풍콩잎 세트' },
  { url: '/images/products/product-29.jpg', title: '반건조 한치 500g' },
  { url: '/images/products/product-30.jpg', title: '보리굴비 부세' },
  { url: '/images/products/product-31.jpg', title: '저염 백명란비품 세트' },
  { url: '/images/products/product-32.jpg', title: '국내산 영광법성포 굴비' },
  { url: '/images/products/product-33.png', title: '반건조 손질민어 4미' },
  { url: '/images/products/product-34.jpg', title: '국내산 대구알포 500g' },
  { url: '/images/products/product-35.png', title: '자연산 깐중하새우 세트' },
  { url: '/images/products/product-36.png', title: '산낙지' },
  { url: '/images/products/product-37.jpg', title: '김장용 보리새우 1팩' },
  { url: '/images/products/product-38.png', title: '참다랑어 참치 뽈살 뱃살' },
  { url: '/images/products/product-39.png', title: '직접 우린 방어 추어탕' },
  { url: '/images/products/product-40.png', title: '수제 가을고등어 추어탕' },
  { url: '/images/products/product-41.jpg', title: '백고동 자숙후 순살 400g' },
  { url: '/images/products/product-42.jpg', title: '오징어 백진미 500g' },
  { url: '/images/products/product-43.jpg', title: '반건조 오징어 피데기 중' },
  { url: '/images/products/product-44.jpg', title: '초장 600ml' },
  { url: '/images/products/product-45.png', title: '자연산 전복 1kg' },
  { url: '/images/products/product-46.jpg', title: '민물장어 1kg 초벌구이' },
  { url: '/images/products/product-47.jpg', title: '물회용 고동회 5팩' },
  { url: '/images/products/product-48.jpg', title: '물회육수 5팩' },
  { url: '/images/products/product-49.jpg', title: '최상품 마른오징어 20마리' },
  { url: '/images/products/product-50.jpg', title: '제수용 생선세트' },
  { url: '/images/products/product-51.png', title: '맥반석 오징어구이 250g' },
  { url: '/images/products/product-52.jpg', title: '반건조 오징어 최상품 피데기' },
  { url: '/images/products/product-53.jpg', title: '아귀포 500g' },
  { url: '/images/products/product-54.png', title: '장흥무산김 재래돌김' },
  { url: '/images/products/product-55.jpg', title: '포항물회 고동 2인분' },
  { url: '/images/products/product-56.png', title: '소백산 아카시아 잡화 꿀' },
  { url: '/images/products/product-57.png', title: '명절 선물용 상주곶감세트' },
  { url: '/images/products/product-58.jpg', title: '물가자미회 급냉 세트' },
  { url: '/images/products/product-59.jpg', title: '구운 아귀채 300g' },
  { url: '/images/products/product-60.jpg', title: '홍어 1팩 국내산참홍어' },
  { url: '/images/products/product-61.jpg', title: '김선물세트 장흥무산 재래돌김' },
];

// 상품명과 이미지 URL 매핑
const productImageMap: Record<string, string> = {
  // todayProducts 매핑
  '국내산 손질 새조개 200g(14~18미)': hepungImages[1].url,
  '홍게 다리 1kg(약 100개)': hepungImages[0].url,
  '완도 왕바지락 1kg(약 50미)': hepungImages[2].url,
  '활 러시아 대게 2~3kg 절지': hepungImages[4].url,
  '통영생굴 깐굴 매생이 세트 200g': hepungImages[7].url,
  '자연산 쥐치회 1kg 급냉 세트': hepungImages[3].url,
  '남해안 대왕 새꼬막 1kg(약 55미)': hepungImages[6].url,
  '대방어 통마리 1마리(10~13kg)': hepungImages[4].url,
  
  // recommendedProducts 매핑
  '제주 손질 갈치 3마리 세트': hepungImages[5].url,
  '목포 활 병어 1kg(약 8미)': hepungImages[11].url,
  '피홍합 무료배송': hepungImages[16].url,
  '물미역 1kg': hepungImages[17].url,
};

/**
 * 상품명으로 이미지 URL 찾기
 * @param productName 상품명
 * @returns 매칭된 이미지 URL 또는 null
 */
function findImageByProductName(productName: string): string | null {
  // 정확한 매칭 시도
  if (productImageMap[productName]) {
    return productImageMap[productName];
  }
  
  // 부분 매칭 시도 (공백 제거 후 비교)
  const normalizedName = productName.replace(/\s+/g, '');
  for (const [key, value] of Object.entries(productImageMap)) {
    const normalizedKey = key.replace(/\s+/g, '');
    if (normalizedKey === normalizedName) {
      return value;
    }
  }
  
  // 키워드 매칭 시도 (주요 키워드 추출)
  const extractKeywords = (name: string): string[] => {
    // 괄호 제거 및 주요 단어 추출
    const cleaned = name.replace(/[()]/g, ' ').replace(/\s+/g, ' ');
    const words = cleaned.split(' ').filter(w => w.length > 1);
    // 주요 키워드: 첫 2-3개 단어 + 특수 키워드
    const mainKeywords = words.slice(0, 3);
    const specialKeywords = words.filter(w => 
      ['왕', '대왕', '특대', '프리미엄', '명품', '최상급', '특선', '활'].includes(w)
    );
    return [...mainKeywords, ...specialKeywords];
  };
  
  const productKeywords = extractKeywords(productName);
  for (const [key, value] of Object.entries(productImageMap)) {
    const keyKeywords = extractKeywords(key);
    // 공통 키워드가 2개 이상이면 매칭
    const commonKeywords = productKeywords.filter(k => 
      keyKeywords.some(kk => kk.includes(k) || k.includes(kk))
    );
    if (commonKeywords.length >= 2) {
      return value;
    }
  }
  
  return null;
}

/**
 * 이미지 URL로 타이틀 가져오기
 * @param imageUrl 이미지 URL
 * @returns 타이틀 또는 null
 */
export function getTitleByImageUrl(imageUrl: string): string | null {
  const imageInfo = hepungImages.find(img => img.url === imageUrl);
  return imageInfo ? imageInfo.title : null;
}

/**
 * 카테고리별 기본 이미지 URL 생성
 * hepung.com에서 추출한 실제 이미지 URL 사용
 * @param category 카테고리
 * @param productId 상품 ID
 * @param productName 상품명 (선택사항, 매칭 우선 사용)
 */
export function getProductImageUrl(category: string, productId: string, productName?: string): string {
  // 상품명이 제공된 경우 매칭 시도
  if (productName) {
    const matchedImage = findImageByProductName(productName);
    if (matchedImage) {
      return matchedImage;
    }
  }
  
  // 매칭 실패 시 기존 방식 (productId 기반 해시)
  const hash = productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageIndex = hash % hepungImages.length;
  
  return hepungImages[imageIndex].url;
}

/**
 * 이미지 인덱스로 이미지 URL과 타이틀 가져오기
 * @param imageIndex 이미지 인덱스
 * @returns { url: string, title: string }
 */
export function getProductImageAndTitleByIndex(imageIndex: number): { url: string; title: string } {
  const index = imageIndex % hepungImages.length;
  return {
    url: hepungImages[index].url,
    title: hepungImages[index].title,
  };
}

/**
 * 이미지 URL과 타이틀을 함께 가져오기
 * @param category 카테고리
 * @param productId 상품 ID
 * @param productName 상품명 (선택사항, 매칭 우선 사용)
 * @param imageIndex 이미지 인덱스 (선택사항, 직접 지정 시 사용)
 * @returns { url: string, title: string }
 */
export function getProductImageAndTitle(category: string, productId: string, productName?: string, imageIndex?: number): { url: string; title: string } {
  // 이미지 인덱스가 직접 지정된 경우
  if (imageIndex !== undefined) {
    return getProductImageAndTitleByIndex(imageIndex);
  }
  
  // 상품명으로 매칭 시도
  const imageUrl = getProductImageUrl(category, productId, productName);
  const title = getTitleByImageUrl(imageUrl) || productName || '상품';
  return { url: imageUrl, title };
}

/**
 * Firebase Storage URL 생성 (실제 운영용)
 * @param productId 상품 ID
 * @param fileName 파일명 (예: 'main.jpg')
 */
export function getFirebaseStorageUrl(productId: string, fileName: string = 'main.jpg'): string {
  // Firebase Storage URL 형식
  // 실제 Firebase Storage에 업로드된 이미지 경로
  return `https://firebasestorage.googleapis.com/v0/b/yoonyoung-susan.firebasestorage.app/o/products%2F${productId}%2F${fileName}?alt=media`;
}

/**
 * 플레이스홀더 이미지 URL 생성 (개발용)
 */
export function getPlaceholderImageUrl(width: number = 400, height: number = 400, text?: string): string {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : '';
  return `https://via.placeholder.com/${width}x${height}?text=${text || '이미지'}`;
}
