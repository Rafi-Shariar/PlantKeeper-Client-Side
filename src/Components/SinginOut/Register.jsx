import React, { use } from "react";
import { Link } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { PiPassword } from "react-icons/pi";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import signupImg from '../../assets/signupImg.png';
const Register = () => {
  const { createUser,setUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //creating User
    createUser(email, password)
      .then((userCredential) => {
        //adding user to DB
        const newUser = {
          name,
          photourl,
          email,
        };
      
        fetch("https://a10-server-beryl.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "You Have Been Registered",
              icon: "success",
              draggable: true,
            });
          });

          const user = userCredential.user;

          setUser(user);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "User All Ready Registered !! Try To Login",
        });
      });
  };
  return (
     <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Image + Message */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <img src={signupImg} alt="Sign Up" className="w-full h-auto object-contain mb-6" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-transparent bg-clip-text mb-4">
            Register now!
          </h1>
          <p className="text-slate-600">
            Welcome! Create your account to start building your personalized
            plant collection, manage your wishlist, and discover fresh green
            additions made just for you.
          </p>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <form className="space-y-4" onSubmit={handleSignUp}>
            {/* Name */}
            <div>
              <label className="label text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label text-sm font-medium text-gray-700">Photo URL</label>
              <input
                type="text"
                name="photourl"
                required
                placeholder="https://i.ibb.co/your-photo.jpg"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                minLength={6}
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                placeholder="Secure Password"
                className="input input-bordered w-full"
              />
              <p className="text-xs text-gray-400 mt-1">
                Must include upper & lowercase letters, and be at least 6 characters.
              </p>
            </div>

            {/* Already have account */}
            <p className="text-sm mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-green-700 font-semibold hover:underline">
                Login
              </Link>
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-green-600 text-white hover:bg-green-800 mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
