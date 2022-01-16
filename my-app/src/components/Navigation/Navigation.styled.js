import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../constants/Theme";

const {
  colors: { accentColor, primaryColor, backgroundColorForm, boxShadow },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Nav = styled.nav`
  padding: ${spacing(5)};
  border-radius: ${spacing(1)};
  background-color: ${backgroundColorForm};
  box-shadow: ${boxShadow};
`;

export const NavList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${spacing(4)};
  }
`;

export const Link = styled(NavLink)`
  padding: ${spacing(2)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  transition: text-decoration ${timing} ${timingFunction};
  &:hover {
    outline: 2px solid ${primaryColor};
  }
  &:focus {
    color: ${accentColor};
    background-color: ${primaryColor};
  }
  &:hover,
  &:focus {
    border-radius: ${spacing(2)};
    outline-offset: ${spacing(0.5)};
  }
`;
