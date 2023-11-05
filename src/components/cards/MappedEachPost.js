import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Avatar } from "../../../public";
import {
  HiOutlineDotsHorizontal,
  HiHeart,
  HiOutlineBookmark,
} from "react-icons/hi";

import Link from "next/link";
import OptionsDropdown from "../dropdown/PostEditOptions/OptionsDropdown";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  addPostToBookmark,
  postLiked,
  postUnliked,
  removePostFromBookmark,
} from "../../../pages/api";
import { toast } from "react-toastify";

const MappedEachPost = ({ post, getUserPosts }) => {
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  // console.log(post);
  const router = useRouter();

  // Get user Id from state
  const userId = useSelector((state) => state?.authUser?.currentUser?._id);
  // console.log(userId)

  // Get Token from state
  const token = useSelector((state) => state?.authUser?.token);

  const handleOptionsDropdown = () => {
    setShowOptionsDropdown((prev) => !prev);
  };

  // console.log(post);

  const postOptionsBtnRef = useRef(null);

  // Close Options Dropdown on mouse clicked event
  useEffect(() => {
    const closePostOptionsDropdownOnClick = (e) => {
      // setIsMobileViewDropdown(false)
      // console.log(e.path[1]);
      // console.log(profileDropdownBtnRef.current)
      if (e.path[1] !== postOptionsBtnRef.current) {
        setShowOptionsDropdown(false);
        // console.log(e);
      }
    };
    document.body.addEventListener("click", closePostOptionsDropdownOnClick);

    return () =>
      document.body.removeEventListener(
        "click",
        closePostOptionsDropdownOnClick
      );
  }, []);

  // Redirect to single Post view
  const singlePostView = (post) => {
    router.push(`/viewpost/individual_post/${post._id}`);
  };

  // Add Post to Bookmark
  const handleAddPostToBookmark = async () => {
    try {
      const postId = post._id;
      // console.log(postId)
      const { data } = await addPostToBookmark(postId, token);
      // console.log(data);
      if (data.postBookmarked) {
        getUserPosts();
        toast.success("Post added to bookmark");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  //Remove Post from Bookmark
  const handleRemovePostFromBookmark = async () => {
    try {
      const postId = post._id;
      // console.log(postId)
      const { data } = await removePostFromBookmark(postId, token);
      // console.log(data);
      if (data.postUnbookmarked) {
        getUserPosts();

        toast.success("Post removed from bookmark");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handle Post liked by user
  const handlePostLiked = async (postId) => {
    try {
      // console.log(postId)
      const { data } = await postLiked(postId, token);
      // console.log(data);
      if (data.postLiked) {
        getUserPosts();
        toast.success("Post Liked");
      }
    } catch (error) {
      // console.log("Error => ", error);
      toast.error("Please Login to like");
    }
  };

  //Handle Post unliked by user
  const handlePostUnliked = async (postId) => {
    try {
      // console.log(postId);
      const { data } = await postUnliked(postId, token);
      // console.log(data);
      if (data.postUnliked) {
        getUserPosts();
        toast.success("Post Unliked");
      }
    } catch (error) {
      // console.log("Error => ", error);
    }
  };

  return (
    <>
      <div
        key={post._id}
        className=" w-[40vw]  p-2 rounded-md  shadow-md bg-white"
      >
        <div className="flex justify-between items-center mx-2">
          <div className="flex">
            {/* Profile Image */}
            {post?.postedBy?.userProfileImage?.url ? (
              <Image
                src={post?.postedBy?.userProfileImage?.url}
                alt="Picture of the author"
                width={50}
                height={50}
                className="rounded-full object-cover cursor-pointer"
              />
            ) : (
              <Image
                src={Avatar}
                alt="Picture of the author"
                width={50}
                height={50}
                className="rounded-full object-cover cursor-pointer"
              />
            )}
            {/* Name and time */}
            <div className="ml-3">
              <p className="text-base font-medium cursor-pointer ">
                <span className="mr-2">{post?.postedBy?.fname}</span>
                {post.postedBy.lname} <span></span>
              </p>
              <p className="text-base ">{moment(post?.createdAt).calendar()}</p>
            </div>
          </div>

          {/* Options dropdown button */}
          <div onClick={handleOptionsDropdown} ref={postOptionsBtnRef}>
            <HiOutlineDotsHorizontal className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        <div>
          <OptionsDropdown
            showOptionsDropdown={showOptionsDropdown}
            post={post}
            getUserPosts={getUserPosts}
            handleAddPostToBookmark={handleAddPostToBookmark}
            handleRemovePostFromBookmark={handleRemovePostFromBookmark}
          />
        </div>

        {/* Post description Show */}
        <div className=" pt-4 pb-1 ml-2 ">
          <p>{post.description}</p>
        </div>

        {/* Posted Image  */}

        {post?.image?.url ? (
          <div
            onClick={() => singlePostView(post)}
            className="flex justify-center items-center relative   h-[60vh] "
          >
            <Image
              src={post?.image?.url}
              alt="Picture of the user"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        ) : null}

        {/* Like and comment */}
        <div className="grid grid-cols-3 justify-between mx-5 items-center mt-5 mb-2 pt-2  ">
          <div className="flex  space-x-1  ">
            {post?.likes?.includes(userId) ? (
              <>
                <div onClick={() => handlePostUnliked(post._id)}>
                  <HiHeart className="h-6 w-6 text-red-600 cursor-pointer" />
                </div>
              </>
            ) : (
              <>
                <div onClick={() => handlePostLiked(post._id)}>
                  <HiHeart className="h-6 w-6 text-white outline-2  stroke-gray-900 stroke-2 cursor-pointer" />
                </div>
              </>
            )}
            <div className="flex pl-1 ">
              <p className="pr-1">{post?.likes?.length} </p>
              <p>Likes</p>
            </div>
          </div>
          <div
            className="space-x-1 flex items-center justify-center cursor-pointer"
            onClick={() => singlePostView(post)}
          >
            <span>{post?.comments?.length} </span>
            <span>comments</span>
          </div>
          {post?.bookmarkedBy.includes(userId) ? (
            <div
              className="flex items-center justify-end "
              onClick={() => handleRemovePostFromBookmark()}
            >
              <HiOutlineBookmark className="h-6 w-6  text-gray-900 fill-gray-900  cursor-pointer" />
            </div>
          ) : (
            <div
              className="flex items-center justify-end "
              onClick={() => handleAddPostToBookmark()}
            >
              <HiOutlineBookmark className="h-6 w-6 text-gray-900   cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(MappedEachPost);
