import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "utils/media";
import withColors from "components/withcolors";
import { rhythm } from "utils/typography";

const ListItem = styled.li`
  margin: ${rhythm(1)} 0;
  h2 {
    margin: 0;
  }
`;

const ArtLink = withColors(
  (c) => c.accent.pure,
  styled(Link)`
    color: inherit;
    &:hover,
    &:focus {
      color: ${(props) => props.color};
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

const BlogItem = ({
  lastModifiedAt,
  createdAt,
  createdAtString,
  path,
  title,
  description,
}) => (
  <ListItem>
    <article>
      <ArtLink to={path}>
        <header>
          <h2>{title}</h2>
          <Meta>
            <span>From </span>
            <time dateTime={createdAt}>{createdAtString}</time>
            <span>.</span>
            <WhiteBreak />
            <span>Last updated on </span>
            <time dateTime={lastModifiedAt}>{lastModifiedAt}</time>
            <span>.</span>
          </Meta>
        </header>
        <div>{description}</div>
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
};

export default BlogItem;
