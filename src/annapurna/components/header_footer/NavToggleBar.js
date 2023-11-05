import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { fetchNavigationMenuData } from "../../../../pages/api/wordpress_API";
import {
  img1,
  img4,
  img5,
  navImage1,
  img2,
  img3,
  LogoBlack,
  toggleNextRightIcon,
  LogoBlue,
  navImgDestination,
  navImgTrekking,
  navImgTours,
  navImgMountaineering,
  navImgBlogs,
  navImgAboutUs,
} from "../../../../public";
import SubNavBar from "../subNavigationBar/SubNavBar";
import SubSubNavBar from "../subNavigationBar/SubSubNavBar";
import { useSelector } from "react-redux";
import Link from "next/link";
import Section from "../containers/Section";
import { motion } from "framer-motion";

const NavToggleBar = ({ handleShowNavBar, showNavBar }) => {





  const navImageData = [
    {
      id: 0,
      imageUrl: navImgDestination,
    },
    {
      id: 1,
      imageUrl: navImgTrekking,
    },
    {
      id: 2,
      imageUrl: navImgTours,
    },
    {
      id: 3,
      imageUrl: navImgMountaineering,
    },
    {
      id: 4,
      imageUrl: navImgBlogs,
    },
    {
      id: 5,
      imageUrl: navImgAboutUs,
    },
  ];

  // const navItems = [
  //   {
  //     id: 0,
  //     name: "Destination",
  //   },
  //   {
  //     id: 1,
  //     name: "Trekking",
  //   },

  //   {
  //     id: 2,
  //     name: "Tours",
  //   },
  //   {
  //     id: 3,
  //     name: "Mountaneering",
  //   },
  //   {
  //     id: 4,
  //     name: "Blog",
  //   },
  //   {
  //     id: 5,
  //     name: "About us",
  //   },
  // ];

  // Get nav menu data from store
  const navMenuDatas = useSelector(
    (state) => state?.navMenuDatas?.navMenuDatas
  );
  // console.log("navMenuDatas", navMenuDatas);

  // Nav Items data
  const [navItems, setNavItems] = useState();

  // Nav bar image toggle state
  const [navBarImageToggleData, setNavBarImageToggleData] = useState(
    navImageData[0]?.imageUrl
  );

  //state to hold Sub nav items Data
  const [subNavItemsData, setSubNavItemsData] = useState();
  // state to control sub nav component according to the nav item clicked
  const [showSubNavId, setShowSubNavId] = useState();

  // State to hold sub sub nav items data
  const [subSubNavItemsData, setSubSubNavItemsData] = useState();

  // State to hold sub sub sub nav items data
  const [subSubSubNavItemsData, setSubSubSubNavItemsData] = useState();

  // State to hold sub sub sub sub nav items show or not
  const [showSubSubSubNavItems, setShowSubSubSubNavItems] = useState(false);

  // Screen view State
  // const [smallScreenTrue, setSmallScreenTrue] = useState(false);

  // sub nav bar show hide small screen
  const [showSubNavItemsSmallScreen, setShowSubNavItemsSmallScreen] =
    useState(true);

  const [showSubSubNavItemsSmallScreen, setShowSubSubNavItemsSmallScreen] =
    useState(false);

  const handleShowSubNavItemsSmallScreen = () => {
    setShowSubNavItemsSmallScreen((prev) => !prev);
  };

  const handleShowSubSubNavItemsSmallScreen = () => {
    setShowSubSubNavItemsSmallScreen((prev) => !prev);
  };

  useEffect(() => {
    setShowSubNavId(navItems && navItems[0]?.ID);
    setSubNavItemsData(navItems && navItems[0]?.child_items);
  }, [navItems]);

  const [showSubNavItems, setShowSubNavItems] = useState(true);
  // console.log("state", navItems && navItems[0]?.ID);
  // console.log("showSubNavId", showSubNavId);

  // function to change the state of showSubNavId
  const handleShowSubNavId = (item, index) => {
    setShowSubNavId(item?.ID);
    setSubNavItemsData(item?.child_items);
    console.log("itemnew show ", index);
    switch (index) {
      case 0:
        setNavBarImageToggleData(navImageData[0]?.imageUrl);
        break;
      case 1:
        setNavBarImageToggleData(navImageData[1]?.imageUrl);
        break;
      case 2:
        setNavBarImageToggleData(navImageData[2]?.imageUrl);
        break;
      case 3:
        setNavBarImageToggleData(navImageData[3]?.imageUrl);
        break;
      case 4:
        setNavBarImageToggleData(navImageData[4]?.imageUrl);
        break;
      case 5:
        setNavBarImageToggleData(navImageData[5]?.imageUrl);
        break;

      default:
        break;
    }

    // console.log(id);
    // console.log("item", item?.child_items)
  };

  // Hide and show sub items state
  const handleShowSubNavItems = () => {
    setShowSubNavItems((prev) => !prev);
  };
  // hide and show sub sub sub nav items
  const handleShowSubSubSubNavItems = () => {
    setShowSubSubSubNavItems((prev) => !prev);
  };

  // function to change the state of sub sub nav id
  const handleShowSubSubNavItems = (item) => {
    setSubSubNavItemsData(item?.child_items);
    // console.log("item", item?.child_items);
  };

  // function to change the state of sub sub sub nav data
  const handleSubSubSubNavItems = (item) => {
    setSubSubSubNavItemsData(item?.child_items);
    // console.log("item", item?.child_items);
  };

  // state for destination items
  // const [destinationSubItems, setDestinationSubItems] = useState();

  useEffect(() => {
    const fetchNavBarData = async () => {
      try {
        // const getNavMenuData = await fetchNavigationMenuData();
        // const items = getNavMenuData?.data?.items;
        // setNavItems(items);
        // console.log("items", items);
        // console.log(
        //   "mapped datas",
        //   items.map((item) => item.title)
        // );
        setNavItems(navMenuDatas);
        // console.log("navMenuDatas", navMenuDatas);

        // const destinationDatas = navMenuDatas[0]?.child_items;
        // console.log("destinationDatas", destinationDatas);
        // setDestinationSubItems(destinationDatas);

        // const trekkingDatas = items[1]?.child_items;
        // setTrekkingSubItems(trekkingDatas);
        // // console.log("trekkingDatas", trekkingDatas);

        // const toursDatas = items[2].child_items;
        // setToursSubItems(toursDatas);
        // // console.log("toursDatas", toursDatas);

        // const mountaneeringDatas = items[3].child_items;
        // setMountaneeringSubItems(mountaneeringDatas);
        // // console.log("mountaneeringDatas", mountaneeringDatas);

        // console.log("navData", navData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchNavBarData();
  }, [showNavBar === true, navMenuDatas]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // console.log("navMenuData updated: ", navMenuData);
  //   }, 1000);
  // }, [navMenuData]);
  // console.log("NavMenu", navMenuData);
  // console.log("destinaionSubItems", destinationSubItems);

  return (
    <div
      style={{
        position: "fixed",
        padding: "0",
        margin: "0",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      // className="h-[100vh] w-[100vw] bg-gray-100  z-50"
    >
      {/* Nav items show */}
      <div className="flex container justify-between items-center mt-6  md:mt-6 lg:mt-6  ">
        <Image src={LogoBlue} alt="logo" className="h-12 w-56" />

        {navItems?.map((item, index) => (
          //Nav items large screen
          <div
            className={
              showSubNavId && item?.ID == showSubNavId
                ? "text-secondary-orange  font-medium cursor-pointer border-b-2 pb-1 border-secondary-orange "
                : "text-black pb-1 font-medium cursor-pointer border-b-2 border-transparent"
            }
            key={item?.ID}
            onClick={() => handleShowSubNavId(item, index)}
          >
            <p
              onClick={() => !showSubNavItems && handleShowSubNavItems()}
              className=" hidden md:hidden whitespace-nowrap lg:flex font-medium text-lg cursor-pointer"
            >
              {item?.title}
              {/* {item.ID} */}
              {/* {index} */}
            </p>
          </div>
        ))}
        <div className="cursor-pointer pb-1" onClick={handleShowNavBar}>
          <HiOutlineX className="h-8 w-8 text-secondary-orange" />
        </div>
      </div>
      {/* NavTogleBars space from top to the items differentiate */}
      <div className="md:pt-20 2xl:pt-[250px] bg-green-0"></div>

      {/* Sub nav component according to the nav item clicked start */}
      {/* Sub Nave bar large screen */}
      {navItems && (
        <div className={showSubNavItems ? "  my-auto " : "hidden"}>
          <SubNavBar
            datas={subNavItemsData}
            imgSrc={navBarImageToggleData}
            handleShowSubSubNavItems={handleShowSubSubNavItems}
            handleShowSubNavItems={handleShowSubNavItems}
            showSubNavItems={showSubNavItems}
            showSubNavItemsSmallScreen={showSubNavItemsSmallScreen}
            handleShowSubNavItemsSmallScreen={handleShowSubNavItemsSmallScreen}
          />
        </div>
      )}
      {/* Nav items medium and small screen mobile view */}
      <Section className=" lg:hidden">
        <div
          className={
            showSubNavItemsSmallScreen
              ? "block container   lg:hidden"
              : "hidden"
          }
        >
          <div className="">
            {navItems?.map((item) => (
              //Nav items large screen
              <div
                className={
                  "text-black mb-8 flex justify-center items-center space-x-4   font-medium cursor-pointer  border-transparent"
                }
                key={item?.ID}
                onClick={() => {
                  handleShowSubNavId(item);
                  !showSubNavItems && handleShowSubNavItems();
                  handleShowSubNavItemsSmallScreen();
                  handleShowSubSubNavItemsSmallScreen();
                }}
              >
                <p className=" text-center whitespace-nowrap font-amithen text-3xl  font-medium cursor-pointer">
                  {item?.title}
                  {/* {item.ID} */}
                </p>
                <Image
                  src={toggleNextRightIcon}
                  alt=""
                  className="h-3 w-2 md:h-6 md:w-4"
                />
              </div>
            ))}
            <Link href="/contact-us" legacyBehavior>
              <a className=" text-center font-amithen text-3xl  font-medium cursor-pointer text-black my-8 flex justify-center items-center space-x-4    border-transparent">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </Section>
      {/* Sub nav component according to the nav item clicked end */}
      {/* Sub Sub nav component according to the sub nav item clicked start */}
      {/* Tibet Sub nav bar */}
      {navItems && (
        <div
          className={
            !showSubNavItems && !showSubSubSubNavItems ? "block" : "hidden"
          }
        >
          <div className="">
            <SubSubNavBar
              datas={subSubNavItemsData}
              imgSrc={navBarImageToggleData}
              showBackOption
              handleShowSubNavId={handleShowSubNavId}
              handleShowSubNavItems={handleShowSubNavItems}
              showSubNavItems={showSubNavItems}
              handleShowNavBar={handleShowNavBar}
              showSubSubNavItemsSmallScreen={showSubSubNavItemsSmallScreen}
              handleShowSubSubNavItemsSmallScreen={
                handleShowSubSubNavItemsSmallScreen
              }
              handleSubSubSubNavItems={handleSubSubSubNavItems}
              handleShowSubSubSubNavItems={handleShowSubSubSubNavItems}
            />
          </div>
        </div>
      )}
      {/* Sub Sub nav component according to the sub nav item clicked end */}

      {/* Sub Sub Sub nav component according to the sub sub nav item clicked start */}

      {navItems && (
        <div className={showSubSubSubNavItems ? "block " : "hidden"}>
          <div className="my-auto">
            <SubSubNavBar
              datas={subSubSubNavItemsData}
              imgSrc={navBarImageToggleData}
              showBackOption
              handleShowSubNavId={handleShowSubNavId}
              handleShowSubNavItems={handleShowSubNavItems}
              showSubNavItems={showSubNavItems}
              handleShowNavBar={handleShowNavBar}
              showSubSubNavItemsSmallScreen={showSubSubNavItemsSmallScreen}
              handleShowSubSubNavItemsSmallScreen={
                handleShowSubSubNavItemsSmallScreen
              }
              handleShowSubSubSubNavItems={handleShowSubSubSubNavItems}
              subSubSubNavBar
            />
          </div>
        </div>
      )}
      {/* Sub Sub Sub nav component according to the sub nav item clicked end */}
    </div>
  );
};

export default NavToggleBar;
