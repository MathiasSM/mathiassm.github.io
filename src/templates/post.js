import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Layout from "components/layout";
import TableOfContents from "components/toc";

const Header = styled.header``;

const Meta = styled.footer`
  margin: 1em 0;
`;

const PostMeta = ({ createdAt, createdAtString, lastModifiedAt }) => (
  <Meta>
    {"Originally written "}
    <time dateTime={createdAt}>{createdAtString}</time>
    {". Last updated on "}
    <time dateTime={lastModifiedAt}>{lastModifiedAt}</time>
  </Meta>
);
PostMeta.propTypes = {
  createdAt: PropTypes.string.isRequired,
  createdAtString: PropTypes.string.isRequired,
  lastModifiedAt: PropTypes.string.isRequired
};

const PostHeader = ({ title }) => (
  <Header>
    <h1>{title}</h1>
  </Header>
);
PostHeader.propTypes = {
  title: PropTypes.string.isRequired
};

const PostTemplate = ({
  data: {
    post: {
      fields,
      tableOfContents,
      frontmatter: { TOC, title, ...frontmatter },
      html: __html
    }
  }
}) => (
  <Layout>
    <main>
      <article>
        <PostHeader title={title} />
        <PostMeta {...frontmatter} {...fields} />
        {TOC && <TableOfContents {...{ tableOfContents }} />}
        <div dangerouslySetInnerHTML={{ __html }} />
      </article>
    </main>
  </Layout>
);
PostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string,
      fields: PropTypes.object,
      frontmatter: PropTypes.shape({
        TOC: PropTypes.bool,
        title: PropTypes.string
      })
    })
  })
};

export default PostTemplate;

export const quary = graphql`
  query PostTemplateQuery($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.path")
      fields {
        lastModifiedAt(formatString: "YYYY-MM-DD")
      }
      frontmatter {
        createdAtString: date(fromNow: true)
        createdAt: date(formatString: "YYYY-MM-DD")
        path
        title
        TOC
      }
    }
  }
`;
