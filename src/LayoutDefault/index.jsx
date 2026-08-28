import { Outlet } from "react-router-dom";
import Header from "../components/Header";


function LayoutDefault() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-dark-mode dark:text-white">
      <Header />

      <Outlet />

    </div>
  );
}

export default LayoutDefault;