import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MyContext } from '../../ContextProvider';
import toast from 'react-hot-toast';
{/* ImageUrl
IsPopular
IsRecommended
Name
Price
Id */}
const AddProduct = () => {
    const { data, setData } = useContext(MyContext)

    function generateRandomId() {
        const randomString = Math.random().toString(36).substr(2, 10); // Random string of length 10
        const timestamp = new Date().getTime(); // Current timestamp
        return `${randomString}${timestamp}`;
    }

    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (formData) => {
        // console.log(formData)
        const Id = generateRandomId()
        const IsRecommended = true;
        const IsPopular = true;
        const newProduct = { ...formData, Id, IsPopular, IsRecommended, Price: Number(formData.Price) }
        console.log(newProduct);
        setData(all => [...all, newProduct])
        toast.success("Product added")
        reset()
    }
    // Example usage
    // const randomId = generateRandomId();
    // console.log(randomId);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='text-center'>
                    <input   {...register("Name", { required: true })} placeholder='Name' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.Name?.type === "required" && (
                        <p role="alert">Product Name is Required</p>
                    )}
                </div>
                <div className='text-center' >

                    <input   {...register("Price", { required: true })} type='number' placeholder='Price' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.Price?.type === "required" && (
                        <p role="alert">Product Price is Required</p>
                    )}

                </div>
                <div className='text-center'>

                    <input   {...register("ImageUrl", { required: true })} placeholder='Image Link' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.ImageUrl?.type === "required" && (
                        <p role="alert">Product  Image Link  is Required</p>
                    )}
                </div>
                {/* <div className='text-center'>

                    <input   {...register("ImageUrl", { required: true })} placeholder='Image Link' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.ImageUrl?.type === "required" && (
                        <p role="alert">Product  Image Link  is Required</p>
                    )}
                </div> */}
                {/* include validation with required or other standard HTML validation rules
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>}  */}

                <div className='text-center'>
                    <input type="submit" className='btn btn-wide bg-[#f99f1c]  ' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;