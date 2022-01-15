import { addInCart } from 'features/cart/cart-slice';
import { Product } from 'interfaces/product';
import { currencyFormatter } from 'lib/format-number';
import { useDispatch } from 'react-redux';
import { AddCart } from '../AddCart';
import { Rating } from '../Rating';
import * as Styles from './ProductCard.styles';

export function ProductCard({
  id,
  thumb,
  name,
  category,
  popular,
  ingredients,
  rating,
  price,
}: Product) {
  const dispatch = useDispatch();

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
          dispatch(
            addInCart({
              id,
              thumb,
              name,
              category,
              popular,
              ingredients,
              rating,
              price,
            })
          )
        }
      />
    </Styles.Container>
  );
}
