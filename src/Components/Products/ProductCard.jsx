import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className='w-72 rounded-2xl h-[400px] space-y-4 flex flex-col'>
            <div className='h-5/6 w-full'>
                <img src={item.ImageUrl} alt="" className=' w-full h-full object-cover rounded-xl' />
            </div>
            <h1>{item.Name}</h1>

        </div>
    );
};

export default ProductCard;