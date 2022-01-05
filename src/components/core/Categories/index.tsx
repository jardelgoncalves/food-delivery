import { nanoid } from 'nanoid';
import drinkImage from 'assets/drink.jpg';
import pizzaImage from 'assets/pizza.jpg';
import sandwichImage from 'assets/sandwich.jpg';
import iceCreamImage from 'assets/ice-cream.jpg';
import friesImage from 'assets/fries.jpg';

import { useState } from 'react';
import * as Styles from './Categories.styles';

const categories = [
  {
    key: 'pizza',
    image: pizzaImage,
  },
  {
    key: 'sandwich',
    image: sandwichImage,
  },
  {
    key: 'drink',
    image: drinkImage,
  },
  {
    key: 'ice-cream',
    image: iceCreamImage,
  },
  {
    key: 'fries',
    image: friesImage,
  },
];

type CategoryItem = 'pizza' | 'sandwich' | 'drink' | 'ice-cream' | 'fries';

type CategoriesProps = {
  defaultValue?: CategoryItem;
  onSelect?: (value: CategoryItem) => void;
};
export function Categories({ defaultValue, onSelect }: CategoriesProps) {
  const [activeItem, setActiveItem] = useState<CategoryItem>(
    defaultValue || 'pizza'
  );

  function handleClick(value: CategoryItem) {
    setActiveItem(value);
    onSelect?.(value);
  }

  return (
    <Styles.Container>
      {categories.map((category) => (
        <Styles.Item
          key={nanoid()}
          type="button"
          aria-label={`${category.key} category`}
          isActive={activeItem === category.key}
          onClick={() => handleClick(category.key as CategoryItem)}
        >
          <img src={category.image} alt={category.key} />
        </Styles.Item>
      ))}
    </Styles.Container>
  );
}
