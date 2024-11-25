import React from 'react'
import assets from '../../assets/assets'

const BannerImg = {
    backgroundImage: `url(${assets.orangePattern})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const Subscribe = () => {
    return (
        <div data-aos='zoom-in'
            className='mb-20 bg-gray-100 dark:bg-gray-800 text-white bg-gradient-to-r from-primary/80 to-secondary/90'
            >
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 '>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Product</h1>
                    <input data-aos='fade-in' data-aos-delay='200' type="text" placeholder='Enter your email' className='w-full p-3'/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe