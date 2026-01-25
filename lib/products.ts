import { getProductImageUrl } from './imageUtils';

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

// 카테고리별 상품명 템플릿
const productTemplates: Record<string, string[]> = {
  '구룡포과메기': [
    '구룡포 전통 과메기', '구룡포 프리미엄 과메기', '구룡포 특선 과메기', '구룡포 명품 과메기',
    '구룡포 고급 과메기', '구룡포 손질 과메기', '구룡포 자연 건조 과메기', '구룡포 전통 방식 과메기',
    '구룡포 특등급 과메기', '구룡포 한정 과메기', '구룡포 신선 과메기', '구룡포 정선 과메기',
    '구룡포 최상급 과메기', '구룡포 선별 과메기', '구룡포 프리미엄 선물용 과메기', '구룡포 가정용 과메기',
    '구룡포 대용량 과메기', '구룡포 소포장 과메기'
  ],
  '겨울세일품목': [
    '겨울 특가 대게', '겨울 한정 홍게', '겨울 특가 전복', '겨울 시즌 한치',
    '겨울 할인 새우', '겨울 특선 오징어', '겨울 한정 문어', '겨울 특가 조개',
    '겨울 시즌 굴', '겨울 특가 멍게', '겨울 한정 해삼', '겨울 특선 전복',
    '겨울 할인 대게 세트', '겨울 특가 홍게 세트', '겨울 한정 수산물 세트', '겨울 특선 선물세트',
    '겨울 시즌 프리미엄 세트', '겨울 특가 가정용 세트'
  ],
  '대게/홍게': [
    '러시아 대게', '홍게 다리만', '대게 통마리',
    '홍게 통마리', '대게 다리', '홍게 몸통',
    '대게 세트', '홍게 세트', '대게 특대',
    '홍게 특대', '대게 프리미엄', '홍게 프리미엄',
    '대게 한정', '홍게 한정', '대게 고급',
    '홍게 고급', '대게 특선', '홍게 특선'
  ],
  '수산물': [
    '국내산 손질 새조개', '완도 왕바지락', '통영생굴(깐굴)', '남해안 대왕 새꼬막',
    '제주 전복', '울진 대게', '거제 홍합', '부산 활 새우',
    '여수 석화', '목포 멍게', '포항 꼬막', '통영 전복',
    '완도 전복', '제주 해삼', '부산 굴', '여수 굴',
    '목포 조개', '거제 전복'
  ],
  '활어회/물회/막회': [
    '자연산 쥐치회', '최상급 횟감 생물한치', '대방어 회', '물회 세트',
    '막회 세트', '활 광어회', '활 우럭회', '활 농어회',
    '활 도다리회', '활 병어회', '활 감성돔회', '활 참돔회',
    '활 벵에돔회', '활 전복회', '활 해삼회', '활 문어회',
    '활 오징어회', '활 새우회'
  ],
  '건어물': [
    '국내산 말린 오징어', '전통 방식 건조 멸치', '고급 건조 새우', '말린 전복',
    '건조 해삼', '말린 문어', '건조 오징어 다리', '전통 건조 멸치',
    '고급 건조 새우', '말린 조개', '건조 전복', '말린 해삼',
    '건조 문어', '전통 멸치', '고급 새우', '말린 오징어',
    '건조 전복', '말린 해삼'
  ],
  '문어/낙지/쭈꾸미': [
    '국내산 특대 갑오징어', '활 문어', '낙지', '쭈꾸미',
    '문어 다리', '낙지 다리', '쭈꾸미 다리', '활 문어 통마리',
    '낙지 통마리', '쭈꾸미 통마리', '문어 회', '낙지 회',
    '쭈꾸미 볶음용', '문어 볶음용', '낙지 볶음용', '쭈꾸미 볶음용',
    '문어 세트', '낙지 세트'
  ],
  '명절 선물세트': [
    '명절 프리미엄 선물세트 A', '명절 특선 선물세트 B', '명절 고급 선물세트 C',
    '명절 프리미엄 세트', '명절 특선 세트', '명절 고급 세트',
    '명절 가정용 세트', '명절 대용량 세트', '명절 소포장 세트',
    '명절 한정 세트', '명절 시즌 세트', '명절 특가 세트',
    '명절 할인 세트', '명절 프리미엄 패키지', '명절 특선 패키지',
    '명절 고급 패키지', '명절 가정용 패키지', '명절 대용량 패키지'
  ],
  '제철농산물': [
    '제철 감자', '제철 고구마', '제철 양파', '제철 당근',
    '제철 배추', '제철 무', '제철 상추', '제철 시금치',
    '제철 부추', '제철 파', '제철 마늘', '제철 생강',
    '제철 고추', '제철 피망', '제철 오이', '제철 토마토',
    '제철 가지', '제철 호박'
  ],
  '한우/한돈': [
    '한우 등심', '한돈 삼겹살', '한우 갈비살', '한우 안심',
    '한돈 목살', '한우 채끝살', '한돈 갈비', '한우 꽃등심',
    '한돈 앞다리살', '한우 우둔', '한돈 뒷다리살', '한우 사태',
    '한돈 갈매기살', '한우 치마살', '한돈 항정살', '한우 부채살',
    '한돈 가브리살', '한우 꽃갈비'
  ],
};

// 카테고리별 상품 생성 함수
function generateProducts(category: string, count: number): Product[] {
  const templates = productTemplates[category] || [];
  const products: Product[] = [];
  
  for (let i = 0; i < count; i++) {
    const templateIndex = i % templates.length;
    const baseName = templates[templateIndex];
    const weight = ['200g', '300g', '500g', '1kg', '2kg', '3kg', '5kg'][Math.floor(Math.random() * 7)];
    const name = `${baseName} ${weight}`;
    
    const originalPrice = randomPrice(10000, 300000);
    const discountPercent = randomPrice(15, 60);
    const salePrice = Math.floor(originalPrice * (1 - discountPercent / 100));
    
    const productId = `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`;
    products.push({
      id: productId,
      name,
      originalPrice,
      salePrice,
      discountPercent,
      category,
      isNew: Math.random() > 0.7, // 30% 확률로 New
      imageUrl: getProductImageUrl(category, productId, name), // 이미지 URL 추가 (상품명으로 매칭)
    });
  }
  
  return products;
}

// 카테고리별 샘플 상품 데이터 (10~18개 랜덤)
export const categoryProducts: Record<string, Product[]> = {
  '구룡포과메기': generateProducts('구룡포과메기', 15),
  '겨울세일품목': generateProducts('겨울세일품목', 12),
  '대게/홍게': generateProducts('대게/홍게', 18),
  '수산물': generateProducts('수산물', 16),
  '활어회/물회/막회': generateProducts('활어회/물회/막회', 14),
  '건어물': generateProducts('건어물', 13),
  '문어/낙지/쭈꾸미': generateProducts('문어/낙지/쭈꾸미', 17),
  '명절 선물세트': generateProducts('명절 선물세트', 11),
  '제철농산물': generateProducts('제철농산물', 18),
  '한우/한돈': generateProducts('한우/한돈', 15),
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
