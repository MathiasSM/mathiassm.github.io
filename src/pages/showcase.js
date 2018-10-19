import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Layout from "components/layout";
import ProjectCard from "components/projectcard";
import List from "components/bloglist";
import SEO from "components/seo";

const ShowcasePage = ({
  data: {
    activeProjectsList,
    onholdProjectsList,
    showcasePage: {
      frontmatter: {
        title = "Showcase",
        description,
        shareDescription,
        shareTitle
      },
      html: __html
    }
  }
}) => (
  <Layout>
    <SEO
      title={title}
      description={description}
      og={{
        title: shareTitle,
        description: shareDescription
      }}
    />
    <main>
      <header>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html }} />
      </header>
      <List>
        {[...activeProjectsList.projects, ...onholdProjectsList.projects].map(
          ({
            node: {
              project: { title, ...project }
            }
          }) => (
            <ProjectCard key={title} title={title} {...project} />
          )
        )}
      </List>
    </main>
  </Layout>
);
ShowcasePage.propTypes = {
  data: PropTypes.shape({
    activeProjectsList: PropTypes.shape({
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            project: PropTypes.shape({ title: PropTypes.string.isRequired })
          })
        })
      )
    }),
    onholdProjectsList: PropTypes.shape({
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            project: PropTypes.shape({ title: PropTypes.string.isRequired })
          })
        })
      )
    }),
    showcasePage: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({ title: PropTypes.string })
    })
  })
};

export default ShowcasePage;

export const query = graphql`
  {
    showcasePage: markdownRemark(frontmatter: { path: { eq: "/showcase" } }) {
      frontmatter {
        title
        description
        shareTitle
        shareDescription
      }
      html
    }

    activeProjectsList: allProjectsYaml(
      filter: { project: { dateLast: { eq: null } } }
      sort: { fields: project___dateStarted, order: DESC }
    ) {
      projects: edges {
        node {
          project {
            title
            href
            dateStarted(formatString: "YYYY-MM-DD")
            dateStartedString: dateStarted(fromNow: true)
            dateLast(formatString: "YYYY-MM-DD")
            dateLastString: dateLast(fromNow: true)
            status {
              name
              description
              lastString
            }
            description {
              long
              short
            }
          }
        }
      }
    }

    onholdProjectsList: allProjectsYaml(
      filter: { project: { dateLast: { ne: null } } }
      sort: { fields: project___dateLast, order: DESC }
    ) {
      projects: edges {
        node {
          project {
            title
            href
            dateStarted(formatString: "YYYY-MM-DD")
            dateStartedString: dateStarted(fromNow: true)
            dateLast(formatString: "YYYY-MM-DD")
            dateLastString: dateLast(fromNow: true)
            status {
              name
              description
              lastString
            }
            description {
              long
              short
            }
          }
        }
      }
    }
  }
`;
