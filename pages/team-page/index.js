import React, { useState } from "react";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import axios from "axios";
import Image from "next/image";
import { member1, staffMembers, artwork } from "../../public";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import SliderTeamMembers from "../../src/annapurna/components/slider/slickSlide/TeamMembers/SliderTeamMembers";
import {
  fetchSocialMediaPostsLinks,
  teamMembersData,
} from "../api/wordpress_API";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Section from "../../src/annapurna/components/containers/Section";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const AboutTeam = ({ datas }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // console.log(datas);

  // const datas = [
  //   {
  //     _id: "1",
  //     name: "Member 1",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "2",
  //     name: "Member 2",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "3",
  //     name: "Member 3",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "4",
  //     name: "Member 4",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "5",
  //     name: "Member 5",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "6",
  //     name: "Member 6",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "7",
  //     name: "Member 7",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "8",
  //     name: "Member 8",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  //   {
  //     _id: "9",
  //     name: "Member 9",
  //     image: member1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Team | Annapurnatreks</title>
      </Head>
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
              <div>
                <NavBar
                  handleShowNavBar={handleShowNavBar}
                  logoColorBlue
                  contactColorBlack
                  globeColorBlack
                />
                <Section className="">
                  <div className="container mt-28 flex justify-center items-center ">
                    <p className="font-amithen text-3xl md:text-5xl ">
                      {" "}
                      Meet Our{" "}
                      <span className="text-secondary-orange text-3xl md:text-5xl font-amithen">
                        Team
                      </span>
                      Members
                    </p>
                  </div>
                </Section>
                {/* 
              <div className="relative h-36 md:h-[595px] md:w-[100%] ">
                <Image
                  src={staffMembers}
                  alt="rectangle"
                  objectFit="contain"
                  layout="fill"
                  className="object-contain"
                />
              </div> */}

                <Image
                  src={staffMembers}
                  alt="rectangle"
                  // objectFit="contain"
                  // layout="fill"
                  className="h-full w-full"
                />

                <Section>
                  <div className=" container ">
                    {/* Team members*/}
                    <p className=" font-amithen text-secondary-orange text-3xl md:text-5xl border-b-2 border-gray-300">
                      Team
                    </p>
                    <div className="lg:grid lg:grid-cols-3 justify-center items-center lg:space-x-14 px-6 pb-7 border-b-2 border-gray-300 mb-10">
                      <div className="flex justify-center items-center ">
                        <div className="  relative h-full w-full">
                          <div>
                            <Image src={artwork} alt="member1" />
                          </div>

                          {/* What our team says */}
                          <div className="absolute w-full px-14 md:px-20  text-white top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <p className="text-base md:text-base text-justify">
                              Our team members are always ready and help you at
                              any point day and night. We serve for your safety
                              and pleasure.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Team members slider */}
                      <div className="lg:col-span-2 lg:ml-10">
                        {datas && datas.length > 0 && (
                          <SliderTeamMembers datas={datas} />
                        )}
                      </div>
                    </div>
                  </div>
                </Section>
                {/* Social media posts */}
                <SocialMediaPostsShow />
                <Footer />
              </div>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main content end */}
      </>
    </>
  );
};

// Get team members details
export const getServerSideProps = async () => {
  const [response, socialMediaPostsLinkDatas] = await Promise.all([
    teamMembersData(),
    fetchSocialMediaPostsLinks(),
  ]);

  const datas = response?.data;
  // console.log(datas);
  // console.log("check");
  // const socialMediaPostsDatas = socialMediaPostsLinkDatas?.data;
  // console.log("social", socialMediaPostsDatas);

  return {
    props: {
      datas,
      // socialMediaPostsDatas,
    },
  };
};

export default React.memo(AboutTeam);
