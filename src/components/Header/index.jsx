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
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === null || theme === "dark";
  });
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === null || theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;

      localStorage.setItem(
        "theme",
        newTheme ? "dark" : "light"
      );

      document.documentElement.classList.toggle(
        "dark",
        newTheme
      );

      return newTheme;
    });
  };

  const navItems = [
    {
      id: "about",
      label: "Trang Chủ",
      icon: House,
    },
    {
      id: "skills",
      label: "Kỹ Năng",
      icon: WrenchOff,
    },
    {
      id: "experience",
      label: "Kinh Nghiệm",
      icon: ChartColumnIncreasing,
    },
    {
      id: "projects",
      label: "Dự Án",
      icon: Folder,
    },
    {
      id: "education",
      label: "Học Vấn",
      icon: GraduationCap,
    },
    {
      id: "languages",
      label: "Ngôn Ngữ",
      icon: Languages,
    },
  ];

  const projectRoutes = [
    "/devquiz",
    // "/resume-builder",
    // "/quote-generator",
  ];
  const educationRoutes = [
    "/education",
  ];

  const isHomePage = location.pathname === "/";

  const isProjectPage = projectRoutes.includes(
    location.pathname
  );
  const isEducationtPage = educationRoutes.includes(
    location.pathname
  );

  const isActive = (id) => {
    // Home
    if (isHomePage) {
      return activeSection === id;
    }
    // Project detail
    if (isProjectPage) {
      return id === "projects";
    }
    if (isEducationtPage) {
      return id === "education";
    }
    return false;
  };

  return (
    <header className="relative">
      <div className="container mx-auto px-4">
        <div
          className="
            fixed
            left-1/2
            top-2
            z-50
            flex
            h-14
            -translate-x-1/2
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
            {/* Navigation */}
            {navItems.map(({ id, label, icon: Icon }) => (
              <li
                key={id}
                className={`
                  nav-item
                  transition-colors
                  duration-200
                  ${
                    isActive(id)
                      ? "text-primary"
                      : "text-black dark:text-white"
                  }
                `}
              >
                <a
                  href={`/#${id}`}
                  className="
                    flex
                    size-9
                    items-center
                    justify-center
                    sm:size-10
                  "
                >
                  <Icon className="size-5 sm:size-5.5" />

                  <span className="tooltip">
                    {label}
                  </span>
                </a>
              </li>
            ))}

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
                  ${
                    isDark
                      ? "bg-toggle-dark"
                      : "bg-toggle-light"
                  }
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
                {isDark
                  ? "Chế độ sáng"
                  : "Chế độ tối"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;