/* src/components/Layout/Layout.jsx*/
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

function Layout() {
  return (
    <>
      <Navigation />
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
