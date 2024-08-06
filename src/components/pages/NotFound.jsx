import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="flex flex-col gap-5 items-center px-20 my-20">
        <h1 className="font-semibold text-left text-3xl">Sorry, the page you were looking for was not found.</h1>
        <Link to='/' className="bg-black py-4 w-full  text-center text-xl rounded-lg text-white font-bold">Return to home</Link>
        </div>
    )
}