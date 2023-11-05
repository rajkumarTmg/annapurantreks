import Image from "next/image";
import React, { useState } from "react";
import renderHTML from "react-render-html";
import { Image1 } from "../../public";
import BookingForm from "../../src/annapurna/components/forms/BookingForm";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import NewsLetter from "../../src/annapurna/components/newsletter";
import {
  fetchIndividualExplorationData,
  fetchNavigationMenuData,
} from "../api/wordpress_API";
import Section from "../../src/annapurna/components/containers/Section";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import AnimatedSection from "../../src/annapurna/Animations/AnimatedSection";

const index = ({ datas }) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  // console.log(datas);
  return (
    <>
      {/* Nav toggle Bar Start  */}
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
      {/* Nav toggle Bar End  */}

      {/* Main Content Start */}
      <AnimatePresence>
        {!showNavBar && (
          <AnimatedMainContent>
            <div className="relative">
              <NavBar
                handleShowNavBar={handleShowNavBar}
                logoColorBlue
                globeColorBlack
                contactColorBlack
              />
              <Section>
                <div className="container flex flex-col justify-center items-center  text-center">
                  <p className=" mt-20 md:mt-20 font-amithen text-3xl md:text-6xl ">
                    Booking Details
                  </p>
                  <p className="text-xs md:text-base pt-3 lg:pt-5 ">
                    Book your adventure with us
                  </p>
                </div>
              </Section>

              {/* Message Section Start  */}
              <div className="container flex justify-center items-center">
                <div className="flex flex-col w-[50%]">
                  {/* Package details section */}
                  <div>
                    <p className="text-xl md:text-3xl font-amithen py-2">
                      Package Details
                    </p>
                    <div className="border-2 rounded-md">
                      <div className="p-6 flex flex-col items-center justify-center md:flex-row md:justify-start    ">
                        {/* Trip Image */}

                        <AnimatedSection>
                          <div className="relative h-44  rounded-lg w-40 ">
                            <Image
                              src={datas?.x_featured_media_original}
                              alt="Trip Image"
                              layout="fill"
                              objectFit="cover"
                              className="object-cover h-full w-full rounded-lg "
                            />
                          </div>
                        </AnimatedSection>

                        {/* Details of the trip */}
                        <div className="ml-0 md:ml-5 lg:ml-10 text-center md:text-start">
                          <p className="font-amithen text-xl md:text-3xl text-center md:text-start">
                            {renderHTML(datas?.title?.rendered)}
                          </p>
                          <div className="text-xs md:text-base">
                            {/* days data */}
                            <span>{datas?.x_metadata?.wpcf_days} </span>
                            <span>,</span>
                            {/* night data */}
                            <span className="ml-2">
                              {datas.x_metadata?.wpcf_night}
                            </span>
                          </div>

                          {/* Show cost Details */}
                          {/* <div className="text-xs md:text-base mt-5 lg:mt-10 space-x-4 space-y-4">
                          {renderHTML(datas?.x_metadata?.wpcf_cost)}
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div>
                      <BookingForm
                        imageUrl={datas?.x_featured_media_original}
                        title={datas?.title?.rendered}
                        days={datas?.x_metadata?.wpcf_days}
                        nights={datas.x_metadata?.wpcf_night}
                        costDetails={datas?.x_metadata?.wpcf_cost}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Message Section end  */}

              <Footer />
            </div>
          </AnimatedMainContent>
        )}
      </AnimatePresence>
    </>
  );
};

// Fetch Datas details
export const getServerSideProps = async (context) => {
  // console.log(context);

  const { type, slug } = context.query;
  // console.log("type", type, "slug", slug);
  // console.log(slug);

  // Fetch individual exploration page data
  const getDatas = await fetchIndividualExplorationData(type, slug);
  const datas = getDatas?.data[0];

  return {
    props: {
      datas,
    },
  };
};

export default React.memo(index);
