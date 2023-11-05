import { NAVMENUDATAS } from "../actions/types";

// Nav menu data Reducer

const initialState = {
  navMenuDatas:
    typeof window !== "undefined" && window.localStorage.getItem("navMenuDatas")
      ? JSON.parse(window.localStorage.getItem("navMenuDatas") || "")
      : [],
};
export const navMenuDatas = (state = initialState, action) => {
  switch (action.type) {
    case NAVMENUDATAS:
      return {
        ...state,
        navMenuDatas: action.payload,
      };
    default:
      return state;
  }
};
