import { useState } from "react";
import UseAuth from "../Provider/UseAuth";
import TourismCard from "./TourismCard";

const AllTourismSpot = () => {
    const { tourismSpot, ascendingCost, decendingCost } = UseAuth()

    return (
        <div className="container mx-auto">
            <div className="md:flex items-center text-center">
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white md:w-[80%]">All Tourism Spot</h2>
                <div className="dropdown dropdown-hover md:w-[20%] mb-10 md:mb-0">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#E02454] text-[#FFF] font-poppins">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={ascendingCost}><a>Ascending</a></li>
                        <li onClick={decendingCost}><a>Descending </a></li>
                    </ul>
                </div>
            </div>
            <div className="md:grid grid-cols-3 gap-5 mb-10 ml-5 md:ml-0">
                {
                    tourismSpot.map(spot => <TourismCard key={spot._id} spot={spot}></TourismCard>)
                }
            </div>

        </div>
    );
};

export default AllTourismSpot;