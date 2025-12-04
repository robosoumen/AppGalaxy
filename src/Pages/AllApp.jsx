import React from 'react';
import {useState} from 'react'
import useData from '../Hooks/useData.js'
import AppCard from '../Components/AppCard'
import { Link } from 'react-router';

const AllApp = () => {
    const {data} = useData();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term? data.filter(dat => dat.title.toLocaleLowerCase().includes(term)) : data;


    // console.log(search)
    return (
        <div>
            <div className="flex justify-between items-center py-5 text-2xl">
            <h1 className="font-bold">({searchedApps.length})Apps Found</h1>
            <label className="input">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Products" />
            </label>
        </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            searchedApps.map(data =>(<AppCard key={data.id} data={data}></AppCard>))
           }
           </div>
        </div>
    );
};

export default AllApp;