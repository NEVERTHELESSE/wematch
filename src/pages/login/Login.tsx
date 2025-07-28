import { Link } from "react-router-dom";
import Images from "../../components/Images";
import { useState, type ChangeEvent } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  function changeInputText(e: ChangeEvent<HTMLInputElement>) {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function login() {}
  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="cover"></div>
      <div className="w-[100vw] h-[100vh]">
        <Images src="/images/connect.jpg" />
      </div>
      <form
        onSubmit={login}
        action=""
        className="w-full sm:w-[30rem] bg-tertiary p-2 sm:p-4 rounded-2xl  absolute"
      >
        <h3 className="text-2xl my-2 text-center text-white">Welcome Back😍</h3>
        <input
          placeholder="Enter your email address or phone number"
          className="w-full my-2 p-4 bg-gray-100 rounded-2xl"
          value={userInfo.email}
          name="email"
          onChange={changeInputText}
        />
        <div className="relative flex items-center">
          <input
            placeholder="Enter your password"
            value={userInfo.password}
            type={showPassword ? "text" : "password"}
            onChange={changeInputText}
            className="w-full my-2 p-4 bg-gray-100 rounded-2xl"
          />
          <div
            className="absolute text-3xl right-3 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? "😝" : "🙈"}
          </div>
        </div>
        <button className="w-full bg-primary p-4 rounded-2xl my-2">
          Login
        </button>
        <div className="flex justify-between text-secondary">
          <Link to="/sign-up">Create an account👩‍❤️‍👨</Link>
          <Link to="/sign-up">Forgot password🤔</Link>
        </div>
      </form>
    </div>
  );
}
