import { Link } from 'react-router-dom';

import { BsHandbag } from 'react-icons/bs';
import Logo from 'assets/logo.png';

import * as Styles from './Header.styles';

export function Header() {
  return (
    <Styles.Container>
      <nav>
        <Link to="/" aria-label="Logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" className="--active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Styles.BagButton hasItem aria-label="Bag">
          <BsHandbag size={22} />
        </Styles.BagButton>
      </nav>
    </Styles.Container>
  );
}
