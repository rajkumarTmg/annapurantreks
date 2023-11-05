import React, { useEffect, useState } from "react";
import { fetchLanguageTranslateCodes } from "../../../../pages/api/wordpress_API";
import { useDispatch, useSelector } from "react-redux";
import { googleLanguageTranslateCodes } from "../../../../redux/actions/GoogleTranslateAction";

const GoogleTranslate = () => {
  const dispatch = useDispatch();
  const getGoogleLanguageTranslateCodes = useSelector(
    (state) => state.GoogleTranslateCodes
  );

  // console.log("googleLanguageTranslateCodes", googleLanguageTranslateCodes);
  //include in state includedLanguages: "en,ar,es,jv,ko,pa,pt,ru,zh-CN,hi,np",
  // "en,fr,es,de,ar,ca,zh-CN,nl,it,ja,ko,ru,sk,sv,hi"
  const [languages, setLanguages] = useState();
  // fetch language translate code
  useEffect(() => {
    const fetchLanguageTranslateCode = async () => {
      const res = await fetchLanguageTranslateCodes();
      const data = await res.data;
      const selectedLanguages =
        data[0]?.x_metadata?.wpcf_selected_languages_code;
      // console.log("data", data);
      setLanguages(selectedLanguages);

      dispatch(googleLanguageTranslateCodes(selectedLanguages));
    };
    (getGoogleLanguageTranslateCodes == "" ||
      getGoogleLanguageTranslateCodes == undefined ||
      getGoogleLanguageTranslateCodes == null) &&
      fetchLanguageTranslateCode();
  }, []);

  // console.log(languages);

  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          defaultLanguage: "en",
          // includedLanguages: "en,ar,es,jv,ko,pa,pt,ru,zh-CN,hi,np",
          // includedLanguages: "en,fr,es,de,zh-CN,it,ja,ko,ru,hi",
          includedLanguages: languages,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          defaultLanguage: "en",
          multilanguagePage: true,

          // set the default language to English
        },
        "google_translate_element"
      );
    }

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, [languages]);

  return <div id="google_translate_element"></div>;
};

export default React.memo(GoogleTranslate);
