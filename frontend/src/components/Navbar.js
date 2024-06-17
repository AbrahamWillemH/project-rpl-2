import { Link } from "react-router-dom"
import '../index.css';
import '../colors.css'

const Navbar = () => {
  return (
    <nav class="flex justify-center h-[70px] bg-black">
      <div class="container w-[1240px] flex items-center justify-between">
        <Link to='/' class="flex items-center w-[577px]">
          <img src="assets/images/logoportal_remove.png" alt="" width="45" />
          <a href="/" class="ml-5 font-bold text-white">HEALTH TRACKER</a>
        </Link>
        <div class="w-[600px] flex justify-between">
          <a href="/dashboard" class="py-[7px]">Dashboard</a>
          <a href="/workouts" class="py-[7px]">Workouts</a>
          <a href="/meals" class="py-[7px]">Meals</a>
          <a href="activity.html" class="py-[7px]">Information</a>
          <a href="login.html" class="btn-primary px-[24px] py-[7px] rounded-md">
            <p class="text-white">Log Out</p>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar