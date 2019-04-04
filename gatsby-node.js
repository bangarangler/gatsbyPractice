/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(res => {
      res.data.allContentfulProduct.edges.forEach(({ node }) => {
        createPage({
          path: `products/${node.title}`,
          component: path.resolve("./src/template/product-template.js"),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(err => console.log(err))
}
