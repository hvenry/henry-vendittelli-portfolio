import React from "react";

const YtPreview = () => {

  const style = {
    border: "w-full sm:w-3/4 border border-neutral-200 flex flex-col items-center",
    text: "text-gray-200 p-4 sm:text-2xl text-xl",
    videoStyle: "w-full h-96",
    videoAllow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  }

  const videos = [
    {
      text: "a parking app for university students.",
      video: "https://www.youtube.com/embed/3u5slpDZprw?si=3_ISxIoAD-RcIFKV&amp;&amp;rel=0"
    },
    {
      text: "a kingston property rental database webapp.",
      video: "https://www.youtube.com/embed/bHJxmLcjUco?si=E5Hti0SjpxpX1BF8&amp;start=1;&amp;rel=0"
    },
    {
      text: "a game where you toss animals into pens.",
      video: "https://www.youtube.com/embed/YPBpoDEXPhQ?si=W0iLnaHJXuqsS2p-&amp;start=2&amp;rel=0"
    }
  ]
  
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
