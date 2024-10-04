import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio max-w-[1480px] m-auto pt-[50px] px-[75px] gap-[25px] pb-[20px]">
      <div className="flex flex-col gap-[10px] items-left">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[28px]">
          <h1 className="text-[20px] font-bold">Ninja sushi(fake)</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[5px]">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/ninja-sushis.git"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.5rem"
              width="2.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          Next - Tailwind - Redux - MealDB API
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          This project is a clone of ninja sushi site. The site used
          <b> themealdb.com</b> for food. You can easily order food on the site.
          Of course this site is fake.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] items-left justify-center">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[68px]">
          <h1 className="text-[20px] font-bold">Todolist</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[15px]">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/todolists.git"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.5rem"
              width="2.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          Html - Css - React
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          To jot down tasks or activities you need to do. You can save not only
          your activities, but also your favorite movies, music, and the like.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] items-left">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[61px]">
          <h1 className="text-[20px] font-bold">Chat App</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[15px]">
            <a rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/new-project.git"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.5rem"
              width="2.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          React - Redux - Sass - json-server
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          the purpose of the project is to write a twit. This means that other
          users can reply to your tweets and you can reply to their reply tweets
        </p>
      </div>
      <div className="flex flex-col gap-[10px] items-left">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <h1 className="text-[20px] font-bold">Fortnite store(fake)</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[15px]">
            <a rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/typescript-fortnite.git"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.5rem"
              width="2.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          React - Typescript - React-query
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          on the site you can see the product features of the fortnite video
          game. Writes the features of the product and other things
        </p>
      </div>
      <div className="flex flex-col gap-[10px] items-left">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[58px]">
          <h1 className="text-[20px] font-bold">Serial App</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[15px]">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/my-app.git"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://movies-we.netlify.app/"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
            </a>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          React - Javascript
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          quam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] items-left">
        <div className="w-[400px] h-[210px] overflow-hidden px-[30px] pt-[60px] rounded-[10px] bg-slate-600">
          <img
            className="rounded-t-[10px] overflow-hidden"
            src={`https://portfolios-self.vercel.app/example-project.jpg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[18px]">
          <h1 className="text-[20px] font-bold">E-commercial site</h1>
          <div className="w-[90px] h-[1px] bg-[#737374] opacity-[3]"></div>
          <div className="flex items-center justify-center gap-[15px]">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shoxruhGIT/product-menu.git"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://product-menus.netlify.app/"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
            </a>
          </div>
        </div>
        <h3 className="text-[20px] font-semibold text-left text-green-900">
          Javascript - HTML5 - CSS3
        </h3>
        <p className="text-left text-[18px] w-[400px] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          quam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
