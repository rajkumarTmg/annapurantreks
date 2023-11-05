import React, { useEffect, useState } from "react";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import NewsLetter from "../../src/annapurna/components/newsletter";
import {
  fetchNavigationMenuData,
  fetchTripReviewDatas,
} from "../api/wordpress_API";
import Section from "../../src/annapurna/components/containers/Section";
import AnimatedSection from "../../src/annapurna/Animations/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import {
  animationVariantsNavBar,
  animationVariantsMainContent,
} from "../../src/annapurna/Animations/Animations";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import axios from "axios";
import Head from "next/head";

const index = () => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // console.log("WP_API_MAIN_URL", process.env.WP_API_MAIN_URL);

  // useEffect(() => {
  //   const fetchFirstFourSearchDatas = async () => {
  // const getTripsReviewDatas = await fetchTripReviewDatas();
  // const tripsReviewDatas = getTripsReviewDatas?.data;
  // console.log("tripsReviewDatas", tripsReviewDatas);

  // async function postComment(postId, authorName, authorEmail, content) {
  //   const response = await fetch(
  //     "https://annapurnatrek.abhiyantraconsulting.com.np/wp-json/wp/v2/comments",

  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Basic ${Buffer.from(
  //           "developer:Be49 5SE5 SSH9 aXJ1 O5TG mPgE"
  //         ).toString("base64")}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         post: postId,
  //         author_name: authorName,
  //         author_email: authorEmail,
  //         content: content,
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //   return data;
  // }

  // Example usage
  //     postComment(
  //       3297,
  //       "Test Doe",
  //       "john.doe@example.com",
  //       "This is a test comment"
  //     )
  //       .then((data) => {
  //         console.log("Comment posted successfully:", data);
  //       })
  //       .catch((error) => {
  //         console.error("Failed to post comment:", error);
  //       });
  //   };

  //   fetchFirstFourSearchDatas();
  // }, []);

  return (
    <>
      <Head>
        <title>Contact Us | Annapurnatreks</title>
        <meta
          name="description"
          content="Contact us for any queries regarding Annapurna Trek"
        />
        <meta
          name="keywords"
          content="Annapurna Trek, Annapurnatreks.com, Annapurnatreks, Annapurnatreks Nepal, Annapurna Trekking, Annapurna Trekking in Nepal, Annapurna Trekking in Nepal 2021, Annapurna Trekking in Nepal 2022, Annapurna Trekking in Nepal 2023, Annapurna Trekking in Nepal 2024, Annapurna Trekking in Nepal 2025, Annapurna Trekking in Nepal 2026, Annapurna Trekking in Nepal 2027, Annapurna Trekking in Nepal 2028, Annapurna Trekking in Nepal 2029, Annapurna Trekking in Nepal 2030, Annapurna Trekking in Nepal 2031, Annapurna Trekking in Nepal 2032, Annapurna Trekking in Nepal 2033, Annapurna Trekking in Nepal 2034, Annapurna Trekking in Nepal 2035, Annapurna Trekking in Nepal 2036, Annapurna Trekking in Nepal 2037, Annapurna Trekking in Nepal 2038, Annapurna Trekking in Nepal 2039, Annapurna Trekking in Nepal 2040, Annapurna Trekking in Nepal 2041, Annapurna Trekking in Nepal 2042, Annapurna Trekking in Nepal 2043, Annapurna Trekking in Nepal 2044, Annapurna Trekking in Nepal 2045, Annapurna Trekking in Nepal 2046, Annapurna Trekking in Nepal 2047, Annapurna Trekking in Nepal 2048, Annapurna Trekking in Nepal 2049, Annapurna Trekking in Nepal 2050"
        />
        <meta name="author" content="Annapurnatreks" />
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

                <Section className="container  flex flex-col justify-center items-center   text-center">
                  <div className="mt-20 md:mt-24">
                    {" "}
                    <p className="  font-amithen text-3xl md:text-6xl space-x-2">
                      Have any
                      <span className="font-amithen text-3xl md:text-6xl text-secondary-orange mx-2">
                        questions
                      </span>
                      ? Feel free to reach.
                    </p>
                    <p className="text-xs md:text-base  md:mt-3 ">
                      We aim to reply within 24 hours
                    </p>
                  </div>
                </Section>

                {/* Message Section Start  */}
                <div className="container  flex justify-center items-center">
                  <div>
                    <ExperienceForm />
                  </div>{" "}
                </div>
                {/* Message Section end  */}

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

// export const getServerSideProps = async () => {
//   // const developerKey = process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY;
//   // console.log("REST_API_DEVELOPER_KEY", developerKey);
//   //   // const getNavigationDatas = await fetchNavigationMenuData();
//   //   // const navigationDatas = getNavigationDatas.data;
//   //   // console.log(navigationDatas.items[0].child_items);

//   return {
//     props: {
//       // developerKey,
//       //       // navigationDatas,
//     },
//   };
// };

export default React.memo(index);
