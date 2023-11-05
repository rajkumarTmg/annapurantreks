import React, { useState, useEffect } from "react";

import { HiOutlineX, HiPlus, HiTrash } from "react-icons/hi";

import Image from "next/image";
import BackgroundGray from "../../../components/Modal/BackgroundGray";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { LogoBlack } from "../../../../public";

const SignUpModal = ({ handleLoginModal, handleShowLoginForm }) => {
  // console.log(postId)

  const router = useRouter();

  // get token from state
  //   const token = useSelector((state) => state.authUser.token);

  // handle Post Submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await postSubmit(postSubmitData, token);
  //       // console.log(postSubmitData);
  //       // console.log(token);
  //       console.log(data);

  //       if (data.saved == "true") {
  //         console.log("Called");

  //         toast.success("Your Post is created successfully");
  //         setPostModal(false);
  //         getUserPosts();
  //         router.push("/dashboard/user");
  //       }
  //     } catch (error) {
  //       console.log("Error =>", error);
  //     }
  //   };

  return (
    <>
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue />
      <div
        style={{ width: "30rem" }}
        className="fixed ml-auto mr-auto top-24 left-0 right-0 bg-white   z-50 rounded-lg"
      >
        <div className="container px-8 pb-20">
          <div className="flex  justify-end   mt-3">
            <div>
              <button
                onClick={() => handleLoginModal()}
                className="focus:outline-none"
              >
                <HiOutlineX className="h-8 w-8 text-black bg-white  p-1 rounded-full " />
              </button>
            </div>
          </div>

          {/* Login form  */}
          <div className="flex justify-center my-10">
            <Image src={LogoBlack} alt="" />
          </div>
          <div>
            <form className="flex flex-col justify-center items-center     ">
              <div className="space-y-3">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-2 border-2 border-black rounded-md py-2 w-full "
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-2 border-2 border-black rounded-md py-2 w-full "
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 border-2 border-black rounded-md py-2 w-full "
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="px-2 border-2 border-black rounded-md py-2 w-full"
                />
              </div>

              {/* Sign up button */}

              <button className="mt-5 mb-3 bg-primary-blue w-full py-2 rounded-md text-white">
                SignUp
              </button>

              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-blue-900 cursor-pointer"
                    onClick={() => handleShowLoginForm()}
                  >
                    LogIn
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(SignUpModal);
