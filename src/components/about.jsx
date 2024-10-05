import React from "react";
import Me from "../img/me.jpg";

const About = () => {
  return (
    <div id="about" className="max-w-[1320px] m-auto px-[75px] flex flex-col items-center gap-[50px] pt-[170px]">
      <h1 className="text-[34px] font-bold flex items-center gap-[15px]">
        <i class="fa-solid fa-user text-blue-500"></i>About Me
      </h1>
      <div className="about  flex items-center justify-between gap-[200px]">
        <img
          className="about-img grayscale hover:grayscale-0 transition ease-in-out w-[300px] rounded-[10px]"
          src={Me}
          alt=""
        />
        <div className="flex flex-col items-start gap-[25px]">
          <h1 className="text-[24px] font-bold flex flex-col">
            I'm Shoxruh{" "}
            <span className="text-[16px] font-semibold">
              Front-end developer / React developer
            </span>
          </h1>
          <p className="font-medium">
            I am currently a first-year student at Westminister International
            University in Tashkent who is looking for a programming position
            where can apply programming skills and networking.
          </p>
          <p className="font-semibold">
            <span className="text-blue-500 font-bold">Email: </span>
            shnarzullayevich@gmail.com
          </p>
          <p className="font-semibold">
            <span className="text-blue-500 font-bold">Place: </span>Uzbekistan,
            Tashkent
          </p>
          <a
            target="-blank"
            href="https://drive.google.com/file/d/1k_aLdW4tNmtlMRv6mZaYit1lfpoNXcRC/view?usp=sharing"
            className="w-[150px] h-[40px] rounded-[15px] bg-blue-500 hover:bg-blue-900 transiton ease-in-out text-white font-semibold flex items-center justify-center"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
