import Image from "next/image";
import React from "react";
import { navImage1, toggleNextLeftIcon } from "../../../../public";
import SubNavBarSlider from "../slider/slickSlide/NavBarSlider/SubNavBarSlider";
import Section from "../containers/Section";

const SubNavBar = ({
  handleShowSubSubNavItems,
  datas,
  imgSrc,
  setShowNavItems,
  handleShowSubNavItems,
  showBackOption,
  showSubNavItems,
  showSubNavItemsSmallScreen,
  handleShowSubNavItemsSmallScreen,
}) => {
  // console.log("datasnew sub nav", datas);
  // console.log(showSubNavItemsSmallScreen);
  return (
    <div
      className={
        showSubNavItemsSmallScreen ? "hidden lg:block  " : "block pt-12 "
      }
    >
      <div className={showSubNavItems ? " block" : " hidden"}>
        <div
          onClick={() => handleShowSubNavItemsSmallScreen()}
          className="flex mb-5 space-x-2 md:space-x-3 items-center justify-center md:justify-start md:ml-10 cursor-pointer  lg:hidden "
        >
          <Image
            src={toggleNextLeftIcon}
            alt=""
            className="h-3 w-2 md:h-5 md:w-3"
          />
          <p className="text-base font-medium">Back</p>
        </div>

        <div className="md:grid md:grid-cols-2  ">
          <div className="hidden md:flex md:justify-end md:items-start">
            <div className="relative   h-[450px] w-[336px]">
              <Image
                src={imgSrc ? imgSrc : navImage1}
                alt="logo"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                priority={true}
                className=""
              />
            </div>
          </div>

          <div className="md:ml-10 my-auto   ">
            <SubNavBarSlider
              datas={datas}
              handleShowSubSubNavItems={handleShowSubSubNavItems}
              handleShowSubNavItems={handleShowSubNavItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SubNavBar);
