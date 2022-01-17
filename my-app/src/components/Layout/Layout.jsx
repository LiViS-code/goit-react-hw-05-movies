import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Outlet />

      <footer>Kiev, Vasily Lopatkin. 2022</footer>
    </>
  );
}
