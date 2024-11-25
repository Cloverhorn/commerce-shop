import React from 'react'
import { FaStar } from 'react-icons/fa6'
import assets from '../../assets/assets'



const ProductsData = [
    {
        id: 1,
        img: assets.helmet,
        rating: 5.0,
        color: 'white',
        aosDelay: '0',
        title: 'Construction helmet'
    },
    {
        id: 2,
        img: assets.tool,
        rating: 4.3,
        color: 'red',
        aosDelay: '200',
        title: 'Electric screwdriver'
    },
    {
        id: 3,
        img: assets.tool2,
        rating: 4.8,
        color: 'brown',
        aosDelay: '400',
        title: 'Hammer'
    },
    {
        id: 4,
        img: assets.tool3,
        rating: 4.4,
        color: 'yellow',
        aosDelay: '600',
        title: 'Pliers'
    },
    {
        id: 5,
        img: assets.tool2,
        rating: 4.9,
        color: 'pink',
        aosDelay: '800',
        title: 'Hammer'
    },
]

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum illo perferendis?</p>
                </div>
                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* card section */}
                        {
                            ProductsData.map((data) => (
                                <div
                                    className='space-y-3'
                                    key={data.id}
                                    data-aos='fade-up'
                                    data-aos-delay={data.aosDelay}>

                                    <img src={data.img} alt="" className='lg:w-[200px] lg:h-[270px] h-[220px] w-[150px] object-cover rounded-md' />
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm  text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-500'></FaStar>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                        {/* product card */}
                    </div>
                </div>
            </div>
            {/* view all button */}
            <div className='cursor-pointer flex justify-center mt-10'>
                <a href="#/" className='bg-primary text-white text-center mx-auto px-4 py-2 rounded-lg'>View All</a>
            </div>
        </div>
    )
}

export default Products