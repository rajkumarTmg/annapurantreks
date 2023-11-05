import Image from "next/image";
import React from "react";
import { Autumn, Spring, Summer, Winter } from "../../../../public";
import SliderTypeOne from "../slider/slickSlide/SliderTypeOne";
import Section from "../containers/Section";
import AnimatedSection from "../../Animations/AnimatedSection";

const TravelInspiredBySeason = ({
  handleSpringSeasonData,
  handleSummerSeasonData,
  handleWinterSeasonData,
  handleAutumnSeasonData,
  seasonsDatas,
  seasonCheck,
}) => {
  return (
    <Section className=" w-full bg-primary-blue ">
      <div className="container">
        <p>
          <span className="text-white font-amithen text-3xl md:text-5xl">
            Travel inspired by
          </span>{" "}
          <span className="text-secondary-orange font-amithen text-3xl md:text-5xl">
            seasons
          </span>{" "}
        </p>
        <AnimatedSection>
          <div className="flex flex-wrap  space-x-5 space-y-4 md:space-y-0 mt-5">
            <div className="mt-4 md:mt-0">
              {/* Spring Icon */}
              <div
                onClick={handleSpringSeasonData}
                className={
                  seasonCheck == "spring"
                    ? "bg-white  cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                    : "bg-primary-light-gray cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                }
              >
                <Image src={Spring} alt="rectangle" width={35} height={35} />
              </div>
              <p
                className={
                  seasonCheck == "spring"
                    ? "text-white text-center   mt-2 text-xs md:text-base"
                    : "text-primary-light-gray text-center  mt-2 text-xs md:text-base"
                }
              >
                Spring
              </p>
            </div>

            <div>
              {/* Summer Icon */}
              <div
                onClick={handleSummerSeasonData}
                className={
                  seasonCheck == "summer"
                    ? "bg-white cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                    : "bg-primary-light-gray cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                }
              >
                <Image src={Summer} alt="rectangle" width={31} height={31} />
              </div>
              <p
                className={
                  seasonCheck == "summer"
                    ? "text-white text-center  mt-2 text-xs md:text-base"
                    : "text-primary-light-gray text-center  mt-2 text-xs md:text-base"
                }
              >
                Summer
              </p>
            </div>

            <div>
              {/* Winter Icon */}
              <div
                onClick={handleWinterSeasonData}
                className={
                  seasonCheck == "winter"
                    ? "bg-white cursor-pointer h-14 w-14 rounded-md flex justify-center items-center "
                    : "bg-primary-light-gray cursor-pointer h-14 w-14 rounded-md flex justify-center items-center "
                }
              >
                <Image src={Winter} alt="rectangle" width={35} height={35} />
              </div>
              <p
                className={
                  seasonCheck == "winter"
                    ? "text-white text-center  mt-2 text-xs md:text-base"
                    : "text-primary-light-gray text-center  mt-2 text-xs md:text-base"
                }
              >
                Winter
              </p>
            </div>

            <div>
              {/* Autumn Icon */}
              <div
                onClick={handleAutumnSeasonData}
                className={
                  seasonCheck == "autumn"
                    ? "bg-white cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                    : "bg-primary-light-gray cursor-pointer h-14 w-14 rounded-md flex justify-center items-center  text-xs md:text-base"
                }
              >
                <Image src={Autumn} alt="rectangle" width={29} height={37} />
              </div>
              <p
                className={
                  seasonCheck == "autumn"
                    ? "text-white text-center  mt-2 text-xs md:text-base"
                    : "text-primary-light-gray text-center  mt-2 text-xs md:text-base"
                }
              >
                Autumn
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      {/* Get started and cards */}
      <AnimatedSection>
        <div className="flex justify-center items-center">
          <div className="2xl:max-w-[1548px] xl:max-w-[1200px] lg:max-w-[992px] md:max-w-[768px] sm:max-w-[576px] w-full px-[14px] ">
            <div
              className="lg:grid 
      lg:grid-cols-4
       mt-10 "
            >
              <div className="flex flex-col  justify-end   items-start">
                <div className="flex flex-col   ">
                  <p className="font-amithen text-xl lg:text-2xl text-secondary-orange">
                    Get started
                  </p>
                  <div className="text-sm">
                    <div className="flex flex-col">
                      <p>
                        <span className=" text-white mr-2 text-xs md:text-lg">
                          June - August
                        </span>
                        <span className="font-amithen  text-secondary-orange text-xs md:text-lg">
                          (Summer)
                        </span>
                      </p>
                    </div>
                    <span className="text-white text-xs md:text-base">
                      This season is best for trekking as there will be a lot of
                      nature. Mainly popular the trekking and greenery.
                    </span>
                  </div>
                </div>
              </div>
              {/* Cards */}
              <div className="lg:col-span-3 lg:ml-10">
                {seasonCheck == "spring" && (
                  <SliderTypeOne datas={seasonsDatas} />
                )}
                {seasonCheck == "summer" && (
                  <SliderTypeOne datas={seasonsDatas} />
                )}
                {seasonCheck == "winter" && (
                  <SliderTypeOne datas={seasonsDatas} />
                )}
                {seasonCheck == "autumn" && (
                  <SliderTypeOne datas={seasonsDatas} />
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      z
    </Section>
  );
};

export default React.memo(TravelInspiredBySeason);
