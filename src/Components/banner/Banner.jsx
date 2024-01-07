import React from 'react';
import banner from "../../assets/Image1.png"
const Banner = () => {
    return (
        <div className='lg:my-10 bg-[#f99f1c] rounded-2xl w-full flex px-10 text-white '>
            <div className='flex-1 flex flex-col justify-center pl-7 space-y-8'>
                <h1 className='w-full text-5xl font-medium '> Deliver Food to your DoorStep|</h1>
                <h2 className='text-2xl text-slate-300'>
                    Authentic food Quick Service Fast Delivery
                </h2>

            </div>
            <div className='flex-1'>
                <img src={banner} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Banner;