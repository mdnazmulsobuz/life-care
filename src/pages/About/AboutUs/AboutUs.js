import React from 'react';
import Hero from '../Hero/Hero';
import Testimonial from '../Testimonial/Testimonial';
import './AboutUs.css';

const AbouUs = () => {
    return (
        <div>
            <h2 className='title'>About Us</h2>
            <Hero></Hero>
            <Testimonial></Testimonial>
        </div>
    );
};

export default AbouUs;