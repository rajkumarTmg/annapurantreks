import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const HomeBottomVideoCover = ({ datas }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    video.pause();
    setIsPlaying(false);
  }, []);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            loading="lazy"
            className="object-cover h-full w-full"
          >
            <source src={datas?.x_metadata?.wpcf_video_url} type="video/mp4" />
          </video>
          <div className="inset-0 h-20 z-10 absolute top-0 bg-gradient-to-t from-transparent to-white pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 z-50 end-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <AiOutlinePauseCircle className="h-12 w-12 text-white opacity-0 hover:opacity-50 cursor-pointer" />
            ) : (
              <AiOutlinePlayCircle className="h-12 w-12 text-white opacity-50 cursor-pointer " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeBottomVideoCover);
