import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPopularProduct } from 'features/product/popular-product-slice';

import { Intro } from 'containers/Home/Intro';
import { PopularDishes } from './PopularDishes';

import * as Styles from './Home.styles';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularProduct());
  }, []);

  return (
    <Styles.Main>
      <Intro />
      <PopularDishes />
    </Styles.Main>
  );
}

export default Home;
