import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ textMessage }: { textMessage: string }) => {
    return (
        <div className="fixed md:block hidden bottom-4 z-50 right-4">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/9565721078?text=${textMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-buttonText  bg-[#25d366] flex items-center gap-2 hover:bg-green-600 text-white px-4 py-2  rounded-xl shadow"
            >
                <FaWhatsapp className="h-8 w-8" />
                <span className="font-semibold">Chat on WhatsApp</span>
            </a>
        </div>
    );
};

export default WhatsAppButton;
