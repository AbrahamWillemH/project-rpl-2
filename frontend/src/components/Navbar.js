import { Link } from "react-router-dom"
import '../index.css';
import '../colors.css'
import nav_logo from '../assets/logo-nav.png'

const Navbar = () => {
  return (
    <nav className="flex justify-center h-[70px] bg-black">
      <div className="container w-[1240px] flex items-center justify-between">
        <Link to='/' className="flex items-center w-[577px]">
          <img src={nav_logo} alt="logo" width="45" />
          <a href="/" className="ml-5 font-bold text-white">HEALTH TRACKER</a>
        </Link>
        <div className="w-[600px] flex justify-between">
          <Link to="/dashboard" className="py-[7px]">Dashboard</Link>
          <Link href="/workouts" className="py-[7px]">Workouts</Link>
          <Link href="/meals" className="py-[7px]">Meals</Link>
          <Link href="activity.html" className="py-[7px]">Information</Link>
          <Link href="login.html" className="btn-primary px-[24px] py-[7px] rounded-md">
            <p className="text-white">Log Out</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar