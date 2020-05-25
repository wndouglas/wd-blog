import { getCategoryPath, getSubcategoryPath, getPostPath } from "./src/functions/getPaths"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

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

    allPosts: allMdx(sort: {fields: frontmatter___date}, filter: {frontmatter: {config: {ne: true}, post_type: {ne: "header_page"}}}) {
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

    allConfig: allMdx(filter: {frontmatter: {config: {eq: true}}}) {
      edges {
        node {
          frontmatter {
            sub_category
            category
            path
          }
        }
      }
    }
  }`)
  const pathEdges = mdxQueryResult.data.allConfig.edges
  const postsEdges = mdxQueryResult.data.allPosts.edges
  postsEdges.forEach(({ node }) =>
  {
    createPage({
      path: getPostPath(node.frontmatter.category, node.frontmatter.sub_category, node.frontmatter.path, pathEdges),
      component: postPage,
      context: {
      slug: node.frontmatter.path,
      },
    })    
  })

  const categories = mdxQueryResult.data.postCategories.distinct
  categories.forEach((currCategory) =>
  {
    createPage({
      path: getCategoryPath(currCategory, pathEdges),
      component: categoryPage,
      context: {
      category: currCategory,
      },
    })    

    const currCategorySubCategories = postsEdges.filter(({ node }) => (node.frontmatter.category === currCategory)).map(({ node }) => node.frontmatter.sub_category).filter((v, i, a) => a.indexOf(v) === i).sort()
    currCategorySubCategories.forEach((currSubcategory) =>
    {
      createPage({
        path: getSubcategoryPath(currCategory, currSubcategory, pathEdges),
        component: subcategoryPage,
        context: {
        category: currCategory,
        sub_category: currSubcategory,
        },
      })
    })
  })
}
