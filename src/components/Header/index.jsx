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
function Header() {
  const [isDark, setIsDark] = useState(()=>{
    return localStorage.getItem("theme")=="dark";
  });
  useEffect(()=>{
     const theme=localStorage.getItem("theme");
     if(theme==="dark"){
      document.documentElement.classList.add("dark");
     }else{
      document.documentElement.classList.remove("dark")
     }
  },[])
  const handleToggleTheme = () => {
    setIsDark((prev)=>{
      const newTheme=!prev;
      localStorage.setItem("theme",newTheme?"dark":"light");
      console.log(document.documentElement.classList)
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
              <li>
                <House />
              </li>
              <li>
                <WrenchOff />
              </li>
              <li>
                <Folder />
              </li>
              <li>
                <ChartColumnIncreasing />
              </li>
              <li>
                <GraduationCap />
              </li>
              <li>
                <Languages />
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
