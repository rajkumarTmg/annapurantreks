import Image from "next/image";
import React from "react";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { mountainCover, nextNavigationRightYellow } from "../../public";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import SliderTypeOne from "../../src/annapurna/components/slider/slickSlide/SliderTypeOne";
import TravelInspiredBySeason from "../../src/annapurna/components/TravelInspiredBySeason/TravelInspiredBySeason";
import ImageSliderTypeOne from "../../src/annapurna/components/slider/ImageGallerySlider/ImageSliderTypeOne";

import {
  fetchAutumnSeasonTrips,
  fetchBestPackagesOfNepal,
  fetchIndividualDestinationData,
  fetchSpringSeasonTrips,
  fetchSummerSeasonTrips,
  fetchWinterSeasonTrips,
} from "../api/wordpress_API";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import renderHTML from "react-render-html";
import Link from "next/link";
import Section from "../../src/annapurna/components/containers/Section";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import AnimatedSection from "../../src/annapurna/Animations/AnimatedSection";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const index = ({
  individualDestinationData,
  springSeasonTripsDatas,
  summerSeasonTripsDatas,
  winterSeasonTripsDatas,
  autumnSeasonTripsDatas,
  bestPackagesOfNepal,
}) => {
  const router = useRouter();

  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // Travel inspired by seasons Start
  const [seasonsDatas, setSeasonsDatas] = useState(springSeasonTripsDatas);
  // check whether it is winter or spring or summer or autumn
  const [seasonCheck, setSeasonCheck] = useState("spring");

  // handle spring season Data
  const handleSpringSeasonData = () => {
    setSeasonCheck("spring");
    setSeasonsDatas(springSeasonTripsDatas);
  };

  // handle summer season Data
  const handleSummerSeasonData = () => {
    setSeasonCheck("summer");
    setSeasonsDatas(summerSeasonTripsDatas);
  };

  // handle autumn season Data
  const handleAutumnSeasonData = () => {
    setSeasonCheck("autumn");
    setSeasonsDatas(autumnSeasonTripsDatas);
  };

  // handle winter season Data
  const handleWinterSeasonData = () => {
    setSeasonCheck("winter");
    setSeasonsDatas(winterSeasonTripsDatas);
  };

  // Travel inspired by seasons End

  //Best Packages datas
  // const bestPackagesDatas = [
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Mt trek",
  //     days: "14 days",
  //     img: img2,
  //   },
  //   {
  //     name: "Manaslu trek",
  //     days: "14 days",
  //     img: img3,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  //   {
  //     name: "Annapurna trek",
  //     days: "14 days",
  //     img: img1,
  //   },
  // ];

  return (
    <>
      <Head>
        <title>{renderHTML(individualDestinationData?.title?.rendered)} | Annapurnatreks</title>
      </Head>
      <>
        <AnimatePresence>
          {showNavBar && (
            <AnimatedNavBar>
              <NavToggleBar handleShowNavBar={handleShowNavBar} />
            </AnimatedNavBar>
          )}
        </AnimatePresence>

        {
          <AnimatePresence>
            {!showNavBar && (
              <AnimatedMainContent>
                <div>
                  <NavBar handleShowNavBar={handleShowNavBar} />

                  {/* Individual destination page cover */}
                  <div className="relative h-[100vh] w-[100%]  ">
                    <Image
                      src={individualDestinationData?.x_featured_media_original}
                      alt="mountainCover"
                      layout="fill"
                      className="object-cover"
                    />
                    <div
                      class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95"
                    >
                      <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex flex-col justify-center items-center ">
                          <p className="text-white text-6xl font-amithen ">
                            {/* {individualDestinationData?.title?.rendered} */}
                            {/* title here if needed to show */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article */}
                  <Section className=" container flex flex-col  ">
                    <p className="text-secondary-orange text-xs md:text-base">
                      Destination
                    </p>
                    <h1 className="font-amithen text-3xl md:text-5xl my-4">
                      {individualDestinationData?.title?.rendered}
                    </h1>
                    <div className=" text-xs md:text-base text-justify mt-4 space-y-4">
                      {renderHTML(individualDestinationData?.content?.rendered)}
                    </div>
                  </Section>
                  {/* Article Section end*/}

                  {/* Travel inspired by seasons */}
                  <div>
                    <TravelInspiredBySeason
                      handleSpringSeasonData={handleSpringSeasonData}
                      handleSummerSeasonData={handleSummerSeasonData}
                      handleWinterSeasonData={handleWinterSeasonData}
                      handleAutumnSeasonData={handleAutumnSeasonData}
                      seasonsDatas={seasonsDatas}
                      seasonCheck={seasonCheck}
                    />
                  </div>

                  {/* Gallery Section start */}
                  <Section className="">
                    {/* Images display section */}
                    {/* Exploration page cover */}
                    <div className="relative ">
                      <div className="relative h-[600px] md:h-[900px] w-[100%]">
                        <Image
                          src={mountainCover}
                          alt="mountainCover"
                          layout="fill"
                          className="object-cover"
                        />
                        <div
                          class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-75"
                        ></div>
                      </div>
                      <div className="absolute w-[100%] text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className=" flex flex-col justify-center items-center ">
                          <div className=" flex pb-8 md:pb-20 flex-col justify-center items-center">
                            <h1 className=" text-3xl md:text-5xl font-amithen text-white">
                              Memories you will experience lifetime
                            </h1>
                            <p className="text-xs md:text-base text-white">
                              Some glimpse of the Tour travels and treks.{" "}
                            </p>
                          </div>
                        </div>

                        {/* Images display section */}
                        <ImageSliderTypeOne
                          datas={individualDestinationData?.x_metadata}
                        />
                      </div>
                    </div>
                  </Section>

                  {/* Gallery Section end */}

                  {/* Best packages of Nepal section start */}
                  <Section className=" ">
                    <div className="container">
                      <p className="space-x-2 text-lg pl-5 md:pl-0 mb-5 md:mb-10 ">
                        <span className=" font-amithen text-3xl md:text-5xl ">
                          Best packages of Nepal
                        </span>{" "}
                      </p>
                    </div>

                    {/* Card Sections */}

                    <div>
                      {bestPackagesOfNepal?.length > 0 && (
                        <SliderTypeOne
                          datas={bestPackagesOfNepal}
                          slidesToShow={4.5}
                        />
                      )}
                    </div>
                  </Section>
                  {/* Best packages section end */}

                  {/* Booking and payment Guidebook section start */}

                  <div className="container  space-y-8 mb-12 md:mb-24 2xl:mb-44">
                    {/* Booking */}
                    <div className="flex space-x-2  items-center  w-fit justify-between text-base">
                      <p className="text-xs md:text-base text-secondary-orange">
                        Booking and payment conditions:{" "}
                      </p>
                      {/* Dropdown icon */}
                      <Link href="/booking-and-payment">
                        <Image
                          src={nextNavigationRightYellow}
                          alt=""
                          className="h-7 w-7 md:h-12 md:w-12"
                        />
                      </Link>
                    </div>

                    {/* guidebook */}
                    <div className="flex space-x-2  justify-center items-center w-fit ">
                      <p className="text-xs md:text-base text-secondary-orange">
                        The lonely Planet Guidebook:{" "}
                      </p>

                      {/* Dropdown icon */}
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          router.push({
                            pathname: "/page/[page]",
                            query: {
                              page: "query",
                              type: "pages",
                              slug: "what-says-the-lonely-planet-guide-book",
                            },
                          })
                        }
                      >
                        <Image
                          src={nextNavigationRightYellow}
                          alt=""
                          className="h-7 w-7 md:h-12 md:w-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Booking and payment Guidebook section end */}

                  {/* Message Section Start  */}
                  <Section className="bg-primary-blue text-white">
                    <div className=" container flex  flex-col lg:flex lg:flex-row  justify-center items-center ">
                      <div className="flex w-full pb-8 md:pb-20 2xl:pb-36  items-center justify-center md:justify-start  ">
                        <div className=" flex lg:flex-col space-x-2 md:space-x-4 lg:space-x-0">
                          <div className="flex space-x-2 md:space-x-4">
                            <p className="font-amithen text-3xl md:text-5xl">
                              We'd
                            </p>{" "}
                            <p className="font-amithen text-3xl md:text-5xl text-secondary-orange">
                              love
                            </p>
                          </div>
                          <p className="font-amithen text-3xl md:text-5xl">
                            {" "}
                            to hear from you
                          </p>
                        </div>
                      </div>

                      <div>
                        <ExperienceForm />
                      </div>
                    </div>
                  </Section>
                  {/* Message Section end  */}

                  {/* Social Media section */}
                  <SocialMediaPostsShow />

                  {/* Footer section */}
                  <Footer />
                </div>
              </AnimatedMainContent>
            )}
          </AnimatePresence>
        }
      </>
    </>
  );
};

// Fetch Datas details
export const getServerSideProps = async (context) => {
  const pageSlug = context?.query?.individual_destination;

  const [
    individualDestinationData,
    springSeasonTripsDatas,
    autumnSeasonTripsDatas,
    summerSeasonTripsDatas,
    winterSeasonTripsDatas,
    bestPackagesOfNepal,
  ] = await Promise.all([
    fetchIndividualDestinationData(pageSlug),
    fetchSpringSeasonTrips(),
    fetchAutumnSeasonTrips(),
    fetchSummerSeasonTrips(),
    fetchWinterSeasonTrips(),
    fetchBestPackagesOfNepal(),
  ]);

  return {
    props: {
      individualDestinationData: individualDestinationData?.data?.[0] || null,
      springSeasonTripsDatas: springSeasonTripsDatas?.data || [],
      autumnSeasonTripsDatas: autumnSeasonTripsDatas?.data || [],
      summerSeasonTripsDatas: summerSeasonTripsDatas?.data || [],
      winterSeasonTripsDatas: winterSeasonTripsDatas?.data || [],
      bestPackagesOfNepal: bestPackagesOfNepal?.data || [],
    },
  };
};

export default React.memo(index);
