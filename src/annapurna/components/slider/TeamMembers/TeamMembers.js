import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Grid } from "swiper";
import { member1 } from "../../../../../public";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";
import { teamMembersInfo } from "../../../../../pages/api/wordpress_API";

const TeamMembersSlider = ({ post }) => {
  const TeamMembersData = [
    {
      id: 0,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 1,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 2,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 3,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 4,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 5,
      name: "Karmi (Managing director)",
      img: member1,
    },
    {
      id: 6,
      name: "Karmi (Managing director)",
      img: member1,
    },
  ];

  // console.log(post);
  // console.log("test");

  return (
    <>
      <Swiper
        // direction={{vertical: true}}
        // direction={"vertical"}
        modules={[Navigation, Pagination, Grid]}
        slidesPerView={3}
        spaceBetween={10}
        loop
        navigation={{
          nextEl: ".button-next-slide",
        }}
        pagination={{
          clickable: true,
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        className="realtive h-[35vw]"
      >
        {/* Map All Team members data */}
        {TeamMembersData?.map((data) => (
          <SwiperSlide className="data?.id">
            <div className="relative cursor-pointer">
              <Image
                src={member1}
                alt="member1"
                // width={200}
                height={200}
                className=""
              />
              <div className="absolute bottom-2 ml-4 ">
                <p className=" z-20 text-white text-sm font-semibold">
                  {" "}
                  Karmi (Managing director)
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Swip down icon */}
        <div className="absolute bottom-0 right-0  z-10 h-10  mt-4  ">
          <HiOutlineChevronDown className="button-next-slide  h-8 w-8  cursor-pointer border-2 border-dotted rounded-full border-secondary-orange text-secondary-orange" />
        </div>
      </Swiper>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://cmslog.annapurnatreks.com/wp-json/wp/v2/team"
  );
  // console.log(response);

  const post = response?.data;
  // console.log(post);
  // console.log("check");

  return {
    props: {
      post,
    },
  };
};

export default React.memo(TeamMembersSlider);
