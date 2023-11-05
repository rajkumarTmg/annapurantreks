import React, { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import renderHTML from "react-render-html";
import AnimateDescriptionSection from "../../../Animations/AnimateDescriptionSection";
import { AnimatePresence } from "framer-motion";
import { render } from "react-dom";

const TripIteneraryTexts = ({ data }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  // console.log("dataShow", data);

  const iteneraryTitle = data?.wpcf_itinerary
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  const [day, title] = iteneraryTitle?.split(":");
  // console.log("day", day);
  // console.log("title", title);

  return (
    <div
      key={data?.id}
      className={
        showDescription
          ? " pt-1 pb-1 mt-8 rounded-md   md:mx-10 border-[2px]  px-3 border-primary-blue"
          : " pt-1 pb-1 mt-8 rounded-md   md:mx-10 border-[2px] px-3"
      }
    >
      <div>
        <div className=" ">
          <div>
            <div className="space-y-4 ">
              {/* title */}
              <div
                style={{
                  lineHeight: "1.5",
                  wordSpacing: "2px",
                  // textTransform: "capitalize",
                }}
                className=" text-xl font-medium font-poppins    "
              >
                {/* {renderHTML(data?.wpcf_itinerary)} */}
                <div className=" flex  ">
                  <h1 className="text-sm md:text-xl font-semibold  font-poppins -mt-4 -ml-4 bg-white pl-2 w-20 md:w-40  pb-0 h-fit ">
                    {/* {renderHTML(day)} */}
                    {iteneraryTitle.includes(":")
                      ? renderHTML(day)
                      : iteneraryTitle}
                  </h1>
                  <div className="flex-1">
                    <div className="flex  justify-between">
                      <div className="flex flex-col justify-center  ">
                        <h1 className="text-sm md:text-base font-semibold  font-poppins     ">
                          {/* {renderHTML(title)} */}
                          {iteneraryTitle.includes(":") && renderHTML(title)}
                        </h1>
                        {/* description */}
                        <AnimatePresence>
                          {showDescription && (
                            <AnimateDescriptionSection>
                              <div
                                className={
                                  data?.wpcf_itinerary_detail == "No Details"
                                    ? "text-white"
                                    : "pt-3 pb-2 text-sm md:text-base font-normal text-justify"
                                }
                              >
                                {renderHTML(data?.wpcf_itinerary_detail)}
                              </div>
                            </AnimateDescriptionSection>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="">
                        <AiFillDownCircle
                          onClick={handleShowDescription}
                          className={
                            showDescription
                              ? "text-primary-blue cursor-pointer transform -rotate-180 ease-in-out duration-500 h-6 w-6 md:h-8 md:w-8 "
                              : "text-primary-blue cursor-pointer ease-in-out duration-500 h-6 w-6 md:h-8 md:w-8 "
                          }
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            {/* description
            <AnimatePresence>
              {showDescription && (
                <AnimateDescriptionSection>
                  <div
                    className={
                      data?.wpcf_itinerary_detail == "No Details"
                        ? "text-white"
                        : "pt-3 pb-2 text-base md:text-lg font-normal text-justify    "
                    }
                  >
                    {renderHTML(data?.wpcf_itinerary_detail)}
                  </div>
                </AnimateDescriptionSection>
              )}
            </AnimatePresence> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripIteneraryTexts;
