import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../../API";

export function hostVanLoader() {
  return getHostVans();
}
export default function HostVans() {
  const vans = useLoaderData();
  console.log(vans);
  const vansToDisplay = vans.map((el) => {
    return (
      <Link key={el.id} to={el.id} className="bg-white">
        <div className="flex gap-5 items-center p-5">
          <img src={el.imageUrl} alt="van image" className="w-16" />
          <div>
            <p>{el.name}</p>
            <p className="text-[#4D4D4D]">${el.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl">Your listed vans</h1>
      <div className="flex flex-col gap-5 my-5">{vansToDisplay}</div>
    </div>
  );
}
