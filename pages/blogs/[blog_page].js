import React, { useState } from "react";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import { blogCover } from "../../public";
import Image from "next/image";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import { fetchIndividualBlogPost } from "../api/wordpress_API";
import renderHTML from "react-render-html";
import Section from "../../src/annapurna/components/containers/Section";
import { AnimatePresence } from "framer-motion";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const index = ({ blogDatas }) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <Head>
        <title>{renderHTML(blogDatas?.title?.rendered)} | Annapurnatreks</title>
        <meta
          name="description"
          content="Annapurna Trek is a leading trekking company in Nepal. We are a team of experienced and professional trekking guides who have been working in the tourism industry for more than a decade. We are committed to providing the best trekking experience to our clients. We offer a wide range of trekking packages in Nepal, Tibet, and Bhutan. We also organize tours, peak climbing, and other adventure activities in Nepal. Our team is dedicated to providing you with the best service possible. We are always ready to answer any questions you may have about our services or destinations. If you are looking for an unforgettable experience, then look no further than Annapurna Trek!"
        />
        <meta
          name="keywords"
          content="Annapurnatreks, annapurnatreks.com, Annapurna Trek, Annapurna Trekking, Annapurna Trekking Company, Annapurna Trekking Agency, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara, Annapurna Trekking Agency in Nepal, Annapurna Trekking Agency in Kathmandu, Annapurna Trekking Agency in Pokhara"
        />
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
            <AnimatedMainContent>
              <div>
                <NavBar handleShowNavBar={handleShowNavBar} />
                {/* Individual blog page cover */}
                <div className="relative h-[100vh]  w-[100%]   bg-red-200">
                  <Image
                    src={
                      blogDatas?.x_featured_media_original
                        ? blogDatas?.x_featured_media_original
                        : blogCover
                    }
                    alt="mountainCover"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover object-center  "
                    priority
                  />
                  <div
                    class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-75"
                  >
                    <div className="absolute  text-white top-1/2 text-center  left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span class="text-white text-3xl md:text-5xl  text-center font-amithen">
                        {renderHTML(blogDatas?.title?.rendered)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Article Section start*/}
                <Section>
                  <div className="container ">
                    {/* show Categories start */}
                    <div className=" ">
                      <div className="flex space-x-6">
                        {blogDatas?.pure_taxonomies?.blog_categories?.map(
                          (category, index) => (
                            <div key={index} className="">
                              <p className="px-4 text-xs py-2 bg-secondary-light-shade rounded-3xl">
                                {category?.name}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    {/* show Categories end */}

                    {/* title */}
                    <div class="text-black font-amithen text-3xl md:text-5xl pb-4 pt-6 md:pb-6   md:pt-12">
                      {renderHTML(blogDatas?.title?.rendered)}
                    </div>

                    {/* Article */}
                    <div className="">
                      <div className="text-justify text-xs md:text-base space-y-5">
                        {blogDatas?.content?.rendered
                          ? renderHTML(blogDatas?.content?.rendered)
                          : "No Content"}
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Article Section end*/}

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
              </div>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main Content End */}
      </>
    </>
  );
};

export const getServerSideProps = async (context) => {
  //  get slug from context
  const blogPostSlug = context.query.blog_page;
  // console.log(blogPostSlug);

  // Fetch individual blog post according to slug
  const getBlogDatas = await fetchIndividualBlogPost(blogPostSlug);
  const blogDatas = getBlogDatas.data[0];
  // console.log(blogDatas)

  return {
    props: {
      blogDatas,
    },
  };
};

export default React.memo(index);
