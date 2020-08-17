import { StaticQuery, graphql } from "gatsby";
import React from "react";

import { Redirect } from "@reach/router";

const query = graphql`
  query {
    site {
      siteMetadata {
        entryPoint
      }
    }
  }
`;
const IndexPage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <Redirect from="/" to={data.site.siteMetadata.entryPoint} noThrow />
    )}
  />
);
export default IndexPage;
