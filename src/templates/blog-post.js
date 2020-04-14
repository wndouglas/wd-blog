import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
    <SEO title={post.title} />
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        title
        content
      }
    }
  }
}
`