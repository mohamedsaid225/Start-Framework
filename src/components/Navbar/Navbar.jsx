import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return <>
        <div className="w-full bg-[#2c3e50] h-28 fixed z-10">
            <div className="w-10/12 py-8 m-auto text-white  font-bold flex justify-between items-center">
                <div className="logo text-4xl">
                    <h1><Link to="/">START FRAMEWORK</Link></h1>
                </div>
                <div className="nav-list space-x-12 text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'py-3 px-2 rounded-xl bg-[#1abc9c]' : ''} to="/about">ABOUT</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'py-3 px-2 rounded-xl bg-[#1abc9c]' : ''} to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'py-3 px-2 rounded-xl bg-[#1abc9c]' : ''} to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    </>
}