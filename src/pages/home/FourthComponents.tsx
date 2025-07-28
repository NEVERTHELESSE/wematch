import { Link } from "react-router-dom";
import Images from "../../components/Images";

export default function FourthComponents() {
  return (
    <section className="w-full h-[100vh] bg-tertiary relative flex items-center justify-center border-y-2 border-primary">
      <div className="w-full h-full top-0 ">
        <Images src="/girls/girl1.jpg" />
      </div>
      <div className=" z-20 w-full  flex justify-around  absolute " id="girls">
        <div className="p-20">
          <p>More than </p>
          <h1 className="text-2xl md:text-8xl  font-bold text-white leading-snug">
            Millions of. <br />
            Beautiful Girls. <br />
            For you.
          </h1>
          <Link
            to="/"
            className="bg-primary p-2 md:px-8 md:py-4 text-white font-bold my-4 rounded-2xl"
          >
            Get started as a male
          </Link>
        </div>
        <div className="w-[25rem] h-full">
          <Images src="/girls/girl1.jpg" />
        </div>
      </div>
    </section>
  );
}
