import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function About() {
    return (
    <div className=" text-xl">
        <img className="w-full" src="./images/about-hero.png" alt="" />
        <div className="p-10 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="bg-[#FFCC8D] h-max p-10 rounded-md font-bold">
            <h2>Your destination is waiting.</h2>
            <h2>Your van is ready.</h2>
            <Link className="text-white mt-5 p-3 bg-black block w-max rounded-lg" to='/vans'>Explore our vans</Link>
        </div>
        </div>
    </div>
    )
  }