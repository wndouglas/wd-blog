import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MetaData from "../components/postMetadata"
import DecoratedLink from "../components/decoratedLink"
import { getSubcategoryPath } from "../functions/getPaths"

export default ({ data }) => {
  const post = data.markdown
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />
      <div>
        <h1 style={{ marginBottom: '-4px'}}>{post.frontmatter.title}</h1>
        <DecoratedLink slug={getSubcategoryPath(post.frontmatter.category, post.frontmatter.sub_category, pathEdges)} style={{ display: 'inline-block'}}>
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