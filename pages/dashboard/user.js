import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Image1 } from "../../public";
import UserPosts from "../../src/components/dashboard/user/UserPosts";
import SidebarProfileSection from "../../src/components/dashboard/user/SidebarProfileSection";
import { HiOutlineCamera, HiPlus } from "react-icons/hi";
import PostCard from "../../src/components/cards/PostCard";
import PostModalDashboard from "../../src/components/Modal/PostModalDashboard";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchPosts } from "../api";
import { toast } from "react-toastify";

const User = () => {
  const [postModal, setPostModal] = useState(false);
  const [userData, setUserData] = useState();
  const [authUserCheck, setAuthUserCheck] = useState();
  const [userPosts, setUserPosts] = useState([]);

  const [delayUserPostNotFound, setDelayUserPostNotFound] = useState(false);

  const router = useRouter();

  const handlePostModal = () => {
    setPostModal(true);
  };

  //check whether the user is logged in or not if logged in and isAuthenticated is true then redirect to dashboard
  const authUser = useSelector((state) => state.authUser.isAuthenticated);
  // console.log(authUser);
  const token = useSelector((state) => state.authUser.token);
  const currentUser = useSelector((state) => state.authUser.currentUser);
  // console.log(authUser);
  if (authUserCheck == false) {
    router.push("/auth/login");
  }

  //user from state
  const user = useSelector((state) => state.authUser.currentUser);
  // console.log(user);

  useEffect(() => {
    setAuthUserCheck(authUser);
    setUserData(user);
    setTimeout(() => {
      setDelayUserPostNotFound(true);
    }, 2000);
  });

  //get user posts
  useEffect(() => {
    if (currentUser && token) getUserPosts();
  }, [token]);

  // Fetch user Posts in dashboard
  const getUserPosts = async () => {
    try {
      const { data } = await fetchPosts(token);
      setUserPosts(data);
      // console.log(data?.length);
      // console.log(data[1]._id);
      // userPosts && console.log(userPosts?.length)

      {
        // posts && console.log(posts[0]._id);
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  return (
    <>
      {authUserCheck && (
        <>
          <div className="flex flex-row  ">
            {/* User profile Side Bar */}
            <SidebarProfileSection userData={userData} getUserPosts={getUserPosts} />

            {/* Posts Layout */}
            <div className=" flex-grow relative">
              {/* Cover Image  */}
              <div className=" relative   h-[20vw] w-[full]  ">
                <Image
                  src={Image1}
                  alt="Picture of the user"
                  layout="fill"
                  objectFit="cover"
                />
                <label className="flex space-x-2 cursor-pointer  bg-gray-600 px-2 py-2 absolute right-0 bottom-0">
                  {/* <HiOutlineCamera className="h-6 w-6" /> */}
                  <p> Annapurna Treks </p>
                </label>
              </div>

              {/* Add New Post Button */}

              <div
                className="mt-8 flex justify-center items-center "
                onClick={handlePostModal}
              >
                <input
                  type="text"
                  className="bg-white shadow-md cursor-pointer focus:outline-none  rounded-2xl pl-5 py-1.5 text-gray-900 font-base"
                  placeholder="Add New Post"
                />
                <div className="bg-white shadow-lg  ml-3 rounded-md p-[0.5px] cursor-pointer">
                  <HiPlus className="h-6 w-6 " />
                </div>
              </div>

              {/* Post Modal Show Hide */}
              {postModal && (
                <PostModalDashboard
                  editPost={false}
                  setPostModal={setPostModal}
                  getUserPosts={getUserPosts}
                />
              )}

              {/* User Posts */}
              <div className="mt-8">
                <span className="font-bold text-lg ml-5">Your Blogs</span>
                <div className=" flex justify-center items-center mt-5  ">
                  <div className="space-y-16 p-20 ">
                    {userPosts?.length > 0 ? (
                      <PostCard
                        userPosts={userPosts}
                        getUserPosts={getUserPosts}
                      />
                    ) : (
                      delayUserPostNotFound && (
                        <p className="flex text-gray-900 font-normal text-lg">
                          {"You haven't posted anything yet"}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
