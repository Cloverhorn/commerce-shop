import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import assets from './assets/assets'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'




const App = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  function handleOrderPopup() {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 10
    })
    Aos.refresh()
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}></Navbar>
      <Hero handleOrderPopup={handleOrderPopup}></Hero>
      <Products></Products>
      <TopProducts handleOrderPopup={handleOrderPopup}></TopProducts>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Products></Products>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}></Popup>
    </div >
  )
}

export default App