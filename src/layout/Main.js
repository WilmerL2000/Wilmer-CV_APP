import { Outlet, Link, Navigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const Main = () => {
    return (
        <div className="sm:flex md:min-h-screen">
            <div className="sm:w-1/5 bg-blue-900 py-2 p-1">
                <Navbar />
            </div>
            <div className="sm:w-4/5 md:p-10">
                <div className="bg-white shadow-md rounded-lg h-screen overflow-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main