

import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componet/Navbar';
import b_main from '../Componet/img/b_main.jpg';
import b_1 from '../Componet/img/b_1.webp';
import b_2 from '../Componet/img/b_2.webp';
import b_3 from '../Componet/img/b_3.jpg';
import b_4 from '../Componet/img/b_4.jpg';
import b_5 from '../Componet/img/b_5.webp';
import b_6 from '../Componet/img/b_6.webp';
import b_7 from '../Componet/img/b_7.webp';
import b_8 from '../Componet/img/b_8.webp';
import b_9 from '../Componet/img/b_9.webp';
import b_10 from '../Componet/img/b_10.webp';
import b_11 from '../Componet/img/b_11.webp';
import b_12 from '../Componet/img/b_12.webp';
import Footer from './Footer';


const BannerContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  backgroundImage: `url(${b_main})`, 
  backgroundSize: 'cover',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
});

const BannerText = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  
});

const ProductCard = styled(Card)({
  width: '100%',
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  '& .MuiCardMedia-root': {
    height: '400px',
    objectFit: 'cover',
    
  },
});

const DiscountBadge = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'gray',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: 'bold',


});

const ProductActions = styled(Box)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const FilterSortSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
  padding: '0 20px',
  
});

const CustomButton = styled(Button)({
  backgroundColor: 'white',
  marginBottom: '20px',
  color: 'black',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const products = [
  {
    discount: '10%',
    image: b_1,
    title: 'Beautiful Bunch of 15 White Roses',
    originalPrice: '₹ 1245',
    discountedPrice: '₹ 1120',
    reviews: '2 review',
  },
  {
    discount: '21%',
    image: b_2,
    title: 'Lilac Morning',
    originalPrice: '₹ 1645',
    discountedPrice: '₹ 1299',
    reviews: '4 review',
  },
  {
    discount: '10%',
    image: b_3,
    title: 'Personalized Birthday Blossom Bonanza',
    originalPrice: '₹ 945',
    discountedPrice: '₹ 850',
    reviews: '1 review',
  },
  {
    discount: '11%',
    image: b_4,
    title: 'Bouquet of 10 Enchanting Roses',
    originalPrice: '₹ 995',
    discountedPrice: '₹ 885',
    reviews: '3 review',
  },
  {
    discount: '10%',
    image: b_5,
    title: 'Birthday Blooms Personalized Mug',
    originalPrice: '₹ 695',
    discountedPrice: '₹ 625',
    reviews: '4 review',
  },
  {
    discount: '21%',
    image: b_6,
    title: 'Floral Enchantment Bouquet',
    originalPrice: '₹ 1495',
    discountedPrice: '₹ 1181',
    reviews: '5 review',
  },
  {
    discount: '11%',
    image: b_7,
    title: 'The June Blooms',
    originalPrice: '₹ 1545',
    discountedPrice: '₹ 1375',
    reviews: '7 review',
  },
  {
    discount: '21%',
    image: b_8,
    title: 'Wishful Blooms',
    originalPrice: '₹ 2345',
    discountedPrice: '₹ 1618',
    reviews: '2 review',
  },
  {
    discount: '19%',
    image: b_9,
    title: 'Bouquet of Orchids and Roses',
    originalPrice: '₹ 1095',
    discountedPrice: '₹ 833',
    reviews: '3 review',
  },
  {
    discount: '15%',
    image: b_10,
    title: 'Red Roses Bouquet With Mini Cake',
    originalPrice: '₹ 1095',
    discountedPrice: '₹ 930',
    reviews: '2 review',
  },
  {
    discount: '12%',
    image: b_11,
    title: 'Birthday Enchanting Blooms Bouquet',
    originalPrice: '₹ 1145',
    discountedPrice: '₹ 1007',
    reviews: '8 review',
  },
  {
    discount: '21%',
    image: b_12,
    title: 'Roses and Cake Gift Hamper',
    originalPrice: '₹ 1445',
    discountedPrice: '₹ 1141',
    reviews: '6 review',
  },

];

function Birthday() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
            "Petals of Perfection Delivered."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Abril Fatface" }}>
            Emphasizes quality and the convenience of delivery.
            </Typography>
          </BannerText>
        </BannerContainer>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box className='white_space'></Box>
              <ProductCard>
                {product.discount && (
                  <DiscountBadge>
                    {product.discount}
                  </DiscountBadge>
                )}
                <CardMedia component="img" sx={{height: '400px', width: '100%'}} image={product.image} title={product.title} />
                <CardContent>
                  <Typography variant="body1" gutterBottom sx={{ fontFamily: '"Courgette", cursive'}}>
                    {product.title}
                  </Typography>
                  {product.originalPrice && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="10px">
                      <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                        {product.originalPrice}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'red'}}>
                        {product.discountedPrice}
                      </Typography>
                    </Box>
                  )}
                  {product.reviews && (
                    <Box display="flex" alignItems="center" marginTop="10px" color="orange">
                      <Typography variant="body2">
                        ⭐ {product.reviews}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
                <ProductActions>
                  <IconButton sx={{color:'red'}}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <AddShoppingCartIcon />
                  </IconButton>
                </ProductActions>
                <CustomButton variant="contained" className='btn' sx={{left: '36%'}}>Shop Now</CustomButton>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    {/* <Footer /> */}
    </div>
  );
}

export default Birthday;
