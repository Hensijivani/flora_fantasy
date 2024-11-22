import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Courgette", cursive', textAlign: 'center' }}>
          ABOUT US
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Abril Fatface' }}>
                "At Flora Fantasy, our journey began with a single bloom and a dream to spread beauty and joy. Inspired by nature’s artistry, we curate floral arrangements that celebrate life's most cherished moments, blending timeless elegance with a touch of personal flair."
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Abril Fatface' }}>
                “At Flora Fantasy, our mission is to transform ordinary moments into extraordinary memories through the art of flowers. We are committed to crafting imaginative and vibrant bouquets that not only captivate the eye but also speak the language of joy, love, and celebration.”
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                Our Impact
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Abril Fatface' }}>
                "We are committed to making a positive difference through our sustainable practices and community involvement. From reducing waste through eco-friendly packaging to supporting local initiatives, we aim to contribute to a better world."
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                Our Commitment
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Abril Fatface' }}>
                "We are committed to using the finest flowers and expert craftsmanship to create stunning bouquets. Our goal is to ensure every arrangement reflects beauty and quality, delivering joy and satisfaction with each order. Our team of skilled florists works tirelessly to bring you the best in quality and design."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
