import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componet/Navbar';
import b_opening from '../Componet/img/b_opening.jpg';
import o_1 from '../Componet/img/o_1.png';
import o_2 from '../Componet/img/o_2.png';
import o_3 from '../Componet/img/o_3.png';
import o_4 from '../Componet/img/o_4.png';
import o_5 from '../Componet/img/o_5.webp';
import o_6 from '../Componet/img/o_6.png';
import o_7 from '../Componet/img/o_7.png';
import o_8 from '../Componet/img/o_8.png';
import o_9 from '../Componet/img/o_9.png';
import o_10 from '../Componet/img/o_10.png';
import o_11 from '../Componet/img/o_11.webp';
import o_12 from '../Componet/img/o_12.webp';
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
  backgroundImage: `url(${b_opening})`, // Replace with your image URL
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
    image: o_1,
    title: 'Bouquet Of Red, Pink & White Roses',
    originalPrice: '₹ 1449',
    discountedPrice: '₹ 1349',
    reviews: '2 review',
  },
  {
    discount: '21%',
    image: o_2,
    title: 'Bouquet Of White Carnations',
    originalPrice: '₹ 1945',
    discountedPrice: '₹ 1536',
    reviews: '4 review',
  },
  {
    discount: '10%',
    image: o_3,
    title: 'Bouquet Of Red & White Roses',
    originalPrice: '₹ 649',
    discountedPrice: '₹ 584',
    reviews: '1 review',
  },
  {
    discount: '11%',
    image: o_4,
    title: 'Bouquet Of Pink Gerberas',
    originalPrice: '₹ 699',
    discountedPrice: '₹ 622',
    reviews: '3 review',
  },
  {
    discount: '10%',
    image: o_5,
    title: 'Floral Enchantment Bouquet',
    originalPrice: '₹ 1445',
    discountedPrice: '₹ 1300',
    reviews: '4 review',
  },
  {
    discount: '21%',
    image: o_6,
    title: 'Bouquet Of Pink Gerberas & Pink Roses',
    originalPrice: '₹ 825',
    discountedPrice: '₹ 651',
    reviews: '5 review',
  },
  {
    discount: '11%',
    image: o_7,
    title: 'Bouquet Of Purple Orchids & White Lilies',
    originalPrice: '₹ 1449',
    discountedPrice: '₹ 1334',
    reviews: '7 review',
  },
  {
    discount: '21%',
    image: o_8,
    title: 'Bouquet Of Pink Carnations & Gerberas',
    originalPrice: '₹ 1245',
    discountedPrice: '₹ 983',
    reviews: '2 review',
  },
  {
    discount: '19%',
    image: o_9,
    title: 'Mixed Gerberas In A Basket With Cake',
    originalPrice: '₹ 1699',
    discountedPrice: '₹ 1342',
    reviews: '3 review',
  },
  {
    discount: '15%',
    image: o_10,
    title: 'Bouquet Of Gerberas, Carnations & Roses',
    originalPrice: '₹ 1245',
    discountedPrice: '₹ 1058',
    reviews: '2 review',
  },
  {
    discount: '12%',
    image: o_11,
    title: 'Bouquet of 10 Pink Gerberas',
    originalPrice: '₹ 1475',
    discountedPrice: '₹ 1298',
    reviews: '8 review',
  },
  {
    discount: '21%',
    image: o_12,
    title: 'Bouquet of Ombre Roses',
    originalPrice: '₹ 1945',
    discountedPrice: '₹ 1536',
    reviews: '6 review',
  },

];

function Opening() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
            "Petals of Prosperity for Your Opening Day."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Abril Fatface" }}>
            Implies that the flowers symbolize good fortune and success.
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

export default Opening;
