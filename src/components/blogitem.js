import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withColors from "components/withcolors";

const ListItem = styled.li`
  margin: 2rem 0;
  h2 {
    margin: 0;
  }
`;

const ArtLink = withColors(
  styled(Link)`
    color: inherit;
    &:hover,
    &:focus {
      color: ${props => props.color.accent.hslString};
    }
  `
);

const Meta = styled.div`
  opacity: 0.7;
`;

const BlogItem = ({
  lastModifiedAt,
  createdAt,
  createdAtString,
  path,
  title,
  description
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
            <span> </span>
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
  description: PropTypes.string
};

export default BlogItem;
