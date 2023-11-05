import { NAVMENUDATAS } from "./types";

// Nav menu datas
export const navMenuDatas = (navMenuDatas) => async (dispatch) => {
  if (navMenuDatas) {
    dispatch({ type: NAVMENUDATAS, payload: navMenuDatas });
    (typeof window !== 'undefined') && window.localStorage.setItem("navMenuDatas", JSON.stringify(navMenuDatas));
  }
};
