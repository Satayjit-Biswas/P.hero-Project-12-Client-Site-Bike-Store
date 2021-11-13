import React from 'react';
import BestProduct from '../BestProduct/BestProduct';
import Contact from '../Contact/Contact';
import HomeProduct from '../Product/HomeProduct/HomeProduct';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeProduct></HomeProduct>
            <Review></Review>
            <BestProduct></BestProduct>
            <Contact></Contact>
        </div>
    );
};

export default Home;