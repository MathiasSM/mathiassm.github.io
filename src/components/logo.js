import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "utils/media";

import logo from "images/logo.svg";
import withColors from "components/withcolors";
import { rhythm } from "utils/typography";

const Wrapper = withColors(
  (c) => ({ bg: c.primary.pure }),
  styled.div`
    background: ${(props) => props.colors.bg};
    &,
    a {
      color: white;
    }
    padding: ${rhythm(1)} 1rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    ${media.desktop`
    flex-direction: column;
    align-items: stretch;
    > * {flex: 0 1 auto;}
  `};
  `
);

const HomeLink = styled(Link)`
  font-weight: bold;
  font-size: ${rhythm(1)};
  grid-area: title;
  text-align: left;
  margin-left: 1rem;
  ${media.desktop`
    margin-left: 0;
    text-align:center;
  `};
`;

const Subtitle = styled.div`
  margin-top: .5rem;
  text-align: center;
  width: 100%;
  grid-area: subtitle;
`;

const LogoImg = styled.img`
  height: 100%;
  max-width: 40%;
  max-height: 100%;
  min-width: ${rhythm(3)};
  padding: 0;
  margin: 0;
  ${media.desktop`
    height: auto;
    margin: 0 auto;
    min-width: unset;
  `};
`;

const LogoLink = styled(Link)`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  ${media.desktop`
    flex: 2 1 0;
    align-items: flex-end;
  `};
`;

const query = graphql`
  query {
    site {
      siteMetadata {
        entryPoint
      }
    }
  }
`;
const GoHome = ({ title }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <>
        <LogoLink to={data.site.siteMetadata.entryPoint} title="Go home">
          <LogoImg src={logo} alt="" />
        </LogoLink>
        <HomeLink to={data.site.siteMetadata.entryPoint}>{title}</HomeLink>
      </>
    )}
  />
);
GoHome.propTypes = {
  title: PropTypes.string.isRequired,
};

const Logo = ({ title, subtitle, className }) => (
  <Wrapper className={className} lang="en">
    <GoHome title={title} />
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);
Logo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Logo;
