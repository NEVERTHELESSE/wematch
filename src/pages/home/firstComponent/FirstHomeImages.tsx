import { useEffect, useState } from "react";
import Images from "../../../components/Images";
import { matchesSample } from "./mathesSample";
import useSWR from "swr";
import type { testimonyInterface } from "../../../interface/testimonyInterface";
export default function FirstHomeImages() {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   const changeActive = setInterval(() => {
  //     setActive((prev) => (prev < matchesSample.length - 1 ? prev + 1 : 0));
  //   }, 5000);

  //   return () => {
  //     clearInterval(changeActive);
  //   };
  // }, []);
  const api = import.meta.env.VITE_API;
  const fetcher = () =>
    fetch(`${api}all-testimonies`).then((res) => res.json());

  const { data, isLoading } = useSWR(`${api}all-testimonies`, fetcher);

  return (
    <section className="flex md:w-[70%]  lg:w-[50%] md:ml-5 justify-around p-2  overflow-hidden">
      <main
        className="flex w-full duration-1000"
        style={{
          transform: `translateX(-${active * 50}%)`,
        }}
      >
        {isLoading ? (
          "loading"
        ) : (
          <>
            {data?.map((sample: testimonyInterface, index: number) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden  min-w-[49%] mx-1 hover:saturate-50  duration-700 border-secondary shadow
           ${active != index && "scale-90 bottom-0 mb-[-2rem]"}
           `}
              >
                <div className="h-[80%] w-full rounded-t-lg overflow-hidden bg-tertiary">
                  <Images src={`/couples/${sample.couplePics}`} />
                </div>
                <div className="w-full p-2 rounded-b-lg bg-primary flex items-center my-1">
                  <div className="w-[2rem] h-[2rem] overflow-hidden rounded-full  bg-primary">
                    <Images src={`/users/${sample.husbandProfile}`} />
                  </div>
                  <div className=" border-2 border-secondary ml-[-15px] w-[2rem] h-[2rem] overflow-hidden rounded-full bg-primary">
                    <Images src={`/users/${sample.wifeProfile}`} />
                  </div>
                  <div className="ml-2">
                    <b>{sample.husband + " " + sample.wife}</b>
                    <p className="text-white leading-3">
                      Matched {sample.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </main>
    </section>
  );
}
