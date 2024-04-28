import React from 'react';

const UpdateTourismSpot = () => {
    return (
        <div className='container mx-auto p-10  '>
            <div className='bg-white p-10 rounded-xl '>
                <h2 className='text-4xl font-bold text-[#003A66] text-center font-roboto py-10'>Update Tourism Spot</h2>
                <form action="" className=''>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Tourists Spot Name
                            </label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Country Name</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Country Name</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Location
                            </label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Short Description</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Average Cost</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Seasonality</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Travel Time</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold col-span-2'>
                            <label htmlFor="name" className='py-2'>Image URL</label>
                            <input type="text" name="name" id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl ' />
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