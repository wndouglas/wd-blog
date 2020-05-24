import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import MetaData from "../components/postMetadata"

const PostsPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    <hr/>
    <br/>
    {data.postCategories.distinct.sort().map(category => (
      <div key={category}>
        <h3>{category}</h3>
        {data.allPosts.edges.filter(({ node }) => (node.frontmatter.category === category)).map(({ node }) => node.frontmatter.sub_category).filter((v, i, a) => a.indexOf(v) === i).sort().map(
          subcategory => (
            <div key={subcategory}>
              <h6>{subcategory}</h6>
              <ul style={{ display: 'inline-block'}}>
              {data.allPosts.edges.filter(({ node }) => (
                  node.frontmatter.category === category && node.frontmatter.sub_category === subcategory)).map(({ node }) => (
                      <li key={node.frontmatter.path}>
                        <div style={{display: 'inline-block'}}>
                          <DecoratedLink slug={node.frontmatter.path}>
                          {node.frontmatter.title}
                          </DecoratedLink>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <MetaData 
                          date={node.frontmatter.date}
                          timeToRead={node.timeToRead}/>
                      </li>
              ))}
              </ul>
            </div>
          ))}
          <br/>
          <br/>
      </div>
      ))}
  </Layout>
)

export default PostsPage

export const query = graphql`
  query {
    postCategories:
      allMdx {
        distinct(field: frontmatter___category)
      }
    allPosts:
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {post_type: {ne: "header_page"}}}) {
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
          }
        }
      }
  }
`