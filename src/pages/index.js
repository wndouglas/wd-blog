import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <h1> Latest posts</h1>
    <hr/>
    <br/>
    {data.mdxArticles.edges.map(({ node }) => (
      <Post pathEdges={data.allConfig.edges} node={node} key={node.frontmatter.path}/> 
    ))}
  </Layout>
)

export const query = graphql`
  query {
    mdxArticles: allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {post_type: {ne: "header_page"}, config: {ne: true}}}) {
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
    allConfig: 
      allMdx(filter: {frontmatter: {config: {eq: true}}}) {
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