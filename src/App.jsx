import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}