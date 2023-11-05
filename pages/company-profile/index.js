import Image from "next/image";
import React, { useState } from "react";
import { mountainCover, quoteIconLeft, quoteIconRight } from "../../public";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import { fetchCompanyProfileData } from "../api/wordpress_API";
import renderHTML from "react-render-html";
import Section from "../../src/annapurna/components/containers/Section";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import Head from "next/head";

const index = ({ companyProfileData }) => {
  // Show and hide Sub Nav Toggle Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <Head>
        <title>Company Profile | Annapurnatreks</title>
      </Head>
      <>
        <AnimatePresence>
          {showNavBar &
          (
            <AnimatedNavBar>
              <div>
                <NavToggleBar handleShowNavBar={handleShowNavBar} />
              </div>
            </AnimatedNavBar>
          )}
        </AnimatePresence>

        {!showNavBar && (
          <>
            <div className="">
              <NavBar handleShowNavBar={handleShowNavBar} />
            </div>

            {/*  Cover Image */}
            <div className="relative h-[100vh] w-[100%] ">
              <Image
                src={
                  companyProfileData?.x_featured_media_original
                    ? companyProfileData?.x_featured_media_original
                    : mountainCover
                }
                alt="mountainCover"
                layout="fill"
                objectPosition="center"
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
                      <p className="font-amithen  text-3xl md:text-5xl">
                        Learn{" "}
                        <span className="font-amithen  text-3xl md:text-5xl text-secondary-orange">
                          More
                        </span>{" "}
                        about us
                      </p>
                      <p className="mt-5 text-base">Who are we? What we do? </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content start */}
            <Section>
              {" "}
              <div className="container ">
                {/* Title */}
                <p className="font-amithen  text-3xl md:text-5xl my-10 ">
                  {companyProfileData?.x_metadata?.wpcf_title}
                </p>
                {/* Main Content */}
                <div className="text-xs md:text-base">
                  {renderHTML(companyProfileData?.x_metadata?.wpcf_description)}
                </div>
                {/* Quote first */}
                <div className="flex space-x-2 my-16 ">
                  <div className="flex items-start -mt-4">
                    <Image
                      src={quoteIconLeft}
                      alt="quoteIconLeft"
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex text-xs md:text-xl font-medium italic text-primary-blue items-end">
                    {renderHTML(companyProfileData?.x_metadata?.wpcf_quote_1)}
                  </div>
                </div>

                {/* Our Services  */}
                <p className="font-amithen  text-3xl md:text-5xl my-10 ">
                  Have a peek at our services
                </p>
                <div className="text-xs md:text-base">
                  {renderHTML(
                    companyProfileData?.x_metadata?.wpcf_our_services
                  )}
                </div>

                {/* Quote second */}
                <div className="flex space-x-2 my-16  ">
                  <div className="flex items-start w-20 -mt-4">
                    <Image
                      src={quoteIconLeft}
                      alt="quoteIconLeft"
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex text-xs md:text-xl font-medium italic text-primary-blue items-end">
                    {renderHTML(companyProfileData?.x_metadata?.wpcf_quote_2)}
                  </div>
                </div>

                {/* Contact details */}
                <p className="text-secondary-orange text-xs md:text-xl">
                  Contact details
                </p>
                <div className="text-xs md:text-base">
                  {renderHTML(
                    companyProfileData?.x_metadata?.wpcf_contact_details
                  )}
                </div>

                {/* Managing personals  */}
                <p className="text-secondary-orange text-xs md:text-xl my-5">
                  Managing Personals:
                </p>
                <div className="text-xs md:text-base">
                  {renderHTML(
                    companyProfileData?.x_metadata?.wpcf_managing_personals
                  )}
                </div>
                <div className="my-10 text-xs md:text-base">
                  {renderHTML(
                    companyProfileData?.x_metadata?.wpcf_company_brief_info
                  )}
                </div>

                {/* Quote third */}
                <div className="flex space-x-2 mt-16 ">
                  <div className="flex items-start -mt-4">
                    <Image
                      src={quoteIconLeft}
                      alt="quoteIconLeft"
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex text-xs md:text-xl font-medium italic text-primary-blue items-end">
                    {renderHTML(companyProfileData?.x_metadata?.wpcf_quote_3)}
                  </div>
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
                      <p className="font-amithen text-3xl md:text-5xl">We'd</p>{" "}
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
        )}
      </>
    </>
  );
};

export const getServerSideProps = async () => {
  const getCompanyProfileData = await fetchCompanyProfileData();
  const companyProfileData = getCompanyProfileData.data[0];

  // console.log(companyProfileData);
  return {
    props: {
      companyProfileData,
    },
  };
};

export default React.memo(index);
