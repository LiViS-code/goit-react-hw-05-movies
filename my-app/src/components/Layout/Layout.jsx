import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, Footer, Wrapper } from "./Layout.styled";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };
  const isHome = location.pathname === "/" ? true : false;

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {!isHome && (
        <Link to="/" onClick={goBack}>
          Go back
        </Link>
      )}
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. January 2022.
      </Footer>
    </>
  );
}
