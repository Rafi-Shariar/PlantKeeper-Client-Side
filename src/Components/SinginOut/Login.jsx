import React, { use } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiPassword } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
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
      console.log('logged', loggedUser);
      
      
      const newUser = {
        name : loggedUser.displayName,
        photourl : loggedUser.photoURL,
        email: loggedUser.email
      }

      fetch('http://localhost:3000/users',{
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
    <div>
      <div className="hero bg-green-50 min-h-screen rounded-3xl mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-transparent bg-clip-text">
              Login now!
            </h1>
            <p className="py-6 text-slate-600">
              Welcome back! Log in to access your personalized plant collection,
              manage your wishlist, and explore new green additions tailored
              just for you.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleLogin}>
                <label className="label">
                  Email <HiOutlineMail />
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">
                  Password <PiPassword />
                </label>
                <input
                  type="password"
                  className="input validator"
                  required
                  placeholder="Password"
                  minlength="6"
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  name="password"
                />
                <p className="validator-hint hidden">
                  Must be more than 6 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>

                <div>
                  <p className="link link-hover">
                    Don't have an account ?{" "}
                    <Link
                      to={`/register`}
                      className="font-semibold text-green-700"
                    >
                      Register
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn  mt-4 bg-green-600 text-white hover:bg-green-900"
                >
                  Login
                </button>
              </form>
              <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
