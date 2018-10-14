const path = require("path");

const allPostsQuery = `
  {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          type: { ne: "page" }
          path: { regex: "/.+/" }
          date: { ne: null }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const component = path.resolve(`src/templates/post.js`);

  return graphql(allPostsQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.posts;

    if (!posts) {
      return Promise.reject("No blog posts found");
    }

    posts.edges.forEach(({ node: { frontmatter: { path } } }) => {
      createPage({
        path,
        component,
        context: {}
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
