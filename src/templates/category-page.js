import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import MetaData from "../components/postMetadata"
import { getPostPath, getSubcategoryPath } from "../functions/getPaths"

export default ({ data }) => {
  const allPosts = data.allPosts
  const category = allPosts.edges[0].node.frontmatter.category
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={category} />
    <DecoratedLink slug="/posts">
        <h1 style={{ marginBottom: '-8px' }}>Posts</h1>
    </DecoratedLink>
    <h3 style={{ marginTop: '8px' }}>{category}</h3>
      <hr/>
      <br/>
      {allPosts.edges.map(({ node }) => node.frontmatter.sub_category).filter((v, i, a) => a.indexOf(v) === i).sort()
        .map(subcategory => (
            <div key={subcategory}>
              <DecoratedLink slug={getSubcategoryPath(category, subcategory, pathEdges)}>
                <h3 style={{marginBottom: '-4px'}}>{subcategory}</h3>
              </DecoratedLink>
              <br/>
              <ul style={{ display: 'inline-block', marginTop: '10px'}}>
              {allPosts.edges.filter(({ node }) => (
                  node.frontmatter.category === category && node.frontmatter.sub_category === subcategory)).slice(0, 10)
                  .map(({ node }) => (
                      <li key={node.frontmatter.path}>
                        <div style={{display: 'inline-block'}}>
                          <Link to={getPostPath(category, subcategory, node.frontmatter.path, pathEdges)}>
                          {node.frontmatter.title}
                          </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <MetaData 
                          date={node.frontmatter.date}
                          timeToRead={node.timeToRead}/>
                      </li>
              ))}
              <li key={subcategory} style={{listStyle: 'none'}}>See all.</li>
              </ul>
            </div>
          ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
  allPosts: allMdx(filter: {frontmatter: {config: {ne: true}, category: {eq: $category}}}) {
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