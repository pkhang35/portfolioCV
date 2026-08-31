import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import Linkedin from "../../assets/icons/linkedin-svgrepo-com.svg";
import Mail from "../../assets/icons/new-logo-gmail-svgrepo-com.svg";
import Zalo from "../../assets/icons/zalo-svgrepo-com.svg";
import Git from "../../assets/icons/git-svgrepo-com.svg";
import React from "../../assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg";
import JS from "../../assets/icons/js-svgrepo-com.svg";
import Tailwind from "../../assets/icons/tailwind-svgrepo-com.svg";
import Avatar from "../../assets/images/avatar.jpg";
import HTML from "../../assets/icons/html-svgrepo-com.svg";
import CSS from "../../assets/icons/css3-svgrepo-com.svg";
import Bootstrap from "../../assets/icons/Bootstrap_logo.svg";
import Sass from "../../assets/icons/sass-svgrepo-com.svg";
import Ant from "../../assets/icons/ant-design-svgrepo-com.svg";
import Redux from "../../assets/icons/redux-logo-svgrepo-com.svg";
import Docker from "../../assets/icons/docker-icon-svgrepo-com.svg";
import Postman from "../../assets/icons/postman-icon.svg";
import Figma from "../../assets/icons/figma-svgrepo-com.svg";
import GPT from "../../assets/icons/chatgpt-icon.svg";
import Claude from "../../assets/icons/claude-ai-icon.svg";

