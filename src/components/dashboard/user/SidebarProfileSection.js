import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Avatar } from "../../../../public";
import moment from "moment";
import { HiPencil } from "react-icons/hi";
import { useSelector } from "react-redux";
import ProfileImageUpdateModal from "../../Modal/ProfileImageUpdateModal";

const SidebarProfileSection = ({ userData, getUserPosts }) => {
  const [authUser, setAuthUser] = useState();
  const [profileImageUpdateModal, setProfileImageUpdateModal] = useState(false);

  // get user image url from store
  // const userProfileImageUrlfromStore = useSelector(
  //   (state) => state.authUser.currentUser?.userProfileImage?.url
  // );

  //check whether the user is logged in or not if logged in and isAuthenticated is true
  const userAuth = useSelector((state) => state.authUser.isAuthenticated);
  useEffect(() => {
    setAuthUser(userAuth);
  });

  // get user from local Storage
  const user =
    userAuth &&
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("user") || "");
  // console.log(user?.userProfileImage?.url);
  const profileUrl = user?.userProfileImage?.url;

  // console.log(userProfileImageUrlfromStore);

  // update user Profile image
  const updateUserProfileImage = () => {
    setProfileImageUpdateModal(true);
  };

  return (
    <>
      <div className="px-10 py-10 w-[30vw]  ">
        <div className=" sticky top-32 ">
          {/* Profile Image */}
          <div className="relative">
            {/* Profile image edit button */}
            <div onClick={() => updateUserProfileImage()} className="">
              <HiPencil className="absolute h-7 w-7 top-0 left-20  z-10  text-gray-400 cursor-pointer bg-white  p-1 shadow-md rounded-full " />
            </div>

            {profileUrl ? (
              <Image
                src={profileUrl}
                alt="Picture of the author"
                width={100}
                height={100}
                className="rounded-full cursor-pointer"
              />
            ) : (
              <Image
                src={Avatar}
                alt="Picture of the author"
                width={100}
                height={100}
                className="rounded-full object-cover cursor-pointer"
              />
            )}
          </div>

          <div className="mt-3 space-y-2">
            <p className="font-bold ">
              <span className="mr-2">{user?.fname}</span>
              <span>{user?.lname}</span>
            </p>
            {/* <p className="font-semibold text-base">{userData?.gender}</p> */}
            <p>
              {/* College Name */}
              <div className="flex space-x-2">
                <p className="font-semibold text-base">Country: </p>
                {/* <p>{user?.country}</p> */}
                <p>Nepal</p>
              </div>
            </p>
            {/* <p>College</p>
        <p>Semester</p> */}
            <p>
              <span className="font-semibold text-base">Joined Date: </span>
              <span>{moment(userData?.createdAt).calendar()}</span>
            </p>
          </div>
        </div>
      </div>
      {
        // Profile Image Update Modal
        profileImageUpdateModal && (
          <ProfileImageUpdateModal
            setProfileImageUpdateModal={setProfileImageUpdateModal}
            dashboardTrue={true}
            userProfileUrl={profileUrl}
            getUserPosts={getUserPosts}
          />
        )
      }
    </>
  );
};

export default React.memo(SidebarProfileSection);
