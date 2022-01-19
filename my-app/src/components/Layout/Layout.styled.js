import styled from "styled-components";
import { theme } from "../../constants/Theme";

const { spacing } = theme;

export const Header = styled.header`
  margin-bottom: ${spacing(4)};
`;

export const Wrapper = styled.div`
  margin-bottom: ${spacing(4)};
`;

export const Footer = styled.footer`
  padding: ${spacing(4)};
  width: 100%;
`;
