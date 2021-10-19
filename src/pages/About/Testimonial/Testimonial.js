import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../../../images/images.jpeg';
import './Testimonial.css';

const Testimonial = () => {
    // data for testimonial
    const testimonial = [
        {
          id: 1, content:
            "Over all though it was a great experience. I can't beleive theier servuces. Their service are very fast and well managed. I am always happy their sevices. Here all of stuff are very helpfull for any patient .",
          author: "Sarah M., Director of Events", img: "https://i.ibb.co/hdPcLtB/photo-1548964095-b9a292144866.jpg" 
        },
        {
          id: 2, content:
            "I cannot tell you how much we loved using their sevices. Ever seen I can't saw like their service. Here all or stuff like Doctor, Nurse, office stuff, ward-boy every one very much attended. I will depenently recommend.",
          author: "Sarah M., CCHS Foundation", img: "https://i.ibb.co/SsZqcLZ/photo-1587023568809-cfe1930ee6c3.jpg"
        },
        {
          id: 3, content:
            "If any want get faster service you may go life care hospital. I exicted to go again life care 24/7. They always support to get me back. It was amazing time when spend with them. I can't loose their memories",
          author: "Alexander B., Pan-Mass Challenge", img: "https://i.ibb.co/PtPgCdb/photo-1608494603682-913a9e8abee9.jpg"
        },
        {
          id: 4, content:
            "I am felling very much illness and I call life care hotline, Instantly and Doctor will arrived my door. After getting prescription day by day I am fully well by their treatment. I am happy now.",
          author: "Amy C., One Less Orphan Fund", img: "https://i.ibb.co/LYPpJZR/photo-1627161684458-a62da52b51c3.jpg"
        }
      ];

    return (
        <div className='container testimonial py-5 my-5'>
            <Carousel interval={1000}>
                {testimonial.map((quote) => {
                return (
                    <Carousel.Item interval={5000} key={quote.id}>
                        <div><img className='box' style={{ height: 200}} src={quote.img} alt='' /></div>
                    <div style={{ height: 200 }} className='text-dark mx-5 my-5'>
                        <p>{quote.content}</p>
                        <h6 className='text-dark'>{quote.author}</h6>
                    </div>
                    </Carousel.Item> 
                );
                })}
            </Carousel>
        </div>
    );
};

export default Testimonial;