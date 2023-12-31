import { LOGIN, USERPROFILEDATA, LOGOUT, USERPROFILEDATAUPDATE } from "./types";
import * as api from "../../pages/api";
import { toast } from "react-toastify";

// log in user
export const logInUser = (userLogInData, router) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userLogInData);
    if (data) {
      dispatch({
        type: LOGIN,
        payload: data,
      });
      if (data) {
        dispatch({
          type: USERPROFILEDATA,
          payload: data.user.image,
        });
      }

      if (data.ok == "true") {
        // Save user data  in local storage
        window.localStorage.setItem("user", JSON.stringify(data.user));
        // Save user authentication token in local storage
        window.localStorage.setItem("token", JSON.stringify(data.token));

        // Save user profile data in local storage
        // window.localStorage.setItem(
        //   "userProfileData",
        //   JSON.stringify(data.user.image)
        // );

        // Create local storage for favorite Posts List
        window.localStorage.setItem("favoritePostsList", JSON.stringify([]));
        router.push("/dashboard/user");
        toast.success("Welcome, You have logged in successfully.");
      }
    }
  } catch (error) {
    // console.log("ERROR=> ", error);
    toast.error("Log in Error, Please try again to log in!");
  }
};

// Log Out User From Browser when clicked Log Out
export const logOutUser = (userLogOut) => {
  return { type: LOGOUT, payload: userLogOut };
};

// User profile image update
export const userProfileDataUpdate = (user) => async (dispatch) => {
  if (user) {
    dispatch({ type: USERPROFILEDATAUPDATE, payload: user });
  }
  if (user) {
    window.localStorage.setItem("user", JSON.stringify(user));
  }
};
