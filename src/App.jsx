import { Route, Routes } from "react-router-dom"
import LayoutDefault from "./LayoutDefault"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LayoutDefault/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App
