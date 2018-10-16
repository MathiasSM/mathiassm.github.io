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

const ExtLink = withColors(
  c => c.accent.pure,
  styled.a`
    color: inherit;
    &:hover,
    &:focus {
      color: ${props => props.color};
    }
  `
);

const Meta = styled.div`
  opacity: 0.7;
`;

const Tag = styled.small`
  display: inline-block;
  vertical-align: bottom;
  float: right;
  padding: 0.3em 0.6em;
  margin: 0.5em 0.5em 0.5em 1em;
  transition: background 0.05s, color 0.05s;
  background: transparent;
  font-family: monospace;
  cursor: default;
  &::before {
    content: "[";
  }
  &::after {
    content: "]";
  }
`;

const Status = ({ name, description }) => {
  return <Tag title={description}>{name}</Tag>;
};
Status.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

const Short = styled.div`
  font-style: italic;
`;

const Long = styled.div``;

const ProjectCard = ({
  dateStarted,
  dateStartedString,
  dateLast,
  dateLastString,
  href,
  title,
  status: { lastString, ...status },
  description: { long, short }
}) => (
  <ListItem>
    <ExtLink href={href}>
      <article>
        <header>
          <h2>
            {title}
            <Status {...status} />
          </h2>
          <Meta>
            <span>Started </span>
            <time dateTime={dateStarted}>{dateStartedString}</time>
            <span>.</span>
            {dateLastString && (
              <span>
                <span> </span>
                <span>{lastString}</span>
                <span> on </span>
                <time dateTime={dateLast}>{dateLast}</time>
                <span>.</span>
              </span>
            )}
          </Meta>
        </header>
        <Short>{short}</Short>
        <Long>{long}</Long>
      </article>
    </ExtLink>
  </ListItem>
);
ProjectCard.propTypes = {
  dateStarted: PropTypes.string.isRequired,
  dateStartedString: PropTypes.string.isRequired,
  dateLast: PropTypes.string,
  dateLastString: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  }),
  description: PropTypes.shape({
    short: PropTypes.string.isRequired,
    long: PropTypes.string
  }).isRequired
};

export default ProjectCard;
