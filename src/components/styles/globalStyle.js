import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainSize = {
  basePadding: "0 200px",
  secPadding: "150px 200px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        letter-spacing: -1px;
    }
`;
