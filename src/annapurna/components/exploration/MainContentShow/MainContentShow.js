import React from "react";
import renderHTML from "react-render-html";
import { quoteIconLeft } from "../../../../../public";
import Image from "next/image";

const MainContentShow = ({ datas }) => {
  const paragraphs = datas.split("\n");
  const blockquoteRegex = /<blockquote>(.*?)<\/blockquote>/g;
  const strongRegex = /<strong>(.*?)<\/strong>/g;

  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        const sentences = paragraph.split("\n ");

        return (
          <div key={index}>
            {sentences.map((sentence, index) => {
              if (sentence === "") return;
              if (sentence.match(blockquoteRegex)) {
                return (
                  <>
                    <div className="flex space-x-2 justify-center  mt-7  md:mt-14">
                      <Image
                        src={quoteIconLeft}
                        alt="quote"
                        className="-mt-2 md:-mt-5 h-5 w-5 md:h-8 md:w-8"
                      />
                      <blockquote
                        key={index}
                        // style={{
                        //   fontFamily: "Amithen !important",
                        // }}
                        className="text-base md:text-2xl  text-primary-blue !important"
                      >
                        {renderHTML(sentence)}
                      </blockquote>
                    </div>
                  </>
                );
              } else {
                if (sentence === "") return;
                if (sentence.match(strongRegex)) {
                  return (
                    <>
                      <div key={index} className=" mb-3 pt-4">
                        {renderHTML(sentence)}
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div key={index} className=" mb-4">
                        {renderHTML(sentence)}
                      </div>
                    </>
                  );
                }
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MainContentShow;
