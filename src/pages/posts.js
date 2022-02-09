import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MetaData from "../components/postMetadata"
import { getBlogPostPath } from "../functions/getPaths"
import { getPostMonthsAndYears } from "../functions/getPostMonthsAndYears"
import moment from "moment"

export const PostsPageName = "Posts"

const PostsPage = ({ data }) => 
{
  // map of years to a set of months
  const sortedPostDates = getPostMonthsAndYears(data.allDates.distinct)
  return (
  <Layout>
    <SEO title={PostsPageName} />
    <h1>{PostsPageName}</h1>
    <hr/>
    <br/>
    {sortedPostDates.map(date => 
    {
      const year = date[0]
      return (
      <div key={year}>
        <h3>{year}</h3>
        {date[1].map(month => (
          <div key={year + ", " + month}>
            <h5>{moment(month, "MM").format("MMMM")}</h5>
            {data.allPosts.edges.filter(({ node }) => {
              const date = node.frontmatter.date
              const currYear = parseInt(moment(date).format("YYYY"))
              const currMonth = parseInt(moment(date).format("MM"))
              return currYear === year && currMonth === month
            })
            .map(({ node }) => (
              <li key={node.frontmatter.path}>
                <div style={{display: 'inline-block'}}>
                  <Link to={getBlogPostPath(node.frontmatter.path)}>
                  {node.frontmatter.title}
                  </Link>
                </div>
                &nbsp;&nbsp;&nbsp;
                <MetaData 
                  date={node.frontmatter.date}
                  timeToRead={node.timeToRead}/>
              </li>
          ))}
          </div>
      ))}
      <br/><br/>
      </div>
    )})}
  </Layout>
)}

export default PostsPage

export const query = graphql`
  query {
    allPosts:
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {frontmatter: {config: {ne: true}, 
          post_type: {eq: "blog"}, hide: {ne: true}}}) {
        edges {
          node {
            frontmatter {
              path
              title
              category
              date
            }
            timeToRead
          }
        }
      }

    allDates:
      allMdx(filter: {
        frontmatter: {
          config: {
            ne: true
          }, 
          post_type: {
            eq: "blog"
          },
          hide: {
            ne: true
          }
        }
      }) {
        distinct(field: frontmatter___date)
      }
  }
`