import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVansDetail() {
  const id = useParams().id;
  const [van, setVan] = useState(null);
  useEffect(() => {
    console.log(id);
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  const simple = "bg-[#E17654]",
    luxury = "bg-[#161616]",
    rugged = "bg-[#115E59]";
  return (
    <>
      {van && (
        <div className=" bg-white">
          <div className="p-10 gap-5 text-xl grid grid-cols-[25%_60%] items-center">
            <img src={van.imageUrl} alt="" />
            <div className="flex flex-col gap-5">
              <button
                className={` w-max text-xl text-center px-5 py-2 rounded-lg text-[#FFEAD0] ${
                  van.type == "simple"
                    ? simple
                    : van.type == "rugged"
                    ? rugged
                    : luxury
                }`}
              >
                {van.type}
              </button>
              <p className="text-3xl font-bold">{van.name}</p>
              <p>
                <span className="font-bold">${van.price}</span>/day
              </p>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}
