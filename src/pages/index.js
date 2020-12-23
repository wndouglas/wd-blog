import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../components/blogPost"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const IndexPageName = "Home"

export default ({ data }) => (
  <Layout>
    <SEO title={IndexPageName}/>
    <h1> Latest posts</h1>
    <hr/>
    <br/>
    {data.mdxArticles.edges.map(({ node }) => (
      <BlogPost node={node} key={node.frontmatter.path}/> 
    ))}
  </Layout>
)

export const query = graphql`
  query {
    mdxArticles: allMdx(sort: {fields: [frontmatter___date], 
      order: DESC}, filter: {frontmatter:
        {
          post_type: {eq: "blog"}, 
          config: {ne: true},
          hide: {ne: true}
        }}) {
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
  }
`