import { FileUser, ArrowRight, MapPin, Code2, Rocket } from "lucide-react";
function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="mb-4 text-lg font-medium text-primary">
                Xin chào, mình là Khang 👋
              </p>
              <h1 className="font-heading text-6xl leading-tight">
                Fresher <span className="text-primary">Frontend</span> Developer
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                Mình xây dựng các website hiện đại, responsive và tập trung vào
                trải nghiệm người dùng.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-primary
                    bg-primary
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  Xem dự án <ArrowRight className="size-5" />
                </button>

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-primary
                    px-6
                    py-3
                    font-medium
                    text-primary
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  Xem CV của mình <FileUser className="size-5" />
                </button>
              </div>

              <div className="mt-10">
                <p className="mb-4 font-medium">Kết nối với mình</p>

                <ul className="flex items-center gap-5">
                  <li>
                    <a
                      href="https://github.com/pkhang35"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <img
                        src={Github}
                        alt="GitHub"
                        className="
                          h-10
                          w-10
                          transition-transform
                          duration-200
                          hover:scale-110
                        "
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/pkhang35/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <img
                        src={Linkedin}
                        alt="LinkedIn"
                        className="
                          h-10
                          w-10
                          transition-transform
                          duration-200
                          hover:scale-110
                        "
                      />
                    </a>
                  </li>

                  <li>
                    <a href="mailto:pkhang353@gmail.com" aria-label="Email">
                      <img
                        src={Mail}
                        alt="Email"
                        className="
                          h-10
                          w-10
                          transition-transform
                          duration-200
                          hover:scale-110
                        "
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://zalo.me/0332172749"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Zalo"
                    >
                      <img
                        src={Zalo}
                        alt="Zalo"
                        className="
                          size-10
                          transition-transform
                          duration-200
                          hover:scale-110
                        "
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex w-1/2 justify-end">
              <div className=" w-full max-w-xl overflow-hidden rounded-2xl bg-gray-dark shadow-2xl">
                <div className="flex h-14 items-center border-b border-gray-700 px-5">
                  <div className="flex gap-2">
                    <span className="size-3 rounded-full bg-red-400"></span>
                    <span className="size-3 rounded-full bg-yellow-400"></span>
                    <span className="size-3 rounded-full bg-green-400"></span>
                  </div>
                  <span className="ml-5 font-mono text-sm text-gray-300">
                    Khang.js
                  </span>
                </div>

                <div className="p-7">
                  <pre className=" overflow-hidden font-mono text-sm leading-7">
                    <code>
                      <span className="text-primary">const</span>{" "}
                      <span className="text-white">developer</span>{" "}
                      <span className="text-gray-300">=</span>{" "}
                      <span className="text-gray-300">{"{"}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-300">name</span>
                      <span className="text-gray-300">:</span>{" "}
                      <span className="text-green-300">"Khang"</span>
                      <span className="text-gray-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-300">role</span>
                      <span className="text-gray-300">:</span>{" "}
                      <span className="text-green-300">
                        "Frontend React Developer"
                      </span>
                      <span className="text-gray-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-300">skills</span>
                      <span className="text-gray-300">: [</span>
                      {"\n"}
                      {"    "}
                      <span className="text-green-300">"React"</span>
                      <span className="text-gray-300">,</span>
                      {"\n"}
                      {"    "}
                      <span className="text-green-300">"JavaScript"</span>
                      <span className="text-gray-300">,</span>
                      {"\n"}
                      {"    "}
                      <span className="text-green-300">"Tailwind CSS"</span>
                      <span className="text-gray-300">,</span>
                      {"\n"}
                      {"    "}
                      <span className="text-green-300">"Git & GitHub"</span>
                      {"\n"}
                      {"  "}
                      <span className="text-gray-300">],</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-300">passion</span>
                      <span className="text-gray-300">:</span>{" "}
                      <span className="text-green-300">
                        "Building modern web experiences 🚀"
                      </span>
                      {"\n"}
                      <span className="text-gray-300">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>

              <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-5">
                <div className="flex size-20 items-center justify-center rounded-full bg-white text-3xl shadow-xl">
                  <img src={React} alt="react" className=" size-10" />
                </div>
                <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-xl">
                  <img src={JS} alt="js" className=" size-10" />
                </div>

                <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-xl">
                  <img src={Tailwind} alt="tailwind css" className=" size-10" />
                </div>

                <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-xl">
                  <img src={Git} alt="git" className=" size-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="overflow-hidden py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="absolute -left-5 top-10 z-0 grid grid-cols-3 gap-4">
                {Array.from({ length: 15 }).map((_, index) => (
                  <span
                    key={index}
                    className="size-1.5 rounded-full bg-primary/60"
                  />
                ))}
              </div>
              <div className="absolute -bottom-8 left-6 h-52 w-64 rounded-3xl bg-primary/10"/>
              <div className="relative z-10 mx-auto max-w-md overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={Avatar}
                  alt="Khang"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 font-medium tracking-wider text-primary">
                VỀ MÌNH
              </p>
              <h2 className="mb-6 font-anton text-5xl leading-tight text-gray-900 dark:text-white">
                Mình là ai?
              </h2>

              <div className="max-w-xl ">
                <p className="leading-8 text-gray-600 dark:text-gray-300">
                  Mình là Khang, một Frontend React Developer tập trung vào việc
                  xây dựng những giao diện web hiện đại, responsive và dễ sử
                  dụng.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-5
                  shadow-lg
                  shadow-gray-200/40
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  dark:border-gray-700
                  dark:bg-gray-dark
                  dark:shadow-none
                ">
                  <div
                    className="
                    mb-4
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                  "
                  >
                    <MapPin className="size-6 text-primary" />
                  </div>

                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    Địa chỉ
                  </p>

                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Hồ Chí Minh, Việt Nam
                  </h3>
                </div>

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-5
                  shadow-lg
                  shadow-gray-200/40
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  dark:border-gray-700
                  dark:bg-gray-dark
                  dark:shadow-none
                "
                >
                  <div
                    className="
                    mb-4
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-100
                    dark:bg-green-500/10
                  "
                  >
                    <Code2 className="size-6 text-green-500" />
                  </div>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    Chuyên môn
                  </p>

                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Frontend
                  </h3>
                </div>

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-5
                  shadow-lg
                  shadow-gray-200/40
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  dark:border-gray-700
                  dark:bg-gray-dark
                  dark:shadow-none
                "
                >
                
                  <div
                    className="
                    mb-4
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                    dark:bg-orange-500/10
                  "
                  >
                    <Rocket className="size-6 text-orange-500" />
                  </div>

                
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    Hiện tại
                  </p>

                  <h3 className="font-medium text-gray-900 dark:text-white">
                    React
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">

          {/* Section title */}
          <h2 className="mb-16 text-5xl text-gray-900 dark:text-white">
            Kỹ Năng Chuyên Môn
          </h2>

          {/* Frontend */}
          <div className="grid grid-cols-[400px_1fr] border-b border-gray-200 py-8 dark:border-gray-700">

            {/* Category */}
            <h3 className=" text-4xl text-gray-900 dark:text-white">
              Frontend
            </h3>

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-8">

              {/* HTML */}
              <div className="flex items-center gap-3">
                <img
                  src={HTML}
                  alt="HTML"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  HTML
                </span>
              </div>

              {/* CSS */}
              <div className="flex items-center gap-3">
                <img
                  src={CSS}
                  alt="CSS"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  CSS
                </span>
              </div>
              {/* Redux */}
              <div className="flex items-center gap-3">
                <img
                  src={Bootstrap}
                  alt="Bootstrap"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Bootstrap
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex items-center gap-3">
                <img
                  src={JS}
                  alt="JavaScript"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  JavaScript
                </span>
              </div>

              {/* React */}
              <div className="flex items-center gap-3">
                <img
                  src={React}
                  alt="React"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  React
                </span>
              </div>

              {/* Tailwind */}
              <div className="flex items-center gap-3">
                <img
                  src={Tailwind}
                  alt="Tailwind CSS"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Tailwind CSS
                </span>
              </div>
              {/* Sass */}
              <div className="flex items-center gap-3">
                <img
                  src={Sass}
                  alt="Sass"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Sass
                </span>
              </div>
              {/* Ant */}
              <div className="flex items-center gap-3">
                <img
                  src={Ant}
                  alt="Ant Design"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Ant Design
                </span>
              </div>
              {/* Redux */}
              <div className="flex items-center gap-3">
                <img
                  src={Redux}
                  alt="Redux"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Redux
                </span>
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-[400px_1fr] border-b border-gray-200 py-8 dark:border-gray-700">

            <h3 className="font-anton text-4xl text-gray-900 dark:text-white">
              Tools & AI
            </h3>

            <div className="flex flex-wrap items-center gap-10">

              <div className="flex items-center gap-3">
                <img
                  src={Git}
                  alt="Git"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Git
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={Docker}
                  alt="Docker"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Docker
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={Postman}
                  alt="Postman"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Postman
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={GPT}
                  alt="Chat GPT"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Chat GPT
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={Claude}
                  alt="Claude Code"
                  className="size-15 object-contain"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Claude Code
                </span>
              </div>

            </div>
          </div>

          {/* Design */}
          <div className="grid grid-cols-[400px_1fr] py-8">

            <h3 className="font-anton text-4xl text-gray-900 dark:text-white">
              Design
            </h3>

            <div className="flex items-center gap-10">

              <div className="flex items-center gap-3">
                <img
                  src={Figma}
                  alt="Figma"
                  className="size-15 object-contain"
                />

                <span className="text-2xl text-gray-800 dark:text-gray-200">
                  Figma
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">

          {/* Section title */}
          <h2 className="mb-20 font-anton text-5xl text-gray-900 dark:text-white">
            Kinh Nghiệm
          </h2>

          {/* Timeline */}
          <div className="relative ml-32">

            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700" />

            {/* Experience item */}
            <div className="relative mb-16 pl-16">

              {/* Timeline dot */}
              <span
                className="
                  absolute
                  -left-1.5
                  top-2
                  h-1
                  w-4
                  border
                  border-white
                  bg-primary
                  dark:border-gray-900
                "
              />

              {/* Date */}
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Tháng 2/2025 - 5/2025
              </p>

              {/* Header */}
              <div className="flex items-start justify-between gap-10">

                <div>
                  {/* Company */}
                  <p className="mb-2 font-anton text-xl text-gray-900 dark:text-white">
                    Vietcons Education
                  </p>

                  {/* Position */}
                  <h3 className="mb-4 font-anton text-4xl text-gray-900 dark:text-white">
                    Thực tập sinh
                  </h3>
                </div>

                {/* Time */}
                <span
                  className="
                    rounded-full
                    bg-gray-100
                    px-5
                    py-1.5
                    text-sm
                    text-gray-600
                    dark:bg-gray-800
                    dark:text-gray-300
                  "
                >
                  3 tháng
                </span>

              </div>

              {/* Description */}
              {/* <p className="max-w-2xl leading-8 text-gray-600 dark:text-gray-300">
                Thực hiện SEO website, tối ưu nội dung để cải thiện thứ hạng tìm kiếm.
              </p> */}
              <ul className="max-w-2xl space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex gap-3 leading-7">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    Thực hiện SEO website, tối ưu nội dung để cải thiện thứ hạng tìm kiếm.
                  </span>
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    Quản lý và cập nhật nội dung website, đảm bảo hệ thống hoạt động ổn định.
                  </span>
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    Cài đặt và cấu hình phần mềm như AutoCAD, Photoshop và hệ điều hành Windows.
                  </span>
                </li>
              </ul>
             

            </div>

          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
