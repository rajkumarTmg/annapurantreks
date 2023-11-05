import React, { useEffect } from "react";
import Image from "next/image";
import {
  LogoWhite,
  HamburgerMenu,
  Globe,
  LogoBlack,
  GlobeBlack,
  GlobeWhite,
  HamburgerMenuDesktopView,
  HamburgerMenuMobileView,
  LogoBlue,
} from "../../../../public";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import LogInModal from "../LoginSignup/LogInModal";
import SignUpModal from "../LoginSignup/SignUpModal";
import { fetchNavigationMenuData } from "../../../../pages/api/wordpress_API";
import axios from "axios";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
import { navMenuDatas } from "../../../../redux/actions/navMainMenuDatas";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({
  handleShowNavBar,
  logoColorBlue,
  globeColorBlack,
  contactColorBlack,
}) => {
  const dispatch = useDispatch();
  // const navMenuData = useSelector((state) => state.navMenuData);
  // get menu data from local storage

  const navMenuData =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("navMenuData") || "[]");

  // fetch navigation menu data
  useEffect(() => {
    // console.log("navMenuData called");
    // change to .then

    navMenuData?.length === 0 &&
      // fetch navigation menu data
      fetchNavigationMenuData()
        .then((res) => {
          const menuDatas = res?.data?.items;
          // console.log("items", items);
          // console.log("menuDatasnjnj");
          if (menuDatas) {
            // console.log("menuDatas", menuDatas);
            dispatch(navMenuDatas(menuDatas));
            // console.log("navMenuData called fetch ", navMenuData);
          }
        })
        .catch((err) => {
          // console.log("error", err);
        });

    // const fetchNavBarData = async () => {
    //   try {
    //     const getNavMenuData = await fetchNavigationMenuData();
    //     const menuDatas = getNavMenuData?.data?.items;
    //     // console.log("items", items);
    //     if (menuDatas) {
    //       dispatch(navMenuDatas(menuDatas));
    //     }
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };
    // fetchNavBarData();
  }, []);

  // log in show hide
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Sign up show hide
  const [showSighup, setShowSignup] = useState(false);

  // Show log in or Sign up form
  const [showLogInOrSignUP, setShowLogInOrSignUp] = useState("");

  // handle login modal
  const handleLoginModal = () => {
    setShowLoginModal((prev) => !prev);
  };

  const handleShowLoginForm = () => {
    setShowLogInOrSignUp(0);
  };

  const handleShowSignUpForm = () => {
    setShowLogInOrSignUp(1);
  };

  return (
    <>
      <div className=" absolute mx-auto w-full mt-6  md:mt-6  lg:mt-6 z-30">
        <div className="flex container justify-between items-center ">
          <Link href="/" legacyBehavior>
            {/* Logo */}
            <a>
              <Image
                src={logoColorBlue ? LogoBlue : LogoWhite}
                alt="logo"
                className="h-12 w-56"
              />
            </a>
          </Link>
          <div>
            {/* language, Contact and hamburger menu */}
            <div className="flex space-x-4 md:space-x-3 lg:space-x-6 justify-center items-center">
              <button>
                <Image
                  src={globeColorBlack ? GlobeBlack : GlobeWhite}
                  alt="globe"
                  className="cursor-pointer h-6 w-6"
                />
                <div className=" bg-gray-500 absolute h-7 w-7 rounded-full top-[10px] opacity-0 overflow-hidden ">
                  <GoogleTranslate />
                </div>
              </button>
              <Link href="/contact-us" legacyBehavior>
                <a
                  className={
                    contactColorBlack
                      ? "hidden md:hidden lg:flex text-base font-medium text-black cursor-pointer"
                      : "hidden md:hidden lg:flex text-base font-medium text-white cursor-pointer"
                  }
                >
                  Contact us
                </a>
              </Link>

              {/* Login button  */}
              {/* <div
                onClick={handleLoginModal}
                className="bg-secondary-orange hidden md:block  cursor-pointer px-8 py-2 rounded-md text-base text-white"
              >
                <p onClick={() => handleShowLoginForm()}>Log In</p>
              </div> */}
              <div
                onClick={() => {
                  handleShowNavBar();
                  // fetchNavBarData();
                }}
                className="cursor-pointer"
              >
                {/* dropdown menu for desktop view */}
                <Image
                  src={HamburgerMenuDesktopView}
                  alt="hamburger menu"
                  className="hidden md:block h-3 w-10"
                />
                {/* dropdown menu for mobile view */}
                <Image
                  src={HamburgerMenuMobileView}
                  alt="hamburger menu"
                  className="block md:hidden h-3 w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal  */}
      {showLoginModal && showLogInOrSignUP == 0 && (
        <LogInModal
          handleLoginModal={handleLoginModal}
          handleShowSignUpForm={handleShowSignUpForm}
        />
      )}

      {/* SignUp Modal */}
      {showLoginModal && showLogInOrSignUP == 1 && (
        <SignUpModal
          handleLoginModal={handleLoginModal}
          handleShowSignUpForm={handleShowSignUpForm}
          handleShowLoginForm={handleShowLoginForm}
        />
      )}
    </>
  );
};

export default React.memo(NavBar);
