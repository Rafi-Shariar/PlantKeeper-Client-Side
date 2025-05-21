import React, { use } from "react";
import { Link } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { PiPassword } from "react-icons/pi";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
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
    <div>
      <div className="hero bg-green-50 min-h-screen rounded-3xl mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-transparent bg-clip-text">
              Register now!
            </h1>
            <p className="py-6 text-slate-600">
              Welcome! Create your account to start building your personalized
              plant collection, manage your wishlist, and discover fresh green
              additions made just for you.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleSignUp}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo url"
                  name="photourl"
                  required
                />

                <label className="label ">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label ">Password</label>
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
                    All ready have an account ?{" "}
                    <Link
                      to={`/login`}
                      className="font-semibold text-green-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn  mt-4 bg-green-600 text-white hover:bg-green-900"
                >
                 Register
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
