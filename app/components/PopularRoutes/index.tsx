import Image from "next/image"
import { IoCarSport } from "react-icons/io5";

const fromMumbai = [
    "Mumbai to Pune Cabs",
    "Mumbai to Nashik Cabs",
    "Mumbai to Igatpuri Cabs",
    "Mumbai to Lonavala Cabs",
    "Mumbai to Shirdi Cabs",
    "Mumbai To Aurangabad Cabs",
    "Mumbai to Ahmednagar Cabs",
    "Mumbai to Shrirampur Cabs",
    "Mumbai to Jalgaon Cabs",
    "Mumbai to Bhusawal Cabs",
    "Mumbai to Mahabaleshwar cab",
    "Mumbai to Panchgani Cabs",
    "Mumbai to Kolhapur Cabs",
    "Mumbai to Ratnagiri Cabs",
    "Mumbai to Sangli Cabs",
    "Mumbai to Solapur Cabs",
    "Mumbai to Pandharpur Cabs",
    "Mumbai to Tuljapur Cabs"
]

const fromPune = [
    "Pune to Mumbai Cabs",
    "Pune To Nashik Cabs",
    "Pune to Bhimashankar Cabs"
]

const fromNashik = [
    "Nashik to Mumbai Cabs",
    "Nashik to Thane Cabs",
    "Nashik To Pune Cabs",
    "Nashik to Shirdi Cabs"
]

const fromShirdi = [
    "Shirdi to Mumbai Cabs ",
    "Shirdi to Pune Cabs",
]

const PopularRoutes = () => {
    return (
        <div className="pt-10 pb-10 sm:pb-10 lg:py-10">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                {/* <h3 className='text-center text-blue text-lg tracking-widest'>Popular Routes</h3> */}
                <h4 className='text-center mb-8 text-4xl lg:text-65xl font-bold'>Popular Routes</h4>
                <hr />
                <h4 className='text-center mt-8 mb-8 text-2xl  underline lg:text-3xl font-semibold'>Cab Service from Mumbai</h4>
                <div className='grid grid-cols-1 h-72 overflow-y-auto mb-8 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-8'>
                    {fromMumbai.map((item, i) => (
                        <div key={i} className='cursor-pointer mx-4 sm:mx-0 text-center  hover:shadow-2xl bg-white rounded-lg my-4 py-4 px-2 shadow-md group'>
                            <h4 className='text-xl font-semibold text-darkgray'>{item}</h4>
                        </div>
                    ))}
                </div>
                <hr />
                <h4 className='text-center mt-8 mb-8 text-2xl  underline lg:text-3xl font-semibold'>Cab Service from Pune</h4>
                <div className='grid grid-cols-1 mb-8 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-8'>
                    {fromPune.map((item, i) => (
                        <div key={i} className='cursor-pointer mx-4 sm:mx-0 text-center  hover:shadow-2xl bg-white rounded-lg my-4 py-4 px-2  shadow-md group'>
                            <h4 className='text-xl font-semibold text-darkgray'>{item}</h4>
                        </div>
                    ))}
                </div>
                <hr />
                <h4 className='text-center mt-8 mb-8 text-2xl  underline lg:text-3xl font-semibold'>Cab Service from Nashik</h4>
                <div className='grid grid-cols-1 mb-8 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-8'>
                    {fromNashik.map((item, i) => (
                        <div key={i} className='cursor-pointer mx-4 sm:mx-0 text-center  hover:shadow-2xl bg-white rounded-lg my-4 py-4 px-2  shadow-md group'>
                            <h4 className='text-xl font-semibold text-darkgray'>{item}</h4>
                        </div>
                    ))}
                </div>
                <hr />
                <h4 className='text-center mt-8 mb-8 text-2xl  underline lg:text-3xl font-semibold'>Cab Service from Shirdi</h4>
                <div className='grid grid-cols-1 mb-8 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-8'>
                    {fromShirdi.map((item, i) => (
                        <div key={i} className='cursor-pointer mx-4 sm:mx-0 text-center  hover:shadow-2xl bg-white rounded-lg my-4 py-4 px-2  shadow-md group'>
                            <h4 className='text-xl font-semibold text-darkgray'>{item}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularRoutes