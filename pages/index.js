import React, { useState, useEffect, useRef } from "react";
import NavBar from "../src/annapurna/components/header_footer/NavBar";
import SearchBar from "../src/annapurna/components/Search_Bar";
import Head from "next/head";
import {
  LogoBlue,
  diffIcon1,
  diffIcon2,
  diffIcon3,
  diffIcon4,
  img1,
  img2,
  img3,
} from "../public";
import Image from "next/image";
import SliderTypeTwo from "../src/annapurna/components/slider/slickSlide/SliderTypeTwo";
import Footer from "../src/annapurna/components/header_footer/Footer";
import NewsLetter from "../src/annapurna/components/newsletter";
import Testimonials from "../src/annapurna/components/testimonials/SliderTestimonials";
import NavToggleBar from "../src/annapurna/components/header_footer/NavToggleBar";

// Import Swiper styles
import "swiper/css";
import {
  fetchAutumnSeasonTrips,
  fetchFeaturedTripsData,
  fetchHomePageBottomCoverVideoDatas,
  fetchHomePageCoverVideoDatas,
  fetchPopularTripsData,
  fetchRecommendedTripsData,
  fetchSpecialTripsData,
  fetchSpringSeasonTrips,
  fetchSummerSeasonTrips,
  fetchTestimonialsData,
  fetchWhatMakesUsDifferentDatas,
  fetchWinterSeasonTrips,
} from "./api/wordpress_API";
import TravelInspiredBySeason from "../src/annapurna/components/TravelInspiredBySeason/TravelInspiredBySeason";
import Section from "../src/annapurna/components/containers/Section";

import AnimatedSection from "../src/annapurna/Animations/AnimatedSection";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../src/annapurna/Animations/AnimatedMainContent";
import HomeVideoCover from "../src/annapurna/components/home_slider/HomeVideoCover";
import HomeBottomVideoCover from "../src/annapurna/VideoCover/HomeBottomVideoCover";
import SocialMediaPostsShow from "../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";

