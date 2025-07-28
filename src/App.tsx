import Header from "./layout/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/login/Login"));
const Signup = lazy(() => import("./pages/signUp/Signup"));
const Testimony = lazy(() => import("./pages/testimony/Testimony"));
const Footer = lazy(() => import("./layout/footer/Footer"));
const Discover = lazy(() => import("./pages/discover/Discover"));
const Chats = lazy(() => import("./pages/chats/Chats"));
export default function App() {
  const location = window.location.pathname.split("-")[0];
  return (
    <BrowserRouter>
      {location != "/sign" && <Header />}
      <section className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-in"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/discover"
            element={
              <Suspense>
                <Discover />
              </Suspense>
            }
          />
          <Route
            path="/testimony"
            element={
              <Suspense>
                <Testimony />
              </Suspense>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Suspense>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/chats"
            element={
              <Suspense>
                <Chats />
              </Suspense>
            }
          />
        </Routes>
      </section>
      {location != "/sign" && (
        <Suspense fallback="loading">
          <Footer />
        </Suspense>
      )}
    </BrowserRouter>
  );
}
