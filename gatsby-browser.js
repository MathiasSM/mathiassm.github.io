const { globalHistory } = require("@reach/router");

function checkHash(location) {
  let hash = location.hash;
  if (hash) {
    const goto = document.getElementById(hash.replace("#", ""));
    if (goto) {
      document.getElementById("content").scrollTo(0, goto.offsetTop);
      return false;
    }
  }
  return true;
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  checkHash(location);
};

exports.onInitialClientRender = () => {
  checkHash(globalHistory.location);
  require("fontsource-roboto");
  require("fontsource-roboto-slab");
  require("katex/dist/katex.min.css");
  require("prismjs/themes/prism-solarizedlight.css");
};
