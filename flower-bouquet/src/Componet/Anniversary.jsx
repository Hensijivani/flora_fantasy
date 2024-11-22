

import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componet/Navbar';
import b_anniversary from '../Componet/img/b_anniversary.jpg';
import a_1 from '../Componet/img/a_1.webp';
import a_2 from '../Componet/img/a_2.webp';
import a_3 from '../Componet/img/a_3.webp';
import a_4 from '../Componet/img/a_4.jpg';
import a_5 from '../Componet/img/a_5.webp';
import a_6 from '../Componet/img/a_6.jpg';
import a_7 from '../Componet/img/a_7.webp';
import a_8 from '../Componet/img/a_8.webp';
import a_9 from '../Componet/img/a_9.webp';
import a_10 from '../Componet/img/a_10.webp';
import a_11 from '../Componet/img/a_11.webp';
import a_12 from '../Componet/img/a_12.webp';
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
  backgroundImage: `url(${b_anniversary})`, // Replace with your image URL
  backgroundSize: 'cover',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
    image: a_1,
    title: 'Lovely Red Rose Bouquet',
    originalPrice: '₹ 795',
    discountedPrice: '₹ 715',
    reviews: '2 review',
  },
  {
    discount: '21%',
    image: a_2,
    title: 'Love Melody Bouquet With Cake Duo',
    originalPrice: '₹ 1945',
    discountedPrice: '₹ 1536',
    reviews: '4 review',
  },
  {
    discount: '50%',
    image: a_3,
    title: 'A Lot Like Love Hamper',
    originalPrice: '₹ 5895',
    discountedPrice: '₹ 2947',
    reviews: '1 review',
  },
  {
    discount: '18%',
    image: a_4,
    title: 'Teddy N Rose Love Combo',
    originalPrice: '₹ 1445',
    discountedPrice: '₹ 1184',
    reviews: '3 review',
  },
  {
    discount: '10%',
    image: a_5,
    title: 'A Classic Hamper',
    originalPrice: '₹ 1345',
    discountedPrice: '₹ 1210',
    reviews: '4 review',
  },
  {
    discount: '11%',
    image: a_6,
    title: 'Enchanted Love Box',
    originalPrice: '₹ 795',
    discountedPrice: '₹ 707',
    reviews: '5 review',
  },
  {
    discount: '21%',
    image: a_7,
    title: 'Romantic Rose Radiance Bouquet',
    originalPrice: '₹ 1125',
    discountedPrice: '₹ 888',
    reviews: '7 review',
  },
  {
    discount: '25%',
    image: a_8,
    title: 'The Blushing Symphony',
    originalPrice: '₹ 1495',
    discountedPrice: '₹ 1121',
    reviews: '2 review',
  },
  {
    discount: '21%',
    image: a_9,
    title: 'Anniversary Roses of Love',
    originalPrice: '₹ 1099',
    discountedPrice: '₹ 868',
    reviews: '3 review',
  },
  {
    discount: '30%',
    image: a_10,
    title: 'Endless Love 100 Roses Bouquet',
    originalPrice: '₹ 5649',
    discountedPrice: '₹ 3954',
    reviews: '2 review',
  },
  {
    discount: '20%',
    image: a_11,
    title: 'Anniversary Affection & Sweet Surprises',
    originalPrice: '₹ 1475',
    discountedPrice: '₹ 1180',
    reviews: '8 review',
  },
  {
    discount: '11%',
    image: a_12,
    title: 'Blue Floral Orchids N Chocolates',
    originalPrice: '₹ 1149',
    discountedPrice: '₹ 1022',
    reviews: '6 review',
  },

];

function Anniversary() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
            "Celebrate Years of Love with Fresh Flowers"
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Abril Fatface" }}>
            Focuses on the freshness and renewal of love each year.
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
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'red' }}>
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

export default Anniversary;
