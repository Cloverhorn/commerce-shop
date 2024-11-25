import React from 'react'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
import assets from '../../assets/assets'
import Aos from 'aos'



const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>

                    {/* image section */}
                    <div data-aos='fade-right'>
                        <img src={assets.tool3} alt=""
                            className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>

                    {/* text details section */}
                    <div data-aos='fade-left'
                    className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium quo dicta perspiciatis eveniet sequi ipsam aperiam debitis, iure inventore.</p>
                        {/* buttons */}
                        <div className='flex flex-col gap-2'>
                            <div data-aos='fade-left'
                            className='flex items-center gap-4'>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 shadow-lg dark:text-black'></GrSecure>
                                <p>Quality Products</p>
                            </div>
                            <div data-aos='fade-left'
                            className='flex items-center gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 shadow-lg dark:text-black'></IoFastFood>
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos='fade-left'
                            className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 shadow-lg dark:text-black'></GiFoodTruck>
                                <p>Easy Payment method</p>
                            </div>
                            <div data-aos='fade-left'
                            className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 shadow-lg dark:text-black'></GiFoodTruck>
                                <p>Get Offers</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner