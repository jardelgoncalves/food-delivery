import { FiPlus, FiMinus } from 'react-icons/fi';
import type { Product } from 'interfaces/product';
import { currencyFormatter } from 'lib/format-number';

import * as Styles from './CartItem.styles';

type CartItem = {
  product: Product;
  add: (product: Product) => void;
  shrink: (product: Product) => void;
  remove: (id: string) => void;
};

export function CartItem({ product, add, shrink, remove }: CartItem) {
  return (
    <Styles.Container>
      <div>
        <img src={product.thumb} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          {product.ingredients && <p>{product.ingredients}</p>}
          <span>
            <strong>BRL</strong> {currencyFormatter(product.price)}
          </span>
        </div>
      </div>
      <div className="column">
        <div className="count">
          <button
            type="button"
            aria-label="Shrink a product"
            onClick={() =>
              shrink({
                ...product,
                quantity:
                  product.quantity && product.quantity > 1
                    ? product.quantity - 1
                    : 1,
              })
            }
          >
            <FiMinus />
          </button>
          <span aria-label="Quantity">{product?.quantity || 1}</span>
          <button
            type="button"
            aria-label="Add a product"
            onClick={() =>
              add({
                ...product,
                quantity: product.quantity ? product.quantity + 1 : 1,
              })
            }
          >
            <FiPlus />
          </button>
        </div>
        <button
          type="button"
          className="remove-btn"
          onClick={() => remove(product.id)}
        >
          Remove
        </button>
      </div>
    </Styles.Container>
  );
}
