import React, { useRef } from "react";
import Slider from "react-slick";
import sliderCss from "../sliderCss.module.css";

import { nextNavigationRightYellow } from "../../../../../../public";
import Image from "next/image";
import AnimatedSection from "../../../../Animations/AnimatedSection";

// export default class Responsive extends Component
const SliderTeamMembers = ({
  autoplay,
  autoplaySpeed,
  pauseOnHover,
  // handledatasRouteIndividual,
  datas,
}) => {
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: pauseOnHover,
      rows: 2,
      // columns: 4,
      // vertical: true,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const sliderRef = useRef();

    // console.log(sliderRef);
    // console.log(sliderRef.current);
    // console.log(sliderRef.current.slickNext)
    // console.log(sliderRef.current.slickPlay);
    // console.log("called")

    // console.log(datas);
    // console.log("test");

    return (
      <>
        <div className="mt-8">
          {/* Mapping data in slider */}
          <AnimatedSection>
            <div className="    bg-contain ">
              <Slider {...settings} ref={sliderRef}>
                {datas &&
                  datas.map((data) => {
                    return (
                      <>
                        <div
                          key={data?.id}
                          className="relative cursor-pointer mx-2 "
                        >
                          <div className="relative  my-8 h-56 w-full">
                            <Image
                              src={data?.x_featured_media_original}
                              alt="member1"
                              // auto height
                              layout="fill"
                              // objectFit="cover"

                              className="object-cover h-full w-full rounded-lg"
                            />

                            <div
                              class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95 rounded-lg"
                            >
                              <div className="absolute w-[100%] text-white bottom-0  left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="  w-[100%] justify-center items-center ml-4">
                                  <p className=" z-20 text-white text-sm font-semibold">
                                    {data?.title?.rendered}
                                  </p>
                                  <p>{data?.x_metadata?.wpcf_designation}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </Slider>
            </div>
          </AnimatedSection>

          <div className="flex justify-end items-end  ">
            <div className="flex space-x-2  right-20 md:right-24 lg:right-32 justify-around items-center  cursor-pointer">
              {/* <div onClick={() => sliderRef.current.slickPrev()}>
                <HiArrowCircleLeft className="h-10 w-10 text-gray-500 hover:text-gray-700 transform hover:scale-105" />
              </div> */}
              <AnimatedSection>
                <div className="" onClick={() => sliderRef.current.slickNext()}>
                  {/* <p>Next</p> */}
                  <Image
                    src={nextNavigationRightYellow}
                    alt="nextNavigationRightYellow"
                    width={50}
                    height={50}
                    className=""
                  />

                  {/* <HiArrowCircleDown className="h-10 w-10 m text-gray-500 hover:text-gray-700 transform hover:scale-105 " /> */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default React.memo(SliderTeamMembers);
