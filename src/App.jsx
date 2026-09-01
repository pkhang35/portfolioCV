import { Route, Routes } from "react-router-dom"
import LayoutDefault from "./LayoutDefault"
import Home from "./pages/Home"
import Devquiz from "./pages/Project/Devquiz"
import Education from "./pages/Education"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
  
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="" element={<LayoutDefault/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="devquiz" element={<Devquiz/>}/>
          <Route path="education" element={<Education/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App
