import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import { img1, nextNavigationDownYellow } from "../../public";
import SliderTestimonials from "../../src/annapurna/components/testimonials/SliderTestimonials";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import ListDatasMap from "../../src/annapurna/components/exploration/ListDatasMap";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import SliderTypeOne from "../../src/annapurna/components/slider/slickSlide/SliderTypeOne";
import {
  fetchBrochureDatas,
  fetchIndividualExplorationData,
  fetchRecommendedTripsData,
  fetchTestimonialsData,
  fetchTripReviewDatas,
} from "../api/wordpress_API";
import renderHTML from "react-render-html";
import ListDatasMapForIncludesExcludes from "../../src/annapurna/components/exploration/ListDatasMapForIncludesExcludes";
import ImageSliderTypeTwo from "../../src/annapurna/components/slider/ImageGallerySlider/ImageSliderTypeTwo";
import Section from "../../src/annapurna/components/containers/Section";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedSection from "../../src/annapurna/Animations/AnimatedSection";
import AddTripReviewCommentForm from "../../src/annapurna/components/forms/AddTripReviewCommentForm";
import TripsReviews from "../../src/annapurna/components/ReviewSection/TripsReviews";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import axios from "axios";
import FaqsShow from "../../src/annapurna/components/faqs/FaqsShow";
import ReactHtmlParser from "react-html-parser";
import TripItenerary from "../../src/annapurna/components/cards/TripIteneraryShow/TripItenerary";
import ConvertIntoPdfDownload from "../../src/annapurna/components/convertToPdf/ConvertIntoPdfDownload";
import MainContentShow from "../../src/annapurna/components/exploration/MainContentShow/MainContentShow";
import { AiFillDownCircle } from "react-icons/ai";
import Head from "next/head";

const index = ({ datas }) => {
  // Show and hide Sub Nav Toggle Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // console.log("datas explo", datas);

  const router = useRouter();

  // recommendedTripsData state
  const [recommendedTripsDatas, setRecommendedTripsDatas] = useState([]);
  const [testimonialsDatas, setTestimonialsDatas] = useState([]);
  const [tripReviewDatas, setTripReviewDatas] = useState([]);
  const [brochureDatas, setBrochureDatas] = useState([]);
  // const [reviewSendCheck, setReviewSendCheck] = useState(false);

  // State to hold data of highlights, includes and excludes
  const [hieDatas, setHieDatas] = useState(
    datas?.x_metadata?.wpcf_trips_highlights
  );

  // console.log("hieDatas", datas?.x_metadata?.wpcf_trips_highlights);

  // Check whether it is highlights or includes or excludes
  const [hieCheck, setHieCheck] = useState("highlights");

  // handle highlights datas funtion
  const handleHighlightsDatas = () => {
    setHieCheck("highlights");
    setHieDatas(datas?.x_metadata?.wpcf_trips_highlights);
  };

  // handle includes datas funtion
  const handleIncludesDatas = () => {
    setHieCheck("includes");
    setHieDatas(datas?.x_metadata?.wpcf_trip_includes);
  };

  // handle Exludes Data Funtion
  const handleExcludesDatas = () => {
    setHieCheck("excludes");
    setHieDatas(datas?.x_metadata?.wpcf_trip_excludes);
  };
  // console.log("PostId ", datas?.id)
  // console.log("PostTitle ", datas?.title?.rendered)

  const downloadPDF = async (url) => {
    const response = await axios({
      url,
      method: "GET",
      responseType: "blob",
      headers: {
        Authorization: `Basic ${Buffer.from(
          "developer:Be49 5SE5 SSH9 aXJ1 O5TG mPgE"
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
    });
    const urlObject = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = urlObject;
    link.download = `pdfFile_${Date.now()}.pdf`;
    link.click();
  };

  // Change recommendedTripsDatas data using useEffect and axios
  useEffect(() => {
    const fetchData = async () => {
      const [testimonialsData, recommendedTripsData, brochureDatas] =
        await Promise.all([
          fetchTestimonialsData(),
          fetchRecommendedTripsData(),
          fetchBrochureDatas(),
        ]);
      setTestimonialsDatas(testimonialsData?.data);
      setRecommendedTripsDatas(recommendedTripsData?.data);
      setBrochureDatas(brochureDatas?.data[0]);
    };

    fetchData();
  }, []);

  // fetch Trip Reviews datas
  useEffect(() => {
    const fetchData = async () => {
      const tripReviewDatas = await fetchTripReviewDatas(datas?.id);
      setTripReviewDatas(tripReviewDatas?.data);
    };
    fetchData();
  }, [datas?.id]);

  // const formId = 7;
  // const postId = 2741;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetch

  // handle review send check
  // const handleReviewSendCheck = () => {
  //   setReviewSendCheck((prev) => !prev);
  // };

  // faqs section show hide
  const [showFaqsSection, setShowFaqsSection] = useState(false);

  const handleShowFaqsSection = () => {
    setShowFaqsSection(!showFaqsSection);
  };

  return (
    <>
      <Head>
        <title> {renderHTML(datas?.title?.rendered)} || Annapurnatreks</title>
        {/* <meta
          name="description"
          content={datas?.metadata?._aioseop_description}
        /> */}
        <meta
          name="description"
          content="Annapurna Trek is a leading trekking company in Nepal. We are a team of experienced and professional trekking guides who have been working in the tourism industry for more than a decade. We are committed to providing the best trekking experience to our clients. We offer a wide range of trekking packages in Nepal, Tibet, and Bhutan. We also organize tours, peak climbing, and other adventure activities in Nepal. Our team is dedicated to providing you with the best service possible. We are always ready to answer any questions you may have about our services or destinations. If you are looking for an unforgettable experience, then look no further than Annapurna Trek!"
        />
        <meta
          name="keywords"
          content="Annapurnatreks, annapurnatreks.com, Annapurna Trek, Annapurna Trekking, Annapurna Trekking Company, Annapurna Trekking Agency, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara"
        />
      </Head>
      {/* <Head>
        <title>{datas?.metadata?._aioseop_title}</title>
        <meta
          name="description"
          content={datas?.metadata?._aioseop_description}
        />
        <meta name="keywords" content={datas?.metadata?._aioseop_keywords} /> */}

      {/* Open Graph tags */}
      {/* <meta property="og:title" content={datas?.metadata?._aioseo_og_title} />
        <meta
          property="og:description"
          content={datas?.metadata?._aioseo_og_description}
        />
        <meta
          property="og:article:section"
          content={datas?.metadata?._aioseo_og_article_section}
        />
        <meta
          property="og:article:tags"
          content={datas?.metadata?._aioseo_og_article_tags}
        /> */}

      {/* Twitter tags */}
      {/* <meta
          name="twitter:title"
          content={datas?.metadata?._aioseo_twitter_title}
        />
        <meta
          name="twitter:description"
          content={datas?.metadata?._aioseo_twitter_description}
        /> */}

      {/* Other meta tags */}
      {/* <meta property="og:image" content={datas?.metadata?._thumbnail_id} /> */}

      {/* Your other meta tags */}
      {/* <meta name="your-custom-meta" content="your-custom-value" />
      </Head> */}
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

        {/* Main Content start */}
        <AnimatePresence>
          {!showNavBar && (
            <AnimatedMainContent>
              <div className="">
                <NavBar handleShowNavBar={handleShowNavBar} />
              </div>
              {/* Exploration Cover Image */}
              <div className="relative h-[100vh] md:h-[100vh] w-[100%] ">
                <Image
                  src={
                    datas?.x_featured_media_original
                      ? datas?.x_featured_media_original
                      : img1
                  }
                  alt="mountainCover"
                  layout="fill"
                  objectPosition="center"
                  // objectFit="contain"
                  className="object-cover h-full w-full "
                />
                <div
                  class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-50"
                >
                  <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col justify-center items-center ">
                      <div className="text-xs md:text-base">
                        {/* days data */}
                        <span>{datas?.x_metadata?.wpcf_days} </span>
                        <span>,</span>
                        {/* night data */}
                        <span className="ml-2">
                          {datas.x_metadata?.wpcf_night}
                        </span>
                      </div>

                      <div className="text-3xl md:text-5xl font-amithen my-2 text-center">
                        {renderHTML(datas?.title?.rendered)}
                      </div>
                      <div className="flex justify-center items-center mt-4 text-xs md:text-base">
                        {/* <p>Starting from $2000, $2500</p> */}
                        <button
                          onClick={() =>
                            router.push({
                              pathname: "/booking-form/[booking_form]",
                              query: {
                                booking_form: "query",
                                type: `${datas?.type}`,
                                slug: `${datas?.slug}`,
                              },
                            })
                          }
                          className="px-6 py-2 ml-4 bg-secondary-orange rounded-md text-white text-xs md:text-base"
                        >
                          Book{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience over View */}
              <Section>
                <div className="container flex flex-col lg:flex lg:flex-row ">
                  <div className=" mb-6 block lg:hidden">
                    <p className="  text-xs md:text-xl font-normal text-center   ">
                      Overview
                    </p>
                    <p className=" text-3xl md:text-5xl text-center  text-secondary-orange font-amithen">
                      Experience craziness
                    </p>
                  </div>
                  <div className="relative">
                    <div className="flex justify-center items-center md:flex-none md:sticky md:top-0 md:pt-10 lg:pt-20 ">
                      <AnimatedSection>
                        <div
                          style={{
                            letterSpacing: 0,
                            wordSpacing: 0,
                            fontSize: 0,
                          }}
                          className="relative h-52 w-40  md:h-[570px] md:w-[450px]   "
                        >
                          <Image
                            src={
                              datas?.x_featured_media_original
                                ? datas?.x_featured_media_original
                                : img1
                            }
                            alt="mountainSquare"
                            objectFit="cover"
                            objectPosition="center"
                            layout="fill"
                            loading="lazy"
                            className="object-cover h-full w-full rounded-md"
                          />
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                  <div className="  lg:ml-10    ">
                    <div className="ml-10 mb-6 hidden lg:block">
                      <p className="flex pl-28 text-xs md:text-xl font-normal  ">
                        Overview
                      </p>
                      <p className=" text-3xl md:text-5xl  text-secondary-orange font-amithen">
                        Experience craziness
                      </p>
                    </div>
                    <div className="text-justify text-xs md:text-base font-normal mt-10 lg:mt-0 ">
                      {/* {renderHTML(datas?.content?.rendered)} */}
                      <MainContentShow datas={datas?.content?.rendered} />
                    </div>

                    <div className="flex  mt-12 text-xl font-medium ">
                      <p
                        onClick={handleHighlightsDatas}
                        className={
                          hieCheck == "highlights"
                            ? "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-secondary-orange"
                            : "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-primary-light-gray"
                        }
                      >
                        Highlights
                      </p>
                      <p
                        onClick={handleIncludesDatas}
                        className={
                          hieCheck == "includes"
                            ? "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-secondary-orange"
                            : "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-primary-light-gray"
                        }
                      >
                        Includes
                      </p>
                      <p
                        onClick={handleExcludesDatas}
                        className={
                          hieCheck == "excludes"
                            ? "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-secondary-orange"
                            : "border-b-[3px] px-3 text-xs md:text-xl font-normal md:font-medium cursor-pointer border-primary-light-gray"
                        }
                      >
                        Excludes
                      </p>
                    </div>

                    {/* Highlights section */}
                    <div className="mt-3 ml-5 md:mt-5 md:ml-10">
                      {hieCheck == "highlights" && (
                        <ListDatasMap data={hieDatas} />
                      )}
                      {hieCheck == "includes" && (
                        <ListDatasMap includes data={hieDatas} />
                      )}
                      {hieCheck == "excludes" && (
                        <ListDatasMap data={hieDatas} />
                      )}
                    </div>
                  </div>
                </div>
              </Section>
              {/* Experience End */}
              {/* Gallery Section */}
              {/* <div className=" ">
              <div className="grid grid-cols-12 gap-3 mb-2">
                <div className="col-span-2">
                  <Image src={img1} className="h-52" alt="test" />
                </div>
                <div className="col-span-1">
                  <Image
                    src={img1}
                    className="h-52 object-cover w-full"
                    alt="test"
                  />
                </div>
                <div className="col-span-3">
                  <Image
                    src={img1}
                    className="h-52 object-cover w-full"
                    alt="test"
                  />
                </div>
                <div className="col-span-2">
                  <Image
                    src={img1}
                    className="h-52 object-cover w-full"
                    alt="test"
                  />
                </div>
                <div className="col-span-2">
                  <Image
                    src={img1}
                    className="h-52 object-cover w-full"
                    alt="test"
                  />
                </div>
                <div className="col-span-2">
                  <Image
                    src={img1}
                    className="h-52 object-cover w-full"
                    alt="test"
                  />
                </div>
              </div>
            </div> */}
              {/* Gallery Section End */}
              {/* Image Gallery slider */}
              <ImageSliderTypeTwo posts={datas?.x_metadata} />
              {/* Download pdf section start */}
              <Section className="md:-mt-24 2xl:-mt-44">
                <div className="container ">
                  {/* journey section according to days pdf read start */}

                  <div
                    // style={{ overflowY: "scroll" }}
                    // className="scrollbar-jpg h-[95vh] md:h-[95vh] mt-5 pt-5 "
                    className=" mt-5 pt-5 "
                  >
                    <TripItenerary
                      datas={datas?.x_metadata}
                      tripTitle={datas?.title?.rendered}
                      allDatas={datas}
                    />
                  </div>
                </div>
              </Section>
              {/* journey section according to days pdf read end */}
              {/* Inquery section start */}
              <Section className="md:-mt-24 2xl:-mt-44 bg-gradient-to-b from-transparent to-[#F5EFE1]">
                <div className="container flex flex-col justify-center items-center ">
                  <h1 className="text-3xl md:text-5xl text-secondary-orange mb-10 font-amithen">
                    Start your journey
                  </h1>
                  <div className="flex flex-col md:flex md:flex-row space-y-12 md:space-y-0 justify-center items-center md:space-x-32 ">
                    {/* Book and  details */}
                    <div className="text-center ">
                      <div className=" text-xs md:text-base">
                        {/* days data */}
                        <span className="text-xs md:text-base">
                          {datas?.x_metadata?.wpcf_days}{" "}
                        </span>
                        <span>,</span>
                        {/* night data */}
                        <span className="ml-2">
                          {datas.x_metadata?.wpcf_night}
                        </span>
                      </div>
                      <div className="font-amithen text-3xl md:text-5xl my-2">
                        {renderHTML(datas?.title?.rendered)}
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        {/* <p className="text-xs md:text-base">
                      Starting from $2000, $2500
                    </p> */}
                        <AnimatedSection>
                          <button
                            onClick={() =>
                              router.push({
                                pathname: "/booking-form/[booking_form]",
                                query: {
                                  booking_form: "query",
                                  type: `${datas?.type}`,
                                  slug: `${datas?.slug}`,
                                },
                              })
                            }
                            className="px-6 py-2 ml-4 bg-secondary-orange rounded-md text-white text-xs md:text-base"
                          >
                            Book
                          </button>
                        </AnimatedSection>
                      </div>
                    </div>

                    {/* Call For Inquery */}
                    <div>
                      <h1 className=" text-3xl md:text-5xl font-amithen">
                        Call for inquery
                      </h1>
                      <p className="text-xs md:text-base text-center md:text-start">
                        +977(1)4423656
                      </p>
                      <p className="text-xs md:text-base text-center md:text-start">
                        +977-9851030619
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
              {/* Inquery section end */}

              {/* FAQ Section */}
              <div className="bg-gradient-to-b from-[#F3ECDBCC] via-[#F3ECDBCC] to-[#F3ECDB] pb-3">
                <div className="container">
                  <div
                    className={
                      showFaqsSection
                        ? "flex justify-between items-center pb-4"
                        : "flex justify-between items-center  pb-4"
                    }
                  >
                    <h1 className="  text-center md:text-start font-amithen text-3xl md:text-5xl text-secondary-orange  ">
                      FAQ
                    </h1>
                    {/* <div className="flex justify-center items-center">
                        <AiFillDownCircle
                          onClick={handleShowFaqsSection}
                          className={
                            showFaqsSection
                              ? "text-primary-blue cursor-pointer transform -rotate-180 ease-in-out duration-500 h-5 w-5 md:h-8 md:w-8 z-10"
                              : "text-primary-blue cursor-pointer ease-in-out duration-500 h-5 w-5 md:h-8 md:w-8 z-10 "
                          }
                        />
                      </div> */}
                  </div>
                  <div className="">
                    {/* {showFaqsSection && ( */}
                    <FaqsShow
                      datas={datas?.x_metadata?.wpcf_faq}
                      // showFaqsSection={showFaqsSection}
                      handleShowFaqsSection={handleShowFaqsSection}
                    />
                    {/* )} */}

                    {/* {renderHTML(datas?.x_metadata?.wpcf_faq)} */}
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              {/* {testimonialsDatas && (
              <SliderTestimonials datas={testimonialsDatas} />
            )} */}
              {/* Review datas fetch from gravity form */}
              <div>
                <Section className="bg-[#F3ECDB] ">
                  <div className="container">
                    <h1 className=" 2xl:pb-10 text-center md:text-start font-amithen text-3xl md:text-5xl border-b-2 pb-3 ">
                      Trip
                      <span className="ml-2 font-amithen text-3xl md:text-5xl text-secondary-orange">
                        Reviews
                      </span>
                    </h1>
                    {tripReviewDatas.length > 0 ? (
                      <div className="flex flex-col md:flex-row  justify-between pt-10">
                        <TripsReviews datas={tripReviewDatas} />
                        {/* Download brochure section start*/}
                        <AnimatedSection>
                          <div className="text-center bg-[#F3ECDB] hidden md:block">
                            {/* Download Brochure */}
                            <a
                              href={
                                brochureDatas?.x_metadata
                                  ?.wpcf_brochure_download_pdf_file
                              }
                              download
                              target="_blank"
                            >
                              <div className="flex justify-center items-center ">
                                <div className="relative h-[300px] w-[200px] md:h-[500px] md:w-[350px] shadow-lg">
                                  <Image
                                    src={
                                      brochureDatas?.x_featured_media_original
                                    }
                                    alt="pdf"
                                    layout="fill"
                                    className="object-cover h-full w-full rounded-md "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </AnimatedSection>
                        {/* Download brochure section end*/}
                      </div>
                    ) : (
                      <div className="flex justify-between  mt-6 md:mt-12">
                        <h1> This trip has no review yet!</h1>
                        {/* Download brochure section start*/}
                        <AnimatedSection>
                          <div className="text-center bg-[#F3ECDB] hidden md:block">
                            {/* Download Brochure */}
                            <a
                              href={
                                brochureDatas?.x_metadata
                                  ?.wpcf_brochure_download_pdf_file
                              }
                              download
                              target="_blank"
                            >
                              <div className="flex justify-center items-center ">
                                <div className="relative h-[300px] w-[200px] md:h-[500px] md:w-[350px] shadow-lg">
                                  <Image
                                    src={
                                      brochureDatas?.x_featured_media_original
                                    }
                                    alt="pdf"
                                    layout="fill"
                                    className="object-cover h-full w-full rounded-md "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </AnimatedSection>
                        {/* Download brochure section end*/}
                      </div>
                    )}
                  </div>
                </Section>

                {/* Experience Form */}
                <Section>
                  <div className=" container  md:grid md:grid-cols-3  justify-center items-center ">
                    <div className="flex w-full  items-center justify-center md:justify-start  ">
                      <div className=" flex md:flex md:flex-col font-amithen text-5xl space-x-1">
                        <div className="flex ">
                          <p className="font-amithen text-3xl md:text-5xl ">
                            Write your
                          </p>
                          <p className="ml-2 font-amithen text-3xl md:text-5xl text-secondary-orange">
                            Review
                          </p>
                        </div>
                        <p className="font-amithen text-3xl md:text-5xl">
                          {" "}
                          with us
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 md:pt-0 col-span-2 ">
                      <div className="flex justify-center items-center md:justify-end md:items-end">
                        <div>
                          <AddTripReviewCommentForm
                            tripId={datas?.id}
                            tripTitle={datas?.title?.rendered}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>
                {/* Experience form end */}

                {/* Download Brochure */}
                <Section className="bg-[#F3ECDB] block md:hidden">
                  <AnimatedSection>
                    <div className="text-center   ">
                      <a
                        href={
                          brochureDatas?.x_metadata
                            ?.wpcf_brochure_download_pdf_file
                        }
                        download
                        target="_blank"
                      >
                        <div className="flex justify-center items-center ">
                          <div className="relative h-[300px] w-[200px] md:h-[500px] md:w-[350px] shadow-lg">
                            <Image
                              src={brochureDatas?.x_featured_media_original}
                              alt="pdf"
                              layout="fill"
                              className="object-cover h-full w-full rounded-md "
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </AnimatedSection>
                </Section>

                {/* Recommended packages section start */}
                <div className=" bg-primary-blue">
                  <div className="   flex flex-col ">
                    <div className="pt-12  md:pt-24  2xl:pt-44 pb-6 md:pb-12 2xl:pb-20 ">
                      <div className="container">
                        <p className="space-x-2 text-lg">
                          <span className="text-secondary-orange font-amithen text-3xl md:text-5xl ">
                            Recommended
                          </span>{" "}
                          <span className="text-white font-amithen text-3xl md:text-5xl">
                            packages
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Card Sections */}

                    <div className="pb-12  md:pb-24  2xl:pb-44">
                      {recommendedTripsDatas &&
                        recommendedTripsDatas?.length > 0 && (
                          <AnimatedSection>
                            <SliderTypeOne
                              datas={recommendedTripsDatas}
                              slidesToShow={5}
                            />
                          </AnimatedSection>
                        )}
                    </div>
                  </div>
                </div>

                {/* Recommended packages section end */}
                {/* Social media posts show section */}
                <SocialMediaPostsShow />

                {/* <Footer section  */}
                <Footer />
              </div>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main Content End */}
      </>
    </>
  );
};

// Fetch Datas details
export const getServerSideProps = async (context) => {
  const { type, slug } = context.query;

  // Fetch all data in parallel
  const [explorationData] = await Promise.all([
    fetchIndividualExplorationData(type, slug),
  ]);

  return {
    props: {
      datas: explorationData?.data[0],
    },
  };
};

export default React.memo(index);
