import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function AppLayout(){
    return (
        <div className="w-2/3 m-auto lg:w-2/5">
        <Navbar/>
        <Outlet />
        <Footer />
        </div>
    )
}