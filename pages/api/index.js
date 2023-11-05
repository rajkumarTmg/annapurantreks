import axios from "axios";

//sign up
export const signUp = async (signupData) => {
  return await axios.post("/auth/signup", signupData);
};

//login
export const loginUser = async (loginData) => {
  return await axios.post("/auth/login", loginData);
};

// Fetch Countries name
export const countriesData = async () => {
  return await axios.get("https://countriesnow.space/api/v0.1/countries");
};

// Upload Image Cloudinary
export const uploadImage = async (formData, token) => {
  return await axios.post("/upload-image", formData);
};

// Handle Post Submit
export const postSubmit = (postSubmitData, token) => {
  return axios.post(`/create-post`, postSubmitData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// fetch User Posts show in dashboard
export const fetchPosts = (token) => {
  return axios.get(`/user-posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Get individual post
export const fetchIndividualPost = (postId) => {
  console.log(postId);
  return axios.get(`/fetchindividualpost/${postId}`);
};

// fetch all Posts show in news feed
export const fetchAllPosts = (postType) => {
  return axios.get(`/fetch-all-users-posts/${postType}`);
};

// Update User Profile
export const updateUserProfile = (postSubmitData, token) => {
  return axios.put(`/update-user-profile`, postSubmitData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Handle Submit comments in the post
export const postCommentSubmit = (addComment, postId, token) => {
  return axios.post(
    `/submit-post-comment`,
    { addComment, postId },

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Handle Delete Post Comment
export const deletePostComment = (postId, commentId, token) => {
  return axios.put(
    `/delete-post-comment`,
    { postId, commentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// fetch post comments data only
export const fetchPostCommentsDataOnly = (postId, token) => {
  return axios.post(
    `/post-comments-data`,
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Post Liked
export const postLiked = (postId, token) => {
  return axios.put(
    `/post-liked`,
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Post unliked
export const postUnliked = (postId, token) => {
  return axios.put(
    `/post-unliked`,
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Get all users
export const fetchAllUsers = () => {
  return axios.get(`/fetch-all-users`);
};

// Fetch post by category
export const fetchPostsByCategory = (category) => {
  return axios.post(`/fetchpostsbycategory`, {
    category,
  });
};

// Delete Post
export const deletePost = (postId, token) => {
  return axios.delete(`/delete-post/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//fetch post to edit in Modal
export const fetchPostToEdit = (postId) => {
  return axios.post("/fetchposttoedit", { postId });
};

// Update post
export const updatePost = (postSubmitData, postId) => {
  // return console.log({postSubmitData, postId});
  return axios.put(`/updatepost/${postId}`, postSubmitData);
};

// Add post to Bookmark
export const addPostToBookmark = (postId, token) => {
  return axios.put(
    "/add-post-to-bookmark",
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Remove post from bookmark
export const removePostFromBookmark = (postId, token) => {
  return axios.put(
    "/remove-post-from-bookmark",
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//fetch bookmarked posts
export const fetchBookmarkedPosts = (token) => {
  return axios.get("/fetch-bookmarked-posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Update user name
export const updateUserName = (postSubmitData, token) => {
  return axios.put(
    "/update-user-name",
    { postSubmitData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Update user email
export const updateUserEmail = (postSubmitData, token) => {
  return axios.put(
    "/update-user-email",
    { postSubmitData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Update user password
export const updateUserPassword = (postSubmitData, token) => {
  return axios.put(
    "/update-user-password",
    { postSubmitData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Update user gender
export const updateUserGender = (postSubmitData, token) => {
  return axios.put(
    "/update-user-gender",
    { postSubmitData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};




