import React from 'react';
import { Link } from 'react-router';

const AppCard = ({data}) => {
    // console.log(data)
    const {companyName, description, downloads, id, image, officialWebsite, ratingAvg, reviews, size, title} = data
    return (
      <div className="card border bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
        <figure className='h-48 overflow-hidden'>
            <img className='w-full object-cover'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <Link to={`/appDetails/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    </div>
    );
};

export default AppCard;