import {
  Typography,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProduct } from '../../services/redux/shoppingCart';
import { useDispatch } from 'react-redux';
import { ProductItem } from '../../services/types/index.d';

interface Props {
  product: ProductItem;
}

const ShoppingCardItem = (props: Props) => {
  const {
    product: { id, type, calculatedPrice },
  } = props;

  const dispatch = useDispatch();

  const removeProductFromShoppingCard = (id: string) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={type}
          secondary={
            <Typography component="span" variant="body2" color="textPrimary">
              &euro; {calculatedPrice}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeProductFromShoppingCard(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default ShoppingCardItem;
