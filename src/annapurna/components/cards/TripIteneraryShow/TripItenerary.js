import React, { useState } from "react";

import ConvertIntoPdfDownload from "../../convertToPdf/ConvertIntoPdfDownload";
import { nextNavigationDownYellow } from "../../../../../public";

import TripIteneraryTexts from "./TripIteneraryTexts";

const TripItenerary = ({ datas, allDatas, tripTitle }) => {
  // console.log("datasITe", datas);

  const {
    wpcf_itinerary_title,
    wpcf_itinerary_detail,
    wpcf_itinerary_image,
    ...restDatas
  } = datas;

  // console.log("restDatas", restDatas.wpcf_itinerary_5);
  // console.log( "wpcf_itinerary_title", wpcf_itinerary_title );
  const allIteneraryDatas = [];
  for (const key in restDatas) {
    if (key.startsWith("wpcf_itinerary")) {
      // allIteneraryDatas.push(restDatas[key]);
      allIteneraryDatas.push(restDatas[key]);
    }
  }
  // console.log("allIteneraryDatas", allIteneraryDatas);

  // console.log("allIteneraryDatas", allIteneraryDatas);

  const updatedIteneraryDatas = [];

  for (let i = 0; i < allIteneraryDatas.length; i++) {
    updatedIteneraryDatas.push(allIteneraryDatas[i]);

    if (
      /^Day/.test(allIteneraryDatas[i]) &&
      /^Day/.test(allIteneraryDatas[i + 1])
    ) {
      updatedIteneraryDatas.push("No Details");
    }
  }

  // console.log(updatedIteneraryDatas);

  // console.log("updatedIteneraryDatas", updatedIteneraryDatas);
  const iteneraryDatas = [];
  for (let i = 0; i < updatedIteneraryDatas.length; i += 2) {
    if (updatedIteneraryDatas[i + 1] === "") {
      continue;
    }
    if (updatedIteneraryDatas[i + 1] === undefined) {
      continue;
    }
    if (updatedIteneraryDatas[i + 1] === null) {
      continue;
    }

    const itineraryObject = {
      // wpcf_itinerary_image: updatedIteneraryDatas[i],
      wpcf_itinerary: updatedIteneraryDatas[i],

      // wpcf_itinerary_detail: /^Day\s\d+:/i.test(updatedIteneraryDatas[i + 1])
      //   ? ""
      //   : updatedIteneraryDatas[i + 1],
      wpcf_itinerary_detail: updatedIteneraryDatas[i + 1],
    };
    iteneraryDatas.push(itineraryObject);
  }

  // console.log("iteneraryDatas", iteneraryDatas);

  // Try
  // const iteneraryDatas = [];
  // let currentItinerary = "";

  // for (let i = 0; i < allIteneraryDatas.length; i += 2) {
  //   if (allIteneraryDatas[i + 1] === "") {
  //     continue;
  //   }
  //   if (allIteneraryDatas[i + 1] === undefined) {
  //     continue;
  //   }
  //   if (allIteneraryDatas[i + 1] === null) {
  //     continue;
  //   }

  //   const itineraryObject = {
  //     wpcf_itinerary:
  //       /^Day\s\d+:/i.test(allIteneraryDatas[i + 1])
  //         ? currentItinerary
  //         : allIteneraryDatas[i],

  //     wpcf_itinerary_detail: /^Day\s\d+:/i.test(allIteneraryDatas[i + 1])
  //       ? ""
  //       : allIteneraryDatas[i + 1],
  //   };

  //   if (
  //     /^Day\s\d+:/i.test(allIteneraryDatas[i + 1]) ||
  //     (allIteneraryDatas[i + 1] === "")
  //   ) {
  //     currentItinerary = allIteneraryDatas[i + 1];
  //   }

  //   iteneraryDatas.push(itineraryObject);
  // }

  // console.log("iteneraryDatas", iteneraryDatas);
  // const allIteneraryDatas = [];
  // for (const key in restDatas) {
  //   if (key.startsWith("wpcf_itinerary")) {
  //     allIteneraryDatas.push(restDatas[key]);
  //   }
  // }

  // const iteneraryDatas = [];
  // for (let i = 0; i < allIteneraryDatas.length; i += 3) {
  //   const itineraryObject = {
  //     wpcf_itinerary: allIteneraryDatas[i],
  //     wpcf_itinerary_detail: allIteneraryDatas[i + 1],
  //   };
  //   if (!itineraryObject.wpcf_itinerary) {
  //     continue; // Skip items without wpcf_itinerary
  //   }
  //   iteneraryDatas.push(itineraryObject);
  // }

  // handle show hide description

  // console.log("iteneraryDatas", iteneraryDatas)

  return (
    <>
      <ConvertIntoPdfDownload
        iteneraryDatas={iteneraryDatas}
        tripTitle={tripTitle}
        allDatas={allDatas}
      >
        {/* <div className="text-center flex justify-center items-center mt-5 md:mt-8 mb-6 md:mb-14">
            <h1 className="shadow-md p-8 md:p-14 border-dashed rounded-full border border-black w-fit font-amithen text-xl md:text-3xl">
              {" "}
              Start <br></br> Exploring
            </h1>
          </div> */}
        <div>
          {iteneraryDatas?.map((data, index) => {
            return (
              <div key={index}>
                <TripIteneraryTexts data={data} />
              </div>
            );
          })}
        </div>

        {/* <p>{restDatas?.wpcf_itinerary_5}</p> */}

        {/* add for loop to show all itenerary datas */}
    

        {/* {
          (() => {
            const items = [];
            
            for (let i = 0; i < data.length; i++) {
              const item = data[i];
              items.push(<li key={i}>{item}</li>);
            }
            
            return items;
          })()
        } */}


      </ConvertIntoPdfDownload>
    </>
  );
};

