import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { getCategoryPath } from "../functions/getPaths"
import Post from "../components/post"

export default ({ data }) => {
  const subcategory = data.allPosts.edges[0].node.frontmatter.sub_category
  const category = data.allPosts.edges[0].node.frontmatter.category
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={subcategory} />
    <Link slug="/posts">
      <h1>Posts</h1>
    </Link>
    <Link to={getCategoryPath(category, pathEdges)}>
        <h3>{category}</h3>
    </Link>
    <h5>{subcategory}</h5>
    <hr/>
    <br/>
    {data.allPosts.edges.map(({ node }) => (
        <Post pathEdges={data.allConfig.edges} node={node} key={node.frontmatter.path}/> 
    ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!, $sub_category: String) {
  allPosts: allMdx(filter: {frontmatter: {config: {ne: true}, category: {eq: $category}, sub_category: {eq: $sub_category}}}) {
    edges {
      node {
        frontmatter {
            path
            title
            category
            sub_category
            date
          }
          timeToRead
          excerpt
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
}
`