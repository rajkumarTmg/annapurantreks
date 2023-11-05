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
} from "../api/wordpress_API";
import renderHTML from "react-render-html";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";

const index = ({ bookingAndPaymentData }) => {
  // Show and hide Sub Nav Toggle Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      {/* Nav toggle bar */}
      <AnimatePresence>
        {showNavBar && (
          <AnimatedNavBar>
            <NavToggleBar handleShowNavBar={handleShowNavBar} />
          </AnimatedNavBar>
        )}
      </AnimatePresence>
      {/* Nav toggle bar end */}
      {/* Main content start */}
      <AnimatePresence>
        {!showNavBar && (
          <AnimatedMainContent>
            <div className="">
              <NavBar handleShowNavBar={handleShowNavBar} />
            </div>

            {/* Exploration Cover Image */}
            <div className="relative h-[100vh] w-[100%]   ">
              <Image
                src={
                  bookingAndPaymentData?.x_featured_media_original
                    ? bookingAndPaymentData?.x_featured_media_original
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
                      <p className="font-amithen text-3xl md:text-5xl">
                        Booking and payment conditions
                      </p>
                      <p className=" md:mt-5 text-xs md:text-base">
                        Please read carefully if you have any doubt <br></br>{" "}
                        feel free to reach us{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content start */}
            <div className="mx-10 md:mx-16 lg:mx-36 my-24 ">
              {/* Title */}
              <div className="font-amithen text-3xl md:text-5xl mt-20 mb-5 md:mb-10  text-secondary-orange">
                {renderHTML(bookingAndPaymentData?.x_metadata?.wpcf_title_1)}
              </div>
              {/* Main Content */}
              <div className="text-xs md:text-base">
                {renderHTML(
                  bookingAndPaymentData?.x_metadata?.wpcf_description_1
                )}
              </div>
              {/* Our Services  */}
              <div className="font-amithen text-secondary-orange text-3xl md:text-5xl mt-20  mb-5 md:mb-10 ">
                {renderHTML(bookingAndPaymentData?.x_metadata?.wpcf_title_3)}
              </div>
              <div className="text-xs md:text-base">
                {renderHTML(
                  bookingAndPaymentData?.x_metadata?.wpcf_description_3
                )}
              </div>

              {/* Contact details */}
              <div className="font-amithen text-secondary-orange text-3xl md:text-5xl mt-20  mb-5 md:mb-10">
                {bookingAndPaymentData?.x_metadata?.wpcf_title_4}
              </div>
              <div className="text-xs md:text-base">
                {renderHTML(
                  bookingAndPaymentData?.x_metadata?.wpcf_description_4
                )}
              </div>
            </div>

            {/* Main content end */}

            {/* Message Section Start  */}
            <div className="flex flex-col lg:flex lg:flex-row py-16 lg:py-36 justify-center items-center  bg-primary-blue text-white mt-16 ">
              <div className="flex items-center justify-center lg:mr-44 text-center lg:text-start  mb-5 md:mb-10 lg:mb-0 ">
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
            {/* Message Section end  */}

            {/* Social media posts show section */}
            <SocialMediaPostsShow />

            {/* Footer section */}
            <Footer />
          </AnimatedMainContent>
        )}
      </AnimatePresence>
    </>
  );
};

export const getServerSideProps = async () => {
  const getBookingAndPaymentData = await fetchBookingAndPaymentData();
  const bookingAndPaymentData = getBookingAndPaymentData.data[0];

  console.log(bookingAndPaymentData);
  return {
    props: {
      bookingAndPaymentData,
    },
  };
};

export default React.memo(index);
