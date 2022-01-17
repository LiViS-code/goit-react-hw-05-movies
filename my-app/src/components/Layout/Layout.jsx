import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, Footer } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Outlet />

      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. 2022
      </Footer>
    </>
  );
}
