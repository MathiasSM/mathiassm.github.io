import { createGlobalStyle } from "styled-components";

import withColors from "./withcolors";

export const Global = withColors(
  c => c.accent.pure,
  createGlobalStyle`
    body, html {
      height: 100%;
      margin: 0;
      overflow: auto;
    }
    #___gatsby {
      height: 100%;
      & > * {
        height: 100%;
      }
    }
    a {
      text-decoration: none;
      color: ${props => props.color}
    }
    pre {
      overflow-x: auto;
      max-width: 100%;
    }
`
);

export default Global;
