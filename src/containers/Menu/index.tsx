import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from 'features/product/products-slice';

import { Layout } from 'components/core/Layout';
import { Items } from './Items';

function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Layout>
      <Items />
    </Layout>
  );
}

export default Menu;
