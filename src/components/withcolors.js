import { StaticQuery, graphql } from "gatsby";
import React from "react";

const query = graphql`
  query {
    site {
      siteMetadata {
        colors {
          primary {
            black
            dark
            pure
            light
            white
          }
          secondary {
            black
            dark
            pure
            light
            white
          }
          accent {
            black
            dark
            pure
            light
            white
          }
        }
      }
    }
  }
`;

const id = (a) => a;

const withColors = (getColors = id, Comp) => {
  const WithColors = ({ ...props }) => (
    <StaticQuery
      query={query}
      render={(data) => {
        const colors = getColors(data.site.siteMetadata.colors);
        return <Comp {...{ colors }} {...props} />;
      }}
    />
  );
  return WithColors;
};

export default withColors;
