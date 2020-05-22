import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
  const post = data.markdown.edges[0].node
  return (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <hr/>
    <br/>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    markdown: allMdx(filter: {frontmatter: {title: {eq: "Contact Page"}}}) {
      edges {
        node {
          body
        }
      }
    }
  }
`