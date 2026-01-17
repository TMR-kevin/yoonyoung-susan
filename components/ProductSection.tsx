import ProductCard from './ProductCard';
import { Product } from '@/lib/products';

interface ProductSectionProps {
  title: string;
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export default function ProductSection({ title, products, onProductClick }: ProductSectionProps) {
  return (
    <section className="my-8">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product} 
            onClick={() => onProductClick?.(product)}
          />
        ))}
      </div>
    </section>
  );
}
