import { Link, useLocation } from "react-router-dom";
import { navigates } from "./navigate";
import { useState } from "react";

export default function PhoneNavigation() {
  const locate = useLocation().pathname;
  const [show, setShow] = useState(false);
  function toggleNavigation() {
    setShow((prev) => !prev);
  }

  return (
    <nav
      className="relative 
   "
    >
      <button onClick={toggleNavigation}>
        <img src="/menu.gif" className="w-[3rem]" alt="" />
      </button>
      <div
        className={`absolute flex flex-col top-5 z-[100] duration-700 bg-primary p-2 text-2xl rounded-2xl h-[100vh] 
            ${!show ? "right-[-10rem]" : "right-0"}
            `}
      >
        {navigates.map((navigate, index) => (
          <Link
            to={navigate.link}
            key={index}
            className={`lg:text-2xl p-2 capitalize ${
              navigate.link == locate && "bg-primary text-white rounded-lg"
            }`}
          >
            {navigate.title}
          </Link>
        ))}
        <Link to="/sign-up">Signup</Link>
        <Link to="/sign-in">Login</Link>
      </div>
    </nav>
  );
}
