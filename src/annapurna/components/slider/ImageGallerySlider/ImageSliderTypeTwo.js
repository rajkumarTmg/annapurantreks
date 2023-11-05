import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { img1, nextNavigationRightYellow } from "../../../../../public";
import Section from "../../containers/Section";
// import sliderCss from "../sliderCss.module.css";

// export default class Responsive extends Component
const ImageSliderTypeTwo = ({
  // handlePostRouteIndividual,
  posts,
}) => {
  // if statement for includes and excludes
  const galleryImagesUrlData = [];
  // for (const key in posts) {
  //   if (
  //     key.startsWith("wpcf_gallery_image") ||
  //     key.startsWith("wpcf_image_url")
  //   ) {
  //     galleryImagesUrlData.push(posts[key]);
  //   }
  // }

  for (const key in posts) {
    if (key.startsWith("wpcf_gallery_image")) {
      const value = posts[key];
      if (value != "") {
        galleryImagesUrlData.push(value);
      }
    }
  }

  // galleryImagesUrlData && console.log(galleryImagesUrlData);
  {
    var settings = {
      dots: false,
      arrows: false,
      //   autoScroll: true,
      infinite: true,
      loop: true,
      speed: 1000,
      slidesToShow: galleryImagesUrlData?.length > 4 ? 3.7 : 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      // pauseOnHover: true,
      //   rows: 2,
      // columns: 4,
      // vertical: true,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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

    // console.log(posts);
    // console.log("test");

    return (
      <>
        {/* Mapping data in slider */}
        {galleryImagesUrlData.length > 0 && (
          <Section className=" bg-contain ">
            <Slider {...settings} ref={sliderRef}>
              {galleryImagesUrlData &&
                galleryImagesUrlData.map((urlData, index) => {
                  return (
                    <div className="w-[102%]">
                      <div
                        key={index}
                        //   className={
                        //     index % 3 === 0
                        //       ? "p-0 m-0  relative cursor-pointer   h-[410px] w-10"
                        //       : " relative cursor-pointer   h-96 w-[101%]"
                        //   }
                        className="relative h-[250px] md:h-[400px] w-[112%]"
                      >
                        <Image
                          src={urlData}
                          alt="member1"
                          // auto height
                          layout="fill"
                          objectFit="cover"
                          className="object-cover  "
                        />
                        {/* <p className="absolute">{index}</p> */}
                      </div>
                      {/* <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="animate-spin h-8 w-8 text-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm8 2.647A7.962 7.962 0 0120 12h-4c0 3.042-1.135 5.824-3 7.938l-3-2.647zM16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div> */}
                    </div>
                  );
                })}
            </Slider>
          </Section>
        )}
      </>
    );
  }
};

export default React.memo(ImageSliderTypeTwo);
