import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUp, logOut, updatePro } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const password = e.target.user_password.value;

        setError("");
        
        signUp(email, password)
            .then(() => {
                logOut();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Account has been ceate succesfully!",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  updatePro(name);
                navigate('/login');
            })
            .catch(() => {
                setError("Invalid Username or Password. Try Again!");
                e.target.reset();
            });
    };

    return (
        <div className="hero bg-base-200 py-10 rounded-lg min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 items-center bg-base-300 p-16 shadow-2xl shadow-black">
                {/* Left Section: Image */}
                <div className="w-full lg:w-1/2">
                    <img src={loginImg} alt="Sign Up Illustration" className="w-full h-auto max-w-md mx-auto lg:max-w-none" />
                </div>

                {/* Right Section: Form */}
                <div className="w-full lg:w-1/2">
                    <div className="card bg-base-100 shadow-2xl rounded-lg p-6">
                        <form className="card-body space-y-4" onSubmit={handleForm} autoComplete="off">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

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
                            </div>

                            <label className="text-red-600 text-sm">
                                {error && <h1>{error}</h1>}
                            </label>
                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="text-white btn bg-[#D1A054] hover:bg-[#d08a22]"
                                />
                            </div>
                        </form>

                        {/* Login Link */}
                        <div className="text-center space-y-4">
                            <h1>
                                Have an account? Please{" "}
                                <Link to="/login">
                                    <span className="text-blue-500 hover:underline">Login</span>
                                </Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
