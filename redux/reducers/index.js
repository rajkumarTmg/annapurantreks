import { combineReducers } from "redux";
import { authUser } from "./authUser";
import { navMenuDatas } from "./navMenuDatas";
import { googleTranslateCodes } from "./GoogleTranslateCodesReducer";

export default combineReducers({
  authUser: authUser,
  navMenuDatas: navMenuDatas,
  googleTranslateCodes: googleTranslateCodes,
});
