import Image from "next/image";
import React from "react";
import { Image1 } from "../../../../public";

const GalleryGrid = ({ datas }) => {
  // console.log(datas);
  return (
    // <div className="md:grid md:grid-cols-3 mx-5 md:mx-10 lg:mx-20">
    //   <div className="col-span-2 row-span-2">
    //     <div className="relative h-[200px] w-full md:h-[808px]">
    //       <Image
    //         src={datas?.x_featured_media_original}
    //         alt="image1"
    //         objectPosition="center"
    //         className="object-cover h-full w-full"
    //       />
    //     </div>
    //   </div>

    //   <div className="relative h-[200px] md:h-[404px] w-full">
    //     <Image
    //       src={Image1}
    //       alt="image1"
    //       className="object-cover h-full w-full"
    //     />
    //   </div>

    //   <div className="relative h-[200px] md:h-[404px] w-full">
    //     <Image
    //       src={Image1}
    //       alt="image1"
    //       className="object-cover h-full w-full"
    //     />
    //   </div>
    //   <div className="relative h-[200px] md:h-[404px] w-full">
    //     <Image
    //       src={Image1}
    //       alt="image1"
    //       className="object-cover h-full w-full"
    //     />
    //   </div>
    //   <div className="relative h-[200px] md:h-[404px] w-full">
    //     <Image
    //       src={Image1}
    //       alt="image1"
    //       className="object-cover h-full w-full"
    //     />
    //   </div>
    //   <div className="relative h-[200px] md:h-[404px] w-full">
    //     <Image
    //       src={Image1}
    //       alt="image1"
    //       className="object-cover h-full w-full"
    //     />
    //   </div>
    // </div>
    <>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 container">
        {datas?.map((data, index) => (
          <div
            className={
              index === 0 || index % 7 === 0 ? "col-span-2 row-span-2  " : ""
            }
          >
            <div
              key={data?.id}
              className={
                index === 0 || index % 7 === 0
                  ? "relative h-[300px] w-full md:h-[808px] md:w-full"
                  : "relative h-[300px] md:h-[404px] w-full"
              }
            >
              <Image
                src={data?.x_featured_media_original}
                alt="image1"
                objectFit="cover"
                layout="fill"
                // objectPosition="center"
                className="object-cover  "
              />
              {/* <p className="absolute">{index}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(GalleryGrid);
