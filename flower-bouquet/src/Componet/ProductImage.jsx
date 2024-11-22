// import React from 'react';
// import { Box, Typography, Button, Rating, Grid } from '@mui/material';
// import Flower from '../Componet/img/flower.jpg';
// import Flower1 from '../Componet/img/flower1.webp';




// const ProductImage = () => {
//     return (
//       <Box p={4}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <img src={Flower1} alt="Product" style={{ width: '80%', height: '500px' }} />
//             <img src={Flower} alt="Product" style={{ width: '40%', height: '300px', marginTop: '-208px' , marginLeft: '290px' , border: '10px solid white'}} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="overline" display="block" gutterBottom>
//               NEW COLLECTIONS
//             </Typography>
//             <Typography variant="h3" gutterBottom>
//               Best Sweatshirts and tracksuits for everyone!
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
//             </Typography>
//             <Button variant="contained" color="primary" size="large">
//               Shop Now
//             </Button>
//             <Box mt={4}>
//               <Rating value={4.5} readOnly />
//               <Typography variant="body2" display="inline" ml={1}>
//                 (10.000+) Rating
//               </Typography>
//               <Typography variant="body2" paragraph>
//                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
//               </Typography>
//               <Typography variant="body2" fontWeight="bold">
//                 Petra van der Meer
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   };
  
//   export default ProductImage;



import React from 'react';
import { Box, Typography, Button, Rating, Grid } from '@mui/material';
import Flower from '../Componet/img/flower.jpg';
import Flower1 from '../Componet/img/flower1.webp';

const ProductImage = () => {
    return (
        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item  xs={12} md={6}>
                    <img src={Flower1} alt="Product" style={{ width: '80%', height: '500px' }} />
                    <img src={Flower} alt="Product" style={{ width: '40%', height: '300px', marginTop: '-208px', marginLeft: '290px', border: '10px solid white' }} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='vs'></Box>
                    <Typography variant="overline" display="block" gutterBottom sx={{ fontFamily: "Abril Fatface" , fontWeight: '600' ,fontSize:'18px'}} >
                    New Arrivals
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                        Best Flower Bouquets for<br/> Your Special Day!
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ fontFamily: 'Poppins' }} >
                        Discover our exclusive collection of handcrafted bouquets that are perfect for any occasion. Our flowers are fresh, vibrant, and arranged with utmost care.
                    </Typography>
                    <Button variant="contained" size="large" className='btn'  sx={{ fontFamily: 'Poppins' , backgroundColor: '#C62828' }} >
                        Shop Now
                    </Button>
                    <Box mt={3}>
                    
                        <Typography paragraph sx={{ fontFamily: 'Poppins', fontSize:'20px' }}>
                            "I was blown away by the quality and beauty of the bouquets. Perfect for every special moment!!"
                        </Typography>
                    
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductImage;
