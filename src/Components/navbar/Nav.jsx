import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";



const Nav = () => {
    return (
        <div className='flex justify-between py-6'>
            <h1 className='font-bold text-3xl'>pt.</h1>
            <div className="flex gap-4 items-center justify-center w-3/5 lg:min-w-[800px]">
                <div className='relative w-3/5'>
                    <input type="text" name="" id="" placeholder='Search AudioBook' className='input pl-16  rounded-lg w-full ' />
                    <button className='absolute btn btn-ghost left-2  text-orange-500 border '><IoSearch size={20} /></button>
                </div>
                <div className='w-fit'>
                    <details className="dropdown w-full">
                        <summary className=" btn bg-white hover:bg-white w-full">Menu <span className='text-orange-500 pl-4'> <FaChevronDown /></span> </summary>
                        <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className='hover:text-orange-500 w-full'><a>Home</a></li>
                            <li className='hover:text-orange-500 w-full'><a>Details</a></li>
                            <li className='hover:text-orange-500 w-full'><a>Categories</a></li>
                            <li className='hover:text-orange-500 w-full'><a>My Favourites</a></li>
                            <li className='hover:text-orange-500 w-full'><a>Profile</a></li>
                            <li className='hover:text-orange-500 w-full'><a>Log In / Sign Up</a></li>

                        </ul>
                    </details>
                </div>
            </div>
            <div className='hidden md:block'>
                <button className='btn btn-circle text-white bg-orange-500 hover:text-orange-500 hover:bg-white'>
                    <FiUser size={20} />
                </button>
            </div>

        </div>
    );
};

export default Nav;