import React, { useRef } from "react";
import Slider from "react-slick";
import sliderCss from "./sliderCss.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { img1, nextNavigationWhite } from "../../../../../public";
import renderHTML from "react-render-html";

// export default class Responsive extends Component
const SliderTeamMembers = ({
  autoplay,
  autoplaySpeed,
  pauseOnHover,
  slidesToShow = 3.2,
  // handlePostRouteIndividual,
  datas,
}) => {
  const router = useRouter();

  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: slidesToShow,
      slidesToScroll: 3.2,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: pauseOnHover,
      // rows: 2,
      // columns: 4,
      // vertical: true,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            initialSlide: 3,
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
    // console.log(datas);
    return (
      <>
        <div className="relative mt-2">
          {/* Mapping data in slider */}
          <div className="  mt-5  bg-contain ">
            <Slider {...settings} ref={sliderRef}>
              {datas &&
                datas?.map((data) => {
                  return (
                    <>
                      <div
                        key={data?.id}
                        onClick={() =>
                          // router.push(`/exploration/${data?.slug}`)

                          router.push({
                            pathname: "/exploration/[exploration_page]",
                            query: {
                              exploration_page: "query",
                              type: `${data?.type}`,
                              slug: `${data?.slug}`,
                            },
                          })
                        }
                        className="relative flex items-center mx-3 md:mx-5 cursor-pointer"
                      >
                        <div
                          style={{
                            letterSpacing: 0,
                            wordSpacing: 0,
                            fontSize: 0,
                          }}
                          className="h-[350px] md:h-[430px] w-full  "
                        >
                          <Image
                            src={
                              data?.x_featured_media_original
                                ? data?.x_featured_media_original
                                : img1
                            }
                            alt="img1"
                            layout="fill"
                            loading="lazy"
                            className="rounded-2xl w-full h-full object-cover backdrop-blur-3xl "
                          />
                          <div
                            class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95 rounded-2xl"
                          >
                            <div className="absolute bottom-4  ml-3 text-white">
                              <span className="font-amithen text-white text-3xl">
                                {renderHTML(data?.title?.rendered)}
                              </span>{" "}
                              <span className="text-sm ml-3 text-white ">
                                ({data.x_metadata.wpcf_days})
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </>
                  );
                })}
            </Slider>
          </div>

          {/* Swipe next botton */}
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="  absolute top-1/2  right-16  md:right-28 z-50    rounded-full "
          >
            <Image
              src={nextNavigationWhite}
              alt="nextNavigation"
              width={50}
              height={50}
              className="cursor-pointer   "
            />
          </div>
        </div>
      </>
    );
  }
};

export default React.memo(SliderTeamMembers);
