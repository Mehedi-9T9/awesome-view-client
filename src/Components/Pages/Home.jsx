import UseAuth from "../Provider/UseAuth";
import Bannar from "./Bannar";
import TourismCard from "./TourismCard";


const Home = () => {
    const { tourismSpot } = UseAuth()
    // console.log(tourismSpot);
    const sliceSpot = tourismSpot.slice(0, 6)


    return (
        <div className="container mx-auto">
            <Bannar></Bannar>
            <div id="allTourismSpot" className="flex items-center">
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white w-[80%]">All Tourism Spot</h2>
                <button className="btn bg-[#E02454] text-xl font-roboto text-white font-semibold">More Tourism Spot</button>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    sliceSpot.map(spot => <TourismCard key={spot._id} spot={spot}></TourismCard>)
                }
            </div>
            <div>
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white">All Tourism Country</h2>
            </div>
        </div>
    );
};

export default Home;