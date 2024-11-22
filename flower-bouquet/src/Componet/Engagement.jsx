

import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componet/Navbar';
import b_engage from '../Componet/img/b_engage.jpg';
import e_1 from '../Componet/img/e_1.webp';
import e_2 from '../Componet/img/e_2.webp';
import e_3 from '../Componet/img/e_3.webp';
import e_4 from '../Componet/img/e_4.webp';
import e_5 from '../Componet/img/e_5.webp';
import e_6 from '../Componet/img/e_6.png';
import e_7 from '../Componet/img/e_7.webp';
import e_8 from '../Componet/img/e_8.webp';
import e_9 from '../Componet/img/e_9.webp';
import e_10 from '../Componet/img/e_10.webp';
import e_11 from '../Componet/img/e_11.webp';
import e_12 from '../Componet/img/e_12.webp';
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
  backgroundImage: `url(${b_engage})`, // Replace with your image URL
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
    discount: '20%',
    image: e_1,
    title: 'Dreaming of Red',
    originalPrice: '₹ 1695',
    discountedPrice: '₹ 1356',
    reviews: '2 review',
  },
  {
    discount: '12%',
    image: e_2,
    title: 'The Delilah',
    originalPrice: '₹ 1995',
    discountedPrice: '₹ 1755',
    reviews: '4 review',
  },
  {
    discount: '10%',
    image: e_3,
    title: 'Clad In Pink Bunch',
    originalPrice: '₹ 695',
    discountedPrice: '₹ 625',
    reviews: '1 review',
  },
  {
    discount: '15%',
    image: e_4,
    title: 'Forever Love Bouquet',
    originalPrice: '₹ 995',
    discountedPrice: '₹ 845',
    reviews: '3 review',
  },
  {
    discount: '31%',
    image: e_5,
    title: 'Velvety Dreamscape of Roses',
    originalPrice: '₹ 1675',
    discountedPrice: '₹ 1155',
    reviews: '4 review',
  },
  {
    discount: '25%',
    image: e_6,
    title: 'Bouquet Of Mixed Roses & Cake',
    originalPrice: '₹ 1495',
    discountedPrice: '₹ 1121',
    reviews: '5 review',
  },
  {
    discount: '31%',
    image: e_7,
    title: 'Carnation Elegance Collection',
    originalPrice: '₹ 1825',
    discountedPrice: '₹ 1259',
    reviews: '7 review',
  },
  {
    discount: '11%',
    image: e_8,
    title: 'Sweet Pink Roses Bunch',
    originalPrice: '₹ 1175',
    discountedPrice: '₹ 1045',
    reviews: '2 review',
  },
  {
    discount: '10%',
    image: e_9,
    title: 'Red Roses Bouquet & Dairy Milk Chocolates',
    originalPrice: '₹ 849',
    discountedPrice: '₹ 764',
    reviews: '3 review',
  },
  {
    discount: '13%',
    image: e_10,
    title: 'Bouquet Of Yellow, Red & White Roses',
    originalPrice: '₹ 899',
    discountedPrice: '₹ 782',
    reviews: '2 review',
  },
  {
    discount: '19%',
    image: e_11,
    title: 'Pink Roses & Daisies Bouquet',
    originalPrice: '₹ 1399',
    discountedPrice: '₹ 1133',
    reviews: '8 review',
  },
  {
    discount: '21%',
    image: e_12,
    title: 'Light of Your Life Rose Bouquet',
    originalPrice: '₹ 1225',
    discountedPrice: '₹ 1204',
    reviews: '6 review',
  },

];

function Engagement() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
            "Engagement Blooms, Crafted with Love."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Abril Fatface" }}>
            Stresses the care and love put into creating the bouquet.
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

export default Engagement;
