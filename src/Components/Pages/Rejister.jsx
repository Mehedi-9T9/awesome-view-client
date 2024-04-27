import { Link } from 'react-router-dom';
import { FaArrowTrendUp } from "react-icons/fa6";
import { useForm } from "react-hook-form"


const Rejister = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data.name)
    }



    const validatePass = (value) => {
        if (!value) {
            return "This field id requird"
        }
        if (value.length < 6) {
            return "Must 6 charetar "
        }
        if (!/^[A-Za-z]+$/i.test(value)) {
            return "Type upper and lower letter"
        }
        return true

    }

    return (
        <div className="flex flex-col justify-center container mx-auto">

            <div className=" bg-[#fff] w-[700px] mx-auto my-10 rounded-xl border p-5 border-primary">
                <h1 className="text-5xl font-bold text-center text-[#003A66]">Rejster now!</h1>
                <div className="flex items-center flex-row-reverse ">
                    <div>

                        <img src="https://i.ibb.co/ChK2LZR/undraw-Sign-up-n6im.png" className="h-[400px]" alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="Name"  {...register("name", { required: true })} className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />
                                {errors.name && <span className='text-red-700 font-roboto font-semibold'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Photo URL</span>
                                </label>
                                <input type="url"  {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />
                                {errors.photo && <span className='text-red-700 font-roboto font-semibold'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="Email" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />
                                {errors.email && <span className='text-red-700 font-roboto font-semibold'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Password</span>
                                </label>
                                <input type="password" {...register("password", { validate: validatePass })} placeholder="Password" className="input input-bordered focus:outline-[#E02454] text-[#002A66]  font-bold font-poppins" />
                                {errors.password && <span className='text-red-700 font-roboto font-semibold'>{errors.password.message}</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#E02454] text-white font-roboto ">Rejister</button>
                            </div>
                        </form>
                        <div className="flex items-center gap-x-2 ml-9 -mt-7 text-lg">
                            <p className="font-poppins text-[#002A66]">Old User  </p>
                            <Link to="/login" className="font-bold text-primary font-roboto">login </Link>
                            <FaArrowTrendUp className="text-[#E02454] font-bold text-xl" />

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Rejister;