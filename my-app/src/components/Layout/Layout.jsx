import { Link, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, Footer, Wrapper } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Link to="/">Go back</Link>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. January 2022.
      </Footer>
    </>
  );
}
