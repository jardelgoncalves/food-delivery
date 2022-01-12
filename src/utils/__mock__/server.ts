// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';

export default createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 'efb01f59-6f4a-4266-a4e6-f53b2849d9d2',
          name: 'Sicilian pizza',
          category: 'pizza',
          popular: true,
          ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          rating: 4,
          price: 2490,
          thumb: '/images/product/sicilian-pizza.png',
        },
        {
          id: 'c3255879-d882-41ae-924f-b97d8b00e75f',
          name: 'Cheese Burger',
          category: 'sandwich',
          popular: true,
          ingredients: 'Beef with cheese',
          rating: 3,
          price: 2690,
          thumb: '/images/product/cheese-burger.png',
        },
        {
          id: '41f20eaf-c7c0-4c5f-bb41-7fc05929fb54',
          name: 'Chocolate Ice Cream',
          category: 'ice-cream',
          popular: true,
          ingredients: 'chocolate',
          rating: 5,
          price: 2790,
          thumb: '/images/product/ice-cream-chocolate.png',
        },
        {
          id: 'ba5fff43-a612-4dad-9c18-02186d09baed',
          name: 'Pepsi no sugar',
          category: 'drink',
          popular: true,
          ingredients: '',
          rating: 3,
          price: 2290,
          thumb: '/images/product/pepsi-no-sugar.png',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/products-popular', () => {
      return this.db.products.where({ popular: true });
    });
  },
});
