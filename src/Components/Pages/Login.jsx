import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import UseAuth from "../Provider/UseAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from 'sweetalert2'
// import {  } from "react-icons/fa";


const Login = () => {
    const { loginUser, googleHandle, githubHandle } = UseAuth()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        // console.log(email, password)
        loginUser(email, password)
            .then(result => {
                alertHandle()

            })
            .catch(error => console.log(error.message))





    }
    //google login
    const handleGoogle = () => {

        googleHandle()
            .then(result => {
                console.log(result.user);
                alertHandle()
            })
            .catch(error => console.log(error.message))

    }
    //github login
    const handleGithub = () => {
        githubHandle()
            .then(result => {
                alertHandle()
            })
            .catch(error => console.log(error.message))
    }





    const alertHandle = () => {
        Swal.fire({
            title: "Login Successfull!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    return (
        <div className="md:flex flex-col justify-center container mx-auto">

            <div className=" bg-[#fff] md:w-[700px] mx-auto my-10 rounded-xl border p-5 border-primary">
                <h1 className="text-5xl font-bold text-center text-[#003A66]">Login now!</h1>
                <div className="md:flex items-center flex-row-reverse ">
                    <div>

                        <img src="https://i.ibb.co/vJBN3xV/love-take.png" className="h-[400px]" alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="Email" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered focus:outline-[#E02454] text-[#002A66]  font-bold font-poppins" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#E02454] text-white font-roboto ">Login</button>
                            </div>
                        </form>
                        <div className="ml-8 -mt-5 ">
                            <button onClick={handleGoogle} className="btn bg-[#E02454] w-[45%] text-yellow-300 text-2xl"><FaGoogle /></button>
                            <button onClick={handleGithub} className="btn bg-[#E02454] w-[45%]  text-white text-2xl"> <FaGithub /></button>
                        </div>
                        <div className="flex items-center gap-x-2 ml-9  text-lg">
                            <p className="font-poppins text-[#002A66]">New User  </p>
                            <Link to="/rejister" className="font-bold text-primary font-roboto">Rejister </Link>
                            <FaArrowTrendUp className="text-[#E02454] font-bold text-xl" />

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;