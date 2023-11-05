import React, { useState } from "react";

import { HiOutlineX, HiPlus, HiTrash } from "react-icons/hi";
import { Avatar } from "../../../public";
import Image from "next/image";
import BackgroundGray from "./BackgroundGray";
import {
  postSubmit,
  updateUserEmail,
  updateUserGender,
  updateUserName,
  updateUserPassword,
  updateUserProfile,
  uploadImage,
} from "../../../pages/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userProfileDataUpdate } from "../../../redux/actions/authActions";
import Link from "next/link";

const EditProfileDetails = ({
  dashboardTrue,
  handleProfileUpdateModal,
  userProfileUrl,

  handleUpdateProfileType,
}) => {
  //Get user data from store
  const userData = useSelector((state) => state.authUser.currentUser);
  const [postSubmitData, setPostSubmitData] = useState({
    fname: "",
    lname: "",
    oldEmail: userData?.email,
    email: "",
    currentPassword: "",
    password: "",
    newPassword:"",
    gender: "",
    // college: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  // console.log(postSubmitData)

  // get token from state
  const token = useSelector((state) => state?.authUser?.token);

  // handle User name update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(postId);

    try {
      if (handleUpdateProfileType === "Name") {
        const { data } = await updateUserName(postSubmitData, token);
        const user = data.updatedUser;
        // console.log(data);
        dispatch(userProfileDataUpdate(user));

        // console.log(user);
      } else if (handleUpdateProfileType === "Email") {
        const { data } = await updateUserEmail(postSubmitData, token);
        const user = data.updatedUser;
        dispatch(userProfileDataUpdate(user));
        // console.log(data);
      } else if (handleUpdateProfileType === "Password") {
        const { data } = await updateUserPassword(postSubmitData, token);
        const user = data.updatedUser;
        dispatch(userProfileDataUpdate(user));
        // console.log(data);
      } else if (handleUpdateProfileType === "Gender") {
        const { data } = await updateUserGender(postSubmitData, token);
        const user = data.updatedUser;
        dispatch(userProfileDataUpdate(user));
        // console.log(data);
      }
      // Refresh page
      // router.reload();

      toast.success(`Your ${handleUpdateProfileType} is updated`);

      // Update Redux User Profile Store

      handleProfileUpdateModal();
    } catch (error) {
      // console.log("Error=> ", error);
    }
  };

  return (
    <>
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue={dashboardTrue} />
      <div
        style={{ width: "40rem" }}
        className="fixed ml-auto mr-auto left-0 right-0 bg-white  top-20  z-50 rounded-lg py-10"
      >
        {/* User Data input sections */}
        <div className="mx-10">
          <div className="flex  justify-between  mx-10 mt-3 py-5">
            <div className="mt-2 text-xl font-semibold  ">
              {handleUpdateProfileType === "Name" && "Update Name"}
              {handleUpdateProfileType === "Gender" && "Update Gender"}
              {handleUpdateProfileType === "Password" && "Update Password"}
              {handleUpdateProfileType === "Email" && "Update Email"}
            </div>

            <div>
              <button
                onClick={handleProfileUpdateModal}
                className="focus:outline-none"
              >
                <HiOutlineX className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
              </button>
            </div>
          </div>

          {/* Name input */}
          <div>
            <form>
              {/* Full name fields */}
              {handleUpdateProfileType === "Name" && (
                <div className="flex justify-center items-center space-x-6">
                  {/* First Name Field */}
                  <div className="my-5 flex justify-center">
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                      type="text"
                      value={postSubmitData.fname}
                      onChange={(e) =>
                        setPostSubmitData({
                          ...postSubmitData,
                          fname: e.target.value,
                        })
                      }
                      placeholder="First Name"
                      className="py-1.5 px-2 shadow-md rounded-2xl outline-none text-center"
                    />
                  </div>

                  {/* Last Name Field */}
                  <div className="my-5 flex justify-center ">
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                      type="text"
                      value={postSubmitData.lname}
                      onChange={(e) =>
                        setPostSubmitData({
                          ...postSubmitData,
                          lname: e.target.value,
                        })
                      }
                      placeholder="Last Name"
                      className="py-1.5 px-6 shadow-md rounded-2xl outline-none text-center"
                    />
                  </div>
                </div>
              )}

              {/* Select gender options */}
              {handleUpdateProfileType === "Gender" && (
                <div className=" mt-5 flex flex-col justify-center items-center ">
                  <select
                    name="gender"
                    value={postSubmitData.gender}
                    onChange={(e) => {
                      setPostSubmitData({
                        ...postSubmitData,
                        gender: e.target.value,
                      });
                    }}
                    className="text-gray-400 px-3 w-[20vh] py-1 focus:outline-none shadow-md border-gray-300 rounded-xl cursor-pointer"
                  >
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              )}

              {/* Email Field */}
              {handleUpdateProfileType === "Email" && (
                <div className="my-5 flex flex-col space-y-8 justify-center items-center ">
                  {/* Previous Email */}
                  <input
                    type="email"
                    value={userData?.email}
                    disabled={true}
                    placeholder={userData?.email}
                    className="py-1.5 px-10 shadow-md rounded-2xl outline-none text-center"
                  />
                  {/* New Email */}
                  <input
                    type="email"
                    value={postSubmitData.email}
                    onChange={(e) =>
                      setPostSubmitData({
                        ...postSubmitData,
                        email: e.target.value,
                      })
                    }
                    placeholder="New Email"
                    className="py-1.5 px-10 shadow-md rounded-2xl outline-none text-center"
                  />

                  {/* Enter password to update email */}
                  <p>{"Enter Your password to verify that it's you."}</p>
                  <input
                    type="password"
                    value={postSubmitData.password}
                    onChange={(e) =>
                      setPostSubmitData({
                        ...postSubmitData,
                        password: e.target.value,
                      })
                    }
                    placeholder="Enter Password"
                    className="py-1.5 px-5 shadow-md rounded-2xl outline-none text-center"
                  />
                </div>
              )}

              {/* Password field */}
              {handleUpdateProfileType === "Password" && (
                <div className="mb-5 flex flex-col  justify-center items-center space-y-8 ">
                  {/* <label htmlFor="password">Password</label> */}

                  {/* Old Password */}
                  <div>
                    <p>
                      {"Enter your previous password to verify that it's you."}
                    </p>
                    <div className="flex justify-center items-center mt-5">
                      <input
                        type="password"
                        value={postSubmitData.currentPassword}
                        onChange={(e) =>
                          setPostSubmitData({
                            ...postSubmitData,
                            currentPassword: e.target.value,
                          })
                        }
                        placeholder="Current Password"
                        className="py-1.5 px-5 shadow-md rounded-2xl outline-none text-center"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <input
                    type="password"
                    value={postSubmitData.newPassword}
                    onChange={(e) =>
                      setPostSubmitData({
                        ...postSubmitData,
                        newPassword: e.target.value,
                      })
                    }
                    placeholder="New Password"
                    className="py-1.5 px-5 shadow-md rounded-2xl outline-none text-center"
                  />
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            onClick={(e) => {
              handleUpdateProfile(e);
            }}
            className="border focus:outline-none bg-gray-900 text-white rounded-2xl shadow-xl px-6   py-3 font-bold hover: transform hover:scale-110  hover:shadow-xl "
          >
            Update
          </button>
        </div>
      </div>

      {/* Post Form  End*/}
    </>
  );
};

export default EditProfileDetails;
