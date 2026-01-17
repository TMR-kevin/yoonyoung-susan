import { Product } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 목록으로 돌아가기 버튼 */}
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        <span>←</span>
        <span>목록으로 돌아가기</span>
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* 상품 이미지 */}
          <div className="relative aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-gray-400 text-lg">이미지 준비중</div>
            )}
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
                New
              </span>
            )}
            {product.discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
                {product.discountPercent}%
              </span>
            )}
          </div>

          {/* 상품 정보 */}
          <div className="space-y-6">
            {/* 현재 위치 (브레드크럼) */}
            <div className="text-sm text-gray-500">
              <span>홈</span>
              <span className="mx-2">/</span>
              <span>{product.category}</span>
            </div>

            {/* 상품명 */}
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {/* 가격 정보 */}
            <div className="space-y-2 border-b pb-6">
              <div className="text-gray-500 line-through text-lg">
                소비자가: {product.originalPrice.toLocaleString()}원
              </div>
              <div className="text-blue-600 font-bold text-3xl">
                판매가: {product.salePrice.toLocaleString()}원
              </div>
              {product.discountPercent > 0 && (
                <div className="text-red-500 font-semibold">
                  {product.discountPercent}% 할인
                </div>
              )}
            </div>

            {/* 기본 정보 테이블 */}
            <div className="border-b pb-6">
              <h2 className="font-bold text-lg mb-4">기본 정보</h2>
              <table className="w-full">
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-2 font-semibold">상품명</td>
                    <td className="py-2">{product.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">원산지</td>
                    <td className="py-2">국내</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">카테고리</td>
                    <td className="py-2">{product.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 배송 안내 */}
            <div className="border-b pb-6">
              <h2 className="font-bold text-lg mb-4">배송 안내</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 배송 방법: 택배</li>
                <li>• 배송 지역: 전국지역</li>
                <li>• 배송 비용: 4,000원</li>
                <li>• 배송 기간: 1일 ~ 7일</li>
                <li>• 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.</li>
              </ul>
            </div>

            {/* 교환 및 반품 안내 */}
            <div>
              <h2 className="font-bold text-lg mb-4">교환 및 반품 안내</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">교환 및 반품이 가능한 경우</p>
                  <p>• 상품을 공급 받으신 날로부터 1일이내 교환/반품이 가능합니다.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">교환 및 반품이 불가능한 경우</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우</li>
                    <li>상품가치가 상실된 경우</li>
                    <li>자체폐기나 받으신 상품을 조리한 경우</li>
                    <li>고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</li>
                    <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우</li>
                  </ul>
                  <p className="mt-2">※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
