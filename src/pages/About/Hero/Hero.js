import React from 'react';
import hero from '../../../images/hero.jpeg'

const Hero = () => {
    return (
        <div className='d-flex container my-5'> 
            <div className='row'>
                <div className='abouthero col-md-6'> 
                    <img className='img-fluid' src={hero} alt='' />
                </div>
                <div className='abouthero col-md-6'> 
                    <h2 className='pt-5'>Welcom to Lifecare-24/7</h2>
                    <p>We have most largest collection of medicine. We served medicine by certified pharmasist. In our pahrmecy you will get all of item for your prescription. We also provide home service medicine delivery. We have most largest collection of medicine. We served medicine by certified pharmasist. In our pahrmecy you will get all of item for your prescription. We also provide home service medicine delivery.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;