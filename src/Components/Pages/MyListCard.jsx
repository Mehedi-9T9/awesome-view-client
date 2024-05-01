import { GiFireplace } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'


const MyListCard = ({ spot, reload }) => {
    const { tourismSpotName, tourismCountryName, totalVisitors, location, averageCost, photo
        , seasonality, _id, userName, currentUser } = spot
    const deleteHandle = (id) => {
        fetch(`https://awesome-view-server.vercel.app/myList/${id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' }

        })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(res => res.json())
            .then(result => {


                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }




            })
    }


    return (

        <div className='md:flex items-center border-b-2  p-2 mx-auto '>
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