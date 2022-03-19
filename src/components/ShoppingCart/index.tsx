import { Card, CardContent, List, ListItem, Typography } from '@mui/material';
import ShoppingCardItem from '../ShoppingCartItem';
import { ProductItem } from '../../services/types/index.d';
import localization from '../../services/localization';

interface Props {
  products: ProductItem[];
}

const ShoppingCart = (props: Props) => {
  const { products } = props;

  const addedProductsCounter = products.filter(
    (product) => product.isProductAdded,
  ).length;

  const totalPrice = products.reduce<number>(
    (acc, current) => (acc = acc + (current.calculatedPrice ?? 0)),
    0,
  );

  return (
    <Card>
      <CardContent>
        <Typography component="h2" variant="h5" color="primary" gutterBottom>
          {localization.shoppingCart.shoppingCart}
        </Typography>
        <Typography component="span" variant="body1">
          {`${localization.shoppingCart.youHave} ${addedProductsCounter} ${localization.shoppingCart.items}`}
        </Typography>
        <List>
          {products.map((product: ProductItem) => (
            <ShoppingCardItem key={product.id} product={product} />
          ))}
          <ListItem sx={{ justifyContent: 'flex-end' }}>
            <Typography variant="subtitle1">
              Total: &euro;
              {totalPrice}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
