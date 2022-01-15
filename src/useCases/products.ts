import api from 'services/api';

export async function getPopularProducts() {
  const { data } = await api.get('/products-popular');
  return data;
}

export async function getProducts() {
  const { data } = await api.get('/products');
  return data;
}
