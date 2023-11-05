import React from "react";

const Footer = () => {
  return (
    <div className="flex space-x-1  bg-gray-200  w-[100%] bottom-0  justify-center items-center pt-5 pb-4 mt-10">
      <p>Copyright</p>
      <a className="font-medium text-base" href="">
        © 2022 AnnapurnaTrek.
      </a>
      <p> and </p>
      <a className="font-medium text-base" href="">
        All rights reserved.
      </a>
    </div>
  );
};

export default React.memo(Footer);
