import { StaticQuery, graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import "katex/dist/katex.min.css";
import styled from "styled-components";

import media from "utils/media";

import SEO from "components/seo";
import Logo from "components/logo";
import Menu from "components/menu";
import Content from "components/content";
import Social from "components/social";

import GlobalStyles from "components/globalstyles";

const GriddedLogo = styled(Logo)`
  grid-area: header;
`;
const GriddedMenu = styled(Menu)`
  grid-area: menu;
`;
const GriddedContent = styled(Content)`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  grid-area: content;
`;
const GriddedSocial = styled(Social)`
  grid-area: social;
`;

const Grid = styled.div`
  display: block;
  height: 100%;
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 2fr 1fr;
    grid-template-areas: "header content"
                         "menu   content"
                         "social content";`}
  ${media.desktop` `}
  ${media.bigdesktop`
    justify-content: center;
    grid-template-columns: 1fr 3fr;`}
`;

const LayoutComp = ({
  children,
  data: {
    site: {
      siteMetadata: { defaultLanguage, ...siteMetadata },
    },
    social,
  },
}) => (
  <Grid>
    <SEO
      language={defaultLanguage}
      defaultTitle={`${siteMetadata.title} - ${siteMetadata.description}`}
      titleTemplate={`%s - ${siteMetadata.title}`}
      og={{ type: "website", site_name: siteMetadata.title }}
      {...siteMetadata}
    />
    <GriddedLogo {...siteMetadata} />
    <GriddedMenu {...siteMetadata} />
    <GriddedContent {...siteMetadata}>{children}</GriddedContent>
    <GriddedSocial {...social} />
  </Grid>
);
LayoutComp.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    site: PropTypes.shape({ siteMetadata: PropTypes.object }),
    social: PropTypes.object,
  }),
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        subtitle
        description
        owner
        since
        now
        defaultLanguage
        sections {
          title
          path
        }
      }
    }
    ...SocialFragment
  }
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <LayoutComp data={data}>
        <GlobalStyles />
        {children}
      </LayoutComp>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
