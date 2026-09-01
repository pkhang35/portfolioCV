import {
  ChartColumnIncreasing,
  Folder,
  GraduationCap,
  House,
  Languages,
  Moon,
  Sun,
  WrenchOff,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./Header.css";
function Header() {
  const [isDark, setIsDark] = useState(()=>{
    const theme = localStorage.getItem("theme")
    return theme === null || theme ==="dark";
  });
  useEffect(()=>{
     const theme=localStorage.getItem("theme");
     if(theme === null || theme==="dark"){
      document.documentElement.classList.add("dark");
     }else{
      document.documentElement.classList.remove("dark")
     }
  },[])
  const handleToggleTheme = () => {
    setIsDark((prev)=>{
      const newTheme=!prev;
      localStorage.setItem("theme",newTheme?"dark":"light");
      document.documentElement.classList.toggle("dark",newTheme);
      return newTheme;
    });
  };
  return (
    <>
     <header className="relative">
      <div className="container mx-auto px-4">
        <div
          className="
            fixed
            left-1/2
            top-2
            z-50
            -translate-x-1/2
            flex
            h-14
            items-center
            justify-center
          "
        >
          <ul
            className="
              flex
              items-center
              justify-center
              gap-1.5
              rounded-2xl
              bg-gray-light
              p-1.5
              dark:bg-gray-dark
              sm:gap-2
              sm:p-2
              lg:gap-3
            "
          >
            {/* Home */}
            <li className="nav-item hover:text-primary">
              <a
                href="#about"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <House className="size-5 sm:size-5.5" />
                <span className="tooltip">
                  Trang Chủ
                </span>
              </a>
            </li>

            {/* Skills */}
            <li className="nav-item hover:text-primary">
              <a
                href="#skills"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <WrenchOff className="size-5 sm:size-5.5" />

                <span className="tooltip">
                  Kỹ Năng
                </span>
              </a>
            </li>

            {/* Experience */}
            <li className="nav-item hover:text-primary">
              <a
                href="#experience"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <ChartColumnIncreasing className="size-5 sm:size-5.5" />

                <span className="tooltip">
                  Kinh Nghiệm
                </span>
              </a>
            </li>

            {/* Projects */}
            <li className="nav-item hover:text-primary">
              <a
                href="#projects"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <Folder className="size-5 sm:size-5.5" />

                <span className="tooltip">
                  Dự Án
                </span>
              </a>
            </li>

            {/* Education */}
            <li className="nav-item hover:text-primary">
              <a
                href="#education"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <GraduationCap className="size-5 sm:size-5.5" />

                <span className="tooltip">
                  Học Vấn
                </span>
              </a>
            </li>

            {/* Languages */}
            <li className="nav-item hover:text-primary">
              <a
                href="#languages"
                className="flex size-9 items-center justify-center sm:size-10"
              >
                <Languages className="size-5 sm:size-5.5" />

                <span className="tooltip">
                  Ngôn Ngữ
                </span>
              </a>
            </li>

            {/* Dark mode */}
            <li className="nav-item">
              <button
                onClick={handleToggleTheme}
                type="button"
                aria-label="Chuyển đổi giao diện"
                className={`
                  relative
                  flex
                  h-8
                  w-16
                  items-center
                  rounded-full
                  border
                  border-gray-300
                  p-1

                  sm:h-9
                  sm:w-18

                  ${isDark ? "bg-toggle-dark" : "bg-toggle-light"}
                `}
              >
                <span
                  className={`
                    flex
                    size-6
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300

                    sm:size-7

                    ${
                      isDark
                        ? "translate-x-8 bg-dark-mode sm:translate-x-9"
                        : "translate-x-0 bg-gray-light"
                    }
                  `}
                >
                  {isDark ? (
                    <Moon className="size-4 text-white sm:size-5" />
                  ) : (
                    <Sun className="size-4 text-yellow-500 sm:size-5" />
                  )}
                </span>
              </button>

              <span className="tooltip">
                {isDark ? "Chế độ sáng" : "Chế độ tối"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}
export default Header;
