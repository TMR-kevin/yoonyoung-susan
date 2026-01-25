'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import ProductDetail from '@/components/ProductDetail';
import { categoryProducts, Product } from '@/lib/products';
import { getProductImageAndTitle } from '@/lib/imageUtils';

// 샘플 상품 데이터 (이미지 인덱스 직접 지정하여 이미지와 타이틀 매칭)
const todayProducts: Product[] = [
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '1', undefined, 1); // 국내산 손질 새조개 200g
    return {
      id: '1',
      name: title,
      originalPrice: 52000,
      salePrice: 31900,
      discountPercent: 39,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('대게/홍게', '2', undefined, 0); // 홍게 다리 1kg
    return {
      id: '2',
      name: title,
      originalPrice: 20000,
      salePrice: 12900,
      discountPercent: 36,
      category: '대게/홍게',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '3', undefined, 2); // 완도 왕바지락 1kg
    return {
      id: '3',
      name: title,
      originalPrice: 23000,
      salePrice: 8900,
      discountPercent: 61,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('대게/홍게', '4', undefined, 4); // 대방어 통마리 1마리
    return {
      id: '4',
      name: title,
      originalPrice: 200000,
      salePrice: 130000,
      discountPercent: 35,
      category: '대게/홍게',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '5', undefined, 7); // 통영생굴 깐굴 매생이 세트
    return {
      id: '5',
      name: title,
      originalPrice: 27000,
      salePrice: 10900,
      discountPercent: 60,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('활어회/물회/막회', '6', undefined, 3); // 자연산 쥐치회 1kg
    return {
      id: '6',
      name: title,
      originalPrice: 38000,
      salePrice: 30000,
      discountPercent: 21,
      category: '활어회/물회/막회',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '7', undefined, 6); // 남해안 대왕 새꼬막 1kg
    return {
      id: '7',
      name: title,
      originalPrice: 25000,
      salePrice: 11900,
      discountPercent: 52,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('활어회/물회/막회', '8', undefined, 4); // 대방어 통마리 1마리
    return {
      id: '8',
      name: title,
      originalPrice: 700000,
      salePrice: 500000,
      discountPercent: 29,
      category: '활어회/물회/막회',
      imageUrl: url,
    };
  })(),
];

const recommendedProducts: Product[] = [
  (() => {
    const { url, title } = getProductImageAndTitle('활어회/물회/막회', '9', undefined, 42); // 반건조 한치 500g
    return {
      id: '9',
      name: title,
      originalPrice: 45000,
      salePrice: 23900,
      discountPercent: 47,
      isNew: true,
      category: '활어회/물회/막회',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('활어회/물회/막회', '10', undefined, 5); // 제주 손질 갈치 3마리
    return {
      id: '10',
      name: title,
      originalPrice: 80000,
      salePrice: 60000,
      discountPercent: 25,
      isNew: true,
      category: '활어회/물회/막회',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('활어회/물회/막회', '11', undefined, 11); // 목포 활 병어 1kg
    return {
      id: '11',
      name: title,
      originalPrice: 18000,
      salePrice: 7900,
      discountPercent: 56,
      isNew: true,
      category: '활어회/물회/막회',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('문어/낙지/쭈꾸미', '12', undefined, 22); // 손질오징어 특대사이즈
    return {
      id: '12',
      name: title,
      originalPrice: 22000,
      salePrice: 16900,
      discountPercent: 23,
      isNew: true,
      category: '문어/낙지/쭈꾸미',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '13', undefined, 9); // 국내산 홍가리비
    return {
      id: '13',
      name: title,
      originalPrice: 25000,
      salePrice: 14900,
      discountPercent: 40,
      isNew: true,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '14', undefined, 16); // 피홍합 무료배송
    return {
      id: '14',
      name: title,
      originalPrice: 20000,
      salePrice: 12000,
      discountPercent: 40,
      isNew: true,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '15', undefined, 17); // 물미역 1kg
    return {
      id: '15',
      name: title,
      originalPrice: 14000,
      salePrice: 10000,
      discountPercent: 29,
      isNew: true,
      category: '수산물',
      imageUrl: url,
    };
  })(),
  (() => {
    const { url, title } = getProductImageAndTitle('수산물', '16', undefined, 12); // 국내산 손질 전복
    return {
      id: '16',
      name: title,
      originalPrice: 27000,
      salePrice: 17900,
      discountPercent: 34,
      isNew: true,
      category: '수산물',
      imageUrl: url,
    };
  })(),
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
