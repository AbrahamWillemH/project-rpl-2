import { Link } from "react-router-dom"
import '../index.css';
import '../colors.css'
import nav_logo from '../assets/logo-nav.png'
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const {logout} = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <nav className="flex justify-center h-[70px] bg-black">
      <div className="container w-[1240px] flex items-center justify-between">
        <Link to='/' className="flex items-center w-[577px]">
          <img src={nav_logo} alt="logo" width="45" />
          <p className="ml-5 font-bold text-white">HEALTH TRACKER</p>
        </Link>
        <div className="w-[600px] flex justify-between">
          <Link to="/dashboard" className="py-[7px]">Dashboard</Link>
          <Link to="/workouts" className="py-[7px]">Workouts</Link>
          <Link to="/meals" className="py-[7px]">Meals</Link>
          <Link to="" className="py-[7px]">Information</Link>
          <Link to="login.html" onClick={handleClick} className="btn-primary px-[24px] py-[7px] rounded-md">
            <p className="text-white">Log Out</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar