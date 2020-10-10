import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '50px'}} src={service.img} />
            <h5 style={{ color: '#3a4256'}}className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ratione.</p>
        </div>
    );
};

export default ServiceDetail;