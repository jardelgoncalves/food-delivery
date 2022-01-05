import { nanoid } from 'nanoid';
import { ReactComponent as StarIcon } from 'assets/star.svg';

import * as Styles from './Rating.styles';

type RatingProps = {
  stars?: number;
};

export function Rating({ stars }: RatingProps) {
  return (
    <Styles.Container rating={stars || 1}>
      {Array.from({ length: 5 }).map(() => (
        <StarIcon key={nanoid()} />
      ))}
    </Styles.Container>
  );
}
