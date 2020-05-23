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
    {data.postCategories.distinct.reverse().map(category => (
      <div key={category}>
        <h3>{category}</h3>
        <ul>
        {data.allPosts.edges.filter(({ node }) => (
          node.frontmatter.category === category)).map(({ node }) => (
            <div key={node.frontmatter.path}>
            <li><DecoratedLink slug={node.frontmatter.path}>
            <h6>{node.frontmatter.title}</h6>
            </DecoratedLink>
            &nbsp;&nbsp;&nbsp;
            <MetaData 
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}/>
            </li>
          </div>
        ))}
        </ul>
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
              date
            }
            timeToRead
            excerpt
          }
        }
      }
  }
`