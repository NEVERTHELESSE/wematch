import { Link, useLocation } from "react-router-dom";
import { navigates } from "./navigate";

export default function Navigation() {
  const locate = useLocation().pathname;
  return (
    <nav className="md:w-[50%] flex justify-around">
      {navigates.map((navigate, index) => (
        <Link
          to={navigate.link}
          key={index}
          className={`lg:text-2xl p-1 capitalize ${
            navigate.link == locate && "bg-primary text-white rounded-lg"
          }`}
        >
          {navigate.title}
        </Link>
      ))}
    </nav>
  );
}
