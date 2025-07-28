import { Link } from "react-router-dom";
import FirstHomeImages from "./FirstHomeImages";

export default function FirstHomeComponent() {
  return (
    <main
      className="px-2 xl:px-[5%] md:flex pt-[5rem] lg:pt-[8rem] min-h-[100vh] border-y-2 border-primary"
      id="first"
    >
      <section className=" md:w-[20rem]  xl:w-[50%]" id="second">
        <h1
          className="text-[3rem] leading-[3rem] lg:text-[4rem] xl:text-[6rem] text-primary font-bold capitalize lg:leading-[4rem]  xl:leading-[6rem]"
          id="first-text"
        >
          find your <br />
          <span className="text-black">soulmate</span>
          <br />
          <span className="text-secondary">in one click</span>
          <br />
        </h1>
        <h3 className="text-2xl my-10 text-black" id="first-text">
          Join millions of singles who hve found their perfect match through{" "}
          <b>love connect💝.</b>Your love stor is waiting to begin❤️
        </h3>
        <div className="flex my-3" id="first-text">
          <Link
            to="/sign-up"
            className="xl:py-4 xl:px-10 bg-tertiary rounded-full text-white"
          >
            Start your journey➡️
          </Link>
          <Link
            to="/watch-stories"
            className="p-1 xl:py-4 mx-4 xl:px-10 bg-secondary rounded-full text-white"
          >
            Watch success stories🎥
          </Link>
        </div>
        <div className=" hidden xl:flex justify-around my-12" id="first-text">
          <p className="bg-primary rounded-full px-4 text-white py-2">
            ✅100% Verified Profile
          </p>
          <p className="bg-primary rounded-full px-4 text-white py-2">
            🔐Safe & Secured
          </p>
          <p className="bg-primary rounded-full px-4 text-white py-2">
            ⌚24/7 Active
          </p>
        </div>
      </section>
      <FirstHomeImages />
    </main>
  );
}
