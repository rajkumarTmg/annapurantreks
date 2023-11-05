import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { img1, nextNavigationRightYellow } from "../../../../../public";
// import sliderCss from "../sliderCss.module.css";

// export default class Responsive extends Component
const ImageSliderTypeOne = ({
  // handlePostRouteIndividual,
  datas,
}) => {
  {
    var settings = {
      dots: false,
      arrows: false,
      autoScroll: true,
      infinite: true,
      loop: true,
      speed: 1000,
      slidesToShow: 3.7,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      rows: 2,
      // columns: 4,
      // vertical: true,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
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
    const galleryImagesUrlData = [];

    for (const key in datas) {
      if (key.startsWith("wpcf_gallery_image")) {
        const value = datas[key];
        if (value != "") {
          galleryImagesUrlData.push(value);
        }
      }
    }
    // console.log("galleryImagesUrlData", galleryImagesUrlData);

    // galleryImagesUrlData && console.log(galleryImagesUrlData);

    return (
      <>
        <div className="">
          {/* Mapping data in slider */}
          <div className="  bg-contain ">
            <Slider {...settings} ref={sliderRef}>
              {galleryImagesUrlData &&
                galleryImagesUrlData?.map((urlData, index) => {
                  return (
                    <>
                      <div key={index} className="mx-3 my-4">
                        <div className="relative cursor-pointer h-48  md:h-60 w-full   ">
                          <Image
                            src={urlData}
                            alt="images"
                            // auto height
                            layout="fill"
                            // objectFit="cover"

                            className="object-cover h-full w-full rounded-lg"
                          />
                          {/* <p className="absolute">{index}</p> */}
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </>
    );
  }
};

export default React.memo(ImageSliderTypeOne);
