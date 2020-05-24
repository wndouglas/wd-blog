const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve("./src/templates/blog-post.js")
  const categoryPage = path.resolve("./src/templates/category-page.js")

  const mdxQueryResult = await graphql(`
  {
    postCategories:
    allMdx {
      distinct(field: frontmatter___category)
    }

    allPosts: allMdx(sort: {fields: frontmatter___date}, filter: {frontmatter: {post_type: {ne: "header_page"}}}) {
      edges {
        node {
          frontmatter {
            path
            category
            sub_category
          }
        }
      }
    }
  }`)
  const postsEdges = mdxQueryResult.data.allPosts.edges
  postsEdges.forEach(({ node }) =>
  {
    let category_path = "/" + node.frontmatter.category
    category_path = category_path.replace(/\s+/g, '-').toLowerCase()
    let sub_category_path = "/" + node.frontmatter.sub_category
    sub_category_path = sub_category_path.replace(/\s+/g, '-').toLowerCase()
    let curr_path = category_path + sub_category_path + node.frontmatter.path

    createPage({
      path: curr_path,
      component: postPage,
      context: {
      slug: node.frontmatter.path,
      },
    })    
  })

  const categories = mdxQueryResult.data.postCategories.distinct
  categories.forEach((currCategory) =>
  {
    let category_path = "/" + currCategory
    category_path = category_path.replace(/\s+/g, '-').toLowerCase()
    createPage({
      path: category_path,
      component: categoryPage,
      context: {
      slug: category_path,
      },
    })    
  })
}
