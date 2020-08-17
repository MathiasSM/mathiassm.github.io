import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import SEO from "components/seo";
import TextBody from "components/textbody";

const AboutPage = ({
  data: {
    indexContent: {
      frontmatter: { title, shareTitle, description, shareDescription },
      html: __html,
    },
  },
}) => (
  <Layout>
    <SEO
      title={title}
      description={description}
      og={{
        title: shareTitle || title,
        type: "blog",
        description: shareDescription || description,
      }}
    />
    <main>
      <TextBody>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html }} />
      </TextBody>
    </main>
  </Layout>
);
AboutPage.propTypes = {
  data: PropTypes.shape({
    indexContent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        shareTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        description: PropTypes.string,
        shareDescription: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.bool,
        ]),
      }).isRequired,
      html: PropTypes.string,
    }).isRequired,
  }),
};

export default AboutPage;

export const query = graphql`
  {
    indexContent: markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        title
        shareTitle
        description
        shareDescription
      }
      html
    }
  }
`;
