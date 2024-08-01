import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}