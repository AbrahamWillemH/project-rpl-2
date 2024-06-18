import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from "react"

// pages & components
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Dashboard from './pages/Dashboard'
import Meals from './pages/Meals'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
           <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/workouts'
                element={<Workouts />}
              />
              <Route
                path='/meals'
                element={<Meals />}
              />
              <Route
                path='/dashboard'
                element={<Dashboard />}
              />
              <Route
                path='/register'
                element={<Register />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
           </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
