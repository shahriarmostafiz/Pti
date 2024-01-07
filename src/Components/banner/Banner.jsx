import React from 'react';
import banner from "../../assets/Image1.png"
const Banner = () => {
    return (
        <div className='lg:my-10  rounded-2xl w-full flex flex-col md:flex-row px-1  md:text-white '>
            <div className='flex-1 rounded-l-[40px] md:px-10 md:bg-[#f99f1c] flex flex-col justify-center pl-7 space-y-8 text-center md:text-start'>
                <h1 className='w-full text-3xl md:text-5xl font-bold md:font-medium  '> Deliver Food to your DoorStep|</h1>
                <h2 className='md:text-2xl text-slate-300'>
                    Authentic food Quick Service Fast Delivery
                </h2>

            </div>
            <div className='flex-1 hidden md:block rounded-r-[40px]  md:bg-[#f99f1c] '>
                <img src={banner} alt="" className='w-full' />
            </div>
            <div className='md:hidden relative'>
                <div className='min-h-[100px] bg-transparent'></div>
                <div className='min-h-[200px] bg-orange-600 opacity-75 rounded-3xl'></div>
                <img src={banner} alt="" className='w-full absolute bottom-0 z-10' />

            </div>
        </div>
    );
};

export default Banner;