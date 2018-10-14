import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// FA Icons
import { Twitter } from "styled-icons/fa-brands/Twitter.cjs";
import { Github } from "styled-icons/fa-brands/Github.cjs";
import { MediumM as Medium } from "styled-icons/fa-brands/MediumM.cjs";
import { Linkedin as LinkedIn } from "styled-icons/fa-brands/Linkedin.cjs";

import withColors from "components/withcolors";
import media from "utils/media";

const socialIcons = {
  Twitter,
  Github,
  Medium,
  LinkedIn
};

const SocialList = withColors(
  styled.ul`
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  a {color: inherit}
  ${media.tablet`
    a {color: white}
    background: ${props => props.color.primary.hslString};
  `}
  ${media.desktop``}
  ${media.bigdesktop``}
`
);

const Social = ({ profiles, className }) => (
  <SocialList className={className}>
    {profiles.map(
      ({
        node: {
          profile: { title, href, username, description }
        }
      }) => {
        const SocialIcon = styled(socialIcons[title])`
          padding: 0.5rem;
        `;
        return (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={description}
          >
            <SocialIcon height="50px" title={username} />
          </a>
        );
      }
    )}
  </SocialList>
);

const validSocialSite = (props, propName, componentName) =>
  !!socialIcons[props[propName]] ||
  new Error(
    `Invalid social site '${
      props[propName]
    }' supplied to '${componentName}'.  Icon is not imported in 'Social' component file.`
  );

Social.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        profile: PropTypes.shape({
          title: validSocialSite,
          href: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          description: PropTypes.string
        })
      })
    }).isRequired
  ),
  className: PropTypes.string
};

export default Social;

export const SocialFragment = graphql`
  fragment SocialFragment on Query {
    social: allSocialprofilesYaml(
      filter: { profile: { front: { eq: true } } }
    ) {
      profiles: edges {
        node {
          profile {
            title
            href
            username
            description
          }
        }
      }
    }
  }
`;
