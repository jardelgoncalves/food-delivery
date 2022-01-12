import type { Product } from 'interfaces/product';
import { useEffect, useState } from 'react';
import api from 'services/api';

export function usePopularProductsApi() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      api.get('/products-popular').then(({ data }) => {
        setProducts(data || []);
      });
    } catch (err) {
      setError('an unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    loading,
    error,
  };
}
