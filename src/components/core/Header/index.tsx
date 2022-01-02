import { BsHandbag } from 'react-icons/bs';
import Logo from 'assets/logo.png';
import { HeaderItem } from './HeaderItem';

import * as Styles from './Header.styles';

export function Header() {
  return (
    <Styles.Container>
      <a href="/" aria-label="Logo">
        <img src={Logo} alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <HeaderItem text="Home" path="/" isActive />
          </li>
          <li>
            <HeaderItem text="Menu" path="/menu" />
          </li>
          <li>
            <HeaderItem text="About Us" path="/about-us" />
          </li>
          <li>
            <HeaderItem text="Contact" path="/contact" />
          </li>
        </ul>
      </nav>
      <Styles.BagButton hasItem aria-label="Bag">
        <BsHandbag size={22} />
      </Styles.BagButton>
    </Styles.Container>
  );
}
