import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPopularProduct } from 'features/product/popular-product-slice';

import { Intro } from 'containers/Home/Intro';
import { Layout } from 'components/core/Layout';
import { PopularDishes } from './PopularDishes';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularProduct());
  }, []);

  return (
    <Layout>
      <Intro />
      <PopularDishes />
    </Layout>
  );
}

export default Home;
