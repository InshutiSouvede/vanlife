import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Vans, { loader } from "./components/pages/vans/Vans";
import VanDetail, { vanDetailLoader } from "./components/pages/vans/VanDetail";
import NotFound from "./components/pages/NotFound";
import Error from "./components/pages/Error";
import HostLayout from "./components/layouts/HostLayout";
import Dashboard from "./components/pages/hosts/Dashboard";
import Income from "./components/pages/hosts/Income";
import HostVans, {
  hostVanLoader,
} from "./components/pages/hosts/vans/HostVans";
import Reviews from "./components/pages/hosts/Reviews";
import HostVansDetailLayout, {
  HostVanDetailLoader,
} from "./components/layouts/HostVanDetailLayout";
import HostVanDetail from "./components/pages/hosts/vans/HostVanDetail";
import HostVanPrice from "./components/pages/hosts/vans/HostVanPrice";
import HostVanPhotos from "./components/pages/hosts/vans/HostVanPhotos";
import Login, { loginAction } from "./components/pages/Login";
import { checkLoginStatus } from "../utils";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} action={loginAction} />

        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={loader} errorElement={<Error />} />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
          errorElement={<Error />}
        />

        <Route path="host" element={<HostLayout />} loader={async({request})=> await checkLoginStatus(request)}>
          <Route index element={<Dashboard />} loader={hostVanLoader} />
          <Route path="income" element={<Income />} loader={async({request})=> await checkLoginStatus(request)} />
          <Route path="reviews" element={<Reviews />} loader={async({request})=> await checkLoginStatus(request)} />
          <Route loader={hostVanLoader} path="vans" element={<HostVans />} />
          <Route
            path="vans/:id"
            element={<HostVansDetailLayout />}
            loader={HostVanDetailLoader}
          >
            <Route index element={<HostVanDetail />}  loader={async({request})=> await checkLoginStatus(request)}/>
            <Route path="pricing" element={<HostVanPrice />} loader={async({request})=> await checkLoginStatus(request)} />
            <Route path="photos" element={<HostVanPhotos />} loader={async({request})=> await checkLoginStatus(request)} />
          </Route>
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
