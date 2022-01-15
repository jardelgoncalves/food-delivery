import { GoLocation } from 'react-icons/go';
import { FiMail, FiPhone } from 'react-icons/fi';
import * as Styles from './GetInTouch.styles';

export function GetInTouch() {
  return (
    <Styles.Container>
      <h1>Get in Touch</h1>
      <Styles.Content>
        <div>
          <GoLocation size={24} />{' '}
          <p>8819 José de Queiroz Pessoa. Quixadá - Brazil</p>
        </div>
        <div>
          <FiMail size={24} /> <p>fooddelivery@hello.com</p>
        </div>
        <div>
          <FiPhone size={24} /> <p>+55 88-90000-0000</p>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}
