import Image from "next/image";
import React, { useState } from "react";
import { Image1, nextNavigationDownYellow } from "../../public";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import GalleryGrid from "../../src/annapurna/components/gallery/GalleryGrid";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import { fetchGalleryImagesData } from "../api/wordpress_API";
import Section from "../../src/annapurna/components/containers/Section";
import { AnimatePresence } from "framer-motion";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const index = ({ initialGalleryDatas }) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const [loading, setLoading] = useState(false);
  const [allGalleryImagesLoaded, setAllGalleryImagesLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryImagesDatas, setGalleryImagesDatas] =
    useState(initialGalleryDatas);

  const loadMoreGalleryImages = async () => {
    try {
      if (loading || allGalleryImagesLoaded) return;
      setLoading(true);
      const nextPage = currentPage + 1;
      const res = await fetchGalleryImagesData(nextPage);
      const newGalleryImagesData = await res.data;
      // console.log("res", res);
      if (newGalleryImagesData.length < 4) {
        setAllGalleryImagesLoaded(true);
        setGalleryImagesDatas([...galleryImagesDatas, ...newGalleryImagesData]);
      } else {
        setCurrentPage(nextPage);
        setGalleryImagesDatas([...galleryImagesDatas, ...newGalleryImagesData]);
      }
      setLoading(false);
    } catch (error) {
      setAllGalleryImagesLoaded(true);
    }
  };

  return (
    <>
      <Head>
        <title>Gallery | Annapurnatreks</title>
        <meta name="description" content="Gallery | Annapurnatreks" />
      </Head>
      <>
        <div>
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
        </div>

        <div>
          <AnimatePresence>
            {!showNavBar && (
              <AnimatedMainContent>
                <>
                  <div className="relative">
                    <NavBar
                      handleShowNavBar={handleShowNavBar}
                      logoColorBlue
                      globeColorBlack
                      contactColorBlack
                    />

                    <Section className="flex   justify-center items-center text-center">
                      <p className=" font-amithen text-3xl md:text-6xl mt-20 ">
                        Glimpse of Annapurna treks
                      </p>
                    </Section>

                    {/* Gallery section Start grid  explore */}
                    <div>
                      <GalleryGrid datas={galleryImagesDatas} />
                      {/* <GalleryGrid /> */}
                    </div>
                    {/* Gallery section end  */}
                    {allGalleryImagesLoaded ? (
                      <div className="flex justify-center items-center my-6 md:my-10 lg:my-20">
                        <p className=" text-3xl md:text-5xl font-amithen">
                          All images are loaded
                        </p>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center my-6 md:my-10 lg:my-20">
                        <button
                          onClick={loadMoreGalleryImages}
                          className="font-amithen text-3xl md:text-5xl "
                        >
                          {loading ? (
                            "Loading..."
                          ) : (
                            <div className="flex justify-center items-center space-x-4">
                              <p className="font-amithen text-3xl md:text-5xl">
                                Load more
                              </p>
                              <div>
                                <Image
                                  src={nextNavigationDownYellow}
                                  className="cursor-pointer h-7 w-7 md:h-12 md:w-12"
                                />
                              </div>
                            </div>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Social media posts show section */}
                    <SocialMediaPostsShow />

                    {/* Footer Section */}
                    <Footer />
                  </div>
                </>
              </AnimatedMainContent>
            )}
          </AnimatePresence>
        </div>
      </>
    </>
  );
};

export const getServerSideProps = async () => {
  const nextPage = 1;
  const getGalleryImagesData = await fetchGalleryImagesData(nextPage);
  const initialGalleryDatas = getGalleryImagesData.data;
  //   console.log(datas.items[0].child_items);

  return {
    props: {
      initialGalleryDatas,
    },
  };
};

export default React.memo(index);
