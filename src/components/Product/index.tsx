import { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { addProduct } from '../../services/redux/shoppingCart';
import { useDispatch } from 'react-redux';
import RangePicker from '../RangePicker';
import { calculatePriceTariff } from '../../services/utils';
import localization from '../../services/localization';
import { ProductItem } from '../../services/types/index.d';

interface Props {
  product: ProductItem;
}

const Product = (props: Props) => {
  const [selectedUserCoverage, setSelectedUserCoverage] = useState<
    number | undefined
  >(undefined);
  const dispatch = useDispatch();

  const addProductToShoppingCard = (id: string, calculatedPrice: number) => {
    dispatch(addProduct({ id, calculatedPrice }));
  };

  const {
    product: { type, coverage, risk, id, isProductAdded },
  } = props;

  const calculatedPriceTariff = selectedUserCoverage
    ? calculatePriceTariff(selectedUserCoverage, risk)
    : 0;

  return (
    <Card sx={{ minWidth: '250px' }}>
      <CardContent>
        <Typography
          data-testid="product-type"
          gutterBottom
          variant="h5"
          component="span">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {calculatedPriceTariff
            ? `${localization.product.yourTariffPrice} ${calculatedPriceTariff}`
            : localization.product.selectCoverage}
        </Typography>
        <Typography component="div" variant="body2" color="text.secondary">
          <RangePicker
            setSelectedUserCoverage={setSelectedUserCoverage}
            minCoverage={coverage.min}
            maxCoverage={coverage.max}
            isProductAdded={isProductAdded}
          />
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          onClick={() => addProductToShoppingCard(id, calculatedPriceTariff)}
          disabled={isProductAdded || !selectedUserCoverage}
          size="small">
          {localization.product.addToBasket}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
