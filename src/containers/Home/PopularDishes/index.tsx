import { Categories } from 'components/core/Categories';
import { ListProducts } from 'components/core/ListProduct';
import type { Product } from 'interfaces/product';
import * as Styles from './PopularDishes.styles';

const products: Product[] = [
  {
    id: '3dsd3',
    name: 'Sicilian pizza',
    ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
    rating: 4,
    price: 2490,
    thumb: '/images/product/sicilian-pizza.png',
  },
  {
    id: '3dsds',
    name: 'Cheese Burger',
    ingredients: 'Beef with cheese',
    rating: 3,
    price: 2690,
    thumb: '/images/product/cheese-burger.png',
  },
  {
    id: '3ds23',
    name: 'Chocolate Ice Cream',
    ingredients: 'chocolate',
    rating: 5,
    price: 2790,
    thumb: '/images/product/ice-cream-chocolate.png',
  },
  {
    id: '3d563',
    name: 'Pepsi no sugar',
    ingredients: '',
    rating: 3,
    price: 2290,
    thumb: '/images/product/pepsi-no-sugar.png',
  },
];

export function PopularDishes() {
  return (
    <Styles.Container>
      <h2>Our Menu</h2>
      <h3>Our Popular Dishes</h3>
      <Categories />
      <ListProducts products={products} />
    </Styles.Container>
  );
}
