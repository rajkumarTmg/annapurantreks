import React, { useState, useEffect } from "react";
// import UserPosts from "../../src/components/dashboard/user/UserPosts";
import { fetchBookmarkedPosts } from "../../api";
import { useSelector } from "react-redux";
import PostCard from "../../../src/components/cards/PostCard"

const BookmarkedPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsLoading, setUserPostsLoading] = useState(true);

  //Get token from state
  const token = useSelector((state) => state?.authUser?.token);

  //get user bookmarked posts
  useEffect(() => {
    getUserPosts();
  }, [token]);

  // Fetch user bookmarked Posts in dashboard
  const getUserPosts = async () => {
    try {
      const { data } = await fetchBookmarkedPosts(token);
      const reverseData = data.reverse();
      setUserPosts(reverseData);
      setUserPostsLoading(false);

      console.log(data);
      // console.log(data?.length);
      // console.log(data[1]._id);
      // userPosts && console.log(userPosts?.length)
    } catch (error) {
      console.log("Error => ", error);
    }
  };
  console.log(userPostsLoading);

  return (
    <>
      <div className={userPostsLoading ? "mt-10 h-[100vh]" : "mt-10"}>
        <p className="text-center mb-10 font-bold text-2xl">
          Your Bookmarked Posts
        </p>

        <div className="flex flex-col  justify-center items-center">
          <div className="space-y-16">
            {userPosts && (
              <PostCard
                userPosts={userPosts}
                getUserPosts={getUserPosts}
                bookmarkPageTrue={true}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookmarkedPosts;
