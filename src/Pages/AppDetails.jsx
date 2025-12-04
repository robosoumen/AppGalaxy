import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';

const AppDetails = () => {
    const {id} = useParams();
    // console.log(typeof id)
    const {data,loading,error}= useData();
    // console.log(data)
    const input = data.find(p => String(p.id) === id)
    if (loading) return <p>Loading.....</p>
    if (error) return <p>Loading.....</p>
    console.log(input)
    const {companyName, description, downloads, image, officialWebsite, ratingAvg, reviews, size, title, ratings} = input;
    return (
       <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;