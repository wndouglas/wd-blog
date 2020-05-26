import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MetaData from "../components/postMetadata"
import { Link } from "gatsby"
import { getSubcategoryPath } from "../functions/getPaths"

export default ({ data }) => {
  const post = data.markdown
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Link to={getSubcategoryPath(post.frontmatter.category, 
          post.frontmatter.sub_category, pathEdges)}
          style={{ display: 'inline-block'}}>
          <h4>{post.frontmatter.sub_category}</h4>
        </Link>
        <br/>
        <MetaData date={post.frontmatter.date} timeToRead={post.timeToRead}
          category={post.frontmatter.category} pathEdges={pathEdges}/>
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