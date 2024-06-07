import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bgImg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form className="absolute rounded-lg w-3/12 p-10 mx-auto my-36 left-0 right-0 bg-black text-white opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Confirm Email Address"
            className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          />
        ):null}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <button className="p-5 bg-red-700 my-6 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={() => setIsSignIn(!isSignIn)} className="cursor-pointer">
          {isSignIn
            ? "New user? Click here to sign up"
            : "Already have an account? Click here to sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
