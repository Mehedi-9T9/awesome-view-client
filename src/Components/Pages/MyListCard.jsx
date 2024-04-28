import { GiFireplace } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";

const MyListCard = () => {
    return (

        <div className='flex items-center border-b-2  p-2 mx-auto w-[900px]'>
            <div className='rounded-xl w-[150px]  '>
                <img src="https://i.ibb.co/pQSkNYJ/download-8.jpg" className='w-[100px] h-[100px]  rounded-xl ' alt="" />
            </div>
            <div className='w-[300px]'>
                <span className='text-[#E02454] text-2xl font-bold '> <GiFireplace className="inline-block text-3xl" /> Bandarban</span>
                <h3 className="text-xl font-semibold text-[#002A66]"><FaLocationDot className="inline-block" /> Bangladesh</h3>
            </div>
            <div className='w-[250px]'>
                <span className='text-[#E02454] text-xl font-bold '> <BsPersonRaisedHand className="inline-block text-3xl" /> Mehedi</span>
                <h3 className="text-[#002A66]  text-xl font-semibold"> <SiAmazonsimpleemailservice className="inline-block text-2xl" />  Email</h3>
            </div>
            <div className='flex flex-col w-[150px] rounded-xl'>
                <button className='btn bg-[#E02454] text-white font-semibold'>Delete</button>
                {/* <button className='btn '>Details</button> */}
            </div>
        </div>


    );
};

export default MyListCard;