const Home = ({
  homePageCoverVideoDatas,
  whatMakesUsDifferentDatas,
  springSeasonTripsDatas,
  autumnSeasonTripsDatas,
  summerSeasonTripsDatas,
  winterSeasonTripsDatas,
  featuredTripsDatas,
  popularTripsDatas,
  recommendedTripsDatas,
  specialTripsDatas,
  testimonialsDatas,
}) => {
  // Animations Start

  // Animations end
  // console.log("homePageCoverVideoDatas", homePageCoverVideoDatas);
  // console.log("whatMakesUsDifferentDatas", whatMakesUsDifferentDatas);
  // console.log("springSeasonTripsDatas", springSeasonTripsDatas);

  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // Home video botton inspo section video data
  const [homePageBottomCoverVideoDatas, setHomePageBottomCoverVideoDatas] =
    useState();

  // seasons types and icons data
  // const seasonsTypesAndIcons = [
  //   {
  //     id: 0,
  //     name: "Spring",
  //     icon: Spring,
  //   },
  //   {
  //     id: 1,
  //     name: "Summer",
  //     icon: Summer,
  //   },
  //   {
  //     id: 2,
  //     name: "Autumn",
  //     icon: Autumn,
  //   },
  //   {
  //     id: 3,
  //     name: "Winter",
  //     icon: Winter,
  //   },
  // ];

  // Travel inspired by seasons
  const [seasonsDatas, setSeasonsDatas] = useState(springSeasonTripsDatas);

  // Fun activities datas and state
  const [funActivitiesDatas, setFunActivitiesDatas] =
    useState(featuredTripsDatas);

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

  // check whether it featured or popular or recommended
  const [fprCheck, setFprCheck] = useState("featured");

  // handle featured posts data
  const handleFeaturedPostsData = () => {
    setFprCheck("featured");
    setFunActivitiesDatas(featuredTripsDatas);
  };

  // handle Popular Posts Data
  const handlePopularPostsData = () => {
    setFprCheck("popular");
    setFunActivitiesDatas(popularTripsDatas);
  };

  // handle recommended posts data
  const handleRecommendedPostsData = () => {
    setFprCheck("recommended");
    setFunActivitiesDatas(recommendedTripsDatas);
  };

  // Handle Special Trips Data
  const handleSpecialTripsData = () => {
    setFprCheck("special");
    setFunActivitiesDatas(specialTripsDatas);
  };

  // Fetch home page bottom cover video url
  useEffect(() => {
    const getHomePageBottomCoverVideoDatas = async () => {
      const datas = await fetchHomePageBottomCoverVideoDatas();
      datas && setHomePageBottomCoverVideoDatas(datas?.data[0]);
      // datas && console.log("datas", datas?.data[0]);
    };
    getHomePageBottomCoverVideoDatas();
  }, []);

  return (
    <>
      <Head>
        <title>Annapurna Treks</title>
        <meta name="description" content="Annapurna Treks" />
        <meta name="keywords" content="Annapurna Treks" />
        <meta name="keywords" content="Annapurnatreks" />
        <meta name="keywords" content="annapurnatreks" />
        <meta name="keywords" content="annapurnatreks.com" />
        <meta name="keywords" content="annapurnatreks Nepal" />
        <meta name="keywords" content="annapurnatreks.com Nepal" />
        <meta name="keywords" content="annapurnatreks.com Kathmandu" />
        <meta name="keywords" content="Treks in Nepal" />
        <meta name="keywords" content="Tours in Nepal" />
        <meta name="keywords" content="Adventure in Nepal" />

        <meta name="author" content="Annapurna Treks" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Annapurna Treks" />
        <meta property="og:description" content="Annapurna Treks" />
        <meta property="og:image" content={LogoBlue} />
        <meta property="og:url" content="https://annapurnatreks.com/" />
        <meta property="og:site_name" content="Annapurna Treks" />
        <meta property="og:type" content="website" />

        {/* What makes us different SEO start*/}
        <meta
          name="description"
          content={whatMakesUsDifferentDatas?.x_metadata?._aioseo_description}
        />
        <meta
          name="keywords"
          content={whatMakesUsDifferentDatas?.x_metadata?._aioseo_keywords}
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content={whatMakesUsDifferentDatas?.x_metadata?._aioseo_og_title}
        />
        <meta
          property="og:description"
          content={
            whatMakesUsDifferentDatas?.x_metadata?._aioseo_og_description
          }
        />
        <meta
          property="og:article:section"
          content={
            whatMakesUsDifferentDatas?.x_metadata?._aioseo_og_article_section
          }
        />
        <meta
          property="og:article:tags"
          content={
            whatMakesUsDifferentDatas?.x_metadata?._aioseo_og_article_tags
          }
        />

        {/* Twitter tags */}
        <meta
          name="twitter:title"
          content={whatMakesUsDifferentDatas?.x_metadata?._aioseo_twitter_title}
        />
        <meta
          name="twitter:description"
          content={
            whatMakesUsDifferentDatas?.x_metadata?._aioseo_twitter_description
          }
        />
        {/* What makes us different SEO end*/}
      </Head>

      <>
        {/* Nav toggle bar start */}

        <AnimatePresence>
          {showNavBar && (
            <AnimatedNavBar>
              <NavToggleBar
                handleShowNavBar={handleShowNavBar}
                showNavBar={showNavBar}
              />
            </AnimatedNavBar>
          )}
        </AnimatePresence>
        {/* Nav toggle bar end */}

        {/* Main Content Start */}
        <AnimatePresence>
          {!showNavBar && (
            <>
              <AnimatedMainContent>
                <div>
                  <NavBar handleShowNavBar={handleShowNavBar} />
                  <HomeVideoCover datas={homePageCoverVideoDatas} />
                  <SearchBar />

                  <Section>
                    <div className="container   w-full ">
                      {/* What makes different */}
                      <h1 className="pb-8 md:pb-12 text-center  font-amithen text-3xl md:text-6xl">
                        What makes us different?
                      </h1>

                      <AnimatedSection>
                        <div className="lg:grid lg:grid-cols-4 ">
                          {/* second two images Mobile view */}
                          <div className="flex col-span-2 justify-center items-start md:hidden mb-12  ">
                            <div>
                              <Image
                                src={img1}
                                alt="img1"
                                className="h-[430px] w-[310px]"
                              />
                            </div>{" "}
                            <div className="mt-64 -ml-24">
                              <Image
                                src={img2}
                                alt="img2"
                                className="h-52 w-60"
                              />
                            </div>
                          </div>
                          {/* second two images end Mobile view */}
                          {/* first two circles */}
                          <div className="flex flex-col ">
                            <div className="flex flex-col justify-center items-center  lg:items-start">
                              <div className="flex w-full justify-center lg:justify-start">
                                <Image
                                  src={diffIcon1}
                                  alt="ellipse"
                                  className="h-24 w-24 md:h-36 md:w-36"
                                />
                              </div>
                              <p className="flex flex-col mt-3 text-center lg:text-start">
                                <span className="font-amithen text-2xl">
                                  {" "}
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_title_1
                                  }
                                </span>
                                <span className="">
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_description_1
                                  }
                                </span>
                              </p>
                            </div>
                            <div className="mt-12 lg:mt-20  flex flex-col justify-center items-center  lg:items-start">
                              <div className="flex justify-center lg:justify-end w-full ">
                                <Image
                                  src={diffIcon2}
                                  alt="ellipse"
                                  className="h-24 w-24 md:h-36 md:w-36"
                                />
                              </div>
                              <p className="flex flex-col mt-3 text-center lg:text-end">
                                <span className="font-amithen text-2xl">
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_title_2
                                  }
                                </span>
                                <span className="">
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_description_2
                                  }
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Images Section */}
                          {/* second two images desktop view */}
                          <div className="hidden md:flex md:col-span-2 md:justify-center md:items-start my-10 lg:my-0  ">
                            <div>
                              <Image
                                src={img1}
                                alt="img1"
                                className="h-[430px] w-[310px]"
                              />
                            </div>{" "}
                            <div className="mt-64 ml-[-100px]">
                              <Image
                                src={img2}
                                alt="img2"
                                className="h-52 w-60"
                              />
                            </div>
                          </div>
                          {/* second two images end desktop view */}

                          {/* third two cirlcles */}
                          <div className="flex flex-col mt-10 md:mt-0 ">
                            <div className="  flex flex-col justify-center items-center  lg:items-start">
                              <div className="flex w-full justify-center lg:justify-end ">
                                <Image
                                  src={diffIcon3}
                                  alt="ellipse"
                                  className="h-24 w-24 md:h-36 md:w-36"
                                />
                              </div>
                              <p className="flex flex-col text-center lg:text-end">
                                <span className="font-amithen text-2xl mt-3">
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_title_3
                                  }
                                </span>
                                <span className="">
                                  {
                                    whatMakesUsDifferentDatas[0]?.x_metadata
                                      ?.wpcf_what_makes_us_different_description_3
                                  }
                                </span>
                              </p>
                            </div>
                            <div className="mt-12 lg:mt-20  flex flex-col justify-center items-center  lg:items-start">
                              <div className="flex  w-full justify-center lg:justify-start">
                                <Image
                                  src={diffIcon4}
                                  alt="ellipse"
                                  className="h-24 w-24 md:h-36 md:w-36"
                                />
                              </div>
                              <div className="">
                                <p className="flex flex-col text-center lg:text-start">
                                  <span className="font-amithen text-2xl mt-3">
                                    {
                                      whatMakesUsDifferentDatas[0]?.x_metadata
                                        ?.wpcf_what_makes_us_different_title_4
                                    }
                                  </span>
                                  <span>
                                    {
                                      whatMakesUsDifferentDatas[0]?.x_metadata
                                        ?.wpcf_what_makes_us_different_description_4
                                    }
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </Section>
                  {/* Travel inspired by seasons */}

                  <TravelInspiredBySeason
                    handleSpringSeasonData={handleSpringSeasonData}
                    handleSummerSeasonData={handleSummerSeasonData}
                    handleWinterSeasonData={handleWinterSeasonData}
                    handleAutumnSeasonData={handleAutumnSeasonData}
                    seasonsDatas={seasonsDatas}
                    seasonCheck={seasonCheck}
                  />

                  {/* Fun Activities   */}
                  <Section className="">
                    <div className="container lg:px-2 2xl:px-44 ">
                      <div className="flex justify-center items-center">
                        <p className="flex flex-col justify-center items-center">
                          <span className="text-3xl md:text-5xl">
                            <span className="text-secondary-orange font-amithen">
                              Fun
                            </span>{" "}
                            <span className="font-amithen"> Activities</span>
                          </span>
                          <span className="text-xs md:text-sm">
                            Most popular activites that people love to do.
                          </span>
                        </p>
                      </div>

                      {/* Toggle */}
                      <AnimatedSection>
                        <div className="py-6 md:py-12 2xl:py-16 flex flex-wrap justify-center md:justify-start items-center ">
                          <p
                            onClick={handleFeaturedPostsData}
                            className={
                              fprCheck == "featured"
                                ? "px-4 md:px-8 text-xs md:text-base text-white my-5 md:my-0 py-2 bg-[#E09132] rounded-md cursor-pointer"
                                : "px-4 md:px-8 cursor-pointer text-xs md:text-base"
                            }
                          >
                            Featured
                          </p>
                          <p
                            onClick={handlePopularPostsData}
                            className={
                              fprCheck == "popular"
                                ? "px-4 md:px-8 text-xs md:text-base text-white my-5 md:my-0 py-2 bg-[#E09132] rounded-md cursor-pointer"
                                : " px-4 md:px-8 text-xs md:text-base cursor-pointer"
                            }
                          >
                            Popular
                          </p>
                          <p
                            onClick={handleRecommendedPostsData}
                            className={
                              fprCheck == "recommended"
                                ? "px-4 md:px-8 text-xs md:text-base text-white my-5 md:my-0 py-2 bg-[#E09132] rounded-md cursor-pointer"
                                : " px-4 md:px-8 text-xs md:text-base cursor-pointer"
                            }
                          >
                            Recommended
                          </p>
                          <p
                            onClick={handleSpecialTripsData}
                            className={
                              fprCheck == "special"
                                ? "px-4 md:px-8 text-xs md:text-base text-white my-5 md:my-0 py-2 bg-[#E09132] rounded-md cursor-pointer"
                                : " px-4 md:px-8 text-xs md:text-base cursor-pointer"
                            }
                          >
                            Special
                          </p>
                        </div>
                      </AnimatedSection>
                    </div>

                    {/* Slider for highlights, featured and Popular trips */}
                    <AnimatedSection>
                      <div className=" ">
                        {fprCheck == "featured" && (
                          <SliderTypeTwo datas={funActivitiesDatas} />
                        )}
                        {fprCheck == "popular" && (
                          <SliderTypeTwo datas={funActivitiesDatas} />
                        )}
                        {fprCheck == "recommended" && (
                          <SliderTypeTwo datas={funActivitiesDatas} />
                        )}

                        {fprCheck == "special" && (
                          <SliderTypeTwo datas={funActivitiesDatas} />
                        )}
                      </div>
                    </AnimatedSection>
                  </Section>
                  {/* Testimonials */}
                  {/* <Testimonials datas={testimonialsDatas} /> */}

                  {/* Inspo Section */}
                  {/* Home bottom cover video */}
                  {/* <Image
                  src={img3}
                  alt="img3"
                  layout="fill"
                  className="object-cover h-full w-full "
                /> */}
                  {homePageBottomCoverVideoDatas && (
                    <Section className="relative">
                      <HomeBottomVideoCover
                        datas={homePageBottomCoverVideoDatas}
                      />
                    </Section>
                  )}

                  {/* Social Medias posts section */}
                  <SocialMediaPostsShow />

                  {/* Subscribe to newsletter section */}
                  <Section className="bg-primary-blue">
                    <AnimatedSection>
                      <div className="container">
                        <NewsLetter />
                      </div>
                    </AnimatedSection>
                  </Section>
                  {/* Test  */}
                  {/* <button onClick={handleTest} className="text-5xl bg-black text-white">
            Test
          </button> */}

                  {/* Footer Section */}
                  <Footer />
                </div>
              </AnimatedMainContent>
            </>
          )}
        </AnimatePresence>
        {/* Main Content End */}
      </>
    </>
  );
};

