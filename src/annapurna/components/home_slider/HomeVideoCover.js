import React from "react";

const HomeVideoCover = ({ datas }) => {
  // const videoUrl = "public/videos/HomeCoverVideo/homeCoverVideo.mp4";
  // console.log("videoUrl", datas);
  return (
    <div className="relative h-[100vh] w-full ">
      <video autoPlay muted loop className="object-cover h-full w-full">
        <source
          // src="https://www.w3schools.com/html/mov_bbb.mp4"
          src={datas?.x_metadata?.wpcf_video_url}
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[rgba(8,39,64,0.4)] opacity-100 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {/* <h1 className="text-white text-4xl font-bold">Video Overlay Text</h1> */}
      </div>
    </div>
  );
};

export default React.memo(HomeVideoCover);

// <div className="relative h-[100vh] w-full md:h-[969px] ">
// <Image
//   src={HomeSlider}
//   alt="HomeSlider"
//   layout="fill"
//   objectPosition="center"
//   className="object-cover h-full w-full "
// />
// </div>
