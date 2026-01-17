'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import ProductDetail from '@/components/ProductDetail';
import { categoryProducts, Product } from '@/lib/products';
import { getProductImageUrl } from '@/lib/imageUtils';

// 샘플 상품 데이터
const todayProducts: Product[] = [
  {
    id: '1',
    name: '국내산 손질 명품 새조개 200g(14~18미내외)',
    originalPrice: 52000,
    salePrice: 31900,
    discountPercent: 39,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '1'),
  },
  {
    id: '2',
    name: '홍게 다리만 1kg(100개내외)',
    originalPrice: 20000,
    salePrice: 12900,
    discountPercent: 36,
    category: '밍크고래/대게/홍게',
    imageUrl: getProductImageUrl('밍크고래/대게/홍게', '2'),
  },
  {
    id: '3',
    name: '완도 왕바지락1kg(50미내외)',
    originalPrice: 23000,
    salePrice: 8900,
    discountPercent: 61,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '3'),
  },
  {
    id: '4',
    name: '활 러시아 대게 2kg/3kg - 절지',
    originalPrice: 200000,
    salePrice: 130000,
    discountPercent: 35,
    category: '밍크고래/대게/홍게',
    imageUrl: getProductImageUrl('밍크고래/대게/홍게', '4'),
  },
  {
    id: '5',
    name: '통영생굴(깐굴) / 매생이200g',
    originalPrice: 27000,
    salePrice: 10900,
    discountPercent: 60,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '5'),
  },
  {
    id: '6',
    name: '자연산 쥐치회1kg(실중량350g내외)+초장+와사비',
    originalPrice: 38000,
    salePrice: 30000,
    discountPercent: 21,
    category: '활어회/물회/막회',
    imageUrl: getProductImageUrl('활어회/물회/막회', '6'),
  },
  {
    id: '7',
    name: '남해안 대왕 새꼬막 1kg(55미내외)',
    originalPrice: 25000,
    salePrice: 11900,
    discountPercent: 52,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '7'),
  },
  {
    id: '8',
    name: '대방어 1마리 10~13kg내외크기 통마리/필렛/분할',
    originalPrice: 700000,
    salePrice: 500000,
    discountPercent: 29,
    category: '활어회/물회/막회',
    imageUrl: getProductImageUrl('활어회/물회/막회', '8'),
  },
];

const recommendedProducts: Product[] = [
  {
    id: '9',
    name: '최상급 횟감 생물한치 1kg 15미내외',
    originalPrice: 45000,
    salePrice: 23900,
    discountPercent: 47,
    isNew: true,
    category: '활어회/물회/막회',
    imageUrl: getProductImageUrl('활어회/물회/막회', '9'),
  },
  {
    id: '10',
    name: '낚시바리 제주 손질 갈치3마리 (1마리당 500g내외 크기)',
    originalPrice: 80000,
    salePrice: 60000,
    discountPercent: 25,
    isNew: true,
    category: '활어회/물회/막회',
    imageUrl: getProductImageUrl('활어회/물회/막회', '10'),
  },
  {
    id: '11',
    name: '목포 활 병어 1kg(8미내외)',
    originalPrice: 18000,
    salePrice: 7900,
    discountPercent: 56,
    isNew: true,
    category: '활어회/물회/막회',
    imageUrl: getProductImageUrl('활어회/물회/막회', '11'),
  },
  {
    id: '12',
    name: '국내산 특대 갑오징어 1kg(2~4마리)',
    originalPrice: 22000,
    salePrice: 16900,
    discountPercent: 23,
    isNew: true,
    category: '문어/낙지/쭈꾸미',
    imageUrl: getProductImageUrl('문어/낙지/쭈꾸미', '12'),
  },
  {
    id: '13',
    name: '남해안 활 깐멍게 500g',
    originalPrice: 25000,
    salePrice: 14900,
    discountPercent: 40,
    isNew: true,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '13'),
  },
  {
    id: '14',
    name: '피홍합 ★무료배송★',
    originalPrice: 20000,
    salePrice: 12000,
    discountPercent: 40,
    isNew: true,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '14'),
  },
  {
    id: '15',
    name: '물미역 1kg내외',
    originalPrice: 14000,
    salePrice: 10000,
    discountPercent: 29,
    isNew: true,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '15'),
  },
  {
    id: '16',
    name: '여수 석화굴(각굴)',
    originalPrice: 27000,
    salePrice: 17900,
    discountPercent: 34,
    isNew: true,
    category: '수산물',
    imageUrl: getProductImageUrl('수산물', '16'),
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [previousView, setPreviousView] = useState<{ type: 'category' | 'home', category?: string | null } | null>(null);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // 상품 상세 닫기
    // 스크롤을 상단으로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    // 이전 화면 정보 저장
    if (selectedCategory) {
      setPreviousView({ type: 'category', category: selectedCategory });
    } else {
      setPreviousView({ type: 'home' });
    }
    
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    
    // 이전 화면으로 복귀
    if (previousView) {
      if (previousView.type === 'category' && previousView.category) {
        setSelectedCategory(previousView.category);
      } else {
        setSelectedCategory(null);
      }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 선택된 카테고리의 상품 가져오기
  const getCategoryProducts = () => {
    if (!selectedCategory) return [];
    return categoryProducts[selectedCategory] || [];
  };

  const categoryProductsList = getCategoryProducts();

  // 상품 상세 페이지 표시
  if (selectedProduct) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onCategorySelect={handleCategorySelect} />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <ProductDetail product={selectedProduct} onBack={handleBackToList} />
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCategorySelect={handleCategorySelect} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {selectedCategory ? (
          <>
            {/* 선택된 카테고리명 표시 */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedCategory}</h1>
              <p className="text-gray-600">총 {categoryProductsList.length}개의 상품</p>
            </div>

            {/* 카테고리 상품 목록 */}
            {categoryProductsList.length > 0 ? (
              <ProductSection title="" products={categoryProductsList} onProductClick={handleProductClick} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">이 카테고리에 등록된 상품이 없습니다.</p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* 오늘의 상품 */}
            <ProductSection title="★오늘의 상품★" products={todayProducts} onProductClick={handleProductClick} />

            {/* 추천 상품 */}
            <ProductSection title="☆추천 상품☆" products={recommendedProducts} onProductClick={handleProductClick} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
