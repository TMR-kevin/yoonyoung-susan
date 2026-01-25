'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCurrentUser, signOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onCategorySelect?: (category: string | null) => void;
}

export default function Header({ onCategorySelect }: HeaderProps) {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    signOut();
    setUser(null);
    router.push('/');
  };

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCategorySelect) {
      onCategorySelect(null);
    }
    router.push('/');
  };

  const categories = [
    '구룡포과메기',
    '겨울세일품목',
    '대게/홍게',
    '수산물',
    '활어회/물회/막회',
    '건어물',
    '문어/낙지/쭈꾸미',
    '명절 선물세트',
    '제철농산물',
    '한우/한돈',
  ];

  return (
    <header className="bg-white shadow-md">
      {/* 상단 네비게이션 */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center py-2 text-sm">
            <div className="flex gap-4">
              {user ? (
                <>
                  <span className="text-gray-700">안녕하세요, {user.id}님</span>
                  <button 
                    onClick={handleLogout}
                    className="hover:text-blue-600"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="hover:text-blue-600">로그인</Link>
                  <Link href="/signup" className="hover:text-blue-600">회원가입</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 로고 영역 */}
      <div className="container mx-auto px-4 py-4">
        <button 
          onClick={handleLogoClick}
          className="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          윤영수산(구 오미수산)
        </button>
      </div>

      {/* 카테고리 메뉴 */}
      <nav className="bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 py-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={(e) => handleCategoryClick(category, e)}
                  className="text-white hover:text-yellow-300 transition-colors text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
