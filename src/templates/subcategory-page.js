import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { getLearnPostPath } from "../functions/getPaths"
import LearningPost from "../components/learningPost"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LearnPageDescription } from "../pages/learn"

export default ({ data }) => {
  const subcategory = data.allPosts.edges[0].node.frontmatter.sub_category
  const category = data.allPosts.edges[0].node.frontmatter.category
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={subcategory} />
    <Link slug="/learn">
      <h1>{LearnPageDescription}</h1>
    </Link>
    <Link to={getLearnPostPath(category, null, null, pathEdges)}>
        <h3>{category}</h3>
    </Link>
    <h5>{subcategory}</h5>
    <hr/>
    <br/>
    <MDXRenderer>
      {data.allConfig.edges
      .filter(({ node }) => node.frontmatter.category === category &&
        node.frontmatter.sub_category === subcategory)[0].node.body}
    </MDXRenderer>
    {data.allPosts.edges.map(({ node }) => (
        <LearningPost pathEdges={data.allConfig.edges} 
          node={node} key={node.frontmatter.path}/> 
    ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!, $sub_category: String) {
  allPosts: allMdx(filter: {frontmatter: 
    {post_type: {nin: ["header_page", "blog"]}, 
    config: {ne: true}, category: {eq: $category}, 
    sub_category: {eq: $sub_category}}}) {
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
  allConfig: allMdx(filter: {frontmatter: {config: {eq: true}, post_type: {nin: ["header_page", "blog"]}}}) {
    edges {
      node {
        frontmatter {
          sub_category
          category
          path
        }
        body
      }
    }
  }
}
`