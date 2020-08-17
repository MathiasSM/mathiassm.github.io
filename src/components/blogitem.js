import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "utils/media";
import withColors from "components/withcolors";
import { rhythm } from "utils/typography";

const localizedStrings = {
  es: {
    from: "Escrito",
    last_updated_on: "Última actualización en",
  },
  en: {
    from: "Written",
    last_updated_on: "Last updated on",
  },
};

const ListItem = styled.li`
  margin: ${rhythm(1)} 0;
  h2 {
    margin: 0;
  }
`;

const ArtLink = withColors(
  (c) => ({ focus: c.accent.pure }),
  styled(Link)`
    color: inherit;
    &:hover,
    &:focus {
      color: ${(props) => props.colors.focus};
    }
  `
);

const Meta = styled.div`
  opacity: 0.7;
`;

const WhiteBreak = styled.span`
  &::before {
    content: " ";
    display: block;
  }
  ${media.tablet`
    &::before {display: inline;}
  `};
`;

const LastModifiedAt = ({ lastModifiedAt, language }) => (
  <>
    <WhiteBreak />
    <span>{localizedStrings[language].last_updated_on}</span>
    <span> </span>
    <time dateTime={lastModifiedAt}>{lastModifiedAt}</time>
    <span>.</span>
  </>
);
LastModifiedAt.propTypes = {
  lastModifiedAt: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

const BlogItem = ({
  lastModifiedAt,
  createdAt,
  createdAtString,
  path,
  title,
  description,
  language,
  pageLanguage,
  showLastMod = true,
  showDescription = true,
}) => (
  <ListItem>
    <article>
      <ArtLink to={path}>
        <header>
          <h2 lang={language}>{title}</h2>
          <Meta>
            <span>{localizedStrings[pageLanguage].from}</span>
            <span> </span>
            <time dateTime={createdAt}>{createdAtString}</time>
            <span>.</span>
            {showLastMod && (
              <LastModifiedAt {...{ lastModifiedAt, language: pageLanguage }} />
            )}
          </Meta>
        </header>
        {showDescription && <div>{description}</div>}
      </ArtLink>
    </article>
  </ListItem>
);
BlogItem.propTypes = {
  lastModifiedAt: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  createdAtString: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
  pageLanguage: PropTypes.string.isRequired,
  showLastMod: PropTypes.bool,
  showDescription: PropTypes.bool,
};

export default BlogItem;
