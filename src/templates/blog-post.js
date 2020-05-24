import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MetaData from "../components/postMetadata"
import DecoratedLink from "../components/decoratedLink"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />
      <div>
        <h1 style={{ marginBottom: '-4px'}}>{post.frontmatter.title}</h1>
        <DecoratedLink slug="/posts" style={{ display: 'inline-block'}}>
          <h4 style={{ marginBottom: '-4px'}}>{post.frontmatter.sub_category}</h4>
        </DecoratedLink>
        <br/>
        <MetaData date={post.frontmatter.date} timeToRead={post.timeToRead} category={post.frontmatter.category}/>
        <hr/>
        <br/>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {path: { eq: $slug }}) {
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