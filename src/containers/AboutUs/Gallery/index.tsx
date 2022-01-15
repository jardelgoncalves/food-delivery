import { FaInstagram } from 'react-icons/fa';
import * as Styles from './Gallery.styles';

export function Gallery() {
  return (
    <Styles.Container>
      <img src="/customers/customer-1.png" alt="Pizza" />
      <img src="/customers/customer-2.png" alt="Pizza" />
      <img src="/customers/customer-3.png" alt="Pizza" />
      <img src="/customers/customer-4.png" alt="Pizza" />
      <img src="/customers/customer-5.png" alt="Pizza" />
      <img src="/customers/customer-6.png" alt="Coca Cola" />
      <Styles.Content>
        <h2>Follow Us On Instagram To See Pictures Taken By Our Customers</h2>
        <p>
          <FaInstagram />
          <a href="#/">@fooddelivery.plus</a>
        </p>
      </Styles.Content>
    </Styles.Container>
  );
}
