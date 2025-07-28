import { lazy, Suspense } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import PhoneNavigation from "./PhoneNavigation";
const AddAccount = lazy(() => import("./AddAccount"));

export default function Header() {
  return (
    <header>
      <div className="p-2 hidden md:px-4  w-full py-1 shadow sm:flex items-center sm:justify-between z-50 fixed">
        <Logo />
        <Navigation />
        <Suspense fallback="loading">
          <AddAccount />
        </Suspense>
      </div>
      <div className="flex w-full justify-between sm:hidden ">
        <Logo />
        <PhoneNavigation />
      </div>
    </header>
  );
}
