import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout(){
    return(
        <>
        <div className="px-10 flex my-10 gap-4 lg:text-xl">
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} end to="." >Dashboard</NavLink>
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="income" >Income</NavLink>
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="vans" >Vans</NavLink>
            <NavLink className={({isActive})=>isActive?'underline font-semibold':''} to="reviews" >Reviews</NavLink>
        </div>
        {/* <div className="px-10"> */}
        <Outlet />
        {/* </div> */}
        
        </>
    )
}