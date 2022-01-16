// import { NavLink } from "react-router-dom";
import { Nav, Link, NavList, ListItem } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/movies">Movies</Link>
        </ListItem>
      </NavList>
    </Nav>
  );
}
