import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withColors from "components/withcolors";
import media from "utils/media";

const activeClassName = "nav-active";

const MenuNav = withColors(
  styled.nav`
    background: ${props => props.color.primary.hslString};
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.tablet`
    padding: 1rem;
  `};
  `
);

const MenuList = styled.ul`
  display: flex;
  margin: 0;
  width: 100%;
  text-align: center;
  a {
    color: white;
  }
  ${media.tablet`
    flex-direction: column;
  `};
`;

const MenuLink = withColors(
  styled(Link).attrs({ activeClassName })`
    font-size: 1.2em;
    margin: 0.2em 0;
    width: 100%;
    padding: 0.3rem;
    &:hover {
      background: white;
      color: ${props => props.color.primary.hslString};
    }
    &.${activeClassName} {
      background: white;
      color: ${props => props.color.accent.hslString};
    }
    &.${activeClassName}:hover {
      color: ${props => props.color.accent.hslString};
    }
    ${media.desktop`
    padding: .6rem;
  `};
  `
);

const Menu = ({ sections, className }) => (
  <MenuNav className={className}>
    <MenuList>
      {sections.map(({ path, title }) => (
        <MenuLink key={title} to={path}>
          {title}
        </MenuLink>
      ))}
    </MenuList>
  </MenuNav>
);

Menu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ),
  className: PropTypes.string
};

export default Menu;
