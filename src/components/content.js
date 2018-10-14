import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "utils/media";
import Footer from "components/footer";

const ContentDiv = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  ${media.tablet`
    padding: 1.5rem 3rem;
  `}
  ${media.desktop`
    padding: 1.5rem 5rem;
  `}
  ${media.bigdesktop``}
`;

const Content = ({ owner, since, children, className }) => (
  <ContentDiv className={className}>
    {children}
    <Footer owner={owner} since={since} />
  </ContentDiv>
);
Content.propTypes = {
  owner: PropTypes.string,
  since: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Content;
