import { useEffect, useState } from 'react';
import UseAuth from '../Provider/UseAuth';
import MyListCard from './MyListCard';

const MyList = () => {
    const { user, toggle, refetch } = UseAuth()
    const [change, setChange] = useState(true)
    const [myTourismSpots, setMyTourismSpots] = useState()

    const reload = () => {
        setChange(!change)

    }
    const email = user.email;

    useEffect(() => {
        fetch(`https://awesome-view-server.vercel.app/myList/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyTourismSpots(data)
            });
    })

    return (
        <div className='container mx-auto my-20'>
            <div>
                <h2 className='text-center text-5xl p-10 bg-[#E02454] text-white font-roboto font-bold'>My Added Tourism Spot</h2>

            </div>
            <div className='bg-white flex '>
                <div className='border-r-2'>
                    <img src=" https://i.ibb.co/fQN5dy5/undraw-Add-post-re-174w.png" className='mt-20' alt="" />

                </div>
                <div>
                    {
                        myTourismSpots?.map(spot => <MyListCard key={spot._id} spot={spot} reload={reload}></MyListCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyList;