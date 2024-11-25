import React from 'react'
import assets from '../../assets/assets'
import Aos from 'aos'
import { FaStar } from 'react-icons/fa6'



const ProductsData = [
    {
        id: 1,
        img: assets.saw_t,
        title: 'Circular saw Gold',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, repellendus doloribus quo sequi possimus? Enim iste doloremque explicabo velit?'
    },
    {
        id: 2,
        img: assets.saw_t2,
        title: 'Circular saw Green',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, repellendus doloribus quo sequi possimus? Enim iste doloremque explicabo velit?'
    },
    {
        id: 3,
        img: assets.saw_t3,
        title: 'Circular saw Red',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, repellendus doloribus quo sequi possimus? Enim iste doloremque explicabo velit?'
    },
]

const TopProducts = ({handleOrderPopup}) => {
    return (
        <div>
            <div className='container'>
                {/* Header section */}
                <div className='text-left mb-24 mx-auto'>
                    <p data-aos='fade-right' className='text-sm text-primary'>Top Rated Products for you</p>
                    <h1 data-aos='fade-right' className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos='fade-right' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>
                        {
                            ProductsData.map((data) => (
                                <div data-aos='zoom-in' key={data.id}
                                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                                            dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                                    {/* image section */}
                                    <div className='h-[100px]'>
                                        <img src={data.img} alt=""
                                            className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                                    </div>
                                    {/* details section */}
                                    <div className='p-4 text-center'>
                                        {/* star rating */}
                                        <div className='flex w-full items-center justify-center gap-1'>
                                            <FaStar className='text-yellow-500'></FaStar>
                                            <FaStar className='text-yellow-500'></FaStar>
                                            <FaStar className='text-yellow-500'></FaStar>
                                            <FaStar className='text-yellow-500'></FaStar>
                                        </div>
                                        <h1 className='text-xl font-bold'>{data.title}</h1>
                                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full
                                        mt-4 group-hover:bg-white group-hover:text-black'
                                            onClick={() => handleOrderPopup()}>Order now</button>
                                    </div>
                                </div>
                            ))
                        }


                        {/* product card */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopProducts