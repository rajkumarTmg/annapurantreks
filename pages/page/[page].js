import Image from "next/image";
import React, { useState } from "react";
import { mountainCover, quoteIconLeft, quoteIconRight } from "../../public";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import {
  fetchBookingAndPaymentData,
  fetchCompanyProfileData,
  fetchIndividualExplorationData,
} from "../api/wordpress_API";
import renderHTML from "react-render-html";
import Section from "../../src/annapurna/components/containers/Section";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import FaqsShow from "../../src/annapurna/components/faqs/FaqsShow";
import Head from "next/head";

const index = ({ datas }) => {
  // Show and hide Sub Nav Toggle Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  console.log("datas", datas);

  // const paragraphs = datas?.content?.rendered.split("\n");
  // const strongRegex = /^<strong>([\s\S]*)<\/strong>$/;
  // const blockquoteRegex = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g;
  // const headingtitleRegex = /<h1[^>]*>([\s\S]*?)<\/h1>/g;
  const modifiedContent = datas?.content?.rendered.replace(
    /<blockquote[^>]*>((?:.|\n)*?)<\/blockquote>/gi,
    (match, p1) => {
      const modifiedSentence = p1.replace(
        /(<p>)(.*?)(<\/p>)/gi,
        '$1<span class="modified-sentence">$2</span>$3'
      );
      return `<blockquote class="wp-block-quote">${modifiedSentence}</blockquote>`;
    }
  );

  // console.log(modifiedContent);

  return (
    <>
      <Head>
        <title>{renderHTML(datas?.title?.rendered)}</title>
        <meta
          name="description"
          content="Annapurna Trek is a leading trekking company in Nepal. We are a team of experienced and professional trekking guides who have been working in the tourism industry for more than a decade. We are committed to providing the best trekking experience to our clients. We offer a wide range of trekking packages in Nepal, Tibet, and Bhutan. We also organize tours, peak climbing, and other adventure activities in Nepal. Our team is dedicated to providing you with the best service possible. We are always ready to answer any questions you may have about our services or destinations. If you are looking for an unforgettable experience, then look no further than Annapurna Trek!"
        />
      </Head>
      <>
        {/* NavToggle Bar Start */}
        <AnimatePresence>
          {showNavBar && (
            <AnimatedNavBar>
              <NavToggleBar handleShowNavBar={handleShowNavBar} />
            </AnimatedNavBar>
          )}
        </AnimatePresence>
        {/* NavToggle Bar End */}

        {/* Main Content Start */}

        <AnimatePresence>
          {!showNavBar && (
            <AnimatedMainContent>
              <>
                <div className="">
                  <NavBar handleShowNavBar={handleShowNavBar} />
                </div>

                {/*  Cover Image */}
                <div className="relative h-[100vh] w-[100%] md:h-[100vh] md:w-[100%]  ">
                  <Image
                    src={
                      datas?.x_featured_media_original
                        ? datas?.x_featured_media_original
                        : mountainCover
                    }
                    alt="mountainCover"
                    layout="fill"
                    objectPosition="center"
                    priority={true}
                    loading="eager"
                    // objectFit="contain"
                    className="object-cover h-full w-full "
                  />
                  <div
                    class="w-full h-full flex  justify-center items-center 
                 bg-primary-image-overlay-color backdrop-brightness-75"
                  >
                    <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex flex-col justify-center items-center ">
                        <div className=" my-2 text-center">
                          <div className="font-amithen text-3xl md:text-5xl">
                            {renderHTML(datas?.title?.rendered)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content start */}
                <Section>
                  <div className="container">
                    <div className=" font-amithen mb-10 text-3xl md:text-5xl">
                      {renderHTML(datas?.title?.rendered)}
                    </div>
                    <div className="font-poppins text-justify space-y-8">
                      {renderHTML(datas?.content?.rendered)}
                      {/* <FaqsShow datas={datas?.content?.rendered} /> */}
                    </div>
                  </div>
                </Section>

                {/* Main content end */}

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

                {/* Social media posts show section */}
                <SocialMediaPostsShow />

                {/* Footer section */}
                <Footer />
              </>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main Content End */}
      </>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { type, slug } = context.query;
  // console.log(slug);
  // Fetch individual exploration page data
  const getDatas = await fetchIndividualExplorationData(type, slug);
  // const getDatas = await fetchRecommendedTripsData();
  const datas = getDatas?.data[0];

  return {
    props: {
      datas,
    },
  };
};

export default React.memo(index);
