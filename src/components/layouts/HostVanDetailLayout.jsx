import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getHostVanById } from "../../api";
import { checkLoginStatus } from "../../../utils";
export function HostVanDetailLoader({ params, request }) {
  checkLoginStatus(request);
  return getHostVanById(params.id);
}
export default function HostVansDetailLayout() {
  const van = useLoaderData();

  const simple = "bg-[#E17654]",
    luxury = "bg-[#161616]",
    rugged = "bg-[#115E59]";
  return (
    <div className="p-10">
      <Link to=".." relative="path">
        &larr; <span className="underline text-lg">Back to all vans</span>
      </Link>
      {van && (
        <div className=" bg-white p-10 my-10">
          <div className="gap-5 text-xl flex flex-wrap items-center">
            <img src={van.imageUrl} alt="" className="rounded-md w-80" />
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
              <p className="lg:text-3xl font-bold">{van.name}</p>
              <p>
                <span className="font-bold">${van.price}</span>/day
              </p>
            </div>
          </div>
          <div className=" flex my-10 gap-4 lg:text-xl">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
              end
              to="."
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
              to="photos"
            >
              Photos
            </NavLink>
          </div>
          <Outlet context={{ van }} />
        </div>
      )}
    </div>
  );
}
