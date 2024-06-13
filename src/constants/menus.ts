export const ITEMS_BURGERS = [
  {
    id: 'cheese_burger',
    type: 'burger',
    name: 'Cheesy Burger',
    price: '10000',
    image: require('../assets/images/burger-menu/menu-1.png'),
  },
  {
    id: 'chicken_burger',
    type: 'burger',
    name: 'Chicken Big Burger',
    price: '10500',
    image: require('../assets/images/burger-menu/menu-3.png'),
  },
  {
    id: 'beef_burger',
    type: 'burger',
    name: 'Beef Burger',
    price: '14000',
    image: require('../assets/images/burger-menu/menu-2.png'),
  },
  {
    id: 'special_burger',
    type: 'burger',
    name: 'Chicken Spicy Burger',
    price: '15500',
    image: require('../assets/images/burger-menu/menu-1.png'),
  },
];

export const ITEMS_BAVERAGES = [
  {
    id: 'baverages_pespi',
    type: 'baverages',
    name: 'Pepsi Small',
    price: '8000',
    image: require('../assets/images/list-baverages/baverages-1.png'),
  },
  {
    id: 'baverages_cocal_small',
    type: 'baverages',
    name: 'Coca Cola Small',
    price: '9000',
    image: require('../assets/images/list-baverages/baverages-2.png'),
  },
  {
    id: 'baverages_coca_large',
    type: 'baverages',
    name: 'Coca Cola Large',
    price: '13000',
    image: require('../assets/images/list-baverages/baverages-3.png'),
  },
  {
    id: 'baverages_red_lemon_soda',
    type: 'baverages',
    name: 'Red Lemon Soda',
    price: '8400',
    image: require('../assets/images/list-baverages/baverages-4.png'),
  },
  {
    id: 'baverages_blue_soda',
    type: 'baverages',
    name: 'Bluesea Soda',
    price: '8100',
    image: require('../assets/images/list-baverages/baverages-5.png'),
  },
];

export const ITEMS_SALADS = [
  {
    id: 'salads_white',
    type: 'salads',
    name: 'White Purple Salads',
    price: '20000',
    image: require('../assets/images/list-salads/salad-1.png'),
  },
  {
    id: 'salads_dragon',
    type: 'salads',
    name: 'Dragon Salads',
    price: '18500',
    image: require('../assets/images/list-salads/salad-2.png'),
  },
  {
    id: 'salads_red',
    type: 'salads',
    name: 'Red Salads',
    price: '19000',
    image: require('../assets/images/list-salads/salad-3.png'),
  },
  {
    id: 'salads_beef',
    type: 'salads',
    name: 'Beef Meat Salad',
    price: '21400',
    image: require('../assets/images/list-salads/salad-4.png'),
  },
];

export const ITEMS_DESERTS = [
  {
    id: 'desserts_vanilla',
    type: 'desserts',
    name: 'Vanilla Ice Cream',
    price: '50000',
    image: require('../assets/images/list-desserts/desserts-1.png'),
  },
  {
    id: 'desserts_strawberry',
    type: 'desserts',
    name: 'Strawberry Ice Cream',
    price: '49260',
    image: require('../assets/images/list-desserts/desserts-2.png'),
  },
  {
    id: 'desserts_lemon_soda',
    name: 'Red Lemon Soda',
    price: '35000',
    type: 'desserts',
    image: require('../assets/images/list-desserts/desserts-3.png'),
  },
  {
    id: 'desserts_mango',
    name: 'Bluesea Soda',
    type: 'desserts',
    price: '22400',
    image: require('../assets/images/list-desserts/desserts-4.png'),
  },
];

export const ITEMS_MEALS = [
  {
    id: 'meals_lunch',
    type: 'meals',
    name: 'Lunch Pack',
    price: '100000',
    image: require('../assets/images/list-meals/meals-1.png'),
  },
  {
    id: 'meals_chessy',
    type: 'meals',
    name: 'Chessy MiLo',
    price: '89260',
    image: require('../assets/images/list-meals/meals-2.png'),
  },
  {
    id: 'meals_cola_beef',
    type: 'meals',
    name: 'Cola Beef',
    price: '87260',
    image: require('../assets/images/list-meals/meals-3.png'),
  },
  {
    id: 'meals_burger',
    name: 'Cheese Burger Meal ',
    price: '155260',
    type: 'meals',
    image: require('../assets/images/list-meals/meals-4.png'),
  },
];

export const LIST_ITEMS = {
  burger: ITEMS_BURGERS,
  salads: ITEMS_SALADS,
  meals: ITEMS_MEALS,
  baverages: ITEMS_BAVERAGES,
  dessert: ITEMS_DESERTS,
};

export const SWITCH_HERO_IMAGE = {
  burger: require('../assets/images/hero-slider-2.png'),
  salads: require('../assets/images/hero-salads.png'),
  meals: require('../assets/images/hero-burger.png'),
  baverages: require('../assets/images/hero-baverages.png'),
  dessert: require('../assets/images/hero-escream.png'),
};
