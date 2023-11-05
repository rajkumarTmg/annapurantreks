import React, { useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";

import Image from "next/image";
import {
  toggleNextDownIcon,
  toggleNextRightIcon,
} from "../../../../../../public";
import renderHTML from "react-render-html";

// export default class Responsive extends Component
const SubSubNavBarSlider = ({
  // handlePostRouteIndividual,

  datas,
  handleShowNavBar,
  handleShowSubSubSubNavItems,
  handleSubSubSubNavItems,
}) => {
  const router = useRouter();

  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      //   autoplay: false,
      //     autoplaySpeed: 500,
      pauseOnHover: true,
      // rows: 2,
      // columns: 4,
      vertical: true,
      //   height: 500,
      //   width: 500,
      // verticalSwiping: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 4,
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
        <div className="relative  ease-in-out  ">
          {/* Mapping data in slider */}
          <div className="     ">
            {datas?.length > 5 ? (
              <>
                <Slider {...settings} ref={sliderRef}>
                  {datas?.map((item) =>
                    item?.child_items ? (
                      <>
                        <div
                          onClick={() => {
                            handleSubSubSubNavItems(item);
                            handleShowSubSubSubNavItems();
                          }}
                          key={item?.id}
                          className=" "
                        >
                          <div className="flex space-x-5 items-center justify-center md:justify-start">
                            <p className="text-black whitespace-nowrap my-3 flex text-3xl lg:text-5xl hover:text-secondary-orange font-amithen cursor-pointer">
                              {renderHTML(item?.title)}
                            </p>
                            <Image
                              src={toggleNextRightIcon}
                              alt=""
                              className="h-3 w-2 md:h-6 md:w-4 "
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          onClick={
                            item?.object == "trips" ||
                            item?.object == "bhutantour" ||
                            item?.object == "tibetpackagetour"
                              ? () => {
                                  // link to push
                                  router.push({
                                    pathname: "/exploration/[exploration_page]",
                                    query: {
                                      exploration_page: "query",
                                      type: `${item?.object}`,
                                      slug: `${item?.slug}`,
                                    },
                                  });
                                  handleShowNavBar();
                                }
                              : () => {
                                  // link to push
                                  router.push({
                                    pathname: "/page/[page]",
                                    query: {
                                      page: "query",
                                      type: "pages",
                                      slug: `${item?.slug}`,
                                    },
                                  });
                                  handleShowNavBar();
                                }
                          }
                        >
                          <div className="text-black whitespace-nowrap text-3xl  lg:text-5xl cursor-pointer my-3 flex flex-col text-center md:text-start  hover:text-secondary-orange font-amithen ">
                            {renderHTML(item?.title)}
                          </div>
                        </div>
                      </>
                    )
                  )}
                </Slider>
              </>
            ) : (
              <>
                {datas?.map((item) =>
                  item?.child_items ? (
                    <>
                      <div
                        onClick={() => {
                          handleSubSubSubNavItems(item);
                          handleShowSubSubSubNavItems();
                        }}
                        key={item?.id}
                        className=" my-3 pl-2"
                      >
                        <div className="flex space-x-5 items-center justify-center md:justify-start">
                          <p className="text-black whitespace-nowrap my-3 flex text-3xl lg:text-5xl hover:text-secondary-orange font-amithen cursor-pointer">
                            {renderHTML(item?.title)}
                          </p>
                          <Image
                            src={toggleNextRightIcon}
                            alt=""
                            className="h-3 w-2 md:h-6 md:w-4"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={
                          item?.object == "trips" ||
                          item?.object == "bhutantour" ||
                          item?.object == "tibetpackagetour"
                            ? () => {
                                // link to push
                                router.push({
                                  pathname: "/exploration/[exploration_page]",
                                  query: {
                                    exploration_page: "query",
                                    type: `${item?.object}`,
                                    slug: `${item?.slug}`,
                                  },
                                });
                                handleShowNavBar();
                              }
                            : () => {
                                // link to push
                                router.push({
                                  pathname: "/page/[page]",
                                  query: {
                                    page: "query",
                                    type: "pages",
                                    slug: `${item?.slug}`,
                                  },
                                });
                                handleShowNavBar();
                              }
                        }
                      >
                        <div className="flex  items-center justify-center md:justify-start">
                          <div className="text-black whitespace-nowrap text-center text-3xl lg:text-5xl cursor-pointer my-3  md:text-start  hover:text-secondary-orange font-amithen ">
                            {renderHTML(item?.title)}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )}
              </>
            )}
          </div>

          {/* Swipe next botton */}
          {datas?.length > 5 && (
            <div
              className="w-fit mx-auto md:ml-[40%] lg:ml-[30%] mt-10"
              onClick={() => sliderRef.current.slickNext()}
            >
              <Image
                src={toggleNextDownIcon}
                alt="nextNavigation"
                className="cursor-pointer  "
              />
            </div>
          )}
        </div>
      </>
    );
  }
};

export default React.memo(SubSubNavBarSlider);
