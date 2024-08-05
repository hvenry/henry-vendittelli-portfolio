import React from "react";
import Link from "next/link";
import { videos } from "@/data";

const YtPreview = () => {
  const style = {
    border: "w-full sm:w-3/4 border border-primary flex flex-col items-center",
    text: "text-primary-1 p-4 sm:text-2xl text-xl",
    videoStyle: "w-full h-96",
    videoAllow:
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  };

  return (
      <div className="flex flex-col items-center gap-12">
      {videos.map((video, index) => {
        // Split the text on "|"
        const [linkText, description] = video.text.split(" | ");
        return (
          <div key={index} className={style.border}>
            <p className={style.text}>
              {/* Create a link for the first part of the text */}
              <Link href={video.href} className="text-blue-600 hover:text-blue-300">
                {linkText}
              </Link>
              {" | "}
              {/* Display the rest of the text */}
              {description}
            </p>
            <iframe
              className={style.videoStyle}
              src={video.video}
              title={video.text}
              allow={style.videoAllow}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default YtPreview;
