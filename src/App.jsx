import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Vans, { loader } from "./components/pages/vans/Vans";
import VanDetail from "./components/pages/vans/VanDetail";
import NotFound from "./components/pages/NotFound";
import Error from "./components/pages/Error";
export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} loader={loader} />
            <Route path="vans/:id" element={<VanDetail />} />
          <Route path="*" element={<NotFound />} />
          </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
