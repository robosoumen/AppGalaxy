import React, { useEffect, useState } from 'react';

const AppInstallationPage = () => {
    const [install, setInstall] = useState([]);
    const [sortOrder, setSortOrder] = useState("none")
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('install'))
        if(savedList) setInstall(savedList)
    }, []);


    const sortedItem = (
        () => {
            if (sortOrder === 'size-asc'){
                return [...install].sort((a, b) => a.size - b.size)
            } else if(sortOrder === 'size-desc'){
                return [...install].sort((a, b) => b.size - a.size)
            } else {
               return install
            }
        }
    ) ();

    const handleRemove = id => {
        const existingList = JSON.parse(localStorage.getItem('install'))

        let updatedList = existingList.filter(p => p.id !== id)

        setInstall(updatedList)
        localStorage.setItem('install', JSON.stringify(updatedList))
    }
    return (
        
        <div className="space-y-6">
            <div className='flex flex-col items-center'>
                <p className='font-bold text-3xl'>Your Installed Apps</p>
                <p className='text-blue-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
             <div className="flex justify-between py-5 items-center">
                <h1 className="text-3xl font-semibold">
                    <span className=" text-gray-400">({sortedItem.length})</span>Apps Found
                </h1>
               <label className="form-control w-full max-w-xs">
                 <select className="select select-bordered" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                    <option value="none">Sort by Price</option>
                    <option value="size-asc">Low-&gt;High</option>
                    <option value="size-desc">High-&gt;Low</option>
                </select>
               </label>
            </div>
           <div className="space-y-3">
            {
                sortedItem.map(p => (
                     <div key={p.id} className="card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img className="w-40 h-28 object-cover"
                            src={p.image}
                            alt={p.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <p>{p.description}</p>
                            <div className="card-actions justify-end">
                                <div className='flex justify-center gap-5 items-center'>
                                    <p>Size : {p.size}</p>
                                    <button onClick={() => handleRemove(p.id)} className="btn btn-primary">Uninstall</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default AppInstallationPage;