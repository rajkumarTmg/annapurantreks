import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { nextNavigationRightYellow } from "../../../../../../public";

const SocialmediaSlider = ({
  autoplay,
  autoplaySpeed,
  pauseOnHover,
  slidesToShow = 3,
  datas,
}) => {
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: pauseOnHover,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
          },
        },
      ],
    };

    const sliderRef = useRef();

    return (
      <>
        <div className="relative mt-2">
          {/* Mapping data in slider */}
          <div className="  mt-5  bg-contain ">
            <Slider {...settings} ref={sliderRef}>
              {datas?.map((iframUrl, index) => {
                return (
                  <div key={index} className="">
                    <div
                      className="mx-4 my-4  rounded-xl overflow-hidden w-fit h-48  "
                      dangerouslySetInnerHTML={{
                        __html: iframUrl,
                      }}
                    ></div>
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* Swipe next botton */}
          <div
            onClick={() => sliderRef.current.slickNext()}
            className=" absolute  top-1/3  right-0  md:right-0    rounded-full "
          >
            <Image
              src={nextNavigationRightYellow}
              alt="nextNavigation"
              className="cursor-pointer h-8 w-8 md:h-12 md:w-12  "
            />
          </div>
        </div>
      </>
    );
  }
};

export default React.memo(SocialmediaSlider);
