import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const AboutPage = ({ data }) => {
  const post = data.allMdx.edges[0].node
  return (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/">Go home</Link>
  </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {title: {eq: "About Page"}}}) {
      edges {
        node {
          body
        }
      }
    }
  }
`
