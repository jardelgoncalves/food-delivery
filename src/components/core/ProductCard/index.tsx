import type { Product } from 'interfaces/product';
import { currencyFormatter } from 'lib/format-number';
import { AddCart } from '../AddCart';
import { Rating } from '../Rating';
import * as Styles from './ProductCard.styles';

type ProductCardProps = Product & {
  addToCart?: (product: Product) => void;
};
export function ProductCard({
  id,
  thumb,
  name,
  ingredients,
  rating,
  price,
  addToCart,
}: ProductCardProps) {
  return (
    <Styles.Container>
      <img src={thumb} alt={name} />
      <h3>{name}</h3>
      {ingredients && <p>{ingredients}</p>}
      <Rating stars={rating} />
      <Styles.Price>
        {currencyFormatter(price)} <strong>BRL</strong>
      </Styles.Price>
      <AddCart
        onClick={() =>
          addToCart?.({
            id,
            thumb,
            name,
            ingredients,
            rating,
            price,
          })
        }
      />
    </Styles.Container>
  );
}
