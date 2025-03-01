import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setMessage("");

    const endpoint = currentState === "Login" ? "/api/users/login" : "/api/users/register";
    try {
      const response = await axios.post(endpoint, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data.message || "Success!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {message && <p className="text-red-500 text-sm">{message}</p>}
      {currentState === "Sign Up" && (
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="John Doe"
          required
        />
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="hello@gmail.com"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        <p onClick={() => setCurrentState(currentState === "Login" ? "Sign Up" : "Login")} className="cursor-pointer">
          {currentState === "Login" ? "Create a new account" : "Login here"}
        </p>
      </div>
      <button className="px-8 py-2 mt-4 font-light text-white bg-[#F49D1A]">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
