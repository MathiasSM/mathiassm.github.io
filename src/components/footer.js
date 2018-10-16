import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { rhythm } from "utils/typography";

const Footer = styled.footer`
  margin-top: ${rhythm(3)};
`;

const MainFooter = ({ owner, since }) => (
  <Footer>{`${owner} © ${since}-Present`}</Footer>
);

MainFooter.propTypes = {
  owner: PropTypes.string.isRequired,
  since: PropTypes.number.isRequired
};

export default MainFooter;
