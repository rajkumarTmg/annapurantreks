import React, { useState } from "react";
import FaqsDescription from "./FaqsDescription";

const FaqsShow = ({ datas }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    // console.log("clicked");
    setShowDescription(!showDescription);
  };

  // console.log("datas", datas);
  const renderWysiwygContent = (content) => {
    const lines = content.split(/<\/?strong>/);
    // console.log("lines", lines);
    // const ["<span style="color: #e00d4e;>", "", "</span>\r\n\r\n", <strong>, <span>, ...filteredLinesArray] = lines
    // const filteredLinesArray = lines.filter(
    //   (item) => !/^<span style="color: #e00d4e;"><\/span>\r\n\r\n$/.test(item)
    // );
    // const filteredLinesArray = lines.filter(item => {
    //   const pattern = /<\/?[a-z][\s\S]*>/i;
    //   return !item.match(pattern) || item === "<span style=\"color: #e00d4e;\">"
    //     || item === "</span>\r\n\r\n" || item === "<strong>";
    // });

    // const filteredLinesArray = lines.filter(item => !/^<[^>]+>$/.test(item));
    const filteredLinesArray = lines.filter(
      (item) => !/^<[^>]+>$/.test(item) && item !== "</span>\r\n\r\n"
    );

    // const filteredLinesArray = lines.filter(item => {
    //   return !(
    //     item.includes("<span") ||
    //     item.includes("</span>") ||
    //     item.includes("<strong>") ||
    //     item.includes("</strong>") ||
    //     item.includes("<") ||
    //     item.includes(">")
    //   );
    // });

    // console.log("filteredLinesArray", filteredLinesArray);
    return filteredLinesArray.map((line, index) => (
      // console.log("lineNew", line),
      <div key={index}>
        <FaqsDescription
          line={line}
          showDescription={showDescription}
          handleShowDescription={handleShowDescription}
        />

        {/* <div>{line}</div> */}
      </div>
    ));
  };

  const elements = renderWysiwygContent(datas);
  // console.log("elements", elements);

  return <div className="">{elements}</div>;
};

export default FaqsShow;
