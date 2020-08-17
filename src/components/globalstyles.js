import { createGlobalStyle } from "styled-components";

import externalLink from "@fortawesome/fontawesome-free/svgs/solid/external-link-alt.svg";

import { rhythm } from "utils/typography";

import withColors from "./withcolors";

export const Global = withColors(
  (c) => ({
    normal: c.accent.pure,
    visited: c.accent.dark,
    oddRow: c.secondary.white,
    evenRow: "white",
  }),
  createGlobalStyle`
    // Body
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

    // Links
    a {
      text-decoration: none;

      color: ${(props) => props.colors.normal};
      p & {
        &:visited {
          color: ${(props) => props.colors.visited};
        }

        // Add external-link icon
        &[href^=http]::after {
          height:auto;
          width:1em;
          display:inline-block;
          margin-left: .5em;
          content: url(${externalLink});
          opacity: .1;
        }
        &:hover[href^=http]::after,
        &:active[href^=http]::after {
          opacity: .8;
        }
      }
    }

    // Print
    @media print   {
      a::after {
        content: " [" attr(href) "] ";
      }
    }

    // Table rows
    tbody tr{
      &:nth-child(odd) {
        background-color: ${(props) => props.colors.oddRow};
      }
      &:nth-child(even){
        background-color: ${(props) => props.colors.evenRow}
      }
    }

    blockquote.quoted {
      position: relative;
      &::before {
        position: absolute;
        left: -${rhythm(1)};
        line-height: ${rhythm(2)};
        font-size: ${rhythm(2)};
        content: open-quote;

      }
    }

    // Preformatted/code
    pre {
      overflow-x: auto;
      max-width: 100%;
    }
`
);

export default Global;
