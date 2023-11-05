import React from "react";
import MappedEachPost from "./MappedEachPost";

const PostCard = ({ userPosts, getUserPosts }) => {
  return (
    <>
      {userPosts?.map((post) => (
        <MappedEachPost
          key={post._id}
          post={post}
          getUserPosts={getUserPosts}
        />
      ))}
    </>
  );
};

export default React.memo(PostCard);
