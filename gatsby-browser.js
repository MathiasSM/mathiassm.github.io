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

exports.onInitialClientRender = () => {
  checkHash(globalHistory.location);
};

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  checkHash(location);
};

exports.onInitialClientRender = () => {
  require("typeface-roboto");
  require("typeface-roboto-slab");
  require("katex/dist/katex.min.css");
  require("prismjs/themes/prism-solarizedlight.css");
};

