import { Await, defer, Link, useLoaderData,  } from "react-router-dom";
import { getHostVans } from "../../../../API";
import { checkLoginStatus } from "../../../../../utils";
import { Suspense } from "react";

export async function hostVanLoader({request}) {  
  await checkLoginStatus(request)
  return defer({hostVans:getHostVans()});
}
export default function HostVans({ children }) {
  const vansPromise = useLoaderData();
  const renderHostVansElement = (vans)=>{
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
    return <div className="flex flex-col gap-5 my-5">{vansToDisplay}</div>
  }
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl">Your listed vans</h1>
      <Suspense fallback={<h3 className="font-bold text-3xl">Loading ...</h3>}>
      <Await resolve={vansPromise.hostVans}>
        {renderHostVansElement}
      </Await>
      </Suspense>
    </div>
  );
}
