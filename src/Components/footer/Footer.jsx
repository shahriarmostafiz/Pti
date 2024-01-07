// import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import FImage from "../../assets/Image2.png"


const Footer = () => {
    return (
        <div className='bg-[#f99f1c] py-12 mt-10 flex items-center'>
            <div className='md:w-3/5 px-10  flex flex-col items-center '>
                <div className='w-full space-y-6'>
                    <div className='relative w-4/5'>
                        <input type="text" name="" id="" placeholder='Enter your email' className='input py-8 pl-6  rounded-3xl w-full ' />
                        <button className='absolute btn btn-wide   right-2 bottom-2  bg-orange-500 py-0 rounded-2xl text-white border hover:btn-warning'>Subscribe  <FaArrowRightLong /></button>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className='text-4xl font-semibold'>
                                pti<span className='text-orange-600 '>.</span> <br />

                            </h1>
                            <p className='font-bold py-2'>
                                Copyright © Tripp.All Right Reserved
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-slate-200 btn-sm btn btn-circle text-orange-400">
                                <FaGoogle size={15} />
                            </button>
                            <button className="bg-slate-200 btn-sm btn btn-circle text-orange-400">
                                <FaTwitter size={15} />
                            </button>
                            <button className="bg-slate-200 btn-sm btn btn-circle text-orange-400">
                                <FaInstagram size={15} />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="w-2/5">
                <img src={FImage} className="max-w-80" alt="" />
            </div>
        </div>
    );
};

export default Footer;