import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import "../../../../server";
import { getAllVans } from "../../../api";

export function loader() {
  return defer({ vansPromise: getAllVans() });
}

export default function Vans() {
  const loaderData = useLoaderData();
  const vansPromise = loaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const simple = "bg-[#E17654]",
    luxury = "bg-[#161616]",
    rugged = "bg-[#115E59]";

  const renderVansElements = (vans) => {
    const filteredVans = !typeFilter
      ? vans
      : vans.filter((el) => el.type === typeFilter);
    const dispayVans = filteredVans.map((el) => {
      return (
        <Link
          to={`${el.id}`}
          className=""
          key={el.id}
          state={{
            type: typeFilter,
            search: "?" + searchParams.toString(),
          }}
        >
          <img className="rounded-md my-5" src={el.imageUrl} alt="" />
          <div className="flex justify-between">
            <p>{el.name}</p>
            <span className="grid grid-rows-2">
              <span>${el.price}</span>/day
            </span>
          </div>
          <button
            className={`${
              el.type == "simple"
                ? simple
                : el.type == "rugged"
                ? rugged
                : luxury
            } w-max text-xl text-center px-5 py-2 rounded-lg text-[#FFEAD0]`}
            to=""
          >
            {el.type}
          </button>
        </Link>
      );
    });
    return (
      <>
        <div className="grid grid-cols-4 gap-5 items-center text-[#4D4D4D]">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className="bg-[#FFEAD0] rounded-md py-2"
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className="bg-[#FFEAD0] rounded-md py-2"
          >
            Luxury
          </button>
          <Link
            to={"?type=rugged"}
            className="bg-[#FFEAD0] text-center rounded-md py-2"
          >
            Rugged
          </Link>
          {typeFilter && (
            <Link className="underline" to=".">
              Clear filters
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 gap-5">{dispayVans}</div>
      </>
    );
  };
  return (
    <div className="p-10 flex flex-col gap-5">
      <h1 className="font-bold text-3xl">Explore our vans options</h1>
      <Suspense fallback={<h1 className="text-3xl font-bold">Loading ...</h1>}>
        <Await resolve={vansPromise.vansPromise}>{renderVansElements}</Await>
      </Suspense>
    </div>
  );
}
