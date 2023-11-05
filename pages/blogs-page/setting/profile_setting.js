import React, { useEffect, useState } from "react";
import SidebarSettingOptions from "../../../src/components/setting/SidebarSettingOptions";
import { useSelector } from "react-redux";
import EditProfileDetails from "../../../src/components/Modal/EditProfileDetails";
const ProfileSetting = () => {
  // const [userData, setUserData] = useState();
  const [profileUpdateModal, setProfileUpdateModal] = useState(false);
  const [updateUserDetailType, setUpdateUserDetailType] = useState();

  //User from state
  // const user = useSelector((state) => state.authUser.currentUser);

  //Get user from local storage
  const user =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("user") || "");

  // useEffect(() => {
  //   setUserData(user);
  //   console.log(user);
  // }, [user]);

  const handleProfileUpdateModal = () => {
    setProfileUpdateModal(!profileUpdateModal);
  };

  return (
    <>
      <div className="flex   px-20  h-[100vh] bg-white">
        {/* Sidebar Setting Options */}
        <SidebarSettingOptions />

        {/* Edit Layout */}
        <div className="ml-16 space-y-10  flex flex-col flex-grow mt-20 ">
          {/* Name Edit */}
          <div className="flex justify-between items-center ">
            <div className="flex ">
              <p className="font-semibold text-lg w-[10vw]">Name </p>
              <p className="font-medium text-base space-x-2">
                <span>{user?.fname}</span>
                <span>{user?.lname}</span>
              </p>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-gray-300 rounded-lg text-base font-normal"
                onClick={() => {
                  handleProfileUpdateModal();
                  setUpdateUserDetailType("Name");
                }}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Address Edit  */}
          <div className="flex justify-between items-center">
            <div className="flex ">
              <p className="font-semibold text-lg w-[10vw]">College </p>
              <p className="font-medium text-base">{user?.college}</p>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-gray-300 rounded-lg text-base font-normal"
                // onClick={() => {
                //   handleProfileUpdateModal();
                //   setUpdateUserDetailType("name");
                // }}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Gender Edit */}
          <div className="flex justify-between items-center ">
            <div className="flex ">
              <p className="font-semibold text-lg w-[10vw]">Gender </p>
              <p className="font-medium text-base">{user?.gender}</p>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-gray-300 rounded-lg text-base font-normal"
                onClick={() => {
                  handleProfileUpdateModal();
                  setUpdateUserDetailType("Gender");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {profileUpdateModal && (
        <EditProfileDetails
          handleProfileUpdateModal={handleProfileUpdateModal}
          handleUpdateProfileType={updateUserDetailType}
        />
      )}
    </>
  );
};

export default ProfileSetting;
