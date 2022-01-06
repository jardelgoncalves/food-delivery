import { Intro } from 'containers/Home/Intro';
import * as Styles from './Home.styles';
import { PopularDishes } from './PopularDishes';

function Home() {
  return (
    <Styles.Main>
      <Intro />
      <PopularDishes />
    </Styles.Main>
  );
}

export default Home;
