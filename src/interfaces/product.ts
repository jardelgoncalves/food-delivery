export type Product = {
  id: string;
  thumb: string;
  name: string;
  category: 'pizza' | 'sandwich' | 'drink' | 'ice-cream' | 'fries';
  popular: boolean;
  ingredients?: string;
  rating: number;
  price: number;
};
