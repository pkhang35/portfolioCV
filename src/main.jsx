import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {BrowserRouter} from'react-router-dom'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
)
