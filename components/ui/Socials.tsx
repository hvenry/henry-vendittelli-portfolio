import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineSpotify } from "react-icons/ai";

const Socials = () => {
  const style = "fill-white hover:fill-blue-300";
  return (
    <>
      <a
        href="https://www.linkedin.com/in/henryvendittelli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={style} size={32} />
      </a>
      <a
        href="https://github.com/hvenry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare
          className={style}
          size={32}
        />
      </a>
      <a
        href="https://www.facebook.com/hvenry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare
          className={style}
          size={32}
        />
      </a>
      <a
        href="https://leetcode.com/u/hvenry/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode className={style} size={32} />
      </a>
      <a
        href="https://open.spotify.com/user/ogprinsta?si=b4845668d4f04833"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineSpotify
          className={style}
          size={32}
        />
      </a>
    </>
  );
};

export default Socials;
