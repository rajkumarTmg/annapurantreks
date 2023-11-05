import Image from "next/image";
import React, { useState } from "react";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import { Banner } from "../../public";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import { HiChevronRight } from "react-icons/hi";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import { fetchCompanyAboutUsData } from "../api/wordpress_API";
import renderHTML from "react-render-html";
import ImageSliderTypeTwo from "../../src/annapurna/components/slider/ImageGallerySlider/ImageSliderTypeTwo";
import Section from "../../src/annapurna/components/containers/Section";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const AboutUs = ({ datas }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // console.log(datas.title.rendered)

  return (
    <>
      <Head>
        <title>About Us | Annapurnatreks</title>
        <meta
          name="description"
          content="Annapurna Trek is a leading trekking company in Nepal. We are a team of experienced and professional trekking guides who have been working in the tourism industry for more than a decade. We are committed to providing the best trekking experience to our clients. We offer a wide range of trekking packages in Nepal, Tibet, and Bhutan. We also organize tours, peak climbing, and other adventure activities in Nepal. Our team is dedicated to providing you with the best service possible. We are always ready to answer any questions you may have about our services or destinations. If you are looking for an unforgettable experience, then look no further than Annapurna Trek!"
        />
        <meta
          name="keywords"
          content="Annapurnatreks, annapurnatreks Nepal, Annapurna Trek, Annapurna Trekking, Annapurna Trekking Company, Annapurna Trekking Agency, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara"
        />
      </Head>
      <>
        <>
          {showNavBar ? (
            <div>
              <NavToggleBar handleShowNavBar={handleShowNavBar} />
            </div>
          ) : (
            <>
              {/* Banner  */}
              <NavBar handleShowNavBar={handleShowNavBar} />
              <div className="relative h-[100vh] w-[100%] ">
                <Image
                  src={Banner}
                  alt="banner"
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
                      <p className="text-3xl md:text-5xl font-amithen">
                        Our{" "}
                        <span className="font-amithen text-3xl md:text-5xl text-secondary-orange">
                          story
                        </span>
                      </p>
                      <p className="text-xs md:text-base mt-2 md:mt-4">
                        Who are we? What we do
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Section>
                <div className=" container ">
                  {/* About company */}
                  {/* Title */}
                  <div className="text-3xl md:text-5xl font-amithen ">
                    {renderHTML(datas?.title?.rendered)}
                  </div>
                  <div className="text-xs md:text-base mt-5 text-justify space-y-3 md:space-y-6 ">
                    {renderHTML(datas?.content?.rendered)}
                  </div>
                </div>
              </Section>

              {/* Gallery section */}
              <div className="">
                <ImageSliderTypeTwo posts={datas?.x_metadata} />
              </div>

              {/* Navigate meet team section */}
              <Section>
                <div className="container flex items-center space-x-2 text-secondary-orange  ">
                  <p className="text-xs md:text-base">Meet our team members:</p>
                  {/* Icon */}
                  <a href="/team-page">
                    <HiChevronRight className="h-8 w-8  border-2 border-dotted rounded-full border-secondary-orange text-secondary-orange" />
                  </a>
                </div>
              </Section>

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
              {/* 
Add Cover image section
          <div className="bg-gray-400 h-32">
            <p>fkjsdjnfnas</p>
          </div> */}

              {/* Social media posts show section */}
              <SocialMediaPostsShow />

              {/* Footer */}
              <div>
                <Footer />
              </div>
            </>
          )}
        </>
      </>
    </>
  );
};

// Get about us details
export const getServerSideProps = async () => {
  const response = await fetchCompanyAboutUsData();
  // console.log(response);

  const datas = response?.data[0];
  // console.log(posts);
  // console.log("check");

  return {
    props: {
      datas,
    },
  };
};

export default React.memo(AboutUs);
