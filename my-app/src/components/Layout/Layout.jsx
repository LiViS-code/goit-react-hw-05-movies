import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, Footer, Main } from "./Layout.styled";
import { LinkTo } from "../../App.styled";

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
      <Main>
        {!isHome && (
          <LinkTo to="" onClick={goBack}>
            &lArr; Go back
          </LinkTo>
        )}

        <Outlet />
      </Main>
      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. January 2022.
      </Footer>
    </>
  );
}
