import { MouseEvent } from 'react';
import { BsCart2 } from 'react-icons/bs';

import * as Styles from './AddCart.styles';

type AddCartProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function AddCart({ onClick }: AddCartProps) {
  return (
    <Styles.Container type="button" onClick={onClick}>
      Add <BsCart2 size={20} />
    </Styles.Container>
  );
}
