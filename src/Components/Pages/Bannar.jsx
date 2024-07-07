
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Bannar = () => {
    // const text = useContext(AuthContext)
    const [text] = useTypewriter({
        words: ['A Guide To Your Vietnamese Adventure'],
        loop: {},
    })

    return (
        <div className=' py-10 relative '>

            <div className="carousel w-full h-[400px] rounded-xl ">
                <div id="slide1" style={{ backgroundImage: "url('https://i.ibb.co/D1fHkBp/vietnam-featured-755.webp')" }} className="carousel-item relative w-full bg-no-repeat bg-cover h-[400px] ">
                    {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
                    <div className='mx-auto my-auto'>
                        <h3 className='text-xl md:text-4xl text-black font-roboto'>The Best Things To Do In Hanoi: <br /> <span> {text}</span> <Cursor></Cursor> </h3>

                        <p className='font-poppins font-medium text-[#fff] mt-5'>From cruising along the surreal Halong Bay to climbing the mountain to see Perfume Pagoda, <br /> here are some of the best things to do in Hanoi.</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" style={{ backgroundImage: "url('https://i.ibb.co/syzV2TL/duong-hoa-nguyen-hue-nam-mau-tuat.webp')" }} className="carousel-item relative w-full bg-cover bg-center h-[400px]">
                    {/* <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" style={{ backgroundImage: "url('https://i.ibb.co/0t9zQ1y/960x0.webp')" }} className="carousel-item relative w-full bg-center

                 bg-no-repeat bg-cover h-[400px]">
                    {/* <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
                    <div className='h-[500px]'>
                        <h3></h3>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2  absolute top-[80%]">
                    <a href="#slide1" className="btn btn-xs">1</a>
                    <a href="#slide2" className="btn btn-xs">2</a>
                    <a href="#slide3" className="btn btn-xs">3</a>
                </div>



            </div>





        </div>
    );
};

export default Bannar;