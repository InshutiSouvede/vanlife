import { Link } from "react-router-dom";


export default function Home(){
    return (
        <div className="bg-[url('./images/home-hero.png')] bg-no-repeat object-center p-10 flex flex-col gap-5 text-white">
            <h1 className="font-bold  text-3xl ">
                You got the travel plans, we got the travel vans
            </h1>
            <p className="text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className="bg-[#FF8C38] text-xl text-center p-3 rounded-lg" to='/vans'>Find your van</Link>
        </div>
    )
}