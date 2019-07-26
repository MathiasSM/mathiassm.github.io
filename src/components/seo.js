import React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import Helmet from "react-helmet";

const SEO = ({
  lang = "en",
  title,
  description,
  og: ogRaw,
  location: { origin, pathname },
  ...props
}) => {
  const og = { ...ogRaw };
  og.title = og.title || title;
  og.description = og.description || description;

  const ogs = [];
  const addOg = (tag, cont) => {
    const meta = <meta key={tag} property={`og:${tag}`} content={cont} />;
    ogs.push(meta);
  };
  Object.keys(og).forEach(tag => {
    const content = og[tag];
    if (Array.isArray(content)) {
      for (let i = 0; i < content.length; i += 1) addOg(tag, content[i]);
      return;
    }
    addOg(tag, content);
  });

  return (
    <Helmet {...props}>
      {lang && <html lang={lang} />}
      {title && <title>{title}</title>}
      {ogs}
      <meta property="og:url" content={`${origin}${pathname}`} />
    </Helmet>
  );
};
SEO.propTypes = {
  lang: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.shape({
    href: PropTypes.string,
    pathname: PropTypes.string,
    origin: PropTypes.string
  }),
  og: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};
SEO.defaultProps = {
  og: {}
};

const LocatedSEO = props => (
  <Location>{({ location }) => <SEO {...{ location }} {...props} />}</Location>
);

export default LocatedSEO;
