import React from 'react';
import gallery1 from '../../../images/1.jpeg';
import gallery2 from '../../../images/2.jpeg';
import gallery3 from '../../../images/3.jpeg';
import gallery4 from '../../../images/4.jpeg';
import gallery5 from '../../../images/5.jpeg';
import gallery6 from '../../../images/6.jpeg';
import gallery7 from '../../../images/7.jpeg';
import gallery8 from '../../../images/8.jpeg';
import './Galery.css';

const Gallery = () => {
    return (
        <div className='container my-5 gallery'>
            <h2>Photo Gallery</h2>
            <div className='row'>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery1} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery2} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery3} alt="" /> 
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery4} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery5} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery6} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery7} alt="" />
                </div>
                <div className="col-md-3 col-6 my-3">
                    <img className='img-fluid' src={gallery8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;