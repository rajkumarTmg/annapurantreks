import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  associatedWithLogo1,
  associatedWithLogo2,
  associatedWithLogo3,
  envelopeIcon,
  LocationArrow,
  LogoBlue,
  phoneDialIcon,
  supportToLogo1,
  supportToLogo2,
} from "../../../../public";
import { MdNearMe, MdMailOutline, MdCall, MdFacebook } from "react-icons/md";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Section from "../containers/Section";
import AnimatedSection from "../../Animations/AnimatedSection";

const Footer = () => {
  const router = useRouter();

  const mountaineeringData = [
    {
      id: 0,
      name: "Mt. Everest",
      slug: "mount-everest-expedition",
      object: "trips",
    },
    {
      id: 1,
      name: "8000 meters peak",
      slug: "cho-oyu-expedition",
      object: "trips",
    },
    {
      id: 2,
      name: "7000 meters peak",
      slug: "ama-dablam-expedition",
      object: "trips",
    },

    {
      id: 3,
      name: "6000 meters peak",
      slug: "about-trekking-peaks-climbing-options",
      object: "page",
    },
  ];

  const destinationsData = [
    {
      id: 0,
      name: "Nepal",
      slug: "nepal-in-brief",
      object: "page",
    },
    {
      id: 1,
      name: "Tibet",
      slug: "about-tibet",
      object: "page",
    },
    {
      id: 2,
      name: "Bhutan",
      slug: "nepal-and-bhutan-tour-14-days",
      object: "bhutantour",
    },
  ];

  // const associatedWithData =[
  //   {

  return (
    <div className="">
      <Section>
        <div className="container  lg:flex md:flex-col lg:flex-row    justify-center items-center  ">
          <AnimatedSection>
            <div className="   ">
              <Image src={LogoBlue} alt="logo" className="h-12 w-56" />
              <p className="text-sm text-justify  md:pl-2 md:mt-7  lg:w-[450px]">
                Annapurna Treks & Expeditions Pvt. Ltd. (A.T.E.) specializes in
                operating trekking, tours and mountaineering expeditions to
                South Asia (Nepal, Tibet, Bhutan, Sikkim and India). We can help
                sort out the difficulties of travelling to South Asia and smooth
                the way to an unforgettable trip. Our detailed itineraries and
                prompt corresponding ability will help you decide what you want
                to do. Camping, tea house treks, special interest holidays,
                family trips, and mountaineering expeditions can be arranged
                with personal care throughout Nepal, Tibet, Bhutan, Sikkim and
                India.
              </p>
            </div>
          </AnimatedSection>

          {/* Other section */}
          <div className="flex flex-col flex-nowrap md:flex-row    space-y-10 md:space-y-0 space-x-0 md:space-x-4 justify-center   lg:space-x-8  mt-10 lg:mt-0   lg:ml-14">
            {/* Mountaineering Section */}
            <AnimatedSection>
              <div className=" lg:mt-0">
                <p className="text-base font-semibold text-center  ">
                  Mountaineering
                </p>
                <div className="space-y-2 mt-5  text-center md:text-start ">
                  {mountaineeringData.map((item) => (
                    <div
                      key={item?.id}
                      className=" font-normal text-sm"
                      onClick={
                        item?.object == "trips" ||
                        item?.object == "bhutantour" ||
                        item?.object == "tibetpackagetour"
                          ? () => {
                              // link to push
                              router.push({
                                pathname: "/exploration/[exploration_page]",
                                query: {
                                  exploration_page: "query",
                                  type: `${item?.object}`,
                                  slug: `${item?.slug}`,
                                },
                              });
                            }
                          : () => {
                              // link to push
                              router.push({
                                pathname: "/page/[page]",
                                query: {
                                  page: "query",
                                  type: "pages",
                                  slug: `${item?.slug}`,
                                },
                              });
                            }
                      }
                    >
                      <p className="cursor-pointer hover:text-secondary-orange hover:underline">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Destinations section */}
            <AnimatedSection>
              <div className=" lg:mt-0">
                <p className="text-base font-semibold text-center md:text-start">
                  Destinations
                </p>
                <div className="space-y-2 mt-5 text-center md:text-start ">
                  {destinationsData.map((item) => (
                    <div
                      key={item?.id}
                      className="flex flex-col"
                      onClick={
                        item?.object == "trips" ||
                        item?.object == "bhutantour" ||
                        item?.object == "tibetpackagetour"
                          ? () => {
                              // link to push
                              router.push({
                                pathname: "/exploration/[exploration_page]",
                                query: {
                                  exploration_page: "query",
                                  type: `${item?.object}`,
                                  slug: `${item?.slug}`,
                                },
                              });
                            }
                          : () => {
                              // link to push
                              router.push({
                                pathname: "/page/[page]",
                                query: {
                                  page: "query",
                                  type: "pages",
                                  slug: `${item?.slug}`,
                                },
                              });
                            }
                      }
                    >
                      <p className="cursor-pointer hover:text-secondary-orange hover:underline">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Associated with */}
            <AnimatedSection>
              <div className=" lg:mt-0   ">
                <div className="text-base font-semibold text-center ">
                  Associated with
                </div>
                <div className="    mt-5  flex flex-wrap justify-center items-center">
                  <Image
                    src={associatedWithLogo1}
                    alt="Associated with Logo"
                    className="mx-2 mb-3"
                  />
                  <Image
                    src={associatedWithLogo2}
                    alt="Associated with Logo"
                    className="mx-3 mb-3"
                  />
                  <Image
                    src={associatedWithLogo3}
                    alt="Associated with Logo"
                    className="mx-3 mb-3"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Support */}
            <AnimatedSection>
              <div className=" lg:mt-0">
                <p className="text-base font-semibold text-center">
                  We support to
                </p>
                <div className=" mt-5 flex md:flex-wrap    justify-center items-center ">
                  <Image
                    src={supportToLogo1}
                    alt="Support to Logo"
                    className="mx-3 mb-3"
                  />
                  <Image
                    src={supportToLogo2}
                    alt="Support to Logo"
                    className="mx-3 mb-3"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact us */}
            <AnimatedSection>
              <div className=" lg:mt-0 ">
                <p className="text-base font-semibold text-center md:text-start">
                  Contact us
                </p>
                <div className="space-y-3 mt-5 text-start ">
                  <div className="flex space-x-2 items-center ">
                    <Image
                      src={LocationArrow}
                      alt="Location Arrow"
                      className="h-3 w-3"
                    />
                    <p>P.O.Box: 9965, Thamel-29, kathmandu, Nepal</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Image
                      src={phoneDialIcon}
                      alt="phone dial icon"
                      className="h-3 w-3"
                    />
                    <p>+977-014423656, +977-9851030619</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Image
                      src={envelopeIcon}
                      alt="envelope icon"
                      className="h-3 w-3"
                    />
                    <div>
                      <a href="mailto:annatreks@gmail.com">
                        <p>annatreks@gmail.com</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-8 mt-5">
                    <a
                      href="https://www.facebook.com/annapurnatreksdotcom/"
                      target="_blank"
                    >
                      <MdFacebook className="inline-block text-2xl cursor-pointer" />
                    </a>
                    <a
                      href="https://www.instagram.com/toptendestinations/"
                      target="_blank"
                    >
                      <AiOutlineInstagram className="inline-block text-2xl cursor-pointer" />
                    </a>

                    <a href="https://twitter.com/Annatreks" target="_blank">
                      <AiFillTwitterCircle className="inline-block text-2xl cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <AnimatedSection>
        <div className="flex justify-center items-center pt-2 pb-2 border-t-2 border-black border-dashed">
          <p className="text-md font-semibold text-center">
            Copyright 2022 by Annapurna Trekking and Expeditions. All Rights
            Reserved.{" "}
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default React.memo(Footer);
