interface ProductCardProps {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  imageUrl?: string;
  isNew?: boolean;
  onClick?: () => void;
}

export default function ProductCard({
  id,
  name,
  originalPrice,
  salePrice,
  discountPercent,
  imageUrl,
  isNew = false,
  onClick,
}: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">이미지 준비중</div>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discountPercent}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{name}</h3>
        <div className="space-y-1">
          <div className="text-gray-500 text-xs line-through">
            소비자가: {originalPrice.toLocaleString()}원
          </div>
          <div className="text-blue-600 font-bold text-lg">
            판매가: {salePrice.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}
