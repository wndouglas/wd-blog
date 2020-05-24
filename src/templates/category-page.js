import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import DecoratedLink from "../components/decoratedLink"

function getSlug(sub_category)
{
  let category_path = "/" + sub_category
  return category_path.replace(/\s+/g, '-').toLowerCase()
}

export default ({ data }) => {
  const allPosts = data.allMdx
  const category = allPosts.edges[0].frontmatter.category
  return (
    <Layout>
    <SEO title={category} />
    <h1>{category}</h1>
      <hr/>
      <br/>
      {allPosts.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={getSlug(node.frontmatter.sub_category)}>
            <h3 style={{ marginBottom: '-2px' }}>{node.frontmatter.title}</h3>
          </DecoratedLink>
          <br/>
          <MetaData 
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            category={node.frontmatter.category}/>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />

          <br/><br/>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
  allMdx(filter: {frontmatter: {category: {eq: $category}}}) {
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