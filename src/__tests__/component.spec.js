import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Product from '../components/Product';

import { store } from '../services/store';
import { ProductItem } from '../services/types/index.d';

const renderProduct = (product: ProductItem): RenderResult =>
  render(
    <Provider store={store}>
      <Product product={product} />
    </Provider>
  );


const getProduct = (id: string): ProductItem => {
  const book = store.getState().shoppingCart.find((book) => book.id === id);
  expect(book).not.toBeUndefined();
  return book;
};


test('Renders Product component', () => {
  const productId = '1';
  const product = getProduct(productId);
  const { asFragment } = renderProduct(product);

  const productText = screen.getByTestId('product-type');
  expect(productText).toHaveTextContent('Bike');  

  expect(asFragment()).toMatchSnapshot();
});

