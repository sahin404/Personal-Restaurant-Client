import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [error,setError] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.user_email.value;
        const password = e.target.user_password.value;
        // console.log(email,password);
        setError("");
        signIn(email,password)
        .then(()=>{
            navigate(from, {replace:true});
        })
        .catch(()=>{
            setError("Invalid Username or Password. Try Again!");
        })
    };

    return (
        <div className="hero bg-base-200 py-10 rounded-lg min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row gap-8 lg:gap-10 items-center bg-base-300 p-16 shadow-2xl shadow-black">
                {/* Left Section: Image */}
                <div className="w-full lg:w-1/2">
                    <img src={loginImg} alt="Login Illustration" className="w-full h-auto max-w-md mx-auto lg:max-w-none" />
                </div>

                {/* Right Section: Form */}
                <div className="w-full lg:w-1/2">
                    <div className="card bg-base-100 shadow-2xl rounded-lg p-6">
                        <form className="card-body space-y-4" onSubmit={handleForm} autoComplete="off">
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="user_email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="user_password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                                <label className="text-red-600 text-sm">
                                    {
                                        error && <h1>{error}</h1>
                                    }
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="text-white btn bg-[#D1A054] hover:bg-[#d08a22]"
                                />
                            </div>
                        </form>

                        {/* Register Link */}
                        <div className="text-center space-y-4">
                            <h1>
                                New here? Create a new{" "}
                                <Link to="/signup">
                                    <span className="text-blue-500 hover:underline">Account</span>
                                </Link>
                            </h1>
                            <h1>Or Sign in with</h1>
                            <div className="flex gap-3 text-3xl items-center justify-center">
                                <FaGoogle />
                                <FaFacebook />
                                <FaGithub></FaGithub>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
