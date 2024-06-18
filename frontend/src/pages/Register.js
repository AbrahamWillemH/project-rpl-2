import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const handleSignup = async (e) => {
    e.preventDefault()

    await signup(username, email, password)
  }
  return (
    <div className="flex items-center justify-center text-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-[#0f0f0f] px-24 py-8 rounded-md mt-14" data-aos="fade-down">
            <h1 className="font-bold text-6xl mt-10">Sign Up</h1>

            <form action="#" method="POST" onSubmit={handleSignup} className="flex-col text-left align-left justify-left">
              <div className="form-group mt-16">
                <p>Username</p>
                <input type="text" id="name" name="name" onChange={(e) => setUsername(e.target.value)} value={username} className="border border-black w-72 rounded-md text-black px-2" required />
              </div>
              <div className="form-group mt-5">
                <p>Email</p>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border border-black w-72 rounded-md text-black px-2" required />
              </div>
              <div className="form-group mt-5">
                <p>Password</p>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="border border-black w-72 rounded-md text-black px-2" required />
              </div>
              <div className="form-group mt-5">
                <p>
                  Already have an account?
                  <Link to="/login" className="text-[#f7bb0e] underline ml-2">Log in</Link>
                </p>
              </div>
              <div className="text-center form-group mt-16">
                <button disabled={isLoading} type="submit" className="btn-primary px-5 py-1 rounded-md text-white hover:bg-[#45a864]">
                  Sign Up
                </button>
              </div>
              {error && <div className='justify-center items-center text-center text-red-500 mt-4'>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Register;