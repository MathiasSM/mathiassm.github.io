import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withColors from "components/withcolors";
import media from "utils/media";
import { rhythm } from "utils/typography";

const activeClassName = "nav-active";

const MenuNav = withColors(
  (c) => c.primary.pure,
  styled.nav`
    background: ${(props) => props.color};
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
    margin: 0;
    width: 100%;
    padding: ${rhythm(0.5)};
    &:hover {
      background: white;
      color: ${(props) => props.color.primary};
    }
    &.${activeClassName} {
      background: white;
      color: ${(props) => props.color.accent};
    }
    &.${activeClassName}:hover {
      color: ${(props) => props.color.accent};
    }
    ${media.desktop`
      padding: ${rhythm(0.5)};
    `};
  `
);

const Menu = ({ sections, className }) => (
  <MenuNav className={className}>
    {sections.map(({ path, title }) => (
      <MenuLink key={title} to={path} partiallyActive>
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
    }).isRequired
  ),
  className: PropTypes.string,
};

export default Menu;
