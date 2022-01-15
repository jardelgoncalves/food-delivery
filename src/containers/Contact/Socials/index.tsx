import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import * as Styles from './Socials.styles';

export function Socials() {
  return (
    <Styles.Container>
      <Styles.Content>
        <div>
          <a href="#/">
            <FaInstagram size={24} />
          </a>
          <a href="#/">
            <FaLinkedin size={24} />
          </a>
          <a href="#/">
            <FaTwitter size={24} />
          </a>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}
