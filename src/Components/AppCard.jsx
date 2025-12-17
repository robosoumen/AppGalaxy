import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({data}) => {
    // console.log(data)
    const {companyName, description, downloads, id, image, officialWebsite, ratingAvg, reviews, size, title} = data
    return (
        
      <Link  to={`/appDetails/${id}`} className="card border bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
        <figure className='h-48 overflow-hidden mt-3'>
            <img className='w-48 h-50 object-cover'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className='flex justify-between'>
                <h1><FontAwesomeIcon icon={faDownload} />
                {downloads}</h1>
                <h2>{ratingAvg}</h2>
            </div>
            {/* <div className="card-actions justify-end">
            <Link to={`/appDetails/${id}`} className="btn btn-primary">View Details</Link>
            </div> */}
        </div>
    </Link>
    );
};

export default AppCard;