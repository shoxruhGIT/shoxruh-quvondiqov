import React from "react";
import Person from "../img/person.png";

const Main = () => {
  return (
    <div id='/' className="main max-w-[1320px] m-auto pt-[170px] flex items-center justify-between px-[75px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="main-name font-bold text-[28px]">Hi,I am</h1>
        <p className="flex flex-col font-bold text-[30px]">
          Shoxruh Quvondoqov{" "}
          <span className="text-[24px] text-[#909090] font-medium">
            Front-end developer
          </span>
        </p>
        <div className="main-social flex items-center gap-[20px]">
          <a rel="noreferrer" target="_blank" href="https://t.me/shohruh_frontend">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://github.com/shoxruhGIT">
            <i class="fa-brands fa-github"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/shohrux-quvondiqov-33bb6625a/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="">
        <img className="person w-[400px]" src={Person} alt="" />
      </div>
    </div>
  );
};

export default Main;
