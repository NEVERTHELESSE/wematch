import { Link } from "react-router-dom";
import Images from "../../components/Images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

export default function Signup() {
  const genders = ["male", "female", "rather not say"];
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: 0,
    password: "",
    confirmPassword: "",
  });

  const [code, setCode] = useState("");
  const api = import.meta.env.VITE_API;
  const [timer, setTimer] = useState(0);
  const [userCode, setUserCode] = useState("");
  function sendCode() {
    if (userInfo.email == "") {
      alert("please provide a email");
    } else {
      axios
        .get(`${api}send-sms`)
        .then((res) => setCode(res.data))
        .then(() => setTimer(60));
    }
  }
  useEffect(() => {
    if (code != "") {
      if (timer > 1) {
        setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
      }
      setInterval(() => {
        setTimer(60);
      }, 60000);
    }

    return () => {};
  }, [code]);

  function signup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userInfo.password == userInfo.confirmPassword) {
      if (userCode == code) {
        const allUserData = { ...userInfo, code, phoneNumber };
        console.log(allUserData);
      } else {
        alert("invalid code");
      }
    } else {
      alert("password not match");
    }
  }

  function changeUserInfo(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name == "email") {
      if (code == "") {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }
    } else {
      setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }
  const [phoneNumber, setPhoneNumber] = useState("");
  function changeUserCode(e: ChangeEvent<HTMLInputElement>) {
    setUserCode(e.target.value);
    const input = e.target.value;
    if (code == "") {
      alert("request for a code");
    } else {
      if (input.length == 6) {
        if (input == code) {
          setTimeout(() => {
            alert("correct");
          }, 2000);
        } else {
          setTimeout(() => {
            alert("invalid code");
          }, 2000);
        }
      }
    }
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="cover"></div>
      <div className="w-[100vw] h-[100vh]">
        <Images src="/images/connect.jpg" />
      </div>
      <form
        onSubmit={signup}
        action=""
        className="w-full sm:w-[35rem] bg-tertiary p-2 sm:p-4 rounded-2xl  absolute"
      >
        {code}
        <h3 className="text-2xl border-b py-2 my-2 text-center text-white">
          Quickly create an account👩‍❤️‍👨
        </h3>
        <div className="flex">
          <input
            placeholder="First Name"
            required
            minLength={3}
            name="firstName"
            className="w-full my-2 p-4 bg-gray-100 rounded-2xl capitalize"
            onChange={changeUserInfo}
          />
          <input
            placeholder="Last Name"
            required
            onChange={changeUserInfo}
            minLength={3}
            name="lastName"
            className=" my-2 w-full ml-2 p-4 bg-gray-100 rounded-2xl capitalize"
          />
        </div>

        <div className="flex relative items-center">
          <input
            type="email"
            placeholder="Email Address"
            required
            minLength={3}
            name="email"
            onChange={changeUserInfo}
            className={`w-full my-2 p-4 
              ${code == "" ? "bg-gray-100" : "bg-slate-500 cursor-not-allowed"}
               rounded-2xl `}
            value={userInfo.email}
          />
          {code == "" ? (
            <div
              className="bg-secondary cursor-pointer p-2 rounded-lg absolute right-2"
              onClick={sendCode}
            >
              Send Code
            </div>
          ) : (
            <p className="bg-secondary cursor-not-allowed p-2 rounded-lg absolute right-2">
              Resend Code {timer} S
            </p>
          )}
        </div>

        <div className="sm:flex items-center">
          <input
            placeholder="Enter the code"
            required
            maxLength={6}
            name="code"
            className="w-full my-2 mr-3 p-4 bg-gray-100 rounded-2xl capitalize"
            value={userCode}
            onChange={changeUserCode}
            type="text"
          />
          <div className="my-1">
            <PhoneInput
              country={"us"}
              inputStyle={{
                height: 50,
              }}
            />
          </div>
        </div>

        <div className="sm:flex justify-between w-full">
          <div className="bg-gray-100 p-2 rounded-2xl sm:w-[70%] mr-2">
            <p className="font-bold py-1">Gender</p>
            <div className="flex ">
              {genders.map((gender, index) => (
                <div className="flex items-center mr-2" key={index}>
                  <input
                    type="radio"
                    name="gender"
                    onChange={changeUserInfo}
                    id={gender}
                  />
                  <label htmlFor={gender} className="ml-1 capitalize">
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-[30%] my-1 bg-gray-100 rounded-2xl p-2">
            <p>Date of Birth</p>
            <input
              type="date"
              className="p-2"
              name="dob"
              onChange={changeUserInfo}
            />
          </div>
        </div>
        <div className="flex">
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            minLength={6}
            onChange={changeUserInfo}
            className="w-full my-2 p-4 bg-gray-100 rounded-2xl capitalize"
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={changeUserInfo}
            placeholder="Confirm password"
            required
            minLength={6}
            className=" my-2 w-full ml-2 p-4 bg-gray-100 rounded-2xl capitalize"
          />
        </div>

        <button
          type="submit"
          className={
            "w-full bg-primary p-4 rounded-2xl my-2 cursor-not-allowed"
          }
        >
          Create Account
        </button>
        <div className="flex justify-between text-secondary">
          <Link to="/sign-up">Create an account👩‍❤️‍👨</Link>
          <Link to="/sign-up">Forgot password🤔</Link>
        </div>
      </form>
    </div>
  );
}
