import { GOOGLELANGUAGETRANSLATECODES } from "./types";

export const googleLanguageTranslateCodes =
  (googleLanguageTranslateCodes) => async (dispatch) => {
    if (googleLanguageTranslateCodes) {
      dispatch({
        type: GOOGLELANGUAGETRANSLATECODES,
        payload: googleLanguageTranslateCodes,
      });
    }
  };
