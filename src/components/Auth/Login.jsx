import React, { useState } from "react";

const Login = ({handleLogin}) => {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setemail("");
    setpassword("");
  };
  
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-950 text-white">
      <div className="border border-emerald-600 bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-emerald-500 text-center mb-6">
          Welcome Back
        </h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="w-full outline-none bg-transparent text-white placeholder:text-gray-400 border border-emerald-600 px-5 py-3 rounded-full focus:ring-2 focus:ring-emerald-400 transition-all duration-200"
            type="email"
            placeholder="abc@gmail.com"
          />
   
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="w-full outline-none bg-transparent text-white placeholder:text-gray-400 border border-emerald-600 px-5 py-3 rounded-full focus:ring-2 focus:ring-emerald-400 transition-all duration-200"
            type="password"
            placeholder="********"
          />

          <button
            type="submit"
            className="w-full mt-4 text-black font-semibold bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 px-5 py-3 rounded-full shadow-md hover:shadow-emerald-400/40"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          Don’t have an account?{" "}
          <span className="text-emerald-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
