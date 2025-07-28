import { lazy, Suspense, useEffect, useState } from "react";
import Images from "../../components/Images";
import { singles } from "./single";
import type { singleInterface } from "../../interface/single";

const UserInfo = lazy(() => import("./UserInfo"));
export default function Discover() {
  const [moreInfo, setMoreInfo] = useState(0);
  const [secondImage, setSecondImage] = useState(-1);

  function changeMoreInfo(index: number) {
    if (index + 1 == moreInfo) {
      setMoreInfo(0);
    } else {
      setMoreInfo(index + 1);
    }
  }
  function changeImageSrc(index: number) {
    setSecondImage(index);
  }
  function removeSrc() {
    setSecondImage(-1);
  }
  const [limit, setLimit] = useState(10);
  const [allSingles, setAllSingles] = useState(singles.slice(0, limit));

  useEffect(() => {
    function handleScroll() {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight >=
          document.body.scrollHeight - 1000
        ) {
          setLimit((prev) => prev + 10);
          const newSingles = singles.slice(limit, limit + 10);
          setAllSingles((prev) => prev.concat(newSingles));
        }
      });
    }
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [info, setInfo] = useState(allSingles[0]);
  const [showInfo, setShowInfo] = useState(false);
  function showProfile(single: singleInterface) {
    setInfo(single);
    setShowInfo(true);
  }
  function cancel() {
    setShowInfo(false);
  }

  return (
    <div className=" lg:p-[5rem] py-[5rem]  flex justify-around flex-wrap">
      {allSingles.map((single, index) => (
        <div
          className="border border-primary rounded-t-3xl overflow-hidden w-[20rem] relative m-2"
          key={index}
        >
          <div className="absolute w-[3rem] h-[3rem] rounded-full overflow-hidden left-5 top-5 border-2 border-secondary">
            <Images src={`/users/${single.profilePics}`} />
          </div>

          <div className="p-2 absolute text-2xl text-white bg-[#00000054] w-full bottom-0">
            <div className="flex items-center " key={index}>
              <div className="w-[7rem]">
                <span className=" text-right">Name:</span>
              </div>
              <span className="leading-3 text-right">{single.fullname}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center ">
                <div className="w-[7rem]">
                  <span className="w-[10rem] text-right">Age:</span>
                </div>
                <span className="leading-3 text-right">{single.age}</span>
              </div>
              <button
                className="text-tertiary absolute bottom-2 right-0"
                onClick={() => changeMoreInfo(index)}
              >
                {index + 1 == moreInfo ? "less " : "more"}
              </button>
            </div>
            {moreInfo == index + 1 && (
              <>
                <div className="flex items-center ">
                  <div className="w-[7rem]">
                    <span className="w-[10rem] text-right">Country:</span>
                  </div>
                  <span className="leading-3 text-right">{single.country}</span>
                </div>
                <div className="flex items-center ">
                  <div className="w-[7rem]">
                    <span className="w-[10rem] text-right">Gender:</span>
                  </div>
                  <span className="leading-3 text-right">
                    {single.gender == 0 ? "Male" : "Female"}
                  </span>
                </div>
                <div>
                  <div className="flex items-center ">
                    <div className="w-[7rem]">
                      <span className="w-[10rem] text-right">Country:</span>
                    </div>
                    <span className="leading-3 text-right">
                      {single.country}
                    </span>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[7rem]">
                      <span className="w-[10rem] text-right">Email:</span>
                    </div>
                    <span className="leading-3 text-right">{single.email}</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            className=" h-[30rem]"
            onMouseEnter={() => changeImageSrc(index)}
          >
            <Images src={`/girls/${single.imageUrl[0]}`} />
          </div>
          <div
            onClick={() => showProfile(single)}
            onMouseOut={removeSrc}
            className={`duration-700 h-[30rem] absolute ${
              index == secondImage ? "top-0" : "top-[-100%]"
            } `}
          >
            <Images src={`/girls/${single.imageUrl[1]}`} />
          </div>
        </div>
      ))}
      {showInfo && (
        <Suspense fallback="loading">
          <UserInfo info={info} cancelImage={cancel} />
        </Suspense>
      )}
    </div>
  );
}
