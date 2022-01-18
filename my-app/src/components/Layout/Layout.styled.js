import styled from "styled-components";
import { theme } from "../../constants/Theme";

const { spacing } = theme;

export const Header = styled.header`
  margin-bottom: ${spacing(4)};
`;

export const Footer = styled.footer`
  /* position: fixed; */
  padding: ${spacing(4)};
  /* left: 0px;
  bottom: 0px; */
  height: 30px;
  width: 100%;
`;
