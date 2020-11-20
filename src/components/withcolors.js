import { StaticQuery, graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

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
  const WithColors = ({ theme, ...props }) => (
    <StaticQuery
      query={query}
      render={(data) => {
        const colors = getColors(data.site.siteMetadata.colors);
        return <Comp theme={{ colors, ...theme }} {...props} />;
      }}
    />
  );
  WithColors.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.object,
    }),
  };
  return WithColors;
};

export default withColors;