export default React.memo(TripItenerary);

{
  /* <ConvertIntoPdfDownload tripTitle={tripTitle}>
<div className="text-center flex justify-center items-center mt-5 md:mt-8 mb-6 md:mb-14">
  <h1 className="shadow-md p-8 md:p-14 border-dashed rounded-full border border-black w-fit font-amithen text-xl md:text-3xl">
    {" "}
    Start <br></br> Exploring
  </h1>
</div>
{iteneraryDatas?.map((data, index) => {
  return (
    <div key={index} className="py-8 md:py-12 mx-10">
      <div
        className={
          (index + 1) % 3 === 0
            ? "flex flex-col "
            : index % 2 == 0
            ? " md:flex "
            : " flex flex-col md:flex md:flex-row-reverse   "
        }
      >
        <div className="">
          {/* <div className="relative h-80 w-[400px] "> */
}
//           <div
//             className={
//               (index + 1) % 3 === 0
//                 ? "relative h-96 w-full "
//                 : index % 2 === 0
//                 ? "sticky top-10 "
//                 : "sticky top-10"
//             }
//           >
//             <div
//               className={
//                 (index + 1) % 3 === 0
//                   ? "relative h-96 w-full "
//                   : index % 2 === 0
//                   ? "relative h-80 w-[400px]"
//                   : "relative h-80 w-[400px]"
//               }
//             >
//               <Image
//                 //   src={data?.x_featured_media_original}
//                 src={
//                   data?.wpcf_itinerary_image
//                     ? data?.wpcf_itinerary_image
//                     : ""
//                 }
//                 alt="project image"
//                 layout="fill"
//                 className="object-cover h-full w-full rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center ">
//           <div
//             className={
//               (index + 1) % 3 === 0
//                 ? "col-span-2 mt-5  md:mt-10  my-auto space-y-4 md:space-y-8 text-center"
//                 : index % 2 === 0
//                 ? "col-span-2   md:ml-20 my-auto space-y-4 md:space-y-8"
//                 : "col-span-2  md:mr-20 my-auto space-y-4 md:space-y-8"
//             }
//           >
//             <div className="space-y-4 ">
//               {/* title */}
//               <div
//                 style={{
//                   lineHeight: "1.5",
//                   wordSpacing: "8px",
//                 }}
//                 className="font-amithen text-2xl font-medium mt-5 md:mt-0    "
//               >
//                 {renderHTML(data?.wpcf_itinerary)}
//               </div>
//             </div>
//             {/* description */}
//             <div className="text-base md:text-xl font-normal text-justify f">
//               {renderHTML(data?.wpcf_itinerary_detail)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// })}
// </ConvertIntoPdfDownload> */}
