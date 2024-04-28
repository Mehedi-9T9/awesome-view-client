
import { FaRegHeart } from "react-icons/fa";

const TourismCard = ({ spot }) => {
    const { tourismSpotName, tourismCountryName, totalVisitors, location, averageCost, photo
        , seasonality, shortDescription, travelTime } = spot
    return (
        <div>
            <div className="card w-96 bg-[#FFF] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
                </figure>
                <div className="card-body  ">
                    <h2 className="text-2xl font-semibold font-roboto text-[#E02454]">{tourismSpotName}</h2>
                    <div className='flex justify-between'>
                        <h2 className='text-base font-poppins text-[#E02454]'>Seasonality:  <span className='text-[#002A66] font-medium'>{seasonality}</span> </h2>
                        <h2 className='text-base font-poppins text-[#E02454]'>Travel Time:  <span className='text-[#002A66] font-medium'>{travelTime}</span></h2>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-base font-poppins text-[#E02454]'>average_cost: <span className='text-[#002A66] font-medium'>{averageCost}</span></h2>
                        <h2 className='text-base font-poppins text-[#E02454]'>Visitors: <span className='text-[#002A66] font-medium'>{totalVisitors}</span></h2>
                    </div>
                    <div className="space-x-5 text-center flex items-center">
                        <button className="btn bg-[#E02454]">Update </button>
                        <button className="btn px-5 text-[#E02454]">
                            <FaRegHeart className='font-bold text-2xl' />
                        </button>
                        <button className="btn bg-[#E02454]">Show Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TourismCard;