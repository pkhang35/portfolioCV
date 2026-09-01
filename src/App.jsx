import { Route, Routes } from "react-router-dom"
import LayoutDefault from "./LayoutDefault"
import Home from "./pages/Home"
import Devquiz from "./pages/Project/Devquiz"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LayoutDefault/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="devquiz" element={<Devquiz/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App
