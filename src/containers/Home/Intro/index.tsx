import CustomerImg from 'assets/customer.png';
import { ReactComponent as DeliveryIcon } from 'assets/delivery.svg';
import { ReactComponent as HeartIcon } from 'assets/heart.svg';
import * as Styles from './Intro.styles';

export function Intro() {
  return (
    <Styles.Intro>
      <Styles.Grid>
        <Styles.Column className="content">
          <Styles.Tag>More than Faster 🎉</Styles.Tag>
          <h1>
            Be The Fastest In Delivering Your <span>Food</span>
          </h1>
          <p>
            Our job is to filling yout tummy with delicious food and with fast
            and free delivery.
          </p>
        </Styles.Column>
        <Styles.Column>
          <Styles.ImageContainer>
            <DeliveryIcon />
            <HeartIcon />
            <img
              src={CustomerImg}
              loading="lazy"
              alt="Smiling customer holding six pizza packages in his right hand and a cell phone in his left hand."
            />
          </Styles.ImageContainer>
        </Styles.Column>
      </Styles.Grid>
    </Styles.Intro>
  );
}
