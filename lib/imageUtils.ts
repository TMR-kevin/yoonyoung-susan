/**
 * 상품 이미지 URL 생성 유틸리티
 */

// 이미지 정보 타입
interface ImageInfo {
  url: string;
  title: string;
}

// hepung.com에서 추출한 실제 상품 이미지 URL들 (밍크고래 제외)
const hepungImages: ImageInfo[] = [
  { url: 'https://www.hepung.com/web/product/medium/202306/1c3b33fc65c06635b2ef17a958a71f55.jpg', title: '홍게 다리 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202402/fe391f5ed63b2b354b582e43c9ec0233.png', title: '국내산 손질 새조개 200g' },
  { url: 'https://www.hepung.com/web/product/medium/202503/d3eaef45fa12d0c9edb28abc27150183.png', title: '완도 왕바지락 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202112/894ff93168d47ab04d9569af1e43b095.jpg', title: '자연산 쥐치회 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202111/35ccf54adc4488c678fd5aa498a6ffc6.jpg', title: '대방어 통마리 1마리' },
  { url: 'https://www.hepung.com/web/product/medium/202112/242fca5db038c10ccbf0e07aa56bad0c.jpg', title: '제주 손질 갈치 3마리' },
  { url: 'https://www.hepung.com/web/product/medium/202501/d5a2883aa9b07f7dcf5ac7e9fda5fbbc.png', title: '남해안 대왕 새꼬막 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202412/bf7db8e45cea7ca571f601f0e9a18d0e.png', title: '통영생굴 깐굴 매생이 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202112/77364bf9d12afbefb79e77a8c3f674c9.jpg', title: '멸치회 급냉 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202310/8764d2d0fd568da9c5b7d185d0bf62bb.jpg', title: '국내산 홍가리비' },
  { url: 'https://www.hepung.com/web/product/medium/202102/5a59f1fa6ceddf85643a54c8c50ff79e.jpg', title: '손질오징어 특대사이즈' },
  { url: 'https://www.hepung.com/web/product/medium/202502/ef8f3a0443f6ab432234d074b1a27338.png', title: '목포 활 병어 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202412/fcfeac5ad63434923098d143d9bc05bd.png', title: '국내산 손질 전복' },
  { url: 'https://www.hepung.com/web/product/medium/202510/4ef7e99c955c07406e8d07dd4f4a1796.png', title: '추젓 2kg' },
  { url: 'https://www.hepung.com/web/product/medium/20200312/04943e7581b545f59d945822e7c3c954.jpg', title: '국내산 자연산 전복' },
  { url: 'https://www.hepung.com/web/product/medium/202503/16cde26cfd76741de2ae0f8dcad6a538.png', title: '제주 활 전복' },
  { url: 'https://www.hepung.com/web/product/medium/202007/e004db5ded96e86eecfbc3ffa1dffa62.jpg', title: '피홍합 무료배송' },
  { url: 'https://www.hepung.com/web/product/medium/20200312/a1df8c0ab288fd2727564a883d25eca8.jpg', title: '물미역 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202310/04f2ee6c63c0b39428693aa6d2ec8e63.jpg', title: '국내산 손질 문어' },
  { url: 'https://www.hepung.com/web/product/medium/202502/c584614d7ac17bd6056efb7f07c079b8.png', title: '활 문어 통마리' },
  { url: 'https://www.hepung.com/web/product/medium/202501/5e5ac10641e89b170d0eba9a7e96f805.png', title: '국내산 손질 순살갈치 5팩' },
  { url: 'https://www.hepung.com/web/product/medium/202505/0dd4d2d923bdd48c1cefc14bae751ce6.png', title: '연평도 손질 게장 세트' },
  { url: 'https://www.hepung.com/web/product/medium/201910/38355600c7868dfcc4732cb16e5f65a8.jpg', title: '구룡포 과메기 야채세트' },
  { url: 'https://www.hepung.com/web/product/medium/202007/be78a565c2f6cfb67f9ba6913235a637.jpg', title: '반건조 갈치포 30마리' },
  { url: 'https://www.hepung.com/web/product/medium/202309/8efbdc4365deb23c37c56c15ce2d9794.jpg', title: '국내산 마른오징어 10마리' },
  { url: 'https://www.hepung.com/web/product/medium/202202/007c1a49a179fc95dc2e5d4d11ddfabe.jpg', title: '국산 멸치 중멸 1.5kg' },
  { url: 'https://www.hepung.com/web/product/medium/202111/81343f0dc0aadf79616918e67145e6f9.jpg', title: '국산 멸치 다시용 대멸' },
  { url: 'https://www.hepung.com/web/product/medium/202310/f112936a1f9b738510c3624563d9da9e.jpg', title: '두꺼운 바베큐맛 오징어채' },
  { url: 'https://www.hepung.com/web/product/medium/202309/261b99ec118aded6d28f8534d9f9778c.jpg', title: '경상도 밥식해 500g' },
  { url: 'https://www.hepung.com/web/product/medium/202309/0cbc6d4674cd631e3b3554a0c5829857.jpg', title: '된장콩잎 단풍콩잎 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202106/2c6b13a054058e942297bc7a0b4dce04.jpg', title: '반건조 한치 500g' },
  { url: 'https://www.hepung.com/web/product/medium/202306/3aac86c4ab8906a82d1385bec589df02.jpg', title: '보리굴비 부세' },
  { url: 'https://www.hepung.com/web/product/medium/202306/185acea6440e9600186d50a909dfaa1d.jpg', title: '저염 백명란비품 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202502/eb8cb0e2307028da57c72c0b81b29cb7.jpg', title: '국내산 영광법성포 굴비' },
  { url: 'https://www.hepung.com/web/product/medium/202503/26d7ae8561ccd2b719ae78d9093a2da9.png', title: '반건조 손질민어 4미' },
  { url: 'https://www.hepung.com/web/product/medium/202109/ab135dec9a0b7d0ec6070cd61bf94bb5.jpg', title: '국내산 대구알포 500g' },
  { url: 'https://www.hepung.com/web/product/medium/202503/d42ff976b35101713924ecc93b08fc2d.png', title: '자연산 깐중하새우 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202505/2c9f265a0d6ea55278b78ddbc95f8a33.png', title: '국내산 1등급 한돈 쪽갈비' },
  { url: 'https://www.hepung.com/web/product/medium/202502/d0abca61588f1c583329ef63f3f114c6.png', title: '1인용 한방 미니오돌족발' },
  { url: 'https://www.hepung.com/web/product/medium/202501/4d05d269da85ee6c77f5af64013ab22f.png', title: '국내산 자연산 전복 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202111/4897ed75610a3856183be91bb699da04.jpg', title: '김장용 보리새우 1팩' },
  { url: 'https://www.hepung.com/web/product/medium/202402/81107ff523119f2c5181166ec1c6197c.png', title: '참다랑어 참치 뽈살 뱃살' },
  { url: 'https://www.hepung.com/web/product/medium/202511/d964b0b09262fc262eebd10df2fb397d.png', title: '직접 우린 방어 추어탕' },
  { url: 'https://www.hepung.com/web/product/medium/202511/a1eec1682bba63d00560719a4990036d.png', title: '수제 가을고등어 추어탕' },
  { url: 'https://www.hepung.com/web/product/medium/202307/296095bac6f6049ab5c73cdf78349889.jpg', title: '백고동 자숙후 순살 400g' },
  { url: 'https://www.hepung.com/web/product/medium/20200312/3c45ee19003995f58490defc0ea04b9e.jpg', title: '오징어 백진미 500g' },
  { url: 'https://www.hepung.com/web/product/medium/202108/7e0278396ef85907a049004d256f6d30.jpg', title: '반건조 오징어 피데기 중' },
  { url: 'https://www.hepung.com/web/product/medium/20200312/5f51e01457a0c260af996c8497d70b5b.jpg', title: '초장 600ml' },
  { url: 'https://www.hepung.com/web/product/medium/202501/c6e0d875e972d6a71ed785d2603ece5a.png', title: '자연산 전복 1kg' },
  { url: 'https://www.hepung.com/web/product/medium/202109/17a11a533b9d31932341da549110a98a.jpg', title: '민물장어 1kg 초벌구이' },
  { url: 'https://www.hepung.com/web/product/medium/202109/bc58ab330354f22ea5e8e2d3ec2835ba.jpg', title: '물회용 고동회 5팩' },
  { url: 'https://www.hepung.com/web/product/medium/202109/91a6537c00f5b8df702ac9f2dcab0cba.jpg', title: '물회육수 5팩' },
  { url: 'https://www.hepung.com/web/product/medium/202111/fbc0cd0d4df7cea14a9daf95ccc4b726.jpg', title: '국내산 자연산 전복' },
  { url: 'https://www.hepung.com/web/product/medium/202309/fed922f57a4c7de9cdddca9d6b67a988.jpg', title: '최상품 마른오징어 20마리' },
  { url: 'https://www.hepung.com/web/product/medium/202201/ac904ff47b8f6bcd27cd9cd899aa5984.jpg', title: '제수용 생선세트' },
  { url: 'https://www.hepung.com/web/product/medium/202503/61d55bd273b59895daa65eb3192d4659.png', title: '맥반석 오징어구이 250g' },
  { url: 'https://www.hepung.com/web/product/medium/202109/ce28a1ba5ac31c08102dd4bdff47b2ff.jpg', title: '반건조 오징어 최상품 피데기' },
  { url: 'https://www.hepung.com/web/product/medium/202109/4e239b9dce629076ab56fef8215379f4.jpg', title: '아귀포 500g' },
  { url: 'https://www.hepung.com/web/product/medium/202501/ab48ea00c7db51d53b83338ea2152009.png', title: '장흥무산김 재래돌김' },
  { url: 'https://www.hepung.com/web/product/medium/202201/e4c0ab8c1255084663a118c4c6ba3711.jpg', title: '포항물회 고동 2인분' },
  { url: 'https://www.hepung.com/web/product/medium/202501/e382da027b2bf75117d875795d7bd09a.png', title: '소백산 아카시아 잡화 꿀' },
  { url: 'https://www.hepung.com/web/product/medium/202501/021b285ba9b0c83d8752632bb3e9ee63.png', title: '명절 선물용 상주곶감세트' },
  { url: 'https://www.hepung.com/web/product/medium/202109/7d1284cc28a0afdd529ea315d72c14d5.jpg', title: '물가자미회 급냉 세트' },
  { url: 'https://www.hepung.com/web/product/medium/202109/c1e9631c8682e0a5e4fa07cdeb95c398.jpg', title: '구운 아귀채 300g' },
  { url: 'https://www.hepung.com/web/product/medium/202109/64a080b76b1ae368b3961bb9315de412.jpg', title: '홍어 1팩 국내산참홍어' },
  { url: 'https://www.hepung.com/web/product/medium/202109/0b2dae393398802f7c8005a6e2a9f688.jpg', title: '김선물세트 장흥무산 재래돌김' },
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
