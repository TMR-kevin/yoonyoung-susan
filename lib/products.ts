import { getProductImageAndTitleByIndex } from './imageUtils';

export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  imageUrl?: string;
  isNew?: boolean;
  category: string;
}

// 랜덤 가격 생성 함수
function randomPrice(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 할인율 계산
function calculateDiscount(original: number, sale: number): number {
  return Math.round(((original - sale) / original) * 100);
}

// 카테고리별 이미지 인덱스 범위 (hepungImages 배열에서 사용할 인덱스들)
// 각 카테고리에 적합한 이미지 인덱스를 배열로 정의
const categoryImageIndices: Record<string, number[]> = {
  '겨울세일품목': [0, 1, 2, 4, 5, 6, 7, 9, 12, 13, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 32, 40, 41, 48, 49, 50, 51, 52, 53, 57, 58, 59, 68, 73], // 다양한 수산물 (회, 건어물, 문어/오징어 제외)
  '대게/홍게': [0, 4, 33], // 홍게 다리(0), 대방어(4), 게장세트(33)
  '수산물': [1, 2, 5, 6, 7, 9, 12, 13, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 32, 40, 41, 48, 49, 50, 51, 52, 53, 57, 58, 59, 73], // 일반 수산물: 새조개(1), 바지락(2), 갈치(5), 새꼬막(6), 굴(7), 홍가리비(9), 전복(12,13,14), 피홍합(15), 물미역(16), 갈치(19), 게장(20), 과메기(21), 추어탕(23,24), 전복(25,26,27), 새우(28), 물미역(29), 갈치(32), 밥식해(40), 된장콩잎(41), 새우(48), 전복(49), 새우(50), 참치(51), 추어탕(52,53), 전복(57,58), 장어(59), 홍어(73)
  '활어회/물회/막회': [3, 8, 11, 54, 59, 60, 67, 70, 71], // 쥐치회(3), 멸치회(8), 병어(11), 백고동(54), 고동회(59), 물회육수(60), 포항물회(67), 물가자미회(70,71)
  '건어물': [35, 37, 38, 42, 43, 44, 45, 46, 47, 61, 62, 64, 65, 66, 72], // 갈치포(35), 멸치(37,38), 한치(42), 굴비(43,44), 민어(45), 대구알포(46), 오징어구이(47), 아귀포(61), 마른오징어(62), 오징어구이(64), 오징어 피데기(65), 아귀포(66), 아귀채(72)
  '문어/낙지/쭈꾸미': [17, 18, 22, 30, 31, 36, 39, 55, 56, 64, 65], // 손질 문어(17), 활 문어(18), 손질오징어(22), 손질 문어(30), 활 문어(31), 마른오징어(36), 오징어채(39), 오징어 백진미(55), 오징어 피데기(56), 오징어구이(64), 오징어 피데기(65)
  '명절 선물세트': [32, 33, 48, 63, 68, 69, 73], // 게장세트(32), 과메기세트(33), 전복세트(48), 생선세트(63), 꿀(68), 곶감세트(69), 김선물세트(73)
};

// 카테고리별 상품 생성 함수
function generateProducts(category: string, count: number): Product[] {
  const availableIndices = categoryImageIndices[category] || [];
  const products: Product[] = [];
  const usedUrls = new Set<string>(); // 중복 방지를 위한 Set
  
  // 사용 가능한 인덱스가 없으면 전체 이미지 배열에서 선택
  const allIndices = availableIndices.length > 0 
    ? availableIndices 
    : Array.from({ length: 75 }, (_, i) => i); // hepungImages 배열 길이 (쪽갈비, 미니족발, 중복 전복 제거 후)
  
  // 사용 가능한 고유 이미지 수 계산
  const uniqueUrls = new Set<string>();
  allIndices.forEach(index => {
    const { url } = getProductImageAndTitleByIndex(index);
    uniqueUrls.add(url);
  });
  const maxUniqueProducts = uniqueUrls.size;
  
  // 생성 개수를 사용 가능한 고유 이미지 수로 제한
  const actualCount = Math.min(count, maxUniqueProducts);
  
  // 인덱스를 섞어서 랜덤하게 사용
  const shuffledIndices = [...allIndices].sort(() => Math.random() - 0.5);
  
  let indexPointer = 0;
  for (let i = 0; i < actualCount; i++) {
    // 중복되지 않은 이미지를 찾을 때까지 반복
    let attempts = 0;
    let imageIndex: number;
    let url: string;
    let title: string;
    
    do {
      // 카테고리에 맞는 이미지 인덱스 선택 (순환 사용)
      imageIndex = shuffledIndices[indexPointer % shuffledIndices.length];
      indexPointer++;
      
      // 이미지와 타이틀 가져오기
      const imageData = getProductImageAndTitleByIndex(imageIndex);
      url = imageData.url;
      title = imageData.title;
      
      attempts++;
      // 무한 루프 방지: 사용 가능한 모든 이미지를 시도했으면 중복 허용
      if (attempts > allIndices.length * 2) {
        break;
      }
    } while (usedUrls.has(url));
    
    usedUrls.add(url);
    
    const originalPrice = randomPrice(10000, 300000);
    const discountPercent = randomPrice(15, 60);
    const salePrice = Math.floor(originalPrice * (1 - discountPercent / 100));
    
    const productId = `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`;
    products.push({
      id: productId,
      name: title, // imageUtils의 타이틀 직접 사용
      originalPrice,
      salePrice,
      discountPercent,
      category,
      isNew: Math.random() > 0.7, // 30% 확률로 New
      imageUrl: url, // imageUtils의 URL 직접 사용
    });
  }
  
  return products;
}

// 카테고리별 샘플 상품 데이터 (10~18개 랜덤)
export const categoryProducts: Record<string, Product[]> = {
  '겨울세일품목': generateProducts('겨울세일품목', 12),
  '대게/홍게': generateProducts('대게/홍게', 18),
  '수산물': generateProducts('수산물', 16),
  '활어회/물회/막회': generateProducts('활어회/물회/막회', 14),
  '건어물': generateProducts('건어물', 13),
  '문어/낙지/쭈꾸미': generateProducts('문어/낙지/쭈꾸미', 17),
  '명절 선물세트': generateProducts('명절 선물세트', 11),
};

// 모든 상품 가져오기
export function getAllProducts(): Product[] {
  return Object.values(categoryProducts).flat();
}

// 검색 함수
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  
  const allProducts = getAllProducts();
  const lowerQuery = query.toLowerCase();
  
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery)
  );
}

// 카테고리명 디코딩
export function decodeCategory(category: string): string {
  return decodeURIComponent(category);
}

// 카테고리별 상품 가져오기
export function getProductsByCategory(category: string): Product[] {
  const decodedCategory = decodeCategory(category);
  return categoryProducts[decodedCategory] || [];
}
