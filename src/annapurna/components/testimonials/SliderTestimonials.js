import React, { useRef } from "react";
import Slider from "react-slick";
// import sliderCss from "./sliderCss.module.css";

import Image from "next/image";

import {
  Avatar,
  nextNavigationBlack,
  testimonial1,
  testimonialQuote,
} from "../../../../public";
import renderHTML from "react-render-html";
import Section from "../containers/Section";
import AnimatedSection from "../../Animations/AnimatedSection";

// export default class Responsive extends Component
const SliderTestimonials = ({
  // slidesToShow=3,
  // handlePostRouteIndividual,
  datas,
}) => {
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,

      autoplaySpeed: 5000,
      pauseOnHover: true,
      // rows: 2,
      // columns: 4,
      // vertical: true,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: 2,
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

    // console.log("type one ")
    // console.log(datas)
    return (
      <>
        <Section>
          <div className="container">
            {/* Title */}
            <p className="mb-12 md:mb-24 2xl:pb-10 text-center font-amithen text-3xl md:text-5xl ">
              Glimpse of Inspiring{" "}
              <span className="ml-1 font-amithen text-3xl md:text-5xl text-secondary-orange">
                stories
              </span>
            </p>

            <AnimatedSection>
              <div className="relative  ">
                {/* Mapping data in slider */}
                <div className="   bg-contain ">
                  <Slider {...settings} ref={sliderRef}>
                    {datas &&
                      datas?.map((data) => {
                        return (
                          <>
                            <div
                              key={data?.id}
                              className="flex justify-center items-center  "
                            >
                              <div className="">
                                <div className="flex flex-wrap justify-center items-center space-y-5 md:space-y-0 md:space-x-3">
                                  {/* Profile Image  */}
                                  <Image
                                    src={
                                      data?.x_featured_media_original
                                        ? data?.x_featured_media_original
                                        : Avatar
                                    }
                                    alt="testimonial1"
                                    width={200}
                                    height={200}
                                    className="rounded-full"
                                  />

                                  <div className="md:pl-5 mr-6 md:mr-0">
                                    {/* Name */}
                                    <div className="flex justify-between ">
                                      <div className="text-lg font-bold">
                                        {renderHTML(data?.title?.rendered)}
                                      </div>
                                      <Image
                                        src={testimonialQuote}
                                        alt="quote"
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                    <div className="flex">
                                      <div className="text-justify text-xs md:text-base  mr-6 md:w-[45vw]">
                                        {renderHTML(data?.content?.rendered)}
                                      </div>
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

                {/* Swipe next botton */}
                <div
                  onClick={() => sliderRef.current.slickNext()}
                  className="  absolute right-0 bottom-1/2   md:bottom-1/3    md:right-24 z-50    rounded-full "
                >
                  <Image
                    src={nextNavigationBlack}
                    alt="nextNavigation"
                    width={50}
                    height={50}
                    className="cursor-pointer   "
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Section>
      </>
    );
  }
};

export default React.memo(SliderTestimonials);
