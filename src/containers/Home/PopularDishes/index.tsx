import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from 'store';
import type { Product } from 'interfaces/product';

import { Categories } from 'components/core/Categories';
import { ListProducts } from 'components/core/ListProduct';

import * as Styles from './PopularDishes.styles';

type CategoryItem = 'pizza' | 'sandwich' | 'drink' | 'ice-cream' | 'fries';

export function PopularDishes() {
  const [categoryActive, setCategoryActive] = useState<CategoryItem>('pizza');
  const { products } = useSelector((state: RootState) => state.popularProduct);

  const dishes = useMemo(() => {
    return products.filter(
      (product: Product) => product.category === categoryActive
    );
  }, [products, categoryActive]);

  return (
    <Styles.Container>
      <h2>Our Menu</h2>
      <h3>Our Popular Dishes</h3>
      <Categories defaultValue={categoryActive} onSelect={setCategoryActive} />
      <ListProducts products={dishes} />
    </Styles.Container>
  );
}
