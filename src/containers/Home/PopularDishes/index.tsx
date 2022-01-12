import { useMemo, useState } from 'react';
import { Categories } from 'components/core/Categories';
import { ListProducts } from 'components/core/ListProduct';
import { usePopularProductsApi } from 'useCases/products';

import * as Styles from './PopularDishes.styles';

type CategoryItem = 'pizza' | 'sandwich' | 'drink' | 'ice-cream' | 'fries';

export function PopularDishes() {
  const [categoryActive, setCategoryActive] = useState<CategoryItem>('pizza');
  const { products } = usePopularProductsApi();

  const dishes = useMemo(() => {
    return products.filter((product) => product.category === categoryActive);
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
