import React, { useState, useEffect } from "react";
import SidebarSettingOptions from "../../../src/components/setting/SidebarSettingOptions";
import { useSelector } from "react-redux";
import EditProfileDetails from "../../../src/components/Modal/EditProfileDetails";

const SecurityAndPassword = () => {
  const [userData, setUserData] = useState();
  const [profileUpdateModal, setProfileUpdateModal] = useState(false);
  const [updateUserDetailType, setUpdateUserDetailType] = useState();

  //User from state
  const user = useSelector((state) => state.authUser.currentUser);

  useEffect(() => {
    setUserData(user);
    console.log(user);
  }, [user]);

  const handleProfileUpdateModal = () => {
    setProfileUpdateModal(!profileUpdateModal);
  };

  return (
    <>
      <div className="flex   px-20 h-[100vh] bg-white">
        {/* Sidebar Setting Options */}
        <SidebarSettingOptions />

        {/* Edit Layout */}
        <div className="ml-16 space-y-10  flex flex-col flex-grow mt-20  ">
          <div className="flex justify-between items-center ">
            {/* Email Edit */}
            <div className="flex ">
              <p className="font-semibold text-lg w-[10vw]">email </p>
              <p className="font-medium text-base">{userData?.email}</p>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-gray-300 rounded-lg text-base font-normal"
                onClick={() => {
                  handleProfileUpdateModal();
                  setUpdateUserDetailType("Email");
                }}
              >
                {" "}
                Edit
              </button>
            </div>
          </div>

          {/* Password Edit  */}
          <div className="flex justify-between mt-5 items-center">
            <div className="flex ">
              <p className="font-semibold text-lg w-[10vw]">Password </p>
              <p className="font-medium text-base">********</p>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-gray-300 rounded-lg text-base font-normal"
                onClick={() => {
                  handleProfileUpdateModal();
                  setUpdateUserDetailType("Password");
                }}
              >
                {" "}
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

export default SecurityAndPassword;
