import { Link } from 'react-router-dom';
import { FaArrowTrendUp } from "react-icons/fa6";
import UseAuth from '../Provider/UseAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Rejister = () => {
    const { createUser, updateUser } = UseAuth()
    const notify = () => toast("Rejister Successfull!");


    const formHandle = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo);

        const pattan = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        const chek = pattan.test(password);

        const passNotify = () => toast("Please Type Strong Password!");
        if (!chek) {
            passNotify()
            return

        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                notify()
                console.log(user);


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });











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
                        <form onSubmit={formHandle} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Photo URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered focus:outline-[#E02454] text-[#002A66]  font-bold font-poppins" />


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
            <ToastContainer />


        </div>
    );
};

export default Rejister;