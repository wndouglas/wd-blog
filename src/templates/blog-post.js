import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MetaData from "../components/postMetadata"

export default ({ data }) => {
  const post = data.markdown
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MetaData date={post.frontmatter.date} timeToRead={post.timeToRead}/>
        <hr/>
        <br/>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdown: mdx(frontmatter: {path: { eq: $slug }}) {
        frontmatter {
          path
          title
          category
          sub_category
          date
        }
        body
        timeToRead
  }
}
`