import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import BlogItem from "components/blogitem";
import BlogList from "components/bloglist";
import SEO from "components/seo";

const BlogPage = ({
  data: {
    postList: { posts },
    blogPage: {
      frontmatter: {
        title = "Blog",
        shareTitle,
        description,
        shareDescription,
      },
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
      <header>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html }} />
      </header>
      <BlogList>
        {posts.map(
          ({
            post: {
              frontmatter: { path, ...frontmatter },
              fields,
            },
          }) => (
            <BlogItem key={path} path={path} {...frontmatter} {...fields} />
          )
        )}
      </BlogList>
    </main>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    postList: PropTypes.shape({
      posts: PropTypes.array,
    }),
    blogPage: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        shareTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        description: PropTypes.string,
        shareDescription: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.bool,
        ]),
      }),
    }),
  }),
};

export default BlogPage;

export const query = graphql`
  {
    blogPage: markdownRemark(frontmatter: { path: { eq: "/blog" } }) {
      frontmatter {
        title
        shareTitle
        description
        shareDescription
      }
      html
    }

    postList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          type: { ne: "page" }
          path: { regex: "/.+/" }
          date: { ne: null }
        }
      }
    ) {
      posts: edges {
        post: node {
          fields {
            lastModifiedAt(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            createdAtString: date(fromNow: true)
            createdAt: date(formatString: "YYYY-MM-DD")
            title
            path
            description
          }
        }
      }
    }
  }
`;
