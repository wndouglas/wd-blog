import { getLearnPostPath, getBlogPostPath } from "./src/functions/getPaths"

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const learnPostPage = path.resolve("./src/templates/learning-post.js")
  const blogPostPage = path.resolve('./src/templates/blog-post.js')
  const categoryPage = path.resolve("./src/templates/category-page.js")
  const subcategoryPage = path.resolve("./src/templates/subcategory-page.js")
  const mdxQueryResult = await graphql(`
  {
    postCategories:
    allMdx {
      distinct(field: frontmatter___category)
    }

    allLearning: allMdx(sort: {fields: frontmatter___date}, filter: {frontmatter: {config: {ne: true}, post_type: {nin: ["header_page", "blog"]}}}) {
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

    allBlogPosts: allMdx(sort: {fields: frontmatter___date}, filter: {frontmatter: {config: {ne: true}, post_type: {eq: "blog"}}}) {
      edges {
        node {
          frontmatter {
            path
            category
          }
        }
      }
    }

    allConfig: allMdx(filter: {frontmatter: {config: {eq: true}, post_type: {nin: ["header_page", "blog"]}}}) {
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

  const blogPostsEdges = mdxQueryResult.data.allBlogPosts.edges
  blogPostsEdges.forEach(({ node }) =>
  {
    createPage({
      path: getBlogPostPath(node.frontmatter.path),
      component: blogPostPage,
      context: {
        slug: node.frontmatter.path,
      },
    })
  })

  const pathEdges = mdxQueryResult.data.allConfig.edges
  const learningPostsEdges = mdxQueryResult.data.allLearning.edges
  learningPostsEdges.forEach(({ node }) =>
  {
    createPage({
      path: getLearnPostPath(node.frontmatter.category, 
            node.frontmatter.sub_category, 
            node.frontmatter.path, pathEdges),
      component: learnPostPage,
      context: {
      slug: node.frontmatter.path,
      },
    })    
  })

  const categories = mdxQueryResult.data.postCategories.distinct
  categories.forEach((currCategory) =>
  {
    createPage({
      path: getLearnPostPath(currCategory, null, null, pathEdges),
      component: categoryPage,
      context: {
      category: currCategory,
      },
    })    

    const currCategorySubCategories = learningPostsEdges
      .filter(({ node }) => (node.frontmatter.category === currCategory))
      .map(({ node }) => node.frontmatter.sub_category)
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort()
    currCategorySubCategories.forEach((currSubcategory) =>
    {
      createPage({
        path: getLearnPostPath(currCategory, currSubcategory, null, pathEdges),
        component: subcategoryPage,
        context: {
        category: currCategory,
        sub_category: currSubcategory,
        },
      })
    })
  })
}
