import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout";
import Vans from "./components/pages/vans/Vans";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}