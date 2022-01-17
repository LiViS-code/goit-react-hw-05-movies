import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <Outlet />

      <footer>Kiev, Vasily Lopatkin. 2022</footer>
    </>
  );
}
