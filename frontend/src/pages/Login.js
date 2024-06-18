import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const handleLogin = async (e) => {
    e.preventDefault()

    await login(email, password)
  }
  return (
    <div className="flex items-center justify-center text-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-[#0f0f0f] px-24 py-8 rounded-md mt-14" data-aos="fade-down">
            <h1 className="font-bold text-6xl mt-10">Login</h1>

            <form action="#" method="POST" onSubmit={handleLogin} className="flex-col text-left align-left justify-left">
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
                  Don't have an account?
                  <a href="login.html" className="text-[#f7bb0e] underline ml-2">Sign up</a>
                </p>
              </div>
              <div className="text-center form-group mt-16">
                <button disabled={isLoading} type="submit" className="btn-primary px-5 py-1 rounded-md text-white hover:bg-[#45a864]">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login;