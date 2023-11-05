import React, { useRef, useState } from "react";
import { nextNavigationDownYellow } from "../../../../public";
import Image from "next/image";
import TripIteneraryTexts from "../cards/TripIteneraryShow/TripIteneraryTexts";
import TripIteneraryTextsDownload from "../cards/TripIteneraryShow/TripIteneraryTextsDownload";
import Section from "../containers/Section";
import MainContentShow from "../exploration/MainContentShow/MainContentShow";
import ListDatasMap from "../exploration/ListDatasMap";
import renderHTML from "react-render-html";

const ConvertIntoPdfDownload = ({
  children,
  tripTitle,
  iteneraryDatas,
  allDatas: datas,
}) => {
  const [downloading, setDownloading] = useState(false);
  const contentRef = useRef(null);

  const getTripTitle = renderHTML(tripTitle);

  const handleDownload = () => {
    setDownloading(true);
    const html2pdf = require("html2pdf.js");
    const element = contentRef.current;
    const opt = {
      padding: [10, 10, 20, 10], // Adjust the padding values to add more space around the content
      // margin: [5, 5, 5, 5], // Set the margins to 0 to remove any additional spacing
      filename: `${getTripTitle}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all"], before: ".page-break" }, // Add the pagebreak option
    };
    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        setDownloading(false);
      });
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-10 ">
        <h1 className="font-amithen text-3xl md:text-4xl font-normal text-secondary-orange">
          Itenerary
        </h1>
        <button
          className="flex justify-center items-center   z-40  "
          // onClick={() =>
          // downloadPDF(datas?.x_metadata?.wpcf_upload_pdf_image)
          // }
          onClick={handleDownload}
        >
          <div
            // href={datas?.x_metadata?.wpcf_upload_pdf_image}
            // href=""
            // target="_blank"
            // download
            className="flex justify-center items-center "
          >
            <p className="mr-2 md:mr-4   text-sm md:text-base  md:font-normal text-secondary-orange ">
              {downloading ? "Please wait downloading..." : "Download PDF"}
            </p>
            <Image
              src={nextNavigationDownYellow}
              alt="next"
              className="h-9 w-9 md:h-12 md:w-12"
            />
          </div>
        </button>
      </div>
      <div>{children}</div>

      {/* Main Download page */}
      <div className="hidden">
        <div ref={contentRef}>
          {downloading ? (
            <div>
              {/* Trip over View  */}
              <div>
                <Section>
                  <div className="container flex flex-col lg:flex lg:flex-col ">
                    <h1 className="pb-10 text-center  text-3xl md:text-5xl  text-secondary-orange font-amithen">
                      {renderHTML(tripTitle)}
                    </h1>
                    {/* <div className=" mb-6 block lg:hidden">
                <p className="  text-xs md:text-xl font-normal text-center   ">
                  Overview
                </p>
                <p className=" text-3xl md:text-5xl text-center  text-secondary-orange font-amithen">
                  Experience craziness
                </p>
              </div> */}
                    <div className="relative pt-5">
                      <div className="flex  justify-center items-center ">
                        <div
                          style={{
                            letterSpacing: 0,
                            wordSpacing: 0,
                            fontSize: 0,
                          }}
                          className="relative h-52 w-40  md:h-[570px] md:w-[450px]   "
                        >
                          <Image
                            src={
                              datas?.x_featured_media_original
                                ? datas?.x_featured_media_original
                                : img1
                            }
                            alt="mountainSquare"
                            objectFit="cover"
                            objectPosition="center"
                            layout="fill"
                            loading="lazy"
                            className="object-cover h-full w-full rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="    ">
                      {/* <div className=" mb-6 hidden lg:block text-center">
                  <p className=" pt-5 pb-4 text-xs md:text-xl font-normal  ">
                    Overview
                  </p>
                  <p className=" text-3xl md:text-5xl  text-secondary-orange font-amithen">
                    Experience craziness
                  </p>
                </div> */}
                      <div className=" mx-10 text-justify text-xs md:text-base font-normal pt-10  space-y-5 lg:space-y-0">
                        {/* {renderHTML(datas?.content?.rendered)} */}
                        <MainContentShow datas={datas?.content?.rendered} />
                      </div>

                      {/* Highlights section */}
                      <div className="mt-3 ml-5 md:mt-5 md:ml-10 space-y-8">
                        <div>
                          <h1 className="pb-4 text-xl font-semibold">
                            Trip Highlights
                          </h1>
                          <ListDatasMap
                            data={datas?.x_metadata?.wpcf_trips_highlights}
                          />
                        </div>
                        <div>
                          <h1 className="pb-4 text-xl font-semibold">
                            Trip Includes
                          </h1>
                          <ListDatasMap
                            includes
                            data={datas?.x_metadata?.wpcf_trip_includes}
                          />
                        </div>
                        <div>
                          <h1 className="pb-4 text-xl font-semibold">
                            Trip Excludes
                          </h1>
                          <ListDatasMap
                            data={datas?.x_metadata?.wpcf_trip_excludes}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
              {/* Trip Itenerary  */}
              <div>
                {iteneraryDatas?.map((data) => {
                  return <TripIteneraryTextsDownload data={data} />;
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <button onClick={handleDownload}>Download PDF</button> */}
    </div>
  );
};

export default ConvertIntoPdfDownload;
