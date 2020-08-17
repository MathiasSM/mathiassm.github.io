import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Layout from "components/layout";
import TableOfContents from "components/toc";
import SEO from "components/seo";
import TextBody from "components/textbody";

const localizedStrings = {
  en: {
    originally_written: "Originally written",
    last_updated_on: "Last updated on",
  },

  es: {
    originally_written: "Escrito originalmente",
    last_updated_on: "Ultima modificación en",
  },
};

const Header = styled.header``;

const Meta = styled.footer`
  margin: 1em 0;
  font-style: italic;
`;

const PostMeta = ({ language, createdAt, createdAtString, lastModifiedAt }) => (
  <Meta>
    <span>{localizedStrings[language].originally_written}</span>
    <span> </span>
    <time dateTime={createdAt}>{createdAtString}</time>
    <span>{". "}</span>
    <span>{localizedStrings[language].last_updated_on}</span>
    <span> </span>
    <time dateTime={lastModifiedAt}>{lastModifiedAt}</time>
    <span>{"."}</span>
  </Meta>
);
PostMeta.propTypes = {
  language: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  createdAtString: PropTypes.string.isRequired,
  lastModifiedAt: PropTypes.string.isRequired,
};

const PostHeader = ({ title }) => (
  <Header>
    <h1>{title}</h1>
  </Header>
);
PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const PostTemplate = ({
  data: {
    post: {
      fields: { author, lastModifiedAt, language, ...fields },
      frontmatter: {
        TOC,
        title,
        description,
        shareTitle,
        shareDescription,
        createdAt,
        createdAtString_es,
        createdAtString_en,
      },
      tableOfContents,
      html: __html,
    },
  },
}) => {
  const createdAtString = { en: createdAtString_en, es: createdAtString_es };
  return (
    <Layout>
      <SEO
        language={language}
        title={title}
        description={description}
        og={{
          title: shareTitle,
          description: shareDescription,
          author,
          type: "article",
          published_time: createdAt,
          modified_time: lastModifiedAt,
        }}
      />
      <main>
        <article>
          <TextBody>
            <PostHeader title={title} />
            <PostMeta
              {...{
                language,
                createdAt,
                createdAtString: createdAtString[language],
                lastModifiedAt,
              }}
              {...fields}
            />
            {TOC && <TableOfContents {...{ tableOfContents }} />}
            <div dangerouslySetInnerHTML={{ __html }} />
          </TextBody>
        </article>
      </main>
    </Layout>
  );
};
PostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        language: PropTypes.string.isRequired,
        author: PropTypes.string,
        lastModifiedAt: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        TOC: PropTypes.bool,
        title: PropTypes.string,
        description: PropTypes.string,
        shareTitle: PropTypes.string,
        shareDescription: PropTypes.string,
        createdAt: PropTypes.string,
        createdAtString_en: PropTypes.string,
        createdAtString_es: PropTypes.string,
      }),
      tableOfContents: PropTypes.string,
    }),
  }),
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.path")
      fields {
        lastModifiedAt(formatString: "YYYY-MM-DD")
        author
        language
      }
      frontmatter {
        createdAtString_en: date(fromNow: true, locale: "en")
        createdAtString_es: date(fromNow: true, locale: "es")
        createdAt: date(formatString: "YYYY-MM-DD")
        path
        title
        description
        shareTitle
        shareDescription
        TOC
      }
    }
  }
`;
