import { useState } from "react";
import Slider from "react-slick";
import { FaFacebook } from 'react-icons/fa';
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size';

const HeroSection = () => {

  const windowWidth = useWindowWidth();
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
    speed: 500,
    autoplaySpeed: 3500,
    arrows: false
  };


  return (
    <div className="relative h-auto md:h-[500px] before:absolute before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:top-0 before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && <Slider {...settings}>
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
      }

      <div className="md:container flex justify-between items-center relative md:absolute top-0 md:left-1/2 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="logo" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={code => setSelected(code)}
                className='flag-select'
              />
              <label className="flex-1 relative">
                <input required className="text-sm h-14 px-4 border-2 border-gray-200 w-full rounded transition-colors hover:border-brand-color focus:border-brand-color outline-none peer pt-2" />
                <span className="absolute inset-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-700 bg-opacity-10 px-4 text-blue-700 text-opacity-80 transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center rounded-md w-full text-sm font-semibold ">
              <FaFacebook size={24} />
              <span className="mx-auto">
                Facebook ile devam et
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;