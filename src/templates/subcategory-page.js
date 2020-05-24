import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"
import MetaData from "../components/postMetadata"

function getCategorySlug(category)
{
  let category_path = "/" + category
  return "/posts" + category_path.replace(/\s+/g, '-').toLowerCase()
}

function getFullSlug(node)
{
  let category_path = "/" + node.frontmatter.category
  category_path = category_path.replace(/\s+/g, '-').toLowerCase()
  let sub_category_path = "/" + node.frontmatter.sub_category
  sub_category_path = sub_category_path.replace(/\s+/g, '-').toLowerCase()
  return "/posts" + category_path + sub_category_path + node.frontmatter.path
}

export default ({ data }) => {
  const allPosts = data.allMdx
  const subcategory = allPosts.edges[0].node.frontmatter.sub_category
  const category = allPosts.edges[0].node.frontmatter.category
  return (
    <Layout>
    <SEO title={subcategory} />
    <DecoratedLink slug="/posts">
      <h1 style={{ marginBottom: '-8px' }}>Posts</h1>
    </DecoratedLink>
    <br/>
    <DecoratedLink slug={getCategorySlug(category)}>
        <h3 style={{ marginBottom: '-4px', marginTop: '4px' }}>{category}</h3>
    </DecoratedLink>
    <h5 style={{ marginTop: '8px' }}>{subcategory}</h5>
    <hr/>
    <br/>
    {allPosts.edges.filter(({ node }) => (
      node.frontmatter.category === category && node.frontmatter.sub_category === subcategory))
      .map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={getFullSlug(node)}>
            <h3 style={{ marginBottom: '-4px' }}>{node.frontmatter.title}</h3>
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
  query($category: String!, $sub_category: String!) {
  allMdx(filter: {frontmatter: {category: {eq: $category}, sub_category: {eq: $sub_category}}}) {
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
}
`