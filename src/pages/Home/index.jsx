import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import Linkedin from "../../assets/icons/linkedin-svgrepo-com.svg";
import Mail from "../../assets/icons/new-logo-gmail-svgrepo-com.svg";
import Zalo from "../../assets/icons/zalo-svgrepo-com.svg";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto">

          <div className="flex items-center justify-between">

            {/* ================= LEFT ================= */}
            <div className="w-1/2">

              {/* Greeting */}
              <p className="mb-4 text-lg font-medium text-primary">
                Xin chào, mình là Khang 👋
              </p>

              {/* Heading */}
              <h1 className="font-heading text-6xl leading-tight">
                Fresher{" "}
                <span className="text-primary">
                  Frontend
                </span>{" "}
                Developer
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                Mình xây dựng các website hiện đại,
                responsive và tập trung vào trải nghiệm
                người dùng.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex items-center gap-4">

                <button
                  type="button"
                  className="
                    rounded-lg
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
                  Xem dự án →
                </button>

                <button
                  type="button"
                  className="
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
                  Liên hệ với mình
                </button>

              </div>

              {/* Social */}
              <div className="mt-10">

                <p className="mb-4 font-medium">
                  Kết nối với mình
                </p>

                <ul className="flex items-center gap-5">

                  {/* Github */}
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

                  {/* Linkedin */}
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

                  {/* Email */}
                  <li>
                    <a
                      href="mailto:pkhang353@gmail.com"
                      aria-label="Email"
                    >
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

                  {/* Zalo */}
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
                          h-10
                          w-10
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


            {/* ================= RIGHT ================= */}
            <div className="relative flex w-1/2 justify-end">

              {/* Code Window */}
              <div
                className="
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-2xl
                  bg-gray-dark
                  shadow-2xl
                "
              >

                {/* Window Header */}
                <div
                  className="
                    flex
                    h-14
                    items-center
                    border-b
                    border-gray-700
                    px-5
                  "
                >

                  {/* Window buttons */}
                  <div className="flex gap-2">

                    <span className="size-3 rounded-full bg-red-400"></span>

                    <span className="size-3 rounded-full bg-yellow-400"></span>

                    <span className="size-3 rounded-full bg-green-400"></span>

                  </div>

                  {/* File name */}
                  <span className="ml-5 font-mono text-sm text-gray-300">
                    Khang.js
                  </span>

                </div>


                {/* Code Content */}
                <div className="p-7">

                  <pre
                    className="
                      overflow-hidden
                      font-mono
                      text-sm
                      leading-7
                    "
                  >
                    <code>

                      <span className="text-primary">
                        const
                      </span>{" "}

                      <span className="text-white">
                        developer
                      </span>{" "}

                      <span className="text-gray-300">
                        =
                      </span>{" "}

                      <span className="text-gray-300">
                        {"{"}
                      </span>

                      {"\n"}

                      {"  "}

                      <span className="text-blue-300">
                        name
                      </span>

                      <span className="text-gray-300">
                        :
                      </span>{" "}

                      <span className="text-green-300">
                        "Khang"
                      </span>

                      <span className="text-gray-300">
                        ,
                      </span>

                      {"\n"}

                      {"  "}

                      <span className="text-blue-300">
                        role
                      </span>

                      <span className="text-gray-300">
                        :
                      </span>{" "}

                      <span className="text-green-300">
                        "Frontend React Developer"
                      </span>

                      <span className="text-gray-300">
                        ,
                      </span>

                      {"\n"}

                      {"  "}

                      <span className="text-blue-300">
                        skills
                      </span>

                      <span className="text-gray-300">
                        : [
                      </span>

                      {"\n"}

                      {"    "}

                      <span className="text-green-300">
                        "React"
                      </span>

                      <span className="text-gray-300">
                        ,
                      </span>

                      {"\n"}

                      {"    "}

                      <span className="text-green-300">
                        "JavaScript"
                      </span>

                      <span className="text-gray-300">
                        ,
                      </span>

                      {"\n"}

                      {"    "}

                      <span className="text-green-300">
                        "Tailwind CSS"
                      </span>

                      <span className="text-gray-300">
                        ,
                      </span>

                      {"\n"}

                      {"    "}

                      <span className="text-green-300">
                        "Git & GitHub"
                      </span>

                      {"\n"}

                      {"  "}

                      <span className="text-gray-300">
                        ],
                      </span>

                      {"\n"}

                      {"  "}

                      <span className="text-blue-300">
                        passion
                      </span>

                      <span className="text-gray-300">
                        :
                      </span>{" "}

                      <span className="text-green-300">
                        "Building modern web experiences 🚀"
                      </span>

                      {"\n"}

                      <span className="text-gray-300">
                        {"}"}
                      </span>

                    </code>
                  </pre>

                </div>

              </div>


              {/* ================= FLOATING ICONS ================= */}

              <div
                className="
                  absolute
                  -bottom-10
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-5
                "
              >

                {/* React */}
                <div
                  className="
                    flex
                    size-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-3xl
                    shadow-xl
                  "
                >
                  ⚛️
                </div>


                {/* JavaScript */}
                <div
                  className="
                    flex
                    size-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-xl
                  "
                >
                  <span className="font-bold text-yellow-500">
                    JS
                  </span>
                </div>


                {/* Tailwind */}
                <div
                  className="
                    flex
                    size-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-xl
                  "
                >
                  <span className="text-3xl font-bold text-cyan-500">
                    ~
                  </span>
                </div>


                {/* Git */}
                <div
                  className="
                    flex
                    size-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-xl
                  "
                >
                  <span className="font-bold text-purple-500">
                    Git
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Home;