import { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function NextBtn({ onClick }) {
  return (
    <button className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  )
}

function PrevBtn({ onClick }) {
  return (
    <button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  )
}


const Campaigns = () => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto mt-2 md:pt-8">
      <h3 className="text-sm font-semibold mb-3 hidden md:block">Kampanyalar</h3>
      <Slider {...settings} className="md:-mx-2">
        {banners.length && banners.map((banner) =>
          <div key={banner.id} className="px-2">
            <img src={banner.image} className="md:rounded-lg" />
          </div>
        )}
      </Slider>
    </div>

  )
}

export default Campaigns