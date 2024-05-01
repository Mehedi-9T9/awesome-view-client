import React from 'react';

const AddTourismCountry = () => {
    const addCountryHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const countryName = form.countryName.value;
        const countryPhoto = form.countryPhoto.value;
        const countryDescription = form.countryDescription.value;
        const info = { countryName, countryPhoto, countryDescription }
        console.log(info);
        fetch('https://awesome-view-server.vercel.app/addTourismCountry', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={addCountryHandle} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-[#E02454]">Country Name</span>
                                </label>
                                <input type="name" name='countryName' placeholder="Country Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-[#E02454]">Country Photo URL</span>
                                </label>
                                <input type="url" name='countryPhoto' placeholder="Country Photo URL" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-[#E02454]">Country Description</span>
                                </label>
                                <input type="textarea" name='countryDescription' placeholder="Country Description" className="input input-bordered" required />

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[#E02454]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTourismCountry;