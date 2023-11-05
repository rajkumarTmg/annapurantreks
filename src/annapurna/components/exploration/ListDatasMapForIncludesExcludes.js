import React from "react";
//react parser b

const ListDatasMapForIncludesExcludes = ({ data, includes }) => {
  // console.log(data);

  // if statement for includes and excludes
  const includesDataExcludesData = [];

  if (includes) {
    for (const key in data) {
      if (key.startsWith("wpcf_price_includes")) {
        includesDataExcludesData.push(data[key]);
      }
    }
  } else {
    for (const key in data) {
      if (key.startsWith("wpcf_price_excludes")) {
        includesDataExcludesData.push(data[key]);
      }
    }
  }

  return (
    <div>
      <ul style={{ listStyleType: "disc" }}>
        {includesDataExcludesData?.map((item) => (
          <li
            className="my-2 text-xs md:text-base font-normal"
            key={item}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ListDatasMapForIncludesExcludes);
