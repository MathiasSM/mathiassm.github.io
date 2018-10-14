import { StaticQuery, graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import { hslString } from "utils/styles";

const getDisplayName = Comp =>
  Comp.displayName ||
  Comp.name ||
  (typeof Comp === "string" && Comp.length > 0 ? Comp : "Unknown");

const query = graphql`
  query {
    colorList: allColorHslJson {
      colors: edges {
        color: node {
          id
          hsl
        }
      }
    }
  }
`;

const withColors = Comp => {
  const WithColors = ({ children, ...props }) => (
    <StaticQuery
      query={query}
      render={({ colorList: { colors } }) => {
        const color = {};
        colors.forEach(({ color: { id, hsl } }) => {
          color[id] = { hsl, hslString: hslString(hsl) };
        });

        return (
          <Comp color={color} {...props}>
            {children}
          </Comp>
        );
      }}
    />
  );
  WithColors.displayName = `withColors(${getDisplayName(Comp)})`;
  WithColors.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  return WithColors;
};

export default withColors;
