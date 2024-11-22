import React from 'react';
import Navbar from './Navbar';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Box, Typography, Button, Rating, Grid } from '@mui/material';
import ProductImage from './ProductImage';
import About from './About';
import Footer from './Footer';


const SlideContainer = styled(Box)({
    position: 'relative',
    textAlign: 'center',
    top: '10px',
    color: 'white',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: '"Courgette", cursive',
    overflow: 'hidden',
});

const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
});

const Content = styled(Box)({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    top: '30%',
});

const CustomButton = styled(Button)({
    marginTop: '20px',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

const sliderData = [
    {
        title: '"Create lasting memories with our handcrafted, luxurious flower arrangements."',
        subtitle: "Elegance wrapped in every petal.",
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "src/Componet/img/Slider1.jpg"
    },
    {
        title: '"Let our premium flowers add a touch of magic to your everyday."',
        subtitle: 'Find Your Perfect Expensive Gifts',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "src/Componet/img/Slider3.jpg", 
    },
    {
        title: '"Professionally curated bouquets that capture the essence of refined beauty."',
        subtitle: "Embrace the artistry of blooms.",
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "src/Componet/img/Slider2.jpg", 
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const CustomSlider = () => (
    
    <Slider {...settings}>
        {sliderData.map((slide, index) => (
            <SlideContainer key={index} sx={{ backgroundImage: `url(${slide.image})` }}>
                <Overlay />
                <Content>
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontFamily: "Abril Fatface"}}>
                        {slide.subtitle}
                    </Typography>
                    <Typography variant="h2" component="div" gutterBottom sx={{ fontFamily: '"Courgette", cursive' }}>
                        {slide.title}
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        {slide.description}
                    </Typography>
                    <CustomButton variant="contained" sx={{ fontFamily: "Abril Fatface"}}>Shop Collection</CustomButton>
                </Content>
            </SlideContainer>
        ))}
    </Slider>
);





function Mainbody() {
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* <Navbar /> */}
            <CustomSlider />
            <ProductImage />
            <About />
            
        {/* <Footer /> */}
        </div>
    );
}

export default Mainbody;
