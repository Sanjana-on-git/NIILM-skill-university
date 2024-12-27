import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSwiperComponent from '../components/swiper/homepage/HeroSwiperComponent';
import HomeGallerySection from '../components/homepage/home-gallery/HomeGallerySection';
import CurricularComponents from './CurricularComponents ';


const Designyourowndegree = () => {
  return (
    <div className="font-sans">
          <Navbar/>
         
          <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
          >
           
            <img
              src="/images/bg-new.png"
              alt={`Alt image`}
              className="absolute w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
           
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
            DESIGN YOUR OWN DEGREE
            </h1>
          </div>
        </div>
        <div className="text-center p-20 font-sans">
      <h1 className="text-5xl font-bold text-green-700">
        At NIILM, we celebrate <span className="text-green-700">YOU!</span>
      </h1>
      <p className="text-base text-gray-700 mt-6 leading-7 ">
        Every student is different in their interests, passions, and aspirations.
        Therefore, we believe in empowering you to design your own educational
        journey tailored to your individual needs and goals. From a diverse array of
        options, students have the freedom to customize a curriculum that aligns
        with your career ambitions and personal interests, fostering purposeful
        progression.
      </p>
    </div>
      </div>
      <HomeGallerySection/>
      <CurricularComponents/>
          
          <Footer/>
        </div>
  )
}

export default Designyourowndegree;