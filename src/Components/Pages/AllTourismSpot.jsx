import { useState } from "react";
import UseAuth from "../Provider/UseAuth";
import TourismCard from "./TourismCard";

const AllTourismSpot = () => {
    const { tourismSpot, ascendingCost, decendingCost } = UseAuth()
    // const [tourismSpots, setTourismSpots] = useState(tourismSpot)
    // const ascedCost = () => {
    //     const ascending = tourismSpot.sort((a, b) => parseInt(a.averageCost) - parseInt(b.averageCost))
    //     setTourismSpots(ascending)
    //     console.log('clicked', ascending);
    //     console.log('clicked', tourismSpots);
    // }
    // const descendingCost = () => {
    //     const descending = tourismSpots.sort((b, a) => b.averageCost - a.averageCost)
    //     setTourismSpots(descending)
    // }
    return (
        <div className="container mx-auto">
            <div id="allTourismSpot" className="flex items-center">
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white w-[80%]">All Tourism Spot</h2>
                <div className="dropdown dropdown-hover w-[20%]">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#E02454] text-[#FFF] font-poppins">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={ascendingCost}><a>Ascending</a></li>
                        <li onClick={decendingCost}><a>Descending </a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-10">
                {
                    tourismSpot.map(spot => <TourismCard key={spot._id} spot={spot}></TourismCard>)
                }
            </div>

        </div>
    );
};

export default AllTourismSpot;