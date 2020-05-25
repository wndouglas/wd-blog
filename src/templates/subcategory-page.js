import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import MetaData from "../components/postMetadata"
import { getPostPath, getCategoryPath } from "../functions/getPaths"

export default ({ data }) => {
  const allPosts = data.allPosts
  const subcategory = allPosts.edges[0].node.frontmatter.sub_category
  const category = allPosts.edges[0].node.frontmatter.category
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={subcategory} />
    <DecoratedLink slug="/posts">
      <h1 style={{ marginBottom: '-8px' }}>Posts</h1>
    </DecoratedLink>
    <br/>
    <DecoratedLink slug={getCategoryPath(category, pathEdges)}>
        <h3 style={{ marginBottom: '-4px', marginTop: '8px' }}>{category}</h3>
    </DecoratedLink>
    <h5 style={{ marginTop: '12px' }}>{subcategory}</h5>
    <hr/>
    <br/>
    {allPosts.edges.filter(({ node }) => (
      node.frontmatter.category === category && node.frontmatter.sub_category === subcategory))
      .map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={getPostPath(category, subcategory, node.frontmatter.path, pathEdges)}>
            <h3 style={{ marginBottom: '-6px' }}>{node.frontmatter.title}</h3>
          </DecoratedLink>
          <br/>
          <MetaData 
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}/>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <br/><br/>
        </div>
    ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!, $sub_category: String) {
  allPosts: allMdx(filter: {frontmatter: {config: {ne: true}, category: {eq: $category}, sub_category: {eq: $sub_category}}}) {
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