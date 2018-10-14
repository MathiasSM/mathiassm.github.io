import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import TextBody from "components/textbody";

const NotFoundPage = ({
  data: {
    page: {
      html: __html,
      frontmatter: { title = "Not Found" }
    }
  }
}) => (
  <Layout>
    <main>
      <h1>{title}</h1>
      <TextBody dangerouslySetInnerHTML={{ __html }} />
    </main>
  </Layout>
);
NotFoundPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({ title: PropTypes.string })
    })
  })
};

export default NotFoundPage;

export const query = graphql`
  {
    page: markdownRemark(frontmatter: { path: { eq: "/404" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
