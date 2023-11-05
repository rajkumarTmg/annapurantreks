import React, { useState } from "react";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import { destinationCover, tibetCover } from "../../public";
import Image from "next/image";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import { useRouter } from "next/router";
import { fetchDestinationsData } from "../api/wordpress_API";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import Section from "../../src/annapurna/components/containers/Section";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import { AnimatePresence } from "framer-motion";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const index = ({ datas }) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const router = useRouter();

  // Removing 1st and 2nd elements from the array of datas fetched from the API to map remaining destinations
  const slicedDestinations = datas.slice(2);

  return (
    <>
      <Head>
        <title>Destinations | Annapurnatreks</title>
        <meta name="description" content="Destinations | Annapurnatreks" />
      </Head>
      <>
        {/* Nav toggle bar start */}
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
              <div>
                <div className="">
                  <NavBar handleShowNavBar={handleShowNavBar} />
                </div>

                {/* Destinations page cover */}
                <div className="relative h-[100vh] w-[100%]">
                  <Image
                    src={destinationCover}
                    alt="mountainCover"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover "
                  />
                  <div
                    class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95"
                  >
                    {/* <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span class="text-white text-6xl w-1/2 text-center font-amithen">
             Thing to pack for trip
            </span>
          </div> */}
                  </div>
                </div>

                {/* Destinations options */}
                <Section>
                  <div className="container  flex flex-col">
                    <div className="flex flex-col lg:flex lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12 ">
                      <div className="flex flex-col md:w-[700px]">
                        <p className="text-secondary-orange font-bold text-xs">
                          Explore trips{" "}
                        </p>
                        <h1 className="font-amithen text-3xl md:text-6xl mt-4">
                          Where do you wanna go?
                        </h1>
                        <p className="my-7 text-justify text-xs md:text-base">
                          Nepal, Tibet, and Bhutan are three countries in South
                          Asia that have become increasingly popular tourist
                          destinations in recent years. Nepal is perhaps best
                          known for its majestic Himalayan mountains, which draw
                          trekkers and mountaineers from around the world. The
                          country also boasts a rich cultural heritage, with
                          ancient temples and monuments that offer visitors a
                          glimpse into the country's past. In addition, Nepal is
                          renowned for its friendly people, delicious cuisine,
                          and vibrant festivals.
                          <br></br>
                          Tibet, located to the north of Nepal, is another
                          popular destination for travelers seeking a unique
                          cultural experience. The region is famous for its
                          high-altitude monasteries and temples, as well as its
                          stunning natural landscapes. Despite being a
                          challenging destination to visit due to the high
                          altitude, visitors are rewarded with breathtaking
                          views of the Himalayas, crystal-clear lakes, and vast
                          grasslands<br></br>
                          Bhutan known as Land of the Thunder Dragon , nestled
                          in the eastern Himalayas, is a small but culturally
                          rich country that has managed to preserve its
                          traditional way of life. Bhutan is home to a vibrant
                          Buddhist culture, stunning mountain landscapes, and a
                          commitment to sustainability and environmental
                          conservation. Visitors can enjoy trekking, wildlife
                          watching, and cultural tours while experiencing the
                          warmth and hospitality of the Bhutanese people.
                          <br></br>
                          Overall, these three countries offer a unique and
                          unforgettable travel experience for those seeking
                          adventure, culture, and natural beauty. The popularity
                          of these destinations continues to grow, with more and
                          more travelers discovering the magic of Nepal, Tibet,
                          and Bhutan.
                        </p>

                        {/* First destination option */}
                        <div
                          onClick={() => {
                            router.push(`/destinations/${datas[0]?.slug}`);
                          }}
                          className="group relative h-[425px] w-[100%] lg:h-[680px] overflow-hidden  cursor-pointer"
                        >
                          <Image
                            src={datas[0]["wpcf-category-image"]}
                            alt="mountainCover"
                            layout="fill"
                            className="object-cover group-hover:scale-110 transform transition-all duration-500 ease-in-out"
                          />
                          <div
                            class="w-full h-full flex inset-0 justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95"
                          >
                            <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <span class="text-white text-3xl md:text-6xl w-1/2 text-center font-amithen">
                                {datas[0]?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Second destination option */}
                      <div className="group relative h-[425px] w-[100%] lg:h-auto  overflow-hidden">
                        <Image
                          src={datas[1]["wpcf-category-image"]}
                          alt="mountainCover"
                          objectFit="cover"
                          layout="fill"
                          objectPosition="center"
                          className="object-cover group-hover:scale-110 transform transition-all duration-500 ease-in-out"
                        />

                        <div
                          onClick={() =>
                            router.push(`/destinations/${datas[1]?.slug}`)
                          }
                          class="w-full h-full flex  justify-center items-center cursor-pointer
             bg-primary-image-overlay-color backdrop-brightness-95"
                        >
                          <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span class="text-white text-3xl md:text-6xl w-1/2 text-center font-amithen">
                              {datas[1]?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Show destinations option full cover image  */}

                    {slicedDestinations?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          onClick={() => {
                            router.push(`/destinations/${data?.slug}`);
                          }}
                          className="group overflow-hidden relative h-[425px] w-[100%] lg:h-[680px] mt-10 lg:mt-12 cursor-pointer  "
                        >
                          <Image
                            src={data["wpcf-category-image"]}
                            alt="mountainCover"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover h-full w-full group-hover:scale-110 transform transition-all duration-500 ease-in-out "
                          />
                          <div
                            class="w-full h-full flex  justify-center items-center 
             bg-primary-image-overlay-color backdrop-brightness-95"
                          >
                            <div className="absolute  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <span class="text-white text-6xl w-1/2 text-center font-amithen">
                                {/* Map all the remaining destinations here from datas 2nd */}

                                <p className="font-amithen text-3xl lg:text-6xl">
                                  {data?.name}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

                {/* Social media posts show section */}
                <SocialMediaPostsShow />

                {/* Footer section */}
                <div>
                  <Footer />
                </div>
              </div>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main Content End  */}
      </>
    </>
  );
};

// Fetch Datas details
export const getServerSideProps = async () => {
  // Fetch Destinations Page Data
  const destinationsPageData = await fetchDestinationsData();
  const datas = destinationsPageData.data;
  // console.log(datas);

  return {
    props: {
      datas,
    },
  };
};

export default React.memo(index);
