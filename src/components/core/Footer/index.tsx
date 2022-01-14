import { GoLocation } from 'react-icons/go';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from 'assets/logo.png';
import * as Styles from './Footer.styles';

export function Footer() {
  return (
    <Styles.Container>
      <Styles.Nav>
        <ul>
          <li>
            <Styles.BrandSection>
              <a href="/" aria-label="Logo">
                <img src={Logo} alt="Logo" />
              </a>
              <p>
                Our job is to filling yout tummy with delicious food and with
                fast and free delivery.
              </p>
            </Styles.BrandSection>
          </li>
          <li>
            <Styles.FeatureSection>
              <h2>Feature</h2>
              <a href="#/">Menu</a>
              <a href="#/">Contact</a>
              <a href="#/">About Us</a>
            </Styles.FeatureSection>
          </li>
          <li>
            <Styles.GetInTouch>
              <h2>Get in Touch</h2>
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
            </Styles.GetInTouch>
          </li>
          <li>
            <Styles.SocialSection>
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
              <p>Follow our social media.</p>
            </Styles.SocialSection>
          </li>
        </ul>
      </Styles.Nav>
      <Styles.MadeIn>
        ©copyright Food Delivery + | Made with lots of food
      </Styles.MadeIn>
    </Styles.Container>
  );
}
