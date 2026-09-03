import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import Linkedin from "../../assets/icons/linkedin-svgrepo-com.svg";
import Mail from "../../assets/icons/new-logo-gmail-svgrepo-com.svg";
import Zalo from "../../assets/icons/zalo-svgrepo-com.svg";
import Git from "../../assets/icons/git-svgrepo-com.svg";
import React from "../../assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg";
import JS from "../../assets/icons/js-svgrepo-com.svg";
import Tailwind from "../../assets/icons/tailwind-svgrepo-com.svg";
import Avatar from "../../assets/images/avatar.png";
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
import DevQuiz from "../../assets/images/devquiz.png";
import ITJobs from "../../assets/images/avatarITJobs.png";
import Portfolio from "../../assets/images/avatarPortfolio.png";
import {Link} from "react-router-dom"
import { FileUser, ArrowRight, MapPin, Code2, Rocket ,PlayCircle, ExternalLink} from "lucide-react";
function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div
            className="
              flex
              flex-col
              items-center
              gap-16
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            <div className="w-full lg:w-1/2">
              <p className="mb-4 text-base font-medium text-primary sm:text-lg">
                Xin chào, mình là Khang 👋
              </p>
              <h1
                className="
                  font-heading
                  text-4xl
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Fresher <span className="text-primary">Frontend</span> Developer
              </h1>
              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-gray-600
                  sm:text-lg
                  sm:leading-8
                  dark:text-gray-300
                "
              >
                Mình xây dựng các website hiện đại, responsive và tập trung vào
                trải nghiệm người dùng.
              </p>
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  sm:gap-4
                "
              >
              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-primary
                  bg-primary
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:px-6
                  sm:text-base
                "
              >
                Xem dự án
                <ArrowRight className="size-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-primary
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-primary
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:bg-primary
                  hover:text-white
                  sm:px-6
                  sm:text-base
                "
              >
                Xem CV của mình
                <FileUser className="size-5" />
              </a>
                
              </div>
              <div className="mt-10">
                <p className="mb-4 font-medium">
                  Kết nối với mình
                </p>
                <ul className="flex items-center gap-4 sm:gap-5">
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
                          size-9
                          transition-transform
                          duration-200
                          hover:scale-110
                          sm:size-10
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
                          size-9
                          transition-transform
                          duration-200
                          hover:scale-110
                          sm:size-10
                        "
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:pkhang353@gmail.com"
                      aria-label="Email"
                    >
                      <img
                        src={Mail}
                        alt="Email"
                        className="
                          size-9
                          transition-transform
                          duration-200
                          hover:scale-110
                          sm:size-10
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
                          size-9
                          transition-transform
                          duration-200
                          hover:scale-110
                          sm:size-10
                        "
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="
                relative
                w-full
                lg:w-1/2
              "
            >
              <div
                className="
                  mx-auto
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-2xl
                  bg-gray-dark
                  shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-12
                    items-center
                    border-b
                    border-gray-700
                    px-4
                    sm:h-14
                    sm:px-5
                  "
                >
                  <div className="flex gap-2">
                    <span className="size-2.5 rounded-full bg-red-400 sm:size-3" />
                    <span className="size-2.5 rounded-full bg-yellow-400 sm:size-3" />
                    <span className="size-2.5 rounded-full bg-green-400 sm:size-3" />
                  </div>

                  <span className="ml-4 font-mono text-xs text-gray-300 sm:ml-5 sm:text-sm">
                    Khang.js
                  </span>
                </div>
                <div className="overflow-x-auto p-4 sm:p-7">
                  <pre
                    className="
                      min-w-max
                      overflow-hidden
                      font-mono
                      text-xs
                      leading-6
                      sm:text-sm
                      sm:leading-7
                    "
                  >
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
              <div
                className="
                  absolute
                  -bottom-8
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  sm:-bottom-10
                  sm:gap-4
                  lg:gap-5
                "
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-xl sm:size-16 lg:size-20">
                  <img
                    src={React}
                    alt="React"
                    className="size-7 sm:size-8 lg:size-10"
                  />
                </div>

                <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-xl sm:size-16 lg:size-20">
                  <img
                    src={JS}
                    alt="JavaScript"
                    className="size-7 sm:size-8 lg:size-10"
                  />
                </div>

                <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-xl sm:size-16 lg:size-20">
                  <img
                    src={Tailwind}
                    alt="Tailwind CSS"
                    className="size-7 sm:size-8 lg:size-10"
                  />
                </div>

                <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-xl sm:size-16 lg:size-20">
                  <img
                    src={Git}
                    alt="Git"
                    className="size-7 sm:size-8 lg:size-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="overflow-hidden py-16 sm:py-20 lg:py-24" data-aos="fade-up" >
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div
                className="
                  absolute
                  -left-5
                  top-10
                  z-0
                  grid
                  grid-cols-3
                  gap-4
                  sm:-left-8
                "
              >
                {Array.from({ length: 15 }).map((_, index) => (
                  <span
                    key={index}
                    className="size-1.5 rounded-full bg-primary/60"
                  />
                ))}
              </div>
              <div
                className="
                  absolute
                  -bottom-8
                  left-6
                  h-52
                  w-64
                  rounded-3xl
                  bg-primary/10
                  sm:left-10
                "
              />
              <div
                className="
                  relative
                  z-10
                  mx-auto
                  max-w-md
                  overflow-hidden
                  rounded-3xl
                  shadow-xl
                "
              >
                <img
                  src={Avatar}
                  alt="Khang"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 font-medium tracking-wider text-primary">
                VỀ MÌNH
              </p>

              <h2
                className="
                  mb-6
                  text-4xl
                  leading-tight
                  text-gray-900
                  sm:text-5xl
                  dark:text-white
                "
              >
                Mình là ai?
              </h2>

              <div className="max-w-xl">
                <p className="leading-8 text-gray-600 dark:text-gray-300">
                  Mình là Khang, một Frontend React Developer tập trung vào việc
                  xây dựng những giao diện web hiện đại, responsive và dễ sử dụng.
                </p>
              </div>
              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-3
                  lg:mt-10
                "
              >
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
      <section id="skills" className="py-16 md:py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 font-anton text-4xl text-gray-900 dark:text-white md:mb-16 md:text-5xl">
            Kỹ Năng Chuyên Môn
          </h2>
          <div
            className="
              grid grid-cols-1
              gap-8
              border-b border-gray-200
              py-8
              dark:border-gray-700
              md:grid-cols-[220px_1fr]
              md:gap-8
              lg:grid-cols-[400px_1fr]
            "
            data-aos="fade-up" data-aos-delay="0"
          >
            <h3 className="text-3xl text-gray-900 dark:text-white md:text-4xl">
              Frontend
            </h3>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={HTML}
                  alt="HTML"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  HTML
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={CSS}
                  alt="CSS"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  CSS
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Bootstrap}
                  alt="Bootstrap"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Bootstrap
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={JS}
                  alt="JavaScript"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  JavaScript
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={React}
                  alt="React"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  React
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Tailwind}
                  alt="Tailwind CSS"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Sass}
                  alt="Sass"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Sass
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Ant}
                  alt="Ant Design"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Ant Design
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Redux}
                  alt="Redux"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Redux
                </span>
              </div>
            </div>
          </div>
          <div
            className="
              grid grid-cols-1
              gap-8
              border-b border-gray-200
              py-8
              dark:border-gray-700
              md:grid-cols-[220px_1fr]
              md:gap-8
              lg:grid-cols-[400px_1fr]
            "
            data-aos="fade-up" data-aos-delay="200"
          >
            <h3 className="text-3xl text-gray-900 dark:text-white md:text-4xl">
              Tools & AI
            </h3>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-10">
              <div className="flex items-center gap-2 md:gap-3">
                <img src={Git} alt="Git" className="size-10 object-contain md:size-15" />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Git
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img src={Docker} alt="Docker" className="size-10 object-contain md:size-15" />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Docker
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img src={Postman} alt="Postman" className="size-10 object-contain md:size-15" />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Postman
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img src={GPT} alt="Chat GPT" className="size-10 object-contain md:size-15" />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Chat GPT
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img src={Claude} alt="Claude Code" className="size-10 object-contain md:size-15" />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Claude Code
                </span>
              </div>
            </div>
          </div>
          <div
            className="
              grid grid-cols-1
              gap-8
              py-8
              md:grid-cols-[220px_1fr]
              md:gap-8
              lg:grid-cols-[400px_1fr]
            "
            data-aos="fade-up" data-aos-delay="400"
          >
            <h3 className="text-3xl text-gray-900 dark:text-white md:text-4xl">
              Design
            </h3>
            <div className="flex items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Figma}
                  alt="Figma"
                  className="size-10 object-contain md:size-15"
                />
                <span className="text-lg text-gray-800 dark:text-gray-200 md:text-2xl">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Experience */}
      <section id="experience" className="py-16 md:py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-4xl text-gray-900 dark:text-white md:mb-20 md:text-5xl">
            Kinh Nghiệm
          </h2>
          <div className="relative ml-2 md:ml-16 lg:ml-32">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700" />
            <div className="relative mb-16 pl-8 md:pl-12 lg:pl-16">
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
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:mb-5">
                Tháng 2/2025 - 5/2025
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                <div>
                  <p className="mb-2 text-lg text-gray-900 dark:text-white md:text-xl">
                    Vietcons Education
                  </p>
                  <h3 className="mb-4 text-3xl text-gray-900 dark:text-white md:text-4xl">
                    Thực tập sinh
                  </h3>
                </div>
                <span
                  className="
                    w-fit
                    rounded-full
                    bg-gray-100
                    px-4
                    py-1.5
                    text-sm
                    text-gray-600
                    dark:bg-gray-800
                    dark:text-gray-300
                    md:px-5
                    md:mb-0
                    mb-5
                  "
                >
                  3 tháng
                </span>
              </div>

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

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="
              mb-10
              text-3xl
              text-gray-900
              sm:mb-12
              sm:text-4xl
              lg:mb-14
              lg:text-5xl
              dark:text-white
            "
          >
            Các Dự Án Được Chọn
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <article
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-primary/10
                dark:border-gray-700
                dark:bg-gray-dark
                dark:hover:shadow-none
              "
              data-aos="fade-up" data-aos-delay="0"
            >
              <div
                className="
                  relative
                  h-48
                  overflow-hidden
                  bg-gray-200
                  sm:h-52
                  lg:h-48
                  dark:bg-gray-800
                "
              >
                <Link to="/devquiz" className="block h-full">
                  <img
                    src={DevQuiz}
                    alt="DevQuiz"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-primary/0
                      transition-colors
                      duration-300
                      group-hover:bg-primary/10
                    "
                  />

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      size-10
                      translate-x-2
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/90
                      text-primary
                      opacity-0
                      shadow-lg
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                      dark:bg-gray-900/90
                    "
                  >
                    <ExternalLink className="size-5" />
                  </div>
                </Link>
              </div>

              <div className="p-5 sm:p-6 lg:p-7">
                <Link to="/devquiz">
                  <h3
                    className="
                      mb-3
                      text-xl
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    DevQuiz
                  </h3>

                  <p
                    className="
                      mb-5
                      text-sm
                      leading-7
                      text-gray-600
                      sm:text-base
                      dark:text-gray-300
                    "
                  >
                    DevQuiz là website giúp kiểm tra và củng cố kiến thức lập trình qua các chủ đề như HTML, CSS, JavaScript, React và Git/GitHub.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2 sm:mb-7 sm:gap-3">
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      React
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      Ant Design
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      Sass
                    </span>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center gap-2 sm:justify-between sm:gap-3">
                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <PlayCircle className="size-4" />
                    Video demo
                  </a>
                  <a
                    href="https://github.com/pkhang35/QuizHub"
                    target="_blank"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <img
                      src={Github}
                      alt="GitHub"
                      className="size-4"
                    />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
            {/* Project 2 */}
            <article
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-primary/10
                dark:border-gray-700
                dark:bg-gray-dark
                dark:hover:shadow-none
              "
              data-aos="fade-up" data-aos-delay="150"
            >
              <div
                className="
                  relative
                  h-48
                  overflow-hidden
                  bg-gray-200
                  sm:h-52
                  lg:h-48
                  dark:bg-gray-800
                "
              >
                <Link to="/portfolio" className="block h-full">
                  <img
                    src={Portfolio}
                    alt="DevQuiz"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-105
                    "
                  />
                  <div
                    className="
                      absolute
                      inset-0
                      bg-primary/0
                      transition-colors
                      duration-300
                      group-hover:bg-primary/10
                    "
                  />
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      size-10
                      translate-x-2
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/90
                      text-primary
                      opacity-0
                      shadow-lg
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                      dark:bg-gray-900/90
                    "
                  >
                    <ExternalLink className="size-5" />
                  </div>
                </Link>
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <Link to="/portfolio">
                  <h3
                    className="
                      mb-3
                      text-xl
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    Portfolio
                  </h3>
                  <p
                    className="
                      mb-5
                      text-sm
                      leading-7
                      text-gray-600
                      sm:text-base
                      dark:text-gray-300
                    "
                  >
                    Website portfolio cá nhân giới thiệu kỹ năng, kinh nghiệm và các dự án Frontend, với giao diện hiện đại, responsive và hỗ trợ Dark Mode.
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2 sm:mb-7 sm:gap-3">
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      React
                    </span>
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      Tailwind CSS
                    </span>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center gap-2 sm:justify-between sm:gap-3">
                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <PlayCircle className="size-4" />
                    Video demo
                  </a>

                  <a
                    href="https://github.com/pkhang35/portfolioCV"
                    target="_blank"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <img
                      src={Github}
                      alt="GitHub"
                      className="size-4"
                    />
                    GitHub
                  </a>

                </div>
              </div>
            </article>
            {/* Project 3 */}
            <article
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-primary/10
                dark:border-gray-700
                dark:bg-gray-dark
                dark:hover:shadow-none
              "
              data-aos="fade-up" data-aos-delay="300"
            >
              <div
                className="
                  relative
                  h-48
                  overflow-hidden
                  bg-gray-200
                  sm:h-52
                  lg:h-48
                  dark:bg-gray-800
                "
              >
                <Link to="/itjobs" className="block h-full">
                  <img
                    src={ITJobs}
                    alt="DevQuiz"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-105
                    "
                  />
                  <div
                    className="
                      absolute
                      inset-0
                      bg-primary/0
                      transition-colors
                      duration-300
                      group-hover:bg-primary/10
                    "
                  />
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      size-10
                      translate-x-2
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/90
                      text-primary
                      opacity-0
                      shadow-lg
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                      dark:bg-gray-900/90
                    "
                  >
                    <ExternalLink className="size-5" />
                  </div>
                </Link>
              </div>
              <div className="p-5 sm:p-6 lg:p-7">
                <Link to="/itjobs">
                  <h3
                    className="
                      mb-3
                      text-xl
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    IT Jobs
                  </h3>
                  <p
                    className="
                      mb-5
                      text-sm
                      leading-7
                      text-gray-600
                      sm:text-base
                      dark:text-gray-300
                    "
                  >
                    Website tuyển dụng IT cho phép người dùng tìm kiếm việc làm, xem chi tiết vị trí tuyển dụng, thông tin doanh nghiệp và ứng tuyển.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2 sm:mb-7 sm:gap-3">
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      React
                    </span>
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      Ant Design
                    </span>
                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        transition-colors
                        duration-300
                        group-hover:bg-primary/10
                        sm:px-4
                        sm:text-sm
                        dark:bg-gray-700
                      "
                    >
                      Sass
                    </span>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center gap-2 sm:justify-between sm:gap-3">
                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <PlayCircle className="size-4" />
                    Video demo
                  </a>
                  <a
                    href="https://github.com/pkhang35/recruitment-web"
                    target="_blank"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gray-100
                      px-3
                      py-2
                      text-xs
                      text-gray-800
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                      dark:bg-gray-700
                      dark:text-white
                      dark:hover:bg-primary
                    "
                  >
                    <img
                      src={Github}
                      alt="GitHub"
                      className="size-4"
                    />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Education */}         
      <section id="education" className="py-16 sm:py-20 lg:py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl text-gray-900 sm:mb-14 sm:text-5xl dark:text-white">
            Học Vấn
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="group relative pl-8 sm:pl-10">
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  bg-gray-200
                  transition-colors
                  duration-500
                  group-hover:bg-primary
                  dark:bg-gray-700
                  dark:group-hover:bg-primary
                "
              />
              <div
                className="
                  absolute
                  -left-1
                  top-0
                  h-1
                  w-3
                  bg-gray-300
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  dark:bg-gray-600
                "
              />
              <span
                className="
                  absolute
                  left-4
                  top-0
                  rounded-full
                  bg-gray-100
                  px-3
                  py-1
                  text-xs
                  text-gray-500
                  transition-all
                  duration-300
                  group-hover:bg-primary/10
                  group-hover:text-primary
                  sm:text-sm
                  dark:bg-gray-800
                  dark:text-gray-400
                "
              >
                2022 - 2025
              </span>
              <div
                className="
                  ml-4
                  pt-14
                  transition-transform
                  duration-500
                  sm:ml-8
                  sm:pt-16
                  group-hover:translate-x-2
                "
              >
                <Link
                  to="/education"
                  className="group/link flex items-start justify-between gap-4"
                >
                  <h3
                    className="
                      text-2xl
                      leading-tight
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover/link:text-primary
                      sm:text-3xl
                      lg:text-4xl
                      dark:text-white
                    "
                  >
                    Công Nghệ Thông Tin
                  </h3>

                  <div
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover/link:bg-primary/10
                      group-hover/link:text-primary
                      sm:size-10
                      dark:text-gray-300
                    "
                  >
                    <ExternalLink className="size-5 sm:size-6" />
                  </div>
                </Link>
                <Link to="/education">
                  <h4
                    className="
                      mt-3
                      text-xl
                      leading-snug
                      text-gray-900
                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    Trường Cao Đẳng Kỹ Thuật Cao Thắng
                  </h4>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-gray-600
                      transition-colors
                      duration-300
                      group-hover:text-gray-800
                      sm:text-base
                      dark:text-gray-300
                      dark:group-hover:text-gray-200
                    "
                  >
                    Chuyên ngành: Lập trình web
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 lg:py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-gray-900 sm:text-5xl dark:text-white">
            Liên Hệ
          </h2>

          <div className="mt-10 flex justify-center sm:mt-12">
            <div className="w-full text-center">
              <p
                className="
                  mx-auto
                  max-w-xl
                  text-base
                  leading-7
                  text-gray-700
                  sm:text-lg
                  dark:text-gray-300
                "
              >
                Bạn có công việc hoặc dự án muốn trao đổi ?
                <br />
                Hãy liên hệ với mình.
              </p>

              <a
                href="mailto:pkhang353@gmail.com"
                className="
                  mt-8
                  inline-block
                  max-w-full
                  break-all
                  font-heading
                  text-3xl
                  text-gray-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:text-primary
                  sm:mt-10
                  sm:text-4xl
                  lg:text-5xl
                  dark:text-white
                "
              >
                pkhang353@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
