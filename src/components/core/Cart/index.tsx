import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import type { Product } from 'interfaces/product';
import {
  addInCart,
  handleModal,
  shrinkInCart,
  removeInCart,
} from 'features/cart/cart-slice';
import type { RootState } from 'store';

import { currencyFormatter } from 'lib/format-number';
import * as Styles from './Cart.styles';
import { CartItem } from './CartItem';

export function Cart() {
  const { modalIsOpen, products } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <Styles.Container open={modalIsOpen}>
      <Styles.Bag>
        <Styles.HeaderBag>
          <button
            type="button"
            aria-label="Close Cart"
            onClick={() => dispatch(handleModal(false))}
          >
            <FiArrowLeft size={24} />
          </button>
          <span>Cart</span>
        </Styles.HeaderBag>
        <Styles.ContentBag>
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product as Product}
              add={(prod) => dispatch(addInCart(prod))}
              shrink={(prod) => dispatch(shrinkInCart(prod))}
              remove={(id) => dispatch(removeInCart(id))}
            />
          ))}
          {!products.length && (
            <Styles.Empty>Your shopping cart is empty</Styles.Empty>
          )}
        </Styles.ContentBag>
        <Styles.FooterBag>
          <p>
            <strong>Total: </strong>{' '}
            {currencyFormatter(
              products.reduce(
                (acc, product) =>
                  acc + (product?.quantity || 1) * product.price,
                0
              )
            )}{' '}
            BRL
          </p>
        </Styles.FooterBag>
      </Styles.Bag>
    </Styles.Container>
  );
}
