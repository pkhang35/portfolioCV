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
      <header>
        <div className="container mx-auto">
          <div className="h-15 flex items-center justify-center">
            <ul className="mt-3 p-2 bg-gray-light dark:bg-gray-dark rounded-2xl flex gap-3 items-center justify-center">
              <li className="nav-item hover:text-primary">
                <a href="#about">
                  <House />
                  <span className="tooltip">
                    Trang Chủ
                  </span>
                </a>
              </li>
              <li className="nav-item hover:text-primary">
                <a href="#skills">
                  <WrenchOff />
                  <span className="tooltip">
                    Kỹ Năng
                  </span>
                </a>
            
              </li>
              <li className="nav-item hover:text-primary">
                <Folder />
                 <span className="tooltip">
                  Dự Án
                </span>
              </li>
              <li className="nav-item hover:text-primary">
                <ChartColumnIncreasing />
                <span className="tooltip">
                  Kinh Nghiệm
                </span>
              </li>
              <li className="nav-item hover:text-primary">
                <GraduationCap />
                 <span className="tooltip">
                  Học Vấn
                </span>
              </li>
              <li className="nav-item hover:text-primary">
                <Languages />
                 <span className="tooltip">
                  Ngôn Ngữ
                </span>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleToggleTheme}
                  type="button"
                  className={`
                        relative 
                        flex 
                        h-9 w-18 
                        items-center 
                        rounded-full 
                        border border-gray-300
                        p-1 
                        ${isDark?"bg-toggle-dark ":"bg-toggle-light"}    
                    `}
                >
                  <span
                    className={`
                        flex items-center justify-center
                        size-7
                        transition-all
                        duration-300
                        rounded-full 
                        ${isDark ? "translate-x-9 bg-dark-mode" : "translate-x-0 bg-gray-light "}
                    `}
                  >
                    {isDark ? (
                      <Moon className="size-5 text-white" />
                    ) : (
                      <Sun className="size-5 text-yellow-500" />
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
