import React from 'react'
import assets from '../../assets/assets'
import Slider from "react-slick";



const imageList = [
    {
        id: 1,
        img: assets.shopping,
        title: "Up to 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt maxime repellendus necessitatibus quasi perferendis, beatae vitae exercitationem in. Sequi?",
    },
    {
        id: 2,
        img: assets.women,
        title: "30% off on all women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt maxime repellendus necessitatibus quasi perferendis, beatae vitae exercitationem in. Sequi?",
    },
    {
        id: 3,
        img: assets.sale,
        title: "70% off on all Products Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt maxime repellendus necessitatibus quasi perferendis, beatae vitae exercitationem in. Sequi?",
    },
]

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
            {/* background pattern */}
            <div className=' h-[700px] w-[700px] bg-primary/40 absolute top-[-50%] right-5 rounded-3xl rotate-45'></div>
            {/* Hero section */}

            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {/* #1 */}
                    {imageList.map((item) => (
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 px-1 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-3xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                                    <p className='text-sm'>{item.description}</p>
                                    <div className=''>
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order now</button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10'>
                                        <img src={item.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
            {/* TESTETSTETS */}
        </div>
    )
}

export default Hero