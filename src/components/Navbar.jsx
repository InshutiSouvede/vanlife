import {NavLink, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div className="flex justify-between h-20 items-center px-10 lg:text-xl bg-[#FFF7ED]">
        <Link className="uppercase font-bold" to="/">#Vanlife</Link>
        <div className="flex gap-5">
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="host">Host</NavLink>
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="about">About</NavLink>
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="vans">Vans</NavLink>
        </div>
    </div>
    )
}