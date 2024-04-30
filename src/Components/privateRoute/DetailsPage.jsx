import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const tourismSpot = useLoaderData()
    const { tourismSpotName, tourismCountryName, totalVisitors, location, averageCost, photo
        , seasonality, shortDescription, travelTime, _id } = tourismSpot
    console.log(tourismSpot);
    return (
        <div className='container mx-auto bg-white w-[900px] p-10 border-2 border-[#E02454] rounded-xl my-10'>
            <div className='flex gap-x-6 items-center'>
                <div>
                    <img src={photo} className='w-[300px] h-[200px]' alt="" />
                </div>
                <div>
                    <h2 className='text-3xl text-[#E02454] font-roboto font-semibold'>Tourism Spot Name: {tourismSpotName}</h2>
                    <h3 className='text-xl text-[#E02454] font-poppins'>Country Name: {tourismCountryName}</h3>
                    <h3 className='text-xl font-bold text-[#002A66]'>Location: {location}</h3>
                    <div className='flex gap-x-10 mt-5 border p-2'>
                        <h3 className='text-[#E02454] text-base font-poppins font-semibold'>Seasonality: <span className='text-[#002A66]'> {seasonality}</span></h3>
                        <h3 className='text-[#E02454] text-base font-poppins font-semibold'>Travel Time: <span className='text-[#002A66]'>{travelTime}</span></h3>
                    </div>
                    <div className='flex gap-x-10 border mt-2 p-2'>
                        <h2 className='text-[#E02454] text-base font-poppins font-semibold'>Total Visitors: <span className='text-[#002A66]'>{totalVisitors}</span></h2>
                        <h3 className='text-[#E02454] text-base font-poppins font-semibold'>Average Cost: <span className='text-[#002A66]'>{averageCost}</span></h3>
                    </div>
                </div>
            </div>
            <h3 className='text-2xl font-poppins font-semibold text-[#002A66] mt-3'>{shortDescription}</h3>
        </div>
    );
};

export default DetailsPage;