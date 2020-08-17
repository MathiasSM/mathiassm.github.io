import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import BlogItem from "components/blogitem";
import BlogList from "components/bloglist";
import SEO from "components/seo";
import TextBody from "components/textbody";

const BlogPage = ({
  data: {
    site: {
      siteMetadata: { defaultLanguage },
    },
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
      <TextBody>
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
              <BlogItem
                key={path}
                path={path}
                pageLanguage={defaultLanguage}
                {...frontmatter}
                {...fields}
              />
            )
          )}
        </BlogList>
      </TextBody>
    </main>
  </Layout>
);
BlogPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        defaultLanguage: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
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
    site {
      siteMetadata {
        defaultLanguage
      }
    }

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
        frontmatter: { path: { regex: "/.+/" }, date: { ne: null } }
        fields: { type: { eq: "blogPost" } }
      }
    ) {
      posts: edges {
        post: node {
          fields {
            lastModifiedAt(formatString: "YYYY-MM-DD")
            language
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
