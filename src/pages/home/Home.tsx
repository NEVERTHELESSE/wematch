import { lazy, Suspense } from "react";
import FirstHomeComponent from "./firstComponent/FirstHomeComponent";
import Notice from "./Notice";
const SecondHomeComponents = lazy(
  () => import("./secondComponent/SecondHomeComponents")
);
const ThirdComponent = lazy(() => import("./thirdComponent/ThirdComponent"));
const FourthComponents = lazy(() => import("./FourthComponents"));
const FifthComponents = lazy(() => import("./FifthComponents"));
export default function Home() {
  return (
    <section>
      <div className="h-[100vh]  sm:h-auto min-w-[100vw] z-[-2]  absolute">
        <img
          src="/couples/couple.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <FirstHomeComponent />
      <Suspense fallback="loading">
        <SecondHomeComponents />
        <ThirdComponent />
      </Suspense>
      <Suspense fallback="loading">
        <FourthComponents />
        <Notice />
        <FifthComponents />
      </Suspense>
    </section>
  );
}
