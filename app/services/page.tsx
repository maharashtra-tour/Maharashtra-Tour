import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">New Arrivals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    <a href="javascript:;" className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                        <img src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" className='w-full h-full' />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>


    )
}

export default Services