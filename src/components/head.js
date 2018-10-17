import React from "react";
import PropTypes from "prop-types";

import t from "utils/typography";

import Helmet from "react-helmet";

const Head = ({ title, subtitle, description }) => (
  <Helmet
    titleTemplate={`%s | ${title}`}
    defaultTitle={`${title} - ${subtitle}`}
  >
    <html lang="en" />
    <meta name="description" content={description} />
  </Helmet>
);
Head.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
};

export default Head;
