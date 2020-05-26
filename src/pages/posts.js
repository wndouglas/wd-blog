import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MetaData from "../components/postMetadata"
import { getPostPath, getSubcategoryPath, getCategoryPath } 
  from "../functions/getPaths"

const PostsPage = ({ data }) => 
{
  const pathEdges = data.allConfig.edges
  return(
  <Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    <hr/>
    <br/>
    {data.postCategories.distinct.sort()
    .map(category => (
      <div key={category}>
        <Link to={getCategoryPath(category, pathEdges)}>
            <h3>{category}</h3>
        </Link>
        {data.allPosts.edges
        .filter(({ node }) => (node.frontmatter.category === category))
        .map(({ node }) => node.frontmatter.sub_category)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
        .map(subcategory => (
          <>
            <Link to={getSubcategoryPath(category, subcategory, pathEdges)}>
              <h5>{subcategory}</h5>
            </Link>
            <div key={subcategory}>
              <ul style={{ display: 'inline-block'}}>
                {data.allPosts.edges.filter(({ node }) => (
                    node.frontmatter.category === category 
                      && node.frontmatter.sub_category === subcategory))
                    .slice(0, 5)
                    .map(({ node }) => (
                        <li key={node.frontmatter.path}>
                          <div style={{display: 'inline-block'}}>
                            <Link to={getPostPath(category, subcategory,
                              node.frontmatter.path, pathEdges)}>
                            {node.frontmatter.title}
                            </Link>
                          </div>
                          &nbsp;&nbsp;&nbsp;
                          <MetaData 
                            date={node.frontmatter.date}
                            timeToRead={node.timeToRead}/>
                        </li>
                ))}
                <li key={subcategory} style={{listStyle: 'none'}}>
                  <Link to={getSubcategoryPath(category, 
                    subcategory, pathEdges)}>See all...</Link>
                </li>
              </ul>
            </div>
          </>
          ))}
          <br/>
          <br/>
      </div>
      ))}
  </Layout>)
}

export default PostsPage

export const query = graphql`
  query {
    postCategories:
      allMdx {
        distinct(field: frontmatter___category)
      }
    allPosts:
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {frontmatter: {config: {ne: true}, 
                               post_type: {ne: "header_page"}}}) {
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