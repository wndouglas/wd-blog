const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
    return graphql(`
      {
        allMdx(sort: {fields: frontmatter___date}, filter: {frontmatter: {category: {ne: "header_page"}}}) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }`).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
        slug: node.frontmatter.path,
        },
      })    
    })
    }
  )
}
