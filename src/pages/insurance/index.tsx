import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAllProduct } from '../../services/redux/shoppingCart';
import Product from '../../components/Product';
import ShoppingCart from '../../components/ShoppingCart';
import { RootState } from '../../services/store';

export default function Insurance() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.shoppingCart);
  const addedProducts = products.filter((product) => product.isProductAdded);

  useEffect(() => {
    const localData = localStorage.getItem('data');
    
    if (localData !== null) {
      dispatch(addAllProduct(JSON.parse(localData)));
    } 
  },[])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(products));
  }, [products]);

  return (
    <Container fixed>
      <Box mt={5} mb={5}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item lg={3}>
              <Product product={product} />
            </Grid>
          ))}
          <Grid item md={12}>
            <ShoppingCart products={addedProducts} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
