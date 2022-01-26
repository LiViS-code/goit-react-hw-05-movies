import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import { Header, Footer, Main } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. January 2022.
      </Footer>
    </>
  );
}
