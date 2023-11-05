import React, { useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import sliderCss from "./sliderCss.module.css";

import Image from "next/image";
import { img1, nextNavigationWhite } from "../../../../../public";
import { HiOutlineChevronRight } from "react-icons/hi";
import renderHTML from "react-render-html";

// export default class Responsive extends Component
const SliderTypeTwo = ({
  autoplay = true,
  autoplaySpeed = 5000,

  // slidesToShow=3,
  // handlePostRouteIndividual,
  datas,
}) => {
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 4.6,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: true,
      //   rows: 1,
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
    const router = useRouter();

    // console.log(sliderRef);
    // console.log(sliderRef.current);
    // console.log(sliderRef.current.slickNext)
    // console.log(sliderRef.current.slickPlay);
    // console.log("called")

    // console.log(datas);
    // console.log("test");

    return (
      <>
        {/* Mapping data in slider */}

        <Slider {...settings}>
          {datas &&
            datas?.map((data) => {
              return (
                <>
                  <div
                    style={{
                      letterSpacing: 0,
                      wordSpacing: 0,
                      fontSize: 0,
                    }}
                    key={data?.id}
                    onClick={() =>
                      router.push({
                        pathname: "/exploration/[exploration_page]",
                        query: {
                          exploration_page: "query",
                          type: `${data?.type}`,
                          slug: `${data?.slug}`,
                        },
                      })
                    }
                    className="relative mx-12  md:mx-4 cursor-pointer "
                  >
                    <div className="relative  h-[310px] w-[100%]">
                      <Image
                        src={
                          data?.x_featured_media_original
                            ? data?.x_featured_media_original
                            : img1
                        }
                        alt="img1"
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        loading="lazy"
                        className="rounded-2xl h-full w-full object-cover"
                      />

                      <div
                        class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-75 rounded-2xl"
                      >
                        <div className="absolute w-[100%]   text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="flex flex-col justify-center items-center  ">
                            <p className="text-4xl font-amithen text-center">
                              {renderHTML(data?.title?.rendered)}
                            </p>
                            {/* Dropdown icon */}
                            <Image
                              src={nextNavigationWhite}
                              alt="img1"
                              className="h-12 w-12"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </Slider>
      </>
    );
  }
};

export default React.memo(SliderTypeTwo);
