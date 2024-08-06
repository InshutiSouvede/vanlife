import { Link, redirect, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { getHostVans } from "../../../../API";
import { checkLoginStatus } from "../../../../../utils";

export function hostVanLoader({request}) {  
  // checkLoginStatus(request)
  return getHostVans();
}
export default function HostVans({ children }) {
  const loggedIn = false
  const navigate = useNavigate()
  const vans = useLoaderData();
  console.log(vans);
  const vansToDisplay = vans.map((el) => {
    return (
      <div key={el.id} className="flex items-center p-5 justify-between bg-white">
        <Link  to={`/host/vans/${el.id}`} >
          <div className="flex gap-5 items-center">
            <img src={el.imageUrl} alt="van image" className="w-16" />
            <div>
              <p>{el.name}</p>
              <p className="text-[#4D4D4D]">${el.price}/day</p>
            </div>
          </div>
        </Link>
        {children && children}
      </div>
    );
  });
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl">Your listed vans</h1>
      <div className="flex flex-col gap-5 my-5">{vansToDisplay}</div>
    </div>
  );
}
