import React from "react";
import { AiOutlineHtml5,AiFillGithub } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { SiJavascript,SiReact,SiNodedotjs,SiMongodb,SiPhp,SiMysql,SiWordpress,SiTailwindcss } from "react-icons/si";
const Skills = () => {
	return (
		<section className="skills-section py-20 bg-primary/10" id="skills">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between">
					<div className="space-y-2 my-10 text-center">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">
							Skills
						</h2>
						<div className="dark:text-gray-400">And Experience</div>
					</div>
				</div>
				<div className="details flex pb-10">
					<div className="w-8/12 mx-auto text-center ">
						<div className="mb-10">
							Highly motivated, solution, and overall result-oriented individual
							looking for a position in an organization where I can contribute,
							be mentored, and build something for the world that I can be proud
							of. I have 8 years of experience in WordPress development and 1
							year of experience building web apps.
						</div>
					</div>
				</div>
				<div className="details flex pb-10">
					<div className="lg:w-8/12 w-11/12 mx-auto text-center ">
                    <div className="text-2xl mb-10">Web Technologies</div>
						<div className="grid grid-cols-2 lg:grid-cols-4  xl:grid-cols-6 gap-4">
							<button className="btn btn-outline gap-2 p-0">
                                <AiOutlineHtml5 className="text-3xl"/>
								HTML 5
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <TbBrandCss3 className="text-3xl"/>
								CSS 3
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiJavascript className="text-3xl"/>
								Javascript
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiReact className="text-3xl"/>
								React
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <AiFillGithub className="text-3xl"/>
								Github
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiNodedotjs className="text-3xl"/>
								Node Js
							</button>
							<button className="btn btn-outline gap-2 p-0">
                            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 32 32"
      className="w-8 h-8 hover:fill-white"
    >
      <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path>
    </svg>
                               
								Express Js
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiMongodb className="text-3xl"/>
								MongoDb
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiPhp className="text-3xl"/>
								PHP
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiMysql className="text-3xl"/>
								Mysql
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiWordpress className="text-3xl"/>
								WordPress
							</button>
							<button className="btn btn-outline gap-2 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"  className="w-6 h-6 hover:fill-white">
      <mask
        id="mask0"
        width="100"
        height="100"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#mask0)">
        <path
          fill="#0065A9"
          d="M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z"
        ></path>
        <g filter="url(#filter0_d)">
          <path
            fill="#007ACC"
            d="M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z"
          ></path>
        </g>
        <g filter="url(#filter1_d)">
          <path
            fill="#1F9CF0"
            d="M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z"
          ></path>
        </g>
        <path
          fill="url(#paint0_linear)"
          fillRule="evenodd"
          d="M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z"
          clipRule="evenodd"
          opacity="0.25"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="116.727"
          height="92.246"
          x="-8.394"
          y="15.829"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="4.167"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            mode="overlay"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d"
          width="47.917"
          height="116.151"
          x="60.417"
          y="-8.076"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="4.167"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            mode="overlay"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="49.939"
          x2="49.939"
          y1="0.258"
          y2="99.742"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
    VSCode
							</button>
						</div>
                    <div className="text-2xl my-10">
                        Css Framework
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4  xl:grid-cols-6 gap-4">
							<button className="btn btn-outline gap-2 p-0">
                                <BsBootstrap className="text-3xl"/>
								Bootstrap
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                <SiTailwindcss className="text-3xl"/>
								Tailwindcss
							</button>
							<button className="btn btn-outline gap-2 p-0">
								Daisy Ui
							</button>
							<button className="btn btn-outline gap-2 p-0">
                                
								Flowbite
							</button>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
