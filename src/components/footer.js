import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { rhythm } from "utils/typography";

const Footer = styled.footer`
  margin-top: ${rhythm(2)};
`;

const MainFooter = ({ owner, since, now }) => (
  <Footer>{`${owner} © ${since}-${now}`}</Footer>
);

MainFooter.propTypes = {
  owner: PropTypes.string.isRequired,
  since: PropTypes.number.isRequired,
  now: PropTypes.number.isRequired
};

export default MainFooter;
