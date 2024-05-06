"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    rating: number;
    msg: string;
}

const postData: DataType[] = [
    {
        heading: 'Mumbai Darshan',
        heading2: 'Tour Package',
        name: "Experience Mumbai's highlights with our Mumbai Darshan Tour.",
        imgSrc: '/assets/courses/mumbai.jpg',
        rating: 4.7,
        msg: "Hello,I,m looking for a tour package for Mumbai Darshan. Can you please provide me with the details?"

    },
    {
        heading: 'Mumbai to Shirdi',
        heading2: 'Cab Service',
        name: "Shirdi: Spiritual pilgrimage, divine grace. Discover sacred wonders",
        imgSrc: '/assets/courses/shirdi.jpg',
        rating: 4.8,
        msg: "Hello,I,m looking for cab service from Mumbai to Shirdi. Can you please provide me with the details?"
    },
    {
        heading: 'Mumbai to Lonavala',
        heading2: 'Cab Service',
        name: "Lonavala : Sacred sites, profound spirituality. Experience divine connection.",
        imgSrc: '/assets/courses/lonavala.jpg',
        rating: 4.9,
        msg: "Hello,I,m looking for cab service from Mumbai to Lonavala. Can you please provide me with the details?"
    },
    {
        heading: 'Mumbai to Pune',
        heading2: 'Cab Service',
        name: "Pune: Sacred sites, profound spirituality. Experience divine connection.",
        imgSrc: '/assets/courses/puneImg.jpg',
        rating: 4.9,
        msg: "Hello,I,m looking for cab service from Mumbai to Pune. Can you please provide me with the details?"
    },

    {
        heading: 'Mumbai to Nashik',
        heading2: 'Cab Service',
        name: "Nashik: Spiritual pilgrimage, divine grace. Discover sacred wonders",
        imgSrc: '/assets/courses/threeJyotirlinga.jpg',
        rating: 4.7,
        msg: "Hello,I,m looking for cab service from Mumbai to Nashik. Can you please provide me with the details?"

    },

    {
        heading: 'Mumbai to Mahabaleshwar',
        heading2: 'Cab Service',
        name: "Mahabaleshwar: Spiritual pilgrimage, divine grace. Discover sacred wonders",
        imgSrc: '/assets/courses/MahabaleshwarImg.jpg',
        rating: 4.8,
        msg: "Hello,I,m looking for cab service from Mumbai to Mahabaleshwar. Can you please provide me with the details?"
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            cssEase: "linear",
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Our Services.</h3>
                        <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore services&nbsp;&gt;&nbsp;</Link>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-4 my-10 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto object-cover rounded-xl" />
                                        <div className="absolute right-5 -bottom-6 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-lg font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-lg font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='line-clamp-2 text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between mt-2 items-center">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <Link href={`https://wa.me/9565721078?text=${items.msg}`}>
                                                <button className="p-3 lg:p-4 focus:outline-none focus:shadow-outline text-white bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-xl">
                                                    Book Now
                                                </button>
                                            </Link>
                                        </div>

                                        {/* <hr style={{ color: "#C4C4C4" }} /> */}

                                        {/* <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
