import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withColors from "components/withcolors";
import media from "utils/media";
import { rhythm } from "utils/typography";

const activeClassName = "nav-active";

const MenuNav = withColors(
  (c) => ({ bg: c.primary.pure }),
  styled.nav`
    background: ${(props) => props.colors.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
    a {
      color: white;
    }
    ${media.tablet`
      padding: ${rhythm(1)} 1em;
      flex-direction: column;
    `};
  `
);

const LinkComp = ({ ...props }) => <Link {...props} />;

const MenuLink = withColors(
  (c) => ({ accent: c.accent.pure, primary: c.primary.pure }),
  styled(LinkComp).attrs({ activeClassName })`
    font-size: 1.2em;
    ${(props) =>
      props.defaultLanguage == props.language ? "" : "font-style: italic;"}
    margin: 0;
    width: 100%;
    padding: ${rhythm(0.5)};
    &:hover {
      background: white;
      color: ${(props) => props.colors.primary};
    }
    &.${activeClassName} {
      background: white;
      color: ${(props) => props.colors.accent};
    }
    &.${activeClassName}:hover {
      color: ${(props) => props.colors.accent};
    }
    ${media.desktop`
      padding: ${rhythm(0.5)};
    `};
  `
);

const Menu = ({ sections, className, defaultLanguage }) => (
  <MenuNav className={className} lang={defaultLanguage}>
    {sections.map(({ path, title, language }) => (
      <MenuLink
        key={title}
        to={path}
        language={language}
        defaultLanguage={defaultLanguage}
        partiallyActive
      >
        {title}
      </MenuLink>
    ))}
  </MenuNav>
);

Menu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    }).isRequired
  ),
  className: PropTypes.string,
  defaultLanguage: PropTypes.string.isRequired,
};

export default Menu;
