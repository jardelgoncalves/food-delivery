import api from 'services/api';

export async function getPopularProducts() {
  const { data } = await api.get('/products-popular');
  return data;
}
