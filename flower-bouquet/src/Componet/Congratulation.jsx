import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componet/Navbar';
import b_congratulation from '../Componet/img/b_congratulation.jpg';
import c_1 from '../Componet/img/c_1.webp';
import c_2 from '../Componet/img/c_2.webp';
import c_3 from '../Componet/img/c_3.webp';
import c_4 from '../Componet/img/c_4.webp';
import c_5 from '../Componet/img/c_5.webp';
import c_6 from '../Componet/img/c_6.webp';
import c_7 from '../Componet/img/c_7.webp';
import c_8 from '../Componet/img/c_8.webp';
import c_9 from '../Componet/img/c_9.webp';
import c_10 from '../Componet/img/c_10.webp';
import c_11 from '../Componet/img/c_11.webp';
import c_12 from '../Componet/img/c_12.webp';
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
  backgroundImage: `url(${b_congratulation})`, // Replace with your image URL
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
    image: c_1,
    title: 'Bunch Of Roses And Orchids',
    originalPrice: '₹ 1695',
    discountedPrice: '₹ 1525',
    reviews: '2 review',
  },
  {
    discount: '21%',
    image: c_2,
    title: 'Sunny Skies',
    originalPrice: '₹ 1345',
    discountedPrice: '₹ 1062',
    reviews: '4 review',
  },
  {
    discount: '10%',
    image: c_3,
    title: 'Sweet Turquoise Tranquility',
    originalPrice: '₹ 1445',
    discountedPrice: '₹ 1300',
    reviews: '1 review',
  },
  {
    discount: '11%',
    image: c_4,
    title: 'Mesmerising Red Roses Bouquet',
    originalPrice: '₹ 649',
    discountedPrice: '₹ 577',
    reviews: '3 review',
  },
  {
    discount: '10%',
    image: c_5,
    title: 'Beautiful Bouquet of Purple Orchids & Yellow Roses',
    originalPrice: '₹ 945',
    discountedPrice: '₹ 850',
    reviews: '4 review',
  },
  {
    discount: '21%',
    image: c_6,
    title: 'Floral Fantasy Truffle Indulgence Cake',
    originalPrice: '₹ 1825',
    discountedPrice: '₹ 1441',
    reviews: '5 review',
  },
  {
    discount: '11%',
    image: c_7,
    title: 'Vivid Beauty Blooming Wishes',
    originalPrice: '₹ 695',
    discountedPrice: '₹ 618',
    reviews: '7 review',
  },
  {
    discount: '21%',
    image: c_8,
    title: 'Blushing Red Roses Bouquet',
    originalPrice: '₹ 845',
    discountedPrice: '₹ 667',
    reviews: '2 review',
  },
  {
    discount: '19%',
    image: c_9,
    title: 'Magical Blooms',
    originalPrice: '₹ 745',
    discountedPrice: '₹ 603',
    reviews: '3 review',
  },
  {
    discount: '15%',
    image: c_10,
    title: 'Elegant Blooms with Cake',
    originalPrice: '₹ 1445',
    discountedPrice: '₹ 1228',
    reviews: '2 review',
  },
  {
    discount: '12%',
    image: c_11,
    title: 'Vintage Charm White Rose Bouquet',
    originalPrice: '₹ 1145',
    discountedPrice: '₹ 1007',
    reviews: '8 review',
  },
  {
    discount: '21%',
    image: c_12,
    title: ' Crunch Cake With Bunch Of Light Carnation',
    originalPrice: '₹ 1845',
    discountedPrice: '₹ 1457',
    reviews: '6 review',
  },

];

function Congratulations() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
            "Your Achievement, Our Celebration."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Abril Fatface" }}>
            Inclusive and warm, suggesting shared joy in the recipient's success.
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

export default Congratulations;
