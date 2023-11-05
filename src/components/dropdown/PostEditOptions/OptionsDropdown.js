import React, { useState } from "react";
import { deletePost, updatePost } from "../../../../pages/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PostModalDashboard from "../../Modal/PostModalDashboard";

const OptionsDropdown = ({
  post,
  showOptionsDropdown,
  getUserPosts,
  handleAddPostToBookmark,
  handleRemovePostFromBookmark,
  individualPost,
}) => {
  const [postModal, setPostModal] = useState(false);

  // Get token from store
  const token = useSelector((state) => state?.authUser?.token);

  //Get user Id from store
  const userId = useSelector((state) => state?.authUser?.currentUser?._id);

  // Handle Delete post
  const handleDeletePost = async () => {
    try {
      const answer = window.confirm("Are you sure to delete?");
      if (!answer) return;
      const postId = post._id;
      const { data } = await deletePost(postId, token);
      // console.log(data);
      if (data.deleted) {
        toast.success("Post is Deleted");
        // window.location.reload();
        // fetch all user posts again
        getUserPosts();
      }
    } catch (error) {
      // console.log("Error => ", error);
    }
  };

  // Edit/ update post
  const handleUpdatePost = async () => {
    try {
      setPostModal(true);
      // console.log("called from options dropdown");
      // console.log(postModal);
    } catch (error) {
      // console.log("Error => ", error);
    }
  };

  return (
    <>
      {showOptionsDropdown && (
        <div className="relative">
          <div className="absolute z-20 right-0 bg-white border-[1px] shadow-xl  pl-1 pr-1 pt-3 pb-2 rounded-xl space-y-1 ">
            {userId === post?.postedBy?._id && (
              <>
                {individualPost != true && (
                  <div onClick={() => handleUpdatePost()}>
                    <p className="cursor-pointer hover:bg-gray-300 px-2 rounded-md pr-5">
                      Edit
                    </p>
                  </div>
                )}
                <div onClick={() => handleDeletePost()}>
                  <p className="cursor-pointer hover:bg-gray-300 px-2 rounded-md pr-5">
                    Delete{" "}
                  </p>
                </div>
              </>
            )}
            <div>
              {post?.bookmarkedBy?.includes(userId) ? (
                <div onClick={() => handleRemovePostFromBookmark(post._id)}>
                  <p className="cursor-pointer hover:bg-gray-300 px-2 rounded-md pr-5">
                    Remove from Bookmark
                  </p>
                </div>
              ) : (
                <div onClick={() => handleAddPostToBookmark(post._id)}>
                  <p className="cursor-pointer hover:bg-gray-300 px-2 rounded-md pr-5">
                    Add to Bookmark
                  </p>
                </div>
              )}
            </div>
            <p className="cursor-pointer hover:bg-gray-300 px-2 rounded-md pr-5">
              Report Post
            </p>
          </div>
        </div>
      )}
      {postModal && (
        <PostModalDashboard
          dashboardTrue={true}
          editPost={true}
          getUserPosts={getUserPosts}
          setPostModal={setPostModal}
          postId={post._id}
        />
      )}
    </>
  );
};

export default OptionsDropdown;
