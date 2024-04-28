import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form"



const UpdateTourismSpot = () => {
    const tourismSpot = useLoaderData()
    console.log(tourismSpot);
    const { tourismSpotName, tourismCountryName, totalVisitors, location, averageCost, photo
        , seasonality, shortDescription, travelTime, _id, userName, userEmail } = tourismSpot

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);

        updateData(data)
    }
    const updateData = (data) => {
        fetch(`http://localhost:4000/updateTourismSpot/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='container mx-auto p-10  '>
            <div className='bg-white p-10 rounded-xl '>
                <h2 className='text-4xl font-bold text-[#003A66] text-center font-roboto py-10'>Update Tourism Spot</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Tourists Spot Name
                            </label>
                            <input type="text" name="name" defaultValue={tourismSpotName}  {...register("tourismSpotName", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Country Name</label>
                            <input type="text" name="name" defaultValue={tourismCountryName} {...register("tourismCountryName", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Total Visitors</label>
                            <input type="text" name="name" defaultValue={totalVisitors} {...register("totalVisitors", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Location
                            </label>
                            <input type="text" name="name" defaultValue={location} {...register("location", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Short Description</label>
                            <input type="text" name="name" defaultValue={shortDescription} {...register("shortDescription", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Average Cost</label>
                            <input type="text" name="name" defaultValue={averageCost} {...register("averageCost", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Seasonality</label>
                            <input type="text" name="name" defaultValue={seasonality} {...register("seasonality", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Travel Time</label>
                            <input type="text" name="name" defaultValue={travelTime} {...register("travelTime", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>User Name</label>
                            <input type="text" name="name" defaultValue={userName} {...register("userName", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>User Email</label>
                            <input type="text" name="name" defaultValue={userEmail} {...register("userEmail", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold col-span-2'>
                            <label htmlFor="name" className='py-2'>Image URL</label>
                            <input type="text" name="name" defaultValue={photo} {...register("photo", { required: true })} className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl ' />
                        </div>
                        <div className='col-span-2'>
                            <input className=' p-3 bg-[#E02454] w-full text-white text-xl font-roboto font-medium rounded-xl border border-[#003A66] hover: bg-none' type="submit" value="Update Tourism Spot " />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateTourismSpot;