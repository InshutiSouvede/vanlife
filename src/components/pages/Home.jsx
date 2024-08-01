import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Home(){
    return (
        <div>
            <Navbar/>
            <h1 className="font-bold">
                Home page
            </h1>
            <Footer />
        </div>
    )
}