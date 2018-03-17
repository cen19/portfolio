const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    // const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // data paseed to this context is available in page queries as graphQL variables
            slug: node.fields.slug,
          },
        });
      });
      // console.log(JSON.stringify(result, null, 4));
      resolve();
    });
  });
};