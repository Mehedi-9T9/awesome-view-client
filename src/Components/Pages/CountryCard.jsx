import { count } from "firebase/firestore";

const CountryCard = ({ country }) => {
    const { countryName, countryPhoto, countryDescription } = country

    return (

        <div className="card card-compact  bg-base-100 shadow-xl border-2 mb-10">
            <figure><img src={countryPhoto} className='w-full h-[200px]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{countryName}</h2>
                <p>{countryDescription}</p>

            </div>
        </div>
    );
};

export default CountryCard;