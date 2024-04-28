import React, { useEffect, useState } from 'react';
import UseAuth from '../Provider/UseAuth';
import MyListCard from './MyListCard';

const MyList = () => {
    const { user } = UseAuth()
    const [myTourismSpots, setMyTourismSpots] = useState()
    console.log(user);
    const email = user.email

    useEffect(() => {
        fetch(`http://localhost:4000/myList/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyTourismSpots(data)
            })
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <div>
                <h2 className='text-center text-5xl p-10 bg-[#E02454] text-white font-roboto font-bold'>My Added Tourism Spot</h2>

            </div>
            <div className='bg-white flex '>
                <div className='border-r-2'>
                    {
                        myTourismSpots ? <img src=" https://i.ibb.co/fQN5dy5/undraw-Add-post-re-174w.png" className='mt-20' alt="" /> : null
                    }


                </div>
                <div>
                    {
                        myTourismSpots?.map(spot => <MyListCard key={spot._id} spot={spot}></MyListCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyList;