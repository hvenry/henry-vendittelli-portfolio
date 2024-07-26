import React from "react";
import { videos } from "@/data";

const YtPreview = () => {

  const style = {
    border: "w-full sm:w-3/4 border border-primary flex flex-col items-center",
    text: "text-primary-1 p-4 sm:text-2xl text-xl",
    videoStyle: "w-full h-96",
    videoAllow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  }

  return (
    <>
    {videos.map((video, index) => (
      <div key={index} className={style.border}>
        <p className={style.text}>
          {video.text}
        </p>
        <iframe
          className={style.videoStyle}
          src={video.video}
          title={video.text}
          allow={style.videoAllow}
        ></iframe>
      </div>
      ))}
    </>
  );
};

export default YtPreview;
