import React, { useState, useEffect, useRef } from "react";
import DropdownMobileView from "../dropdown/MobileView/DropdownMobileView";

import { HiOutlineX, HiOutlineMenu, HiPlus, HiBell } from "react-icons/hi";
import Link from "next/link";
import ProfileDropdown from "../dropdown/DropdownProfile/ProfileDropdown";
import { HiHeart } from "react-icons/hi";
import { useRouter } from "next/router";
import PostModalDashboard from "../Modal/PostModalDashboard";
import { useSelector } from "react-redux";
import Image from "next/image";

const SideBarNavigation = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileViewDropdown, setShowMobileViewDropdown] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [profileUrl, setProfileUrl] = useState();

  const [authUser, setAuthUser] = useState();
  //check whether the user is logged in or not if logged in and isAuthenticated is true
  const userAuth = useSelector((state) => state.authUser.isAuthenticated);
  useEffect(() => {
    setAuthUser(userAuth);
  });

  // get user from local Storage to get profile url
  // why from local storage -> to stop whole website rerendering
  const user =
    userAuth &&
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("user") || "");
  // console.log(user?.userProfileImage?.url);
  const getProfileUrl = user?.userProfileImage?.url;

  useEffect(() => {
    setProfileUrl(getProfileUrl);
  });

  const router = useRouter();
  const profileDropdownBtnRef = useRef(null);

  const handleshowProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleShowMobileViewDropdown = () => {
    setShowMobileViewDropdown((prev) => !prev);
  };

  // Handle Hide show post modal
  const handlePostModal = () => {
    setPostModal(true);
  };

  // Close Profile Dropdown on mouse clicked event
  useEffect(() => {
    const closeProfileDropdownOnClick = (e) => {
      // setIsMobileViewDropdown(false)
      // console.log(e.path[1]);
      // console.log(profileDropdownBtnRef.current)
      if (e.path[1] !== profileDropdownBtnRef.current) {
        setShowProfileDropdown(false);
        // console.log(e);
      }
    };
    document.body.addEventListener("click", closeProfileDropdownOnClick);

    return () =>
      document.body.removeEventListener("click", closeProfileDropdownOnClick);
  }, []);

  const navMenuItems = [
    {
      name: "All Blogs",
      link: "/",
    },
    {
      name: "Mountaineering",
      link: "/mountaineering",
    },
    {
      name: "Treks",
      link: "/treks",
    },
    {
      name: "Trips and  tours",
      link: "/trips_and_tours",
    },
    {
      name: "Weather",
      link: "/weather",
    },
    {
      name: "Frequently Asked Questions",
      link: "/frequently_asked_questions",
    },
    {
      name: "About Nepal",
      link: "/about_nepal",
    },
  ];

  return (
    <>
      <div className="">
        <div className="sticky top-20   ">
          {/* This example requires Tailwind CSS v2.0+ */}
          <nav className="bg-white shadow-md py-10 rounded-md  h-[100vh] ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex-col  items-center justify-between hover ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400
                   hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-700"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={handleShowMobileViewDropdown}
                  >
                    <span className="sr-only">Open main menu</span>

                    {/* Mobile View Menu toggle */}
                    {showMobileViewDropdown ? (
                      <>
                        {/* Mobile menu close icon */}
                        <HiOutlineX className=" h-6 w-6" />
                      </>
                    ) : (
                      <>
                        {/* Mobile menu open icon */}
                        <HiOutlineMenu className=" h-6 w-6" />
                      </>
                    )}
                  </button>
                </div>

                {/* Company Logo */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* Mobile View */}
                    <Link href="/" legacyBehavior>
                      {/* <img
                      className="block h-8 w-auto lg:hidden cursor-pointer"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                      <p className="block h-8 w-auto lg:hidden cursor-pointer font-bold text-xl">
                        SunwayBook
                      </p>
                    </Link>

                    {/* Web View */}
                    {/* <Link href="/"> */}
                    {/* <img
                      className="hidden h-8 w-auto lg:block cursor-pointer"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                    {/* <p className="hidden h-8 w-auto lg:block cursor-pointer font-bold text-xl mb-5">
                      SunwayBook
                    </p> */}
                    {/* </Link> */}
                  </div>
                </div>

                {/* Web View Nav Links */}
                <div className="hidden  sm:block ">
                  <div className="flex-col space-y-8 ">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                    {navMenuItems.map((item) => (
                      <div key={item.name}>
                        <Link href={item.link} legacyBehavior>
                          <a
                            className={
                              router.pathname == item.link
                                ? "bg-gray-900 text-white px-3 py-2 rounded-lg text-base font-medium shadow-sm"
                                : "text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-sm px-3 py-2 rounded-lg text-base font-medium shadow-sm ease-in-out duration-150"
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ))}

                    {/* <Link href="explore_places" legacyBehavior>
                    <a className="text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-sm px-3 py-2 rounded-lg text-md font-medium shadow-sm ">
                      Explore Places
                    </a>
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <DropdownMobileView
              showMobileViewDropdown={showMobileViewDropdown}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default React.memo(SideBarNavigation);
