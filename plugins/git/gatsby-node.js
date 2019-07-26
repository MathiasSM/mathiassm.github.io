const path = require("path");
const git = require("simple-git/promise");

function getModificationDate(dir, file) {
  return git(dir)
    .log({ file })
    .then(log => (log.latest ? log.latest.date : new Date()))
    .catch(() => {
      Promise.reject(`Couldn't find git log for ${file}`);
    });
}

/**
 * Adds git last commit time to each markdown file as "lastModifiedAt"
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const {
    fileAbsolutePath: filePath,
    internal: { type }
  } = node;

  if (type !== "MarkdownRemark") return;

  const dirPath = path.dirname(filePath);

  return getModificationDate(dirPath, filePath).then(date => {
    createNodeField({ node, name: "lastModifiedAt", value: new Date(date) });
  });
};
