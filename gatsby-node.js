const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve("./src/templates/blog-post.js")
  const categoryPage = path.resolve("./src/templates/category-page.js")
  const subcategoryPage = path.resolve("./src/templates/subcategory-page.js")
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
    let curr_path = "/posts" + category_path + sub_category_path + node.frontmatter.path

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
    curr_path = "/posts" + "/" + currCategory.replace(/\s+/g, '-').toLowerCase()
    createPage({
      path: curr_path,
      component: categoryPage,
      context: {
      category: currCategory,
      },
    })    

    const currCategoryEdges = postsEdges.filter(({ node }) => (node.frontmatter.category === currCategory))
    const currCategorySubCategories = currCategoryEdges.map(({ node }) => node.frontmatter.sub_category).filter((v, i, a) => a.indexOf(v) === i).sort()
    currCategorySubCategories.forEach((currSubcategory) =>
    {
      curr_subpath = curr_path + "/" + currSubcategory.replace(/\s+/g, '-').toLowerCase()
      createPage({
        path: curr_subpath,
        component: subcategoryPage,
        context: {
        category: currCategory,
        sub_category: currSubcategory,
        },
      })
    })
  })
}
