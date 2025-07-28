import Images from "../../../components/Images";
import { options } from "./secondComponentOption";
import SecondHomeCounting from "./SecondHomeCounting";

export default function SecondHomeComponents() {
  return (
    <section className="w-full min-h-[100vh] bg-primary flex justify-center flex-col items-center py-10 px-[5%] border-y-2 border-primary">
      <h1
        className="text-3xl md:text-5xl capitalize my-2  md:my-6 text-center"
        id="top-view"
      >
        why choose <span>love</span>
        <b className="text-tertiary">connect💝</b>?
      </h1>
      <h3 className="text-2xl text-center md:my-2 text-white" id="top-view">
        Experience the future of dating with our motivate features designated to
        help you find <br />
        meaningful connections.
      </h3>
      <main className="flex justify-between w-full my-10 flex-wrap items-center">
        {options.map((option, index) => (
          <div
            // id={option.id}
            key={index}
            className={`w-[25rem] m-2 p-4 bg-${option.color} border rounded-2xl cursor-pointer hover:bg-secondary duration-700 shadow-2xl`}
          >
            <div className="w-[3rem]">
              <Images src={`icons/${option.src}`} />
            </div>
            <h4 className="text-2xl font-bold capitalize text-white">
              {option.title}
            </h4>
            <p className="my-2 text-2xl">{option.body}</p>
            <button className="text-tertiary font-bold p-6">
              Learn More ➡️
            </button>
          </div>
        ))}
      </main>
      <SecondHomeCounting />
      <main className="w-[90%] items-center md:w-full py-10 px-[3rem] rounded-2xl bg-secondary my-10 justify-between flex flex-col md:flex-row">
        <div>
          <h3 className="md:text-3xl font-bold">
            Ready to find you perfect match?
          </h3>
          <p>
            Join millions of happy couples who found love on <b>love</b>
            <span>Connect</span>
          </p>
        </div>
        <button className="text-2xl px-2 md:px-20 py-2 bg-primary rounded-2xl text-white">
          Get Started
        </button>
      </main>
    </section>
  );
}
