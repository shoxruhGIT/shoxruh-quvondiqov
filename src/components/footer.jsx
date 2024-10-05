import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 h-64 flex">
      <div className="max-w-[82.5rem] m-auto flex flex-col items-center gap-11 text-white">
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[16px] font-medium"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[16px] font-medium"
              href="/"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[16px] font-medium"
              href="skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-[16px] font-medium"
              href="portfolio"
            >
              Portfolio
            </a>
          </li>
        </ul>
        <ul className="footer-social flex space-x-4">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://t.me/shohruh_frontend"
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/shohrux-quvondiqov-33bb6625a/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <h1>Designed by Shoxruh</h1>
      </div>
    </div>
  );
};

export default Footer;
