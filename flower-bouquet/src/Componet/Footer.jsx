import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Mainbody from './Mainbody';

const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  backgroundColor: '#1d1d1d',
  textAlign: 'center',
  flexDirection: 'column',
});

const CTAButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#4caf50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const FooterText = styled(Typography)({
  position: 'absolute',
  bottom: '10px',
  width: '100%',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '14px',
});

function Footer() {
  return (
    <div>
      <Container sx={{position: 'relative'}}>
        <Typography variant="h3" component="div" gutterBottom sx={{color: 'white' , fontFamily: '"Courgette", cursive' }}>
        Embrace the Love?
        </Typography>
        <Typography variant="h3" component="div" gutterBottom sx={{color: 'white' ,  fontFamily: 'Abril Fatface'  }}>
        Create Memories with Bouquets!
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom sx={{color: 'gray' , fontFamily: 'Popins'}}>
        A touch of nature. A burst of color. A symbol of love.
        </Typography>
        <CTAButton variant="contained" sx={{backgroundColor: 'white' , color: 'black'}} className='btn'>Buy Now</CTAButton>
        <Typography variant='h6' sx={{color: 'gray' , bottom: '0' , position: 'absolute', fontSize: '12px', paddingBottom: '8px'}}>
        Powered by Flora Fantasy
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;