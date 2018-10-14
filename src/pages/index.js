import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";

const IndexPage = ({
  data: {
    indexContent: {
      frontmatter: { title },
      html: __html
    }
  }
}) => (
  <Layout>
    <main>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html }} />
    </main>
  </Layout>
);
IndexPage.propTypes = {
  data: PropTypes.shape({
    indexContent: PropTypes.shape({
      fontmatter: PropTypes.shape({ title: PropTypes.string }),
      html: PropTypes.string
    }).isRequired
  })
};

export default IndexPage;

export const query = graphql`
  {
    indexContent: markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
