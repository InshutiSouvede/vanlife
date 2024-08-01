import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import '../../../../server'
export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams()
//   console.log(searchParams.get('type'))
const typeFilter = searchParams.get('type')
  const simple = 'bg-[#E17654]', luxury= 'bg-[#161616]',rugged ='bg-[#115E59]'
  const filteredVans = !typeFilter? vans: vans.filter((el)=>el.type===typeFilter)
  const dispayVans = filteredVans.map((el) => {
    
    return (
      <Link to={`/vans/${el.id}`} className="" key={el.id}>
        <img className="rounded-md my-5" src={el.imageUrl} alt="" />
        <div className="flex justify-between">
          <p>{el.name}</p>
          <span className="grid grid-rows-2"><span>${el.price}</span>/day</span>
          
        </div>
        <Link className={`${el.type=='simple'?simple:el.type=='rugged'?rugged:luxury} w-max text-xl text-center px-5 py-2 rounded-lg text-[#FFEAD0]`} to="">{el.type}</Link>
      </Link>
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
        <button onClick={()=>setSearchParams({type:'simple'})} className="bg-[#FFEAD0] rounded-md py-2">Simple</button>
        <button onClick={()=>setSearchParams({type:'luxury'})} className="bg-[#FFEAD0] rounded-md py-2">Luxury</button>
        <button onClick={()=>setSearchParams({type:'rugged'})} className="bg-[#FFEAD0] rounded-md py-2">Rugged</button>
        {typeFilter&&<Link className="underline" to=".">
          Clear filters
        </Link>}
      </div>
      <div className="grid grid-cols-2 gap-5">
        {dispayVans}
    </div>
    </div>
  );
}
