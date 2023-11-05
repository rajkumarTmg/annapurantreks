import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Avatar } from "../../../../public";
import Comments from "../../../../src/components/individualPostRoute/Comments";
import { useRouter } from "next/router";
import {
  addPostToBookmark,
  deletePostComment,
  fetchIndividualPost,
  fetchPostCommentsDataOnly,
  postCommentSubmit,
  removePostFromBookmark,
} from "../../../api";
import moment from "moment";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import OptionsDropdown from "../../../../src/components/dropdown/PostEditOptions/OptionsDropdown";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const IndividualPost = () => {
  const router = useRouter();
  const postOptionsButtonRef = useRef(null);

  // console.log(router.query._id)
  const postId = router.query._id;
  // console.log(postId)

  const [post, setPost] = useState();

  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
  const [userPostsLoading, setUserPostsLoading] = useState(true);

  // Get comments data
  const [postCommentsData, setPostCommentsData] = useState();
  // postCommentsData && console.log(postCommentsData[0])

  // Comments state
  const [addComment, setAddComment] = useState("");

  console.log(addComment);

  // Get Token from state
  const token = useSelector((state) => state?.authUser?.token);

  // Options Dropdown Show Hide
  const handleOptionsDropdown = () => {
    setShowOptionsDropdown((prev) => !prev);
  };

  // fetch post
  useEffect(() => {
    if (postId) getUserPosts();
  }, [postId]);

  // Fetch individual post by its id
  const getUserPosts = async () => {
    try {
      // console.log(postId)
      const { data } = await fetchIndividualPost(postId);
      // console.log("Fetch posts called");

      data && console.log(data.comments);
      setPost(data);
      console.log(data);
      setPostCommentsData(data.comments);
      setUserPostsLoading(false);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // Submit comments
  const handleAddComments = async () => {
    // console.log("Called");
    try {
      const { data } = await postCommentSubmit(addComment, postId, token);
      if (data.commentPosted == "true") {
        // console.log(data.updatedPost.comments);
        // console.log("Called here");
        console.log(data);
        setPostCommentsData(data.updatedPost.comments);
        setAddComment("");
        toast.success("Your comment is posted successfully");
      }
      // console.log(data);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // Fetch comments only alternative method to fetch comments only -> this is to re-render the post comments after a comment has been deleted
  // const fetchCommentsOnly = async () => {
  //   try {
  //     const { data } = await fetchPostCommentsDataOnly(postId, token);
  //     // console.log(data)
  //     setPostCommentsData(data);
  //   } catch (error) {
  //     console.log("Error=> ", error);
  //   }
  // };

  // handle delete comment by its id
  const handleDeleteComment = async (commentData) => {
    try {
      const answer = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (!answer) return;
      const commentId = commentData._id;
      // console.log(commentId);
      const { data } = await deletePostComment(postId, commentId, token);
      console.log(data);
      if (data.postCommentDeleted == "true") {
        //  call comments fresh new
        setPostCommentsData(data.postComments);
        console.log(data.postComments);

        // fetchCommentsOnly(); --> alternative
        toast.success("Your comment is deleted successfully");
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // Close Options Dropdown on mouse clicked event
  useEffect(() => {
    const closePostOptionsDropdownOnClick = (e) => {
      // setIsMobileViewDropdown(false)
      // console.log(e.path[1]);
      // console.log(profileDropdownBtnRef.current)
      if (e.path[1] !== postOptionsButtonRef.current) {
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
      console.log(error);
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
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className={userPostsLoading ? "h-[100vh]" : ""}>
        {post && (
          <>
            <div className="grid grid-cols-2  justify-around px-10 pt-5  ">
              <div className="mx-10 mt-10 ">
                <div className="sticky top-32  ">
                  <Image
                    src={post.image.url}
                    height={400}
                    width={600}
                    objectFit="contain"
                    // layout="fill"
                    alt="Picture of the user"
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className=" bg-white">
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
                        <span className="mr-2">{post.postedBy.fname}</span>
                        {post.postedBy.lname} <span></span>
                      </p>
                      <p className="text-base ">
                        {moment(post.createdAt).calendar()}
                      </p>
                    </div>
                  </div>

                  {/* Options dropdown button */}
                  <div
                    className="flex justify-end "
                    onClick={handleOptionsDropdown}
                    ref={postOptionsButtonRef}
                  >
                    <HiOutlineDotsHorizontal className="h-6 w-6 cursor-pointer" />
                  </div>
                </div>
                {/* Show Options Dropdown  */}
                <div>
                  {showOptionsDropdown && (
                    <OptionsDropdown
                      post={post}
                      showOptionsDropdown={showOptionsDropdown}
                      handleAddPostToBookmark={handleAddPostToBookmark}
                      handleRemovePostFromBookmark={
                        handleRemovePostFromBookmark
                      }
                      getUserPosts={getUserPosts}
                    individualPost={true}

                    />
                  )}
                </div>

                {/* post description */}
                <div className="ml-3 mt-4">
                  <p>{post.description}</p>
                </div>

                {/* Comments in the post  */}
                <div>
                  <Comments
                    addComment={addComment}
                    setAddComment={setAddComment}
                    handleAddComments={handleAddComments}
                    postCommentsData={postCommentsData}
                    handleDeleteComment={handleDeleteComment}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default IndividualPost;
