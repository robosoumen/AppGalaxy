import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import image from '../assets/images.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start lg:mx-9">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allApp'>Apps</Link></li>
                    <li><Link to='/appInstall'>installation</Link></li>
                </ul>
                </div>
                <Link to='/'>
                    <img className='h-10 w-10' src={logo} alt="" />
                </Link>
                <Link to='/' className="btn btn-ghost text-xl">HERO.lO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allApp'>Apps</Link></li>
                    <li><Link to='/appInstall'>installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end lg:mx-9">
                <a  href="https://github.com/dashboard" target='_blank' className="btn bg-blue-500 text-white"><span><img className='h-8 w-10' src={image} alt="" /></span>Contribute</a>
                {/* <NavLink  className="btn"><span><img className='h-8 w-10' src={image} alt="" /></span>Contribute</NavLink> */}
            </div>
        </div>
    );
};

export default Navbar;