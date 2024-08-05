import {NavLink, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div className="flex justify-between h-20 items-center px-10 text-xl bg-[#FFF7ED]">
        <Link className="uppercase font-bold" to="/">#Vanlife</Link>
        <div className="flex gap-5">
            <NavLink className={({isActive})=>isActive?'underline':''} to="host">Host</NavLink>
            <NavLink className={({isActive})=>isActive?'underline':''} to="about">About</NavLink>
            <NavLink className={({isActive})=>isActive?'underline':''} to="vans">Vans</NavLink>
        </div>
    </div>
    )
}