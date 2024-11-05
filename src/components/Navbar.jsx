import { Link, NavLink } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="w-11/12 lg:w-9/12 mx-auto flex justify-between items-center h-24">
        <Link to="/" className="font-semibold text-lg">GADGET-BD</Link>
        <ul className="flex justify-center items-center gap-5">
            <NavLink className="px-6 py-2 rounded-lg border-b-2 hover:shadow-md hover:shadow-[#9538E2] ">Home</NavLink>
            <NavLink className="px-6 py-2 rounded-lg border-b-2 hover:shadow-md hover:shadow-[#9538E2] ">Statistics</NavLink>
            <NavLink className="px-6 py-2 rounded-lg border-b-2 hover:shadow-md hover:shadow-[#9538E2] ">Dashboard</NavLink>
        </ul>
        <div className="flex gap-5 items-center">
            <span className="p-2 rounded-full outline outline-gray-300 hover:outline-gray-500 cursor-pointer relative">
            <span className="text-sm absolute -top-2 -right-2">21</span>
            <FiShoppingCart className="text-2xl"/>
            </span>
            <span className="p-2 rounded-full outline outline-gray-300 hover:outline-gray-500 cursor-pointer relative">
            <span className="text-sm absolute -top-2 -right-2">21</span>
            <CiHeart className="text-2xl"/>
            </span>
        </div>
    </nav>
  )
}

export default Navbar