import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div className="flex justify-between h-20 items-center px-10 text-xl bg-[#FFF7ED]">
        <Link className="uppercase font-bold" to="/">#Vanlife</Link>
        <div className="flex gap-5">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </div>
    </div>
    )
}