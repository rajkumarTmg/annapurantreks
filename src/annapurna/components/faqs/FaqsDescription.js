import React, { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import renderHTML from "react-render-html";

const FaqsDescription = ({ line }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = (e) => {
    // console.log("clicked");
    setShowDescription(!showDescription);
    // console.log("showDescription", showDescription);
  };

  // console.log("showDes", showFaqsSection);
  // console.log("line", line);
  // console.log("lineNew", line);
  // console.log("showDescription", showDescription);
  // const containsOnlySpanClosingTag = /^<\/span>$/.test(line);
  return (
    <>
      <div
      // className={
      //   line.includes("<strong>") && line.includes("</span>")
      //     ? "text-black font-amithen text-4xl font-medium pb-4 pt-10 mt-10  [word-spacing:6px] border-t-[1px]  "
      //     : line.includes("<strong>")
      //     ? "text-white  pt-4 -mb-4  [word-spacing:6px]   "
      //     : "text-black    "
      // }
      >
        {line.includes("\n") ? (
          <>
            <div className="relative">
              {showDescription && (
                <div>
                  <div className="px-5 md:px-10 text-justify text-sm ">
                    {renderHTML(line)}
                  </div>
                  {/* {showDescription.toString()} */}
                </div>
              )}
              <div className="flex justify-center items-center absolute right-5  -top-[52px] md:-top-[52px]">
                <AiFillDownCircle
                  onClick={() => handleShowDescription()}
                  className={
                    showDescription
                      ? "text-white cursor-pointer transform -rotate-180 ease-in-out duration-500 h-6 w-6 md:h-8 md:w-8 z-10 "
                      : "text-white cursor-pointer ease-in-out duration-500 h-6 w-6 md:h-8 md:w-8 z-10 "
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" font-poppins font-bold text-sm md:text-base flex justify-between   items-center  mb-3 mt-3 bg-primary-blue text-white py-3 pl-4 md:pl-10  pr-12 ">
              {line
                .replace("<strong>", "")
                .replace("</strong>", "")
                .replace(/<[^>]+>/g, "")}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(FaqsDescription);
