import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import BlogItem from "components/blogitem";
import BlogList from "components/bloglist";
import SEO from "components/seo";
import TextBody from "components/textbody";

const EscritosPage = ({
  data: {
    postList: { posts },
    escritosPage: {
      frontmatter: {
        title = "Escritos",
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
      language={"es"}
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
                frontmatter: { hideDescription, path, ...frontmatter },
                fields,
              },
            }) => (
              <BlogItem
                key={path}
                path={path}
                showLastMod={false}
                showDescription={!hideDescription}
                pageLanguage={"es"}
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

EscritosPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        defaultLanguage: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    postList: PropTypes.shape({
      posts: PropTypes.array,
    }),
    escritosPage: PropTypes.shape({
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

export default EscritosPage;

export const query = graphql`
  {
    escritosPage: markdownRemark(frontmatter: { path: { eq: "/escritos" } }) {
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
          type: { eq: "escrito" }
          path: { regex: "/.+/" }
          date: { ne: null }
        }
      }
    ) {
      posts: edges {
        post: node {
          fields {
            lastModifiedAt(formatString: "YYYY-MM-DD")
            language
          }
          frontmatter {
            createdAtString: date(fromNow: true, locale: "es")
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
