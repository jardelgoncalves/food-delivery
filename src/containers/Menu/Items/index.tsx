import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from 'store';
import type { Product } from 'interfaces/product';

import { Categories } from 'components/core/Categories';
import { ListProducts } from 'components/core/ListProduct';

import * as Styles from './Items.styles';

type CategoryItem = 'pizza' | 'sandwich' | 'drink' | 'ice-cream' | 'fries';

export function Items() {
  const [categoryActive, setCategoryActive] = useState<CategoryItem>('pizza');
  const { products } = useSelector((state: RootState) => state.product);

  const items = useMemo(() => {
    return products.filter(
      (product: Product) => product.category === categoryActive
    );
  }, [products, categoryActive]);

  return (
    <Styles.Container>
      <h1>Our Menu</h1>
      <Categories defaultValue={categoryActive} onSelect={setCategoryActive} />
      <ListProducts products={items} />
    </Styles.Container>
  );
}
