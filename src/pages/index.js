import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import { getPostPath } from "../functions/getPaths"

import MetaData from "../components/postMetadata"

export default ({ data }) => {
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
      <SEO title="Home"/>
      <h1> Latest posts</h1>
      <hr/>
      <br/>
      {data.mdxArticles.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={getPostPath(node.frontmatter.category, node.frontmatter.sub_category, node.frontmatter.path, pathEdges)}>
            <h3 style={{ marginBottom: '-6px' }}>{node.frontmatter.title}</h3>
          </DecoratedLink>
          <br/>
          <MetaData 
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            category={node.frontmatter.category}/>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link to={node.frontmatter.path}>Read more...</Link>
          <br/><br/>
        </div>
      ))}
    </Layout>
  )
}

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