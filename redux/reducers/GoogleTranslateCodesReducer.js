import { GOOGLELANGUAGETRANSLATECODES } from "../actions/types";
const initialState = {
  googleTranslateCodes: "",
};
export const googleTranslateCodes = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLELANGUAGETRANSLATECODES:
      return {
        ...state,
        googleTranslateCodes: action.payload,
      };
    default:
      return state;
  }
};
