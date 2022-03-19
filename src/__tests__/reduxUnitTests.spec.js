import { store } from '../services/store';
import { addProduct, removeProduct } from '../services/redux/shoppingCart';

test('Add product to shopping cart', () => {
  let state = store.getState().shoppingCart;
  const unchangedBook = state.find((book) => book.id === '1');
  expect(unchangedBook?.type).toBe('Bike');
  expect(unchangedBook?.risk).toBe(30);

  store.dispatch(addProduct({ id: '1', calculatedPrice: 30}));
  state = store.getState().shoppingCart;
  let changeBook = state.find((book) => book.id === '1');
  expect(changeBook?.isProductAdded).toBe(true);
  expect(changeBook?.calculatedPrice).toBe(30);
});

test('Remove product from shopping cart', () => {
  let state = store.getState().shoppingCart;
  const unchangedBook = state.find((book) => book.id === '1');
  expect(unchangedBook?.type).toBe('Bike');
  expect(unchangedBook?.risk).toBe(30);

  store.dispatch(removeProduct({ id: '1' }));
  state = store.getState().shoppingCart;
  let changeBook = state.find((book) => book.id === '1');
  expect(changeBook?.isProductAdded).toBe(false);
  expect(changeBook?.calculatedPrice).toBe(undefined);
});