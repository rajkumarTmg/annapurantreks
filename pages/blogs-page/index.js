import React, { useEffect, useState } from "react";
import PostCard from "../../src/components/cards/PostCard";
import { fetchAllPosts, postLiked, postUnliked } from "../api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SideBarNavigation from "../../src/components/sideBarNavigation/SideBarNavigation";

// import Head from 'next/head'

const Home = () => {
  const [userPosts, setUserPosts] = useState();

  // Get token from store
  const token = useSelector((state) => state.authUser.token);

  //get user posts
  useEffect(() => {
    getUserPosts();
  }, []);

  // Fetch all users Posts news feed
  const getUserPosts = async () => {
    try {
      const postType = "user_post";
      const { data } = await fetchAllPosts(postType);
      setUserPosts(data);
      console.log(data);
      // console.log(data[1]._id);

      {
        // posts && console.log(posts[0]._id);
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  return (
    <div className="flex space-x-16  ">
      <SideBarNavigation />

      <div className="flex-grow relative  mt-10 ">
        <div className=" flex justify-center items-center mr-20 space-y-16">
          <div className="space-y-16">
            <PostCard userPosts={userPosts} getUserPosts={getUserPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
