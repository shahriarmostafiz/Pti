import React from 'react';
import { useForm } from 'react-hook-form';
{/* ImageUrl
IsPopular
IsRecommended
Name
Price
Id */}
const AddProduct = () => {
    function generateRandomId() {
        const randomString = Math.random().toString(36).substr(2, 10); // Random string of length 10
        const timestamp = new Date().getTime(); // Current timestamp
        return `${randomString}${timestamp}`;
    }

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    // Example usage
    // const randomId = generateRandomId();
    // console.log(randomId);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                {/* register your input into the hook by invoking the "register" function */}
                <div>
                    <input   {...register("Name", { required: true })} placeholder='Name' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.Name?.type === "required" && (
                        <p role="alert">Product Name is Required</p>
                    )}
                </div>
                <div>

                    <input   {...register("Price", { required: true })} placeholder='Price' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.Price?.type === "required" && (
                        <p role="alert">Product Price is Required</p>
                    )}

                </div>
                <div>

                    <input   {...register("ImageUrl", { required: true })} placeholder='Image Link' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.ImageUrl?.type === "required" && (
                        <p role="alert">Product  Image Link  is Required</p>
                    )}
                </div>
                <div>

                    <input   {...register("ImageUrl", { required: true })} placeholder='Image Link' className="input input-bordered input-warning w-full max-w-sm" />
                    {errors.ImageUrl?.type === "required" && (
                        <p role="alert">Product  Image Link  is Required</p>
                    )}
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;