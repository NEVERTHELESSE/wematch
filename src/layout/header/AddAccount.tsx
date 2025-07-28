import { Link } from "react-router-dom";

export default function AddAccount() {
  return (
    <main className="flex lg:w-[20%] justify-around" id="right">
      <Link
        to="/sign-in"
        className="p-2 lg:px-8 py-2 text-white rounded-2xl bg-tertiary hover:bg-primary duration-500"
      >
        Login
      </Link>
      <Link
        to="/sign-up"
        className="p-2 mx-2 lg:px-8 py-2 border border-secondary bg-primary rounded-2xl hover:bg-primary duration-500 hover:text-white"
      >
        Signup
      </Link>
    </main>
  );
}
