import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const BottomNav = () => {
    return (
        <div className="grid sm:hidden z-50 grid-cols-3 fixed bottom-0 left-0 right-0 border-t-[1px] border-[#1F2937] text-white font-medium text-center w-screen m-0 p-0 h-16 bg-Blueviolet">
            <div className="flex flex-col justify-center border-r items-center">
                <IoMdCall className="h-6 w-6" />
                <a href="tel:+919565721078">Call us</a>
            </div>
            <div className="flex flex-col justify-center border-r items-center">
                <BiMessageDetail className="h-6 w-6" />
                <a href="tel:+9565721078">Send Query</a>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaWhatsapp className="h-6 w-6" />
                <a href="https://wa.me/9565721078?">Whatsapp</a>
            </div>
        </div>
    );
};

export default BottomNav;
