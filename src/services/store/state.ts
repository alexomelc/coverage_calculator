import { ProductItem } from '../types/index.d';

export const INITIAL_STATE: ProductItem[] = [
  {
    id: '1',
    type: 'Bike',
    coverage: {
      min: 0,
      max: 3000,
    },
    risk: 30,
  },
  {
    id: '2',
    type: 'Jewelry',
    coverage: {
      min: 500,
      max: 10000,
    },
    risk: 5,
  },
  {
    id: '3',
    type: 'Electronics',
    coverage: {
      min: 500,
      max: 6000,
    },
    risk: 35,
  },
  {
    id: '4',
    type: 'Sports Equipment',
    coverage: {
      min: 0,
      max: 20000,
    },
    risk: 30,
  },
];
