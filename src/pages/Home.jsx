import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Product from '../components/Product'
import Whyus from '../components/Whyus'

import banner2 from '../assets/banner2.jpg'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
      <Product />
      <Whyus />

      <div className='relative w-full h-130 md:h-[130] overflow-hidden p-10 object-[50%_100%] bg-[#a5807133]'>
        <img 
          src={banner2}
          alt="banner2" 
          className='w-full h-full object-cover'
        />
      </div>

      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home