import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";


function LayoutDefault() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-dark-mode dark:text-white">
      <Header />
      <main>
         <Outlet />
      </main>
     <Footer/>
      <FloatingContact />
    </div>
  );
}

export default LayoutDefault;