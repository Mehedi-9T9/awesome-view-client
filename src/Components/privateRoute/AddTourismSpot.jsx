import { useForm } from "react-hook-form"
import UseAuth from "../Provider/UseAuth";
const AddTourismSpot = () => {
    const { user } = UseAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const currentUser = user.email
        const updateData = { ...data, currentUser }
        console.log(updateData);
        fetch('http://localhost:4000/addTourismSpot', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='container mx-auto p-10  '>
            <div className='bg-white p-10 rounded-xl '>
                <h2 className='text-3xl md:text-4xl font-bold text-[#003A66] text-center font-roboto py-10'>Add Tourism Spot</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className='md:grid grid-cols-2 gap-4'>
                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Tourists Spot Name
                            </label>
                            <input type="text" name="name" placeholder="Spot Name"  {...register("tourismSpotName")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Country Name</label>
                            <input type="text" name="name" placeholder="Country Name"  {...register("tourismCountryName")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Total Visitors</label>
                            <input type="text" name="name" placeholder="Total Visitors"  {...register("totalVisitors")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Location
                            </label>
                            <input type="text" name="name" placeholder="Location"  {...register("location")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Short Description</label>
                            <input type="text" name="name" placeholder="Description"  {...register("shortDescription")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Average Cost</label>
                            <input type="text" name="name" placeholder="Average Cost"  {...register("averageCost")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Seasonality</label>
                            <input type="text" name="name" placeholder="Like summer, Winter"  {...register("seasonality")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>Travel Time</label>
                            <input type="text" name="name" placeholder="Like 5 days"  {...register("travelTime")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>User Name
                            </label>
                            <input type="text" name="name" placeholder="Name" {...register("userName")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold'>
                            <label htmlFor="name" className='py-2'>User Email
                            </label>
                            <input type="text" name="name" placeholder="Email"  {...register("userEmail")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col text-[#E02454] font-poppins text-2xl font-semibold col-span-2'>
                            <label htmlFor="name" className='py-2'>Image URL</label>
                            <input type="text" name="name" placeholder="Img URL"  {...register("photo")} id="" className='text-[#003A66] text-base p-3 bg-slate-300 rounded-xl ' />
                        </div>
                        <div className='col-span-2 mt-10 md:mt-0'>
                            <input className=' p-3 bg-[#E02454] w-full text-white text-xl font-roboto font-medium rounded-xl border border-[#003A66] hover: bg-none' type="submit" value="Add Tourism Spot " />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTourismSpot;