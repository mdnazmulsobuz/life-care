import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
        useEffect(()=>{
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        },[])

    return (
        <div>
           <h2 className='title'>Our Services</h2>
           <div className='container py-5'>
                <div className='row'>
                {
                        services.map(service => <Service
                            key= {service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;