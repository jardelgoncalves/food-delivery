import { Link, useLocation } from 'react-router-dom';

import { BsHandbag } from 'react-icons/bs';
import Logo from 'assets/logo.png';

import * as Styles from './Header.styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <Styles.Container>
      <nav>
        <Link to="/" aria-label="Logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" className={pathname === '/' ? '--active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className={pathname === '/menu' ? '--active' : ''}>
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={pathname === '/about-us' ? '--active' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname === '/contact' ? '--active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Styles.BagButton hasItem aria-label="Bag">
          <BsHandbag size={22} />
        </Styles.BagButton>
      </nav>
    </Styles.Container>
  );
}
