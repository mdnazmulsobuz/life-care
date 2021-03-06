import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='container py-5'>
           <h2>Our Services</h2>
           <div className='row'>
           {
                services.slice(0,6).map(service => <Service
                    key= {service.id}
                    service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;