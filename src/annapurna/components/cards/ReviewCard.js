import Image from "next/image";
import React from "react";
import { Avatar } from "../../../../public";
import renderHTML from "react-render-html";
import moment from "moment/moment";
import { AnimatePresence } from "framer-motion";
import AnimatedSection from "../../Animations/AnimatedSection";

const ReviewCard = ({ datas }) => {
  // console.log("datas", datas);
  return (
    <>
      <AnimatePresence>
        <div className="">
          {datas?.map((data) => (
            <div key={data?.id} className="space-y-5 ">
              <div className="flex space-x-3 ">
                {/* <Image
                src={Avatar}
                alt="Avatar"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-semibold"> {data?.author_name}</p>
                  <p>{moment(data?.date).calendar()}</p>
                </div>
              </div>
              {/* <AnimatedSection> */}
                <div>
                  <p className=" pt-4 bg-primary-blue text-white pb-4 px-5 rounded-2xl border-1  shadow-md">
                    {renderHTML(data?.content?.rendered)}
                  </p>
                </div>
              {/* </AnimatedSection> */}
            </div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

export default ReviewCard;
