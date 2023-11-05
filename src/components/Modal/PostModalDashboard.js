import React, { useState, useEffect } from "react";

import { HiOutlineX, HiPlus, HiTrash } from "react-icons/hi";
import { Avatar } from "../../../public";
import Image from "next/image";
import BackgroundGray from "./BackgroundGray";
import { fetchPostToEdit, postSubmit, updatePost, uploadImage } from "../../../pages/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const PostModalDashboard = ({
  dashboardTrue,
  editPost,
  setPostModal,
  getUserPosts,
  postId
}) => {
  const [postSubmitData, setPostSubmitData] = useState({
    postType: "user_post",
    description: "",
    category: "",
    image: {
      url: "",
      public_id: "",
    },
  });
  // console.log("clicked")
  // console.log(postId)

  const router = useRouter();

  // console.log(postSubmitData.description)

  // get token from state
  const token = useSelector((state) => state.authUser.token);

  // Handle Image Upload
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    try {
      const { data } = await uploadImage(formData, token);
      // console.log(data);
      setPostSubmitData({ ...postSubmitData, image: data });
      // console.log(postSubmitData.image);
    } catch (error) {
      // console.log("Error=> ", error);
    }
  };

  // handle Post Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postSubmit(postSubmitData, token);
      // console.log(postSubmitData);
      // console.log(token);
      // console.log(data);

      if (data.saved == "true") {
        // console.log("Called");

        toast.success("Your Post is created successfully");
        setPostModal(false);
        getUserPosts();
        router.push("/dashboard/user");
      }
    } catch (error) {
      // console.log("Error =>", error);
    }
  };

  // Category Data
  // const categoryData= [
  //   {
  //     name:"Sunway Events",
  //     value:"sunway_events"
  //   },
  //   {
  //     name:"Stuedents Confession",
  //     value:"sunway_events"
  //   },
  //   {
  //     name:"Sunway Events",
  //     value:"sunway_events"
  //   },
  //   {
  //     name:"Sunway Events",
  //     value:"sunway_events"
  //   }

  // ]


// Update post 
// Fetch post pre data
useEffect(() => {
  if (editPost) fetchPostPreData();
}, []);


const fetchPostPreData = async () => {
  // console.log(postId);
  const { data } = await fetchPostToEdit(postId);
  // console.log(data);
  setPostSubmitData({
    ...postSubmitData,
    postType: data.postType,
    description: data.description,
    category: data.category,
    image: {
      url: data.image.url,
      public_id: data.image.public_id,
    }
  });
};


  // Handle Update post
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(postId);
    try {
      const { data } = await updatePost(postSubmitData, postId);
      // console.log(data);
      // console.log("update called");
      if (data.updated == "true") {
        // handlePostModal(false);
        getUserPosts();
        toast.success("Your post is updated successfully");
        setPostModal(false);
      }
    } catch (error) {
      // console.log("Error=> ", error);
    }
  };


  return (
    <>
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue={dashboardTrue} />
      <div
        style={{ width: "40rem" }}
        className="fixed ml-auto mr-auto left-0 right-0 bg-white  top-6  z-50 rounded-lg"
      >
        <div className="flex  justify-between  mx-10 mt-3">
          {/* check if post is to be edited or not */}
          {editPost ? (
            <div className="mt-2 text-xl font-semibold ">Edit Post</div>
          ) : (
            <div className="mt-2 text-xl font-semibold ">Post</div>
          )}

          <div>
            <button
              // onClick={() => handlePostModal(false)}
              onClick={() => setPostModal(false)}
              className="focus:outline-none"
            >
              <HiOutlineX className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
            </button>
          </div>
        </div>

        <div className="mt-3 mx-8 ">
          <textarea
            className=" h-28 w-full focus:outline-none rounded-xl p-2 border-2 border-gray-300 "
            placeholder="Write descriptions............"
            value={postSubmitData.description}
            onChange={(e) =>
              setPostSubmitData({
                ...postSubmitData,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>

        {/* Select Category  */}
        <div className="ml-8 mt-2 ">
          <p className="text-base  font-medium text-gray-600 mb-1.5">
            Please select what you want to post
          </p>
          <select
            value={postSubmitData.category}
            onChange={(e) => {
              setPostSubmitData({
                ...postSubmitData,
                category: e.target.value,
              });
            }}
            className="px-1 py-1 focus:outline-none border-2 border-gray-300 rounded-md cursor-pointer"
          >
            <option value="">Select</option>
            <option value="sunway_events">Sunway Events</option>
            <option value="students_confessions">Student Confession</option>
            <option value="memes">Memes</option>
            <option value="assignments_confusions_and_discussions">
              Assignments Confusions And Discussions
            </option>
            <option value="jobs_and_intern_news">Jobs/ Intern News</option>
            <option value="alumni_talks">Alumni Talks</option>
            <option value="sunway_complains">Sunway Complains</option>
          </select>
        </div>

        {/* Upload Image Section */}
        <div className="flex justify-between ml-8 mt-8  items-center mr-10">
          <div className="ml-2">
            <label className="flex flex-col shadow-md bg-gray-100 cursor-pointer rounded-md h-24 w-32  justify-center items-center">
              <input
                type="file"
                accept="images/*"
                hidden
                // value={postSubmitData.image.url}
                onChange={handleImage}
              />

              <HiPlus className="h-12 w-12 text-gray-500 " />
              <p className="text-base text-gray-500 font-normal">
                Upload Image
              </p>
            </label>
          </div>
          <div className="flex-col justify-center items-center text-center ">
            {/* Delete Image Icon */}
            {postSubmitData.image && postSubmitData.image.url ? (
              <div className="flex justify-end  ">
                <button
                  // onClick={handleImageUploaded}
                  className="rounded-full shadow-md p-2 mb-2 focus:outline-none"
                >
                  <HiTrash className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ) : (
              ""
            )}

            {/* image Preview */}
            {postSubmitData.image && postSubmitData.image.url ? (
              <Image
                //  loader={myLoader}
                src={postSubmitData.image.url}
                alt=""
                height={150}
                width={150}
                className=""
              />
            ) : (
              <Image
                src={Avatar}
                alt=""
                height={100}
                width={100}
                className=""
              />
            )}

            <p className="font-semibold text-base text-gray-500 mt-2">
              Image Preview
            </p>
          </div>
        </div>
        {editPost ? (
          <div className="flex justify-center items-center mt-0.5 ">
            <button
              type="submit"
              onClick={handleUpdatePost}
              className="border focus:outline-none bg-gray-900 text-white rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Update Post
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-0.5 ">
            <button
              type="submit"
              onClick={handleSubmit}
              className="border focus:outline-none bg-gray-900 text-white rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Post Now
            </button>
          </div>
        )}
      </div>

      {/* Post Form  End*/}
    </>
  );
};

export default PostModalDashboard;
