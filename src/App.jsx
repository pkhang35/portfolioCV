import { Route, Routes } from "react-router-dom"
import LayoutDefault from "./LayoutDefault"
import Home from "./pages/Home"
import Devquiz from "./pages/Project/Devquiz"
import Education from "./pages/Education"

function App() {
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
