import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


const AppDetails = () => {
    const {id} = useParams();
    // console.log(typeof id)
    const {data,loading,error}= useData();
    // console.log(data)
    const input = data.find(p => String(p.id) === id)
    if (loading) return <p>Loading.....</p>
    if (error) return <p>Loading.....</p>
    // console.log(input)
    const {companyName, description, downloads, image, officialWebsite, ratingAvg, reviews, size, title, ratings} = input || {};

    const handleAddToInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('install'))

        let updatedList = [];
        if(existingList) {
            const isDuplicate = existingList.some(p => p.id === input.id);
            if(isDuplicate) return toast('this apps is already exist')

            updatedList = [...existingList, input]
        }else{
            updatedList.push(input)
        }
        localStorage.setItem('install',JSON.stringify(updatedList))
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                <div>
                    <figure>
                        <img className='h-40 w-40'
                        src={image}
                        alt="Movie" />
                    </figure>
                </div>
                <div className=''>
                    <div className='py-4'>
                        <h1 className='font-bold'>SmPlan:ToDo List With Reminder</h1>
                        <h1>Developed by: <span className='text-blue-500'>{companyName}</span></h1>
                    </div>
                    <div className='flex gap-10 py-5'>
                        <div>
                            <FontAwesomeIcon icon={faDownload} />
                            <p>Downloads</p>
                            <h1>{downloads}</h1>
                        </div>
                        <div>
                           <FontAwesomeIcon icon={faStar} />
                            <p>Average Ratings</p>
                            <h1>{ratingAvg}</h1>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>Total Reviews</p>
                            <h1>{reviews}</h1>
                        </div>
                    </div>
                    <div className='py-3'>
                        <button className='btn bg-green-600 text-white' onClick={handleAddToInstall}>Install Now({size}mb)</button>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold py-6'>Ratings</h1>
               <div className='border'>
                    <ResponsiveContainer width='80%' aspect={3}>
                        <BarChart data={ratings} width={400} height={400}>
                            <XAxis dataKey='name'/>
                            <YAxis />
                            <Bar dataKey='count' fill='red'/>
                        </BarChart>
                    </ResponsiveContainer>
               </div>
            </div>
            <div className='max-w-screen-2xl flex  justify-center flex-col py-11'>
                <p className='font-bold '>Description</p>
                <h1>{description}</h1>
            </div>
        </div>
        
    );
};

export default AppDetails;