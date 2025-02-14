import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function AppLayout(){
    return (
        <div className="bg-[#FFF7ED] m-auto lg:w-2/5">
        <Navbar/>
        <Outlet />
        <Footer />
        </div>
    )
}