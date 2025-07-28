import { Link } from "react-router-dom";
import Images from "../../components/Images";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex  hover:scale-110 duration-1000 items-center logo mx-2"
    >
      <div className="size-[2rem]">
        <Images src="/wematch.png" />
      </div>
      <div className="hidden flex-col lg:flex">
        <p className="text-2xl ">
          love<span className="text-tertiary font-bold">connect💝 </span>
        </p>
        <p className="leading-[3px]">meet your soulmate</p>
      </div>
    </Link>
  );
}
