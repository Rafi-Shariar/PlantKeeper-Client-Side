import React, { use } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiPassword } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import loginImg from '../../assets/loginImg.png';
import Swal from "sweetalert2";
const Login = () => {
  const { logInUser, GoogleLogIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

  

    logInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Drag me!",
          icon: "Log In Successfull !!",
          draggable: true,
        });

         navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong email/password",
          footer: '<a href="#">Try Again</a>',
        });
      });
  };

  const handleGoogleLogin = () =>{
    GoogleLogIn()
    .then((result)=>{
      const loggedUser = result.user;
      
      
      const newUser = {
        name : loggedUser.displayName,
        photourl : loggedUser.photoURL,
        email: loggedUser.email
      }

      fetch('https://a10-server-beryl.vercel.app/users',{
        method:'POST',
        headers:{
          'content-type' : 'application/json',
        },
        body: JSON.stringify(newUser)
      })
      .then((res)=> res.json())
      .then(()=>{
        Swal.fire({
            title: "Login Successful!",
            icon: "success",
            draggable: true,
          });
      })

      



         navigate(`${location.state ? location.state : "/"}`);

    })
    .catch(()=>{
       Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong !!",
          footer: '<a href="#">Try Again</a>',
        });
    })

  }
  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
  <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden">
    
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <img src={loginImg} alt="Login" className="w-full h-full object-cover" />
    </div>

    {/* Form Section */}
    <div className="w-full lg:w-1/2 p-8">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Welcome Back!</h2>
      <p className="text-center text-gray-500 mb-6">Please login to continue to your dashboard.</p>

      <form className="space-y-4" onSubmit={handleLogin}>
        {/* Email */}
        <div>
          <label className="label text-sm font-medium text-gray-700 flex items-center gap-1">
            Email <HiOutlineMail />
          </label>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label text-sm font-medium text-gray-700 flex items-center gap-1">
            Password <PiPassword />
          </label>
          <input
            type="password"
            name="password"
            required
            minLength={6}
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        
        </div>

        {/* Register Link */}
        <p className="text-sm mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold hover:underline">
            Register
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-green-600 text-white hover:bg-green-800 mt-4"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="divider text-sm text-gray-500">or</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-white border border-gray-300 hover:shadow-md"
      >
        <svg
          aria-label="Google logo"
          width="18"
          height="18"
          viewBox="0 0 512 512"
          className="mr-2"
        >
          <path fill="#EA4335" d="M113 309l-18 65-64-2c-19-34-31-74-31-116s12-82 31-116l57 10 25 59c-5 13-7 27-7 43 0 15 2 30 7 43z" />
          <path fill="#34A853" d="M508 218c2 11 4 23 4 34s-1 23-3 34c-15 69-68 126-139 145l-65-53c23-10 42-26 56-46 13-20 21-44 21-69s-8-49-21-69c-14-20-33-36-56-46l65-53c71 19 124 76 139 145z" />
          <path fill="#FBBC05" d="M221 508c-63 0-119-21-162-57l64-51c25 17 56 28 91 28 36 0 70-13 95-34l65 53c-46 42-107 67-175 67z" />
          <path fill="#4285F4" d="M221 4c67 0 128 25 174 67l-65 53c-25-21-59-34-95-34-35 0-66 11-91 28l-64-51c43-36 99-57 162-57z" />
        </svg>
        Login with Google
      </button>
    </div>
  </div>
</div>

  );
};

export default Login;
