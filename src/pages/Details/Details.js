import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const singleService = data.find(service => service.id === id)
            setDetail(singleService)
        })
    },[id]);

  
    return (
       <div>
            <div>
                <h2 className='title'>{detail.title}</h2>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className= 'col'>
                        <Card className="py-3 " >
                            <Card.Header><img className='img-fluid' src={detail.img} alt='' /> </Card.Header>
                            <Card.Body>
                                <Card.Title className='text-success fs-4'>{detail.title}</Card.Title>
                                <Card.Text>
                                    {detail.details}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/contact'>
                                    <button className='btn btn-primary px-5 py-2 my-3 fs-5'>Book Appointment</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
       </div>
    );
}; 

export default Details;