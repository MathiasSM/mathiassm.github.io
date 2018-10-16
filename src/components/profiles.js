import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// FA Icons
import { Twitter } from "styled-icons/fa-brands/Twitter.cjs";
import { Github } from "styled-icons/fa-brands/Github.cjs";
import { MediumM as Medium } from "styled-icons/fa-brands/MediumM.cjs";
import { Linkedin as LinkedIn } from "styled-icons/fa-brands/Linkedin.cjs";
import { Imdb as IMDb } from "styled-icons/fa-brands/Imdb.cjs";

import MAL from "images/extra/MAL";

import media from "utils/media";
import { rhythm } from "utils/typography";
import withColors from "components/withcolors";

const socialIcons = {
  Twitter,
  Github,
  Medium,
  LinkedIn,
  IMDb,
  MAL
};

const Profile = withColors(
  c => c.accent.pure,
  styled.article`
    display: flex;
    a {
      display: flex;
      margin: ${rhythm(1)} 0;
      width: 100%;
      color: inherit;
      &:hover,
      &:focus {
        color: ${props => props.color};
      }
    }
    flex: 0 1 100%;
    // Make this two columns
    ${media.phone`
      flex: 0 1 45%;
      &:nth-child(odd) {
        a{ margin-right: 1em; }
      }
    `};

    ${media.tablet`
    `};

    // Make this three columns
    ${media.desktop`
      flex: 0 0 33%;
      &:nth-child(odd) { a{ margin-right: unset;} }
      &:nth-child(3n+1), &:nth-child(3n+2) {
        a{ margin-right: 1em; }
      }
    `};
  `
);

const ProfileIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1em;
  width: 20%;
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const Description = styled.div``;
const Username = styled.div``;

const SocialItem = ({ title, href, username, description }) => {
  const Icon = socialIcons[title];
  return (
    <Profile>
      <a href={href} title={`${username} on ${title}`}>
        <ProfileIcon>
          <Icon />
        </ProfileIcon>
        <ProfileDetails>
          {description && <Description>{description}</Description>}
          <Username>
            <strong>{username}</strong>
          </Username>
        </ProfileDetails>
      </a>
    </Profile>
  );
};
SocialItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const ProfilesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Profiles = ({ profiles }) => (
  <ProfilesWrap>
    {profiles.map(({ node: { profile: { title, ...profile } } }) => (
      <SocialItem key={title} title={title} {...profile} />
    ))}
  </ProfilesWrap>
);
Profiles.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        profile: PropTypes.shape({
          title: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    })
  ).isRequired
};

export default Profiles;
