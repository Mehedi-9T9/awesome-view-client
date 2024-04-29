import { GiFireplace } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdDelete } from "react-icons/md";


const MyListCard = ({ spot }) => {
    const { tourismSpotName, tourismCountryName, totalVisitors, location, averageCost, photo
        , seasonality, _id, userName, currentUser } = spot
    const deleteHandle = (id) => {
        fetch(`http://localhost:4000/myList/${id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' }

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <div className='flex items-center border-b-2  p-2 mx-auto '>
            <div className='rounded-xl w-[150px]  '>
                <img src={photo} className='w-[100px] h-[100px]  rounded-xl ' alt="" />
            </div>
            <div className='w-[300px]'>
                <span className='text-[#E02454] text-2xl font-bold '> <GiFireplace className="inline-block text-3xl" /> {tourismSpotName}</span>
                <h3 className="text-xl font-semibold text-[#002A66]"><FaLocationDot className="inline-block" /> {location}</h3>
            </div>
            <div className='w-[250px]'>
                <span className='text-[#E02454] text-xl font-bold '> <BsPersonRaisedHand className="inline-block text-3xl" /> {userName}</span>
                <h3 className="text-[#002A66]  text-xl font-semibold"> <SiAmazonsimpleemailservice className="inline-block text-2xl" />  {currentUser}</h3>
            </div>
            <div className='flex flex-col w-[150px] rounded-xl'>
                <button onClick={() => deleteHandle(_id)} className='btn bg-[#E02454] text-white font-semibold'><MdDelete className="text-[#002A66] text-2xl" /> Delete</button>
                {/* <button className='btn '>Details</button> */}
            </div>
        </div>


    );
};

export default MyListCard;