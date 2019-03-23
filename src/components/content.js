import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "utils/media";
import Footer from "components/footer";
import { rhythm } from "utils/typography";

const ContentDiv = styled.div`
  padding: ${rhythm(1)};
  overflow-y: auto;
  ${media.tablet`
    padding: ${rhythm(1)} 3rem;
  `}
  ${media.desktop`
    padding: ${rhythm(1)} 5rem;
  `}
  ${media.bigdesktop``}
`;

const Content = ({ owner, since, now, children, className }) => (
  <ContentDiv className={className}>
    {children}
    <Footer owner={owner} since={since} now={now} />
  </ContentDiv>
);
Content.propTypes = {
  owner: PropTypes.string,
  since: PropTypes.number,
  now: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Content;
