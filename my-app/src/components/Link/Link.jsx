import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { accentColor, primaryColor },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Link = styled(RouterLink)`
  padding: ${spacing(1)} ${spacing(2)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  border-radius: ${spacing(2)};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};

  &:hover,
  &:focus {
    color: ${accentColor};
    background-color: ${primaryColor};
  }
`;
