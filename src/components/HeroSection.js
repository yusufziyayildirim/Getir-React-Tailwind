import { useState } from "react";
import Slider from "react-slick";
import { FaFacebook } from 'react-icons/fa';
import ReactFlagsSelect from "react-flags-select";


const HeroSection = () => {

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed:3500,
    arrows: false
  };


  return (
    <div className="relative h-[500px] before:absolute before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:top-0 before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="slider-item" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="slider-item" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="slider-item" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="slider-item" />
        </div>
      </Slider>

      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="logo" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;