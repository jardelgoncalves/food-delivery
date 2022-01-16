import { Link, useLocation } from 'react-router-dom';
import { BiHome, BiFoodMenu, BiInfoSquare, BiTrip } from 'react-icons/bi';

import * as Styles from './HeaderMobile.styles';

export function HeaderMobile() {
  const { pathname } = useLocation();

  return (
    <Styles.Container>
      <Link to="/">
        <Styles.Item isActive={pathname === '/'}>
          <BiHome size={27} />
        </Styles.Item>
      </Link>
      <Link to="/menu">
        <Styles.Item isActive={pathname === '/menu'}>
          <BiFoodMenu size={27} />
        </Styles.Item>
      </Link>
      <Link to="/about-us">
        <Styles.Item isActive={pathname === '/about-us'}>
          <BiInfoSquare size={27} />
        </Styles.Item>
      </Link>
      <Link to="/contact">
        <Styles.Item isActive={pathname === '/contact'}>
          <BiTrip size={27} />
        </Styles.Item>
      </Link>
    </Styles.Container>
  );
}
