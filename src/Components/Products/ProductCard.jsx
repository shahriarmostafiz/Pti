import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className='w-72 rounded-2xl h-[400px] space-y-4 '>
            <img src={item.ImageUrl} alt="" className=' h-full w-full  object-cover rounded-xl' />
            <h1>{item.Name}</h1>

        </div>
    );
};

export default ProductCard;