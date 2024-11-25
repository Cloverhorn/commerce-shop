import React from 'react'
import Slider from 'react-slick'


const TestimonialsData = [
  {
    id: 1,
    name: 'Victor',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempora id sit possimus, numquam ipsum consequuntur, doloremque ad modi enim in! Necessitatibus debitis quas modi maxime quod aliquid vero nihil.',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Jordan',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempora id sit possimus, numquam ipsum consequuntur, doloremque ad modi enim in! Necessitatibus debitis quas modi maxime quod aliquid vero nihil.',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Daniel',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempora id sit possimus, numquam ipsum consequuntur, doloremque ad modi enim in! Necessitatibus debitis quas modi maxime quod aliquid vero nihil.',
    img: 'https://picsum.photos/103/103',
  },
  {
    id: 4,
    name: 'Sarah',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempora id sit possimus, numquam ipsum consequuntur, doloremque ad modi enim in! Necessitatibus debitis quas modi maxime quod aliquid vero nihil.',
    img: 'https://picsum.photos/104/104',
  },
]

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
  }
  return (
    <div className='py-10 mb-20'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>What our customers are saying</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum illo perferendis?</p>
        </div>
        {/* Cards */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {
              TestimonialsData.map((data) => (
                <div className='' key={data.id}>
                  <div  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>

                    <div className='mb-4 '>
                      <img src={data.img} alt="" className='rounded-full w-20 h-20 ' />
                    </div>

                    <div className='flex flex-col items-center gap-4 '>
                      <div className='space-y-3'>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                        <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                      </div>
                    </div>

                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>

                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial