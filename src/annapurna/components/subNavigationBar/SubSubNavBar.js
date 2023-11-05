import Image from "next/image";
import React from "react";
import { navImage1, toggleNextLeftIcon } from "../../../../public";
import { useRouter } from "next/router";
import SubSubNavBarSlider from "../slider/slickSlide/NavBarSlider/SubSubNavBarSlider";

const SubSubNavBar = ({
  handleShowSubNavId,
  datas,
  imgSrc,
  showBackOption,
  handleShowSubNavItems,
  showSubNavItems,
  handleShowNavBar,
  showSubSubNavItemsSmallScreen,
  handleShowSubSubNavItemsSmallScreen,
  handleShowSubSubSubNavItems,
  handleSubSubSubNavItems,
  subSubSubNavBar,
}) => {
  const router = useRouter();
  // console.log("showSubSubNavItemsSmallScreen", showSubSubNavItemsSmallScreen);

  return (
    // when sub items are hidden sub sub items will be shown
    <div className={showSubNavItems ? "hidden" : "block  bg-red-0 "}>
      <div className="md:grid md:grid-cols-2  ">
        <div className="flex justify-center md:justify-end ">
          <div className="-mt-12 md:-mt-10">
            {showBackOption && (
              <div
                onClick={
                  subSubSubNavBar
                    ? () => {
                        handleShowSubSubSubNavItems();
                      }
                    : () => {
                        handleShowSubNavItems();
                        handleShowSubSubNavItemsSmallScreen();
                      }
                }
                className=" mb-5 flex space-x-2 md:space-x-3 items-center justify-center md:justify-end  cursor-pointer "
              >
                <Image
                  src={toggleNextLeftIcon}
                  alt=""
                  className="h-3 w-2 md:h-5 md:w-3"
                />
                <p className="text-base font-medium">Back</p>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="relative  h-[450px] w-[336px]">
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
        </div>

        <div className="  md:ml-10 my-auto ">
          <SubSubNavBarSlider
            datas={datas}
            handleShowNavBar={handleShowNavBar}
            handleSubSubSubNavItems={handleSubSubSubNavItems}
            handleShowSubSubSubNavItems={handleShowSubSubSubNavItems}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SubSubNavBar);
