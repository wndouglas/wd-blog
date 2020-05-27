import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MetaData from "../components/postMetadata"
import { getLearnPostPath } from "../functions/getPaths"

export const LearnPageName = "Learn"
export const LearnPageDescription = "Learning Resources"

const LearnPage = ({ data }) => 
{
  const pathEdges = data.allConfig.edges
  return(
  <Layout>
    <SEO title={LearnPageName} />
    <h1>{LearnPageDescription}</h1>
    <hr/>
    <br/>
    {data.postCategories.distinct.sort()
    .map(category => (
      <div key={category}>
        <Link to={getLearnPostPath(category, null, null, pathEdges)}>
            <h3>{category}</h3>
        </Link>
        {data.allPosts.edges
        .filter(({ node }) => (node.frontmatter.category === category))
        .map(({ node }) => node.frontmatter.sub_category)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
        .map(subcategory => (
          <>
            <Link to={getLearnPostPath(category, subcategory, null, pathEdges)}>
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
                            <Link to={getLearnPostPath(category, subcategory,
                              node.frontmatter.path, pathEdges)}>
                            {node.frontmatter.title}
                            </Link>
                          </div>
                          &nbsp;&nbsp;&nbsp;
                          <MetaData 
                            date={node.frontmatter.date}
                            timeToRead={node.timeToRead}
                            category={node.frontmatter.category} 
                            pathEdges={pathEdges}/>
                        </li>
                ))}
                <li key={subcategory} style={{listStyle: 'none'}}>
                  <Link to={getLearnPostPath(category, 
                    subcategory, null, pathEdges)}>See all...</Link>
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

export default LearnPage

export const query = graphql`
  query {
    postCategories:
      allMdx(filter: {frontmatter: {post_type: {nin: ["header_page", "blog"]}}}) {
        distinct(field: frontmatter___category)
      }
    allPosts:
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {frontmatter: {config: {ne: true}, 
        post_type: {nin: ["header_page", "blog"]}}}) {
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
      allMdx(filter: {frontmatter: {config: {eq: true}, 
        post_type: {nin: ["header_page", "blog"]}}}) {
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