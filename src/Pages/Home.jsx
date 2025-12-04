import React from 'react';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';
import useData from '../Hooks/useData';

const Home = () => {
    const {data, loading, error} = useData();
    const featuredData = data.slice(0, 6)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            featuredData.map(data =>(<AppCard key={data.id} data={data}></AppCard>))
           }
           </div>
           <div className='flex justify-center py-5'>
                <Link to="/allApp" className='text-2xl font-bold btn btn-primary '>Show All</Link>
           </div>
        </div>
    );
};

export default Home;