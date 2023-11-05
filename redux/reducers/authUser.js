import { LOGIN, LOGOUT, USERPROFILEDATAUPDATE } from "../actions/types";
import axios from "axios";


const initialState = {
  // isAuthenticated: false,

  isAuthenticated: (typeof window !== 'undefined') && window.localStorage.getItem("user") ? true : false,
  //After registered backend will send ok:true token and user data that will be stored herer
  token:(typeof window !== 'undefined') && window.localStorage.getItem("token")
  ? JSON.parse(window.localStorage.getItem("token") || "")
  : '',
  currentUser: (typeof window !== 'undefined') && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user") || "")
    : {},
      
};

export const authUser = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          currentUser: action.payload.user,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          token:'',
          currentUser: action.payload.user,
        };
      default:
        return state;
    }
  };


  // user profile image update
  export const userProfileDataUpdate = (state = initialState, action) => {
    switch (action.type) {
      case USERPROFILEDATAUPDATE:
        return {
          ...state,
         currentUser: action.payload.user,
        };
      default:
        return state;
    }
  }