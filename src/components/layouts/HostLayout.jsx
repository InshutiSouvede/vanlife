import { Outlet } from "react-router-dom";

export default function HostLayout(){
    return(
        <>
        <h1 className="font-semibold">Hosts shared part</h1>
        <Outlet />
        </>
    )
}