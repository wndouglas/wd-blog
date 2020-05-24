import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import MetaData from "../components/postMetadata"

function getCategorySlug(category)
{
  let category_path = "/" + category
  category_path = category_path.replace(/\s+/g, '-').toLowerCase()
  return "/posts" + category_path
}

function getSubCategorySlug(category, subcategory)
{
  let category_path = "/" + category
  category_path = category_path.replace(/\s+/g, '-').toLowerCase()
  let sub_category_path = "/" + subcategory
  sub_category_path = sub_category_path.replace(/\s+/g, '-').toLowerCase()
  return "/posts" + category_path + sub_category_path
}

function getFullSlug(node)
{
  let category_path = "/" + node.frontmatter.category
  category_path = category_path.replace(/\s+/g, '-').toLowerCase()
  let sub_category_path = "/" + node.frontmatter.sub_category
  sub_category_path = sub_category_path.replace(/\s+/g, '-').toLowerCase()
  return "/posts" + category_path + sub_category_path + node.frontmatter.path
}

const PostsPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    <hr/>
    <br/>
    {console.log(data)}
    {data.postCategories.distinct.sort().map(category => (
      <div key={category}>
        <DecoratedLink slug={getCategorySlug(category)}>
            <h3 style={{ marginBottom: '-4px' }}>{category}</h3>
        </DecoratedLink>
        <br/>
        {data.allPosts.edges.filter(({ node }) => (node.frontmatter.category === category)).map(({ node }) => node.frontmatter.sub_category).filter((v, i, a) => a.indexOf(v) === i).sort()
        .map(subcategory => (
          <>
            <DecoratedLink slug={getSubCategorySlug(category, subcategory)}>
              <h6 style={{marginTop: '8px', marginBottom: '-1px'}}>{subcategory}</h6>
            </DecoratedLink>
            <div key={subcategory}>
              <ul style={{ display: 'inline-block', marginTop: '6px', marginBottom: '-2px'}}>
              {data.allPosts.edges.filter(({ node }) => (
                  node.frontmatter.category === category && node.frontmatter.sub_category === subcategory)).slice(0, 5)
                  .map(({ node }) => (
                      <li key={node.frontmatter.path}>
                        <div style={{display: 'inline-block'}}>
                          <Link to={getFullSlug(node)}>
                          {node.frontmatter.title}
                          </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <MetaData 
                          date={node.frontmatter.date}
                          timeToRead={node.timeToRead}/>
                      </li>
              ))}
              <li key={subcategory} style={{listStyle: 'none'}}><Link to={getSubCategorySlug(category, subcategory)}>See all.</Link></li>
              </ul>
            </div>
          </>
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