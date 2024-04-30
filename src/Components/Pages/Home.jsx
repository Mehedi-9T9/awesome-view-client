import { Link } from "react-router-dom";
import UseAuth from "../Provider/UseAuth";
import Bannar from "./Bannar";
import CountryCard from "./CountryCard";
import TourismCard from "./TourismCard";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';


const arr = [1, 2, 3]


const Home = () => {
    const { tourismSpot } = UseAuth()
    // console.log(tourismSpot);
    const sliceSpot = tourismSpot.slice(0, 6)
    console.log(sliceSpot);

    const [addCountry, setAddCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/addTourismCountry')
            .then(res => res.json())
            .then(data => {
                setAddCountry(data)

            })
    }, [])


    return (
        <div className="container mx-auto">
            <Bannar></Bannar>
            <div className="md:flex items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-roboto text-center py-14 text-white md:w-[80%]">All Tourism Spot</h2>
                <Link to='/allTourismSpot'><button className=" btn bg-[#E02454] text-xl font-roboto text-white font-semibold  ">More Tourism Spot</button></Link>
            </div>
            <div className="ml-5 md:ml-0 mt-10 md:grid grid-cols-3 gap-5">
                {
                    sliceSpot.map(spot => <TourismCard key={spot._id} spot={spot}></TourismCard>)
                }
            </div>
            <div className="md:flex items-center justify-around text-center">
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white">All Tourism Country</h2>
                <Link to="/addTourismCountry"><button className=" btn bg-[#E02454] text-xl font-roboto text-white font-semibold md:mb-0 mb-5  ">Add Tourism Country</button></Link>

            </div>
            <div className="md:grid grid-cols-3 gap-6 mb-10">
                {
                    addCountry.map((country, idx) => <CountryCard key={idx} country={country}></CountryCard>)
                }


            </div>
            <div>
                <h2 className="text-5xl font-bold text-center text-white">Client <span className="text-yellow-500">Question</span> </h2>
            </div>
            <div className="md:flex gap-4 justify-center w-full my-14">
                <div>
                    <div className="collapse collapse-arrow bg-base-200 mb-3">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is the name of the tourism spot?
                        </div>
                        <div className="collapse-content">
                            <p>The tourism spot is called Machu Picchu, located in Peru.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What makes Machu Picchu a popular tourist destination?
                        </div>
                        <div className="collapse-content">
                            <p>Machu Picchu is renowned for its stunning mountainous landscape, well-preserved ancient Incan ruins, and its status as one of the New Seven Wonders of the World. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do tourists typically reach Machu Picchu?
                        </div>
                        <div className="collapse-content">
                            <p> Tourists usually access Machu Picchu via a combination of train and hiking routes. The most popular starting point is the town of Aguas Calientes,</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What are some key attractions to see at Machu Picchu?
                        </div>
                        <div className="collapse-content">
                            <p>Key attractions at Machu Picchu include the Temple of the Sun, the Intihuatana stone, the Temple of the Three Windows, and the agricultural terraces.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any special considerations for visiting Machu Picchu?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, visitors should be aware of the high altitude (over 2,400 meters above sea level) and take necessary precautions to prevent altitude sickness. </p>
                        </div>
                    </div>


                </div>
                <div>
                    <img src="https://i.ibb.co/5xddcd9/11.png" alt="" />
                </div>

            </div>
            <div className="md:flex bg-slate-300 p-10 border-2 rounded-xl items-center mb-10">
                <div className="md:w-[60%] mb-10 md:mb-0">
                    <h2 className="text-xl font-semibold font-roboto text-[#002A66]">Contract With Me</h2>
                    <h1 className="text-5xl font-poppins font-bold text-white">Book your <span className="text-[#E02454]">Consultation</span> </h1>
                    <p className="font-poppins text-[#002A66] my-4">There cursus massa at urnaaculis estie. Sed aliquamellus vitae <br /> ultrs condmentum leo massa mollis.</p>
                    <div>
                        <li className="list-none text-white"><FaCheckCircle className="inline-block mr-4 text-[#E02454]" />Making this the first true generator on the Internet</li>
                        <li className="list-none text-white"><FaCheckCircle className="inline-block mr-4 text-[#E02454]" />If you are going to use a passage</li>
                        <li className="list-none text-white"><FaCheckCircle className="inline-block mr-4 text-[#E02454]" />Lorem Ipsum is not simply random text</li>

                        <li className="list-none text-white"><FaCheckCircle className="inline-block mr-4 text-[#E02454]" />Making this the first true generator on the Internet</li>
                        <li className="list-none text-white"><FaCheckCircle className="inline-block mr-4 text-[#E02454]" />If you are going to use a passage</li>

                    </div>
                </div>
                <div className="md:w-[40%]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Email</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered focus:outline-[#E02454] text-[#002A66] text-base font-bold font-poppins" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#E02454] font-poppins font-medium text-lg">Message</span>
                        </label>
                        <textarea className="textarea textarea-accent text-base font-bold font-poppins focus:outline-[#E02454]" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#E02454] text-white font-roboto ">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;