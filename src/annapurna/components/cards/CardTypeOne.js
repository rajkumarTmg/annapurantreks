import React from "react";
import Image from "next/image";
import { img1 } from "../../../../public";

const CardTypeOne = () => {
  return (
    <div>
      <div className=" w-32">
        <Image src={img1} alt="img1" objectFit="cover" />
      </div>
    </div>
  );
};

export default React.memo(CardTypeOne);
