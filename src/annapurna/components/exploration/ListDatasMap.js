import React from "react";

const HighlightsDataMap = ({ data }) => {
  // Extract the <li> items from the HTML
  // console.log(data);
  // const items = data.split(/<li>|<\/li>/).filter((item) => item !== "");
  // const items = data.split(/<li[^>]*>|<\/li>/).filter(item => item !== '');
  // const items = data.split(/<li[^>]*>(.*?)<\/li>/g).filter(item => item !== '');
  // const items = data.split(/<li[^>]*>|<\/li>/).filter(item => item !== '');
  // const items = data.split(/<li>(.*?)<\/li>/g).filter(item => item !== '');
  // const items = data.replace(/<[^>]+>/g, '').split('\n').filter(item => item !== '');
  // const items = data.split(/<li>(.*?)<\/li>/g).filter(item => item !== '' && item !== '\n');
  // const items = data.replace(/<li>/g, '').split('</li>').filter(item => item !== '');
  // const items = data.split(/<li>(.*?)<\/li>/g).filter(item => item.trim() !== '');
  // const items = data.split(/<li>(.*?)<\/li>/g).filter(item => item.trim() !== '');
  // const items = data.split(/<li>(.*?)<\/li>/g).filter(item => item.trim() !== '' && item !== '<ul>' && item !== '</ul>');
  // const items = data
  // .split(/<li>(.*?)<\/li>/)
  // .filter((item) => item.trim() !== "");

  const items =
    data &&
    data?.match(/<li>(.*?)<\/li>/g).map((item) => item.replace(/<\/?li>/g, ""));

  return (
    <div>
      <ul style={{ listStyleType: "disc" }}>
        {items &&
          items?.map((item) => (
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

export default React.memo(HighlightsDataMap);
