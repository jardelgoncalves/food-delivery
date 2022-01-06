import type { Product } from 'interfaces/product';
import { ProductCard } from '../ProductCard';
import * as Styles from './ListProduct.styles';

type ListProductsProps = {
  products: Product[];
};

export function ListProducts({ products }: ListProductsProps) {
  return (
    <Styles.Container>
      {(products || []).map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Styles.Container>
  );
}
