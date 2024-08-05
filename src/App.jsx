import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Vans, { loader } from "./components/pages/vans/Vans";
import VanDetail from "./components/pages/vans/VanDetail";
import NotFound from "./components/pages/NotFound";
import Error from "./components/pages/Error";
import HostLayout from "./components/layouts/HostLayout";
import Dashboard from "./components/pages/hosts/Dashboard";
import Income from "./components/pages/hosts/Income";
import HostVans, { hostVanLoader } from "./components/pages/hosts/Vans";
import Reviews from "./components/pages/hosts/Reviews";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={loader} />
        <Route path="vans/:id" element={<VanDetail />} />
        
        <Route path="host" element = {<HostLayout/>}>
        <Route index element ={<Dashboard />} />
        <Route path="income" element ={<Income />} />
        <Route loader={hostVanLoader} path="vans" element ={<HostVans />} />
        <Route path="reviews" element ={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
