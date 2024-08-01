import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../../../server'
export default function Vans() {
  const [vans, setVans] = useState([]);
  const dispayVans = vans.map((el) => {
    return (
      <div key={el.id}>
        <img src={el.imageUrl} alt="" />
        <div>
          <p>{el.name}</p>
          <span>${el.price}/day</span>
          <Link to="">{el.type}</Link>
        </div>
      </div>
    );
  });
  useEffect(() => {
    fetch("api/vans")
      .then((data) => data.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.log("There was an error", err));
  }, []);
  return (
    <div className="p-10 flex flex-col gap-5">
      <h1 className="font-bold text-3xl">Explore our vans options</h1>
      <div className="grid grid-cols-4 gap-5 items-center text-[#4D4D4D]">
        <button className="bg-[#FFEAD0] rounded-md py-2">Simple</button>
        <button className="bg-[#FFEAD0] rounded-md py-2">Luxury</button>
        <button className="bg-[#FFEAD0] rounded-md py-2">Rugged</button>
        <Link className="underline" to="">
          Clear filters
        </Link>
      </div>
      <div>{dispayVans}</div>
    </div>
  );
}
