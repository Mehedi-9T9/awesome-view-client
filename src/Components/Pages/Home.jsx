import Bannar from "./Bannar";
import TourismCard from "./TourismCard";

const arr = [1, 2, 3, 4, 5, 6]
const Home = () => {
    return (
        <div className="container mx-auto">
            <Bannar></Bannar>
            <div className="flex items-center">
                <h2 className="text-5xl font-bold font-roboto text-center py-14 text-white w-[80%]">All Tourism Spot</h2>
                <div className="dropdown dropdown-hover w-[20%]">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#E02454] text-[#FFF] font-poppins">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Ascending</a></li>
                        <li><a>Descending </a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    arr.map((item, idx) => <TourismCard key={idx}></TourismCard>)
                }
            </div>
        </div>
    );
};

export default Home;