export const getServerSideProps = async () => {
  const [
    homePageCoverVideoDatas,
    whatMakesUsDifferentDatas,
    springSeasonTripsDatas,
    autumnSeasonTripsDatas,
    summerSeasonTripsDatas,
    winterSeasonTripsDatas,
    featuredTripsDatas,
    popularTripsDatas,
    recommendedTripsDatas,
    specialTripsDatas,
    testimonialsDatas,
  ] = await Promise.all([
    fetchHomePageCoverVideoDatas(),
    fetchWhatMakesUsDifferentDatas(),
    fetchSpringSeasonTrips(),
    fetchAutumnSeasonTrips(),
    fetchSummerSeasonTrips(),
    fetchWinterSeasonTrips(),
    fetchFeaturedTripsData(),
    fetchPopularTripsData(),
    fetchRecommendedTripsData(),
    fetchSpecialTripsData(),
    fetchTestimonialsData(),
  ]).then((results) => results.map((result) => result.data));

  return {
    props: {
      homePageCoverVideoDatas: homePageCoverVideoDatas[0],
      whatMakesUsDifferentDatas,
      springSeasonTripsDatas,
      autumnSeasonTripsDatas,
      summerSeasonTripsDatas,
      winterSeasonTripsDatas,
      featuredTripsDatas,
      popularTripsDatas,
      recommendedTripsDatas,
      specialTripsDatas,
      testimonialsDatas,
    },
  };
};
export default React.memo(Home);
