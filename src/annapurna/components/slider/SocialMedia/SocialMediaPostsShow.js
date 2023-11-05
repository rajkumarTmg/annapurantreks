import React, { useEffect, useState } from "react";
import Section from "../../containers/Section";
import { fetchSocialMediaPostsLinks } from "../../../../../pages/api/wordpress_API";
import AnimatedSection from "../../../Animations/AnimatedSection";
import SocialmediaSlider from "../slickSlide/SocialmediaSlider/SocialmediaSlider";
// import { HTML } from "react-render-html";

const SocialMediaPostsShow = ({ datas }) => {
  const [socialMediaPostsDatas, setSocialMediaPostsDatas] = useState([]);

  // Fetch social media posts Datas
  useEffect(() => {
    const fetchSocialMediaPostsDatas = async () => {
      const response = await fetchSocialMediaPostsLinks();
      setSocialMediaPostsDatas(response?.data[0].x_metadata);
    };
    fetchSocialMediaPostsDatas();
  }, []);

  const socialDatas = [];

  for (const key in socialMediaPostsDatas) {
    if (key.startsWith("wpcf_url")) {
      const value = socialMediaPostsDatas[key];
      if (value !== "") {
        socialDatas.push(socialMediaPostsDatas[key]);
      }
    }
  }

  // console.log("socialDatas", socialDatas);

  return (
    <>
      <Section className="bg-[#F3ECDB]">
        <div className="container">
          <div className=" ">
            <p className="font-amithen text-3xl md:text-5xl">
              Catch up us on{" "}
              <span className="font-amithen text-3xl md:text-5xl text-secondary-orange">
                Social
              </span>{" "}
            </p>
            <div className="">
              <SocialmediaSlider datas={socialDatas} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

{
  /* <div className="flex flex-wrap   mt-12  justify-center items-center">
                  <div
                    className="mx-4 my-4  rounded-xl overflow-hidden w-fit  "
                    dangerouslySetInnerHTML={{
                      __html: socialMediaPostsDatas?.x_metadata?.wpcf_url_1,
                    }}
                  /> */
}
{
  /* <div
                    className="mx-4 my-4  rounded-xl overflow-hidden w-fit  "
                    dangerouslySetInnerHTML={{
                      __html: socialMediaPostsDatas?.x_metadata?.wpcf_url_2,
                    }}
                  />

                  <div
                    className="mx-4 my-4\ rounded-xl overflow-hidden w-fit  "
                    dangerouslySetInnerHTML={{
                      __html: socialMediaPostsDatas?.x_metadata?.wpcf_url_3,
                    }}
                  /> */
}
{
  /* </div> */
}

export default React.memo(SocialMediaPostsShow);
