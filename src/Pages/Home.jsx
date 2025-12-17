import React from 'react';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';
import useData from '../Hooks/useData';
import heroImage from '../assets/hero.png'
const Home = () => {
    const {data, loading, error} = useData();
    const featuredData = data.slice(0, 6)
    return (
        <div>
            {/* we build productive app */}
            <div className=' flex flex-col  items-center'>
                {/* top div */}
                <div className='flex flex-col items-center my-5'>
                    <h1 className="text-center text-6xl font-black text-[#1D2939]">
                    We Build <br />
                    <span className="text-[#7F56D9]">Productive</span> Apps
                    </h1>
                    <h1 className='my-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</h1>
                </div>
                <div className='flex gap-12 my-6'>
                    <a href="https://play.google.com/store/games?hl=en" target='_blank' className='border p-2 rounded-xl font-semibold'>Google Play</a>
                    <a href="https://www.apple.com/in/app-store/" target='_blank' className='border p-2 rounded-xl font-semibold'>App Store</a>
                </div>
                {/* middle div */}
                <div>
                    <img src={heroImage} alt="" />
                </div>
                {/* last div */}
                <section className="bg-[#7F56D9] text-white py-16 px-4 w-full">
                    {/* The Heading */}
                     <h2 className="text-3xl md:text-4xl font-bold mb-12 px-6 flex justify-center">
                        Trusted By Millions, Built For You
                    </h2>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto place-items-center ">
                        {/* Stat Item 1 */}
                        <div className="flex flex-col gap-1">
                        <span className="text-sm opacity-80 uppercase tracking-wide">Total Downloads</span>
                        <span className="text-5xl font-extrabold">29.6M</span>
                        <span className="text-xs opacity-70 mt-1">21% More Than Last Month</span>
                        </div>

                        {/* Stat Item 2 */}
                        <div className="flex flex-col gap-1">
                        <span className="text-sm opacity-80 uppercase tracking-wide">Total Reviews</span>
                        <span className="text-5xl font-extrabold">906K</span>
                        <span className="text-xs opacity-70 mt-1">46% More Than Last Month</span>
                        </div>

                        {/* Stat Item 3 */}
                        <div className="flex flex-col gap-1">
                        <span className="text-sm opacity-80 uppercase tracking-wide">Active Apps</span>
                        <span className="text-5xl font-extrabold">132+</span>
                        <span className="text-xs opacity-70 mt-1">31 More Will Launch</span>
                        </div>
                    </div>
                </section>
                {/* <div>
                    <h1>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col-3'>
                        <div>
                            <h1>Total Downloads</h1> 
                            <h1>29.6M</h1>
                            <h1>21% more than last month</h1>
                        </div>
                        <div>
                            <h1>Total Reviews</h1>
                            <h1>906K</h1>
                            <h1>46% more than last month</h1>
                        </div>
                        <div>
                            <h1>Active Apps</h1>
                            <h1>132+</h1>
                            <h1>31 more will Launch</h1>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* trending apps */}
            <div className='flex flex-col items-center py-9'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <h1 className='text-blue-400'>Explore All Trending Apps on the Market developed by us</h1>
            </div>
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