import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"

import MetaData from "../components/postMetadata"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <h1> Latest posts</h1>
      <hr/>
      <br/>
      {data.mdxArticles.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={node.frontmatter.path}>
            <h3 style={{ marginBottom: '-2px' }}>{node.frontmatter.title}</h3>
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
    mdxArticles: allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {post_type: {ne: "header_page"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            category
            date
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`