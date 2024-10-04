import React from "react";
import {
  Bootstrap,
  Css,
  Git,
  GitHub,
  Html,
  Javascript,
  Material,
  Native,
  Netlify,
  Reacts,
  Tailwind,
} from "../img";

const Skills = () => {
  return (
    <div className="max-w-[1320px] m-auto pt-[170px] px-[75px]">
      <div className="skill-items grid grid-cols-4 items-center justify-center gap-4 ">
        <p>
          <img className="w-[40px]" src={Html} alt="" /> HTML5
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Javascript} alt="" /> Javascript
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Reacts} alt="" /> ReactJs
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Css} alt="" /> CSS3
        </p>
        <p>
          {" "}
          <img className="w-[50px]" src={Native} alt="" /> React Native
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Bootstrap} alt="" /> Bootstrap
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Tailwind} alt="" /> Tailwind
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Material} alt="" /> Material UI
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Git} alt="" /> GIT
        </p>
        <p>
          {" "}
          <img className="w-[40px] text-white" src={GitHub} alt="" /> GitHub
        </p>
        <p>
          {" "}
          <img className="w-[40px]" src={Netlify} alt="" /> Netlify
        </p>
      </div>
    </div>
  );
};

export default Skills;
