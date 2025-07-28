import { useState } from "react";
import Images from "../../../components/Images";
import { thirdComps } from "./thirdComps";
import { Link } from "react-router-dom";

export default function ThirdComponent() {
  const [hover, setOver] = useState(0);
  function changeImage(index: number) {
    setOver(index);
  }
  return (
    <main className="w-full p-4 md:p-[5%] border-y-2 border-primary text-center flex items-center flex-col">
      <div className="w-[50%]">
        <h1 className="text-2xl md:text-5xl font-bold capitalize ">
          find your perfect match in <br />{" "}
          <span className="text-tertiary">4 simple steps</span>
        </h1>
        <p className="md:text-2xl my-2">
          Our proven process has helped thousands find meaningful connections.
          Start your journey to find love today
        </p>
      </div>
      <section className="flex flex-wrap justify-around my-5">
        {thirdComps.map((option, index) => (
          <div
            className="md:w-[32rem] overflow-hidden rounded-2xl shadow flex flex-col justify-center border border-primary m-2 relative"
            key={index}
          >
            <div className="border-4 border-secondary w-[3rem] h-[3rem] grid place-content-center bg-primary rounded-full text-white  absolute">
              <p>{index + 1}</p>
            </div>
            <div
              className="w-full h-[15rem] bg-primary"
              onMouseEnter={() => changeImage(index)}
            >
              <Images src={option.imageUrl} />
            </div>
            <div
              className={`w-full h-[15rem] duration-150 bg-primary absolute ${
                hover == index ? "top-0" : "top-[-100%]"
              }`}
            >
              <Images src={option.hoverUrl} />
            </div>
            <div className="p-2">
              <h3 className="text-2xl font-bold capitalize">{option.title}</h3>
              <p>{option.body}</p>
              <ul className="text-right my-3">
                {option.options.map((list, index) => (
                  <li className="text-right" key={index}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <Link
        to="/sign-up"
        className="bg-tertiary font-bold text-white py-4 px-8 rounded-2xl"
      >
        Start Your Journey Now ➡️
      </Link>
      <h3 className="text-2xl my-8 animate-bounce">
        It's free🤷‍♂️, safe✅ and secure 🔏
      </h3>
    </main>
  );
}
