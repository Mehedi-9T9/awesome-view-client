import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' bg-[#E02454]'>
            <footer className="footer p-10 mx-[100px] text-[#FFF] ">
                <aside>
                    <h2 className='text-5xl font-roboto'>Awesome <span className='text-black font-bold'>View</span></h2>
                    <p className='text-lg'>Awesome View Industries Ltd.<br />Providing Reliable Tech Since 2024</p>
                </aside>
                <nav>
                    <h6 className="text-3xl font-roboto font-bold text-black">Social Links</h6>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a><FaFacebookF /></a>
                        <a><FaYoutube /></a>
                        <a><FaTwitter /></a>
                    </div>
                </nav>
            </footer>

        </div>

    );
};

export default Footer;