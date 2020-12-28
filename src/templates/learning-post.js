import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MetaData from "../components/postMetadata"
import { Link } from "gatsby"
import { getLearnPostPath } from "../functions/getPaths"
import TutorialList from "../components/tutorialList"
import TutorialContents from "../components/tutorialContents"

export default ({ data }) => {
  console.log(data)
  const post = data.markdown
  const pathEdges = data.allConfig.edges
  const allIndexedPosts = data.allSubcategoryPosts.edges
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Link to={getLearnPostPath(post.frontmatter.category, 
          post.frontmatter.sub_category, null, pathEdges)}
          style={{ display: 'inline-block'}}>
          <h4>{post.frontmatter.sub_category}</h4>
        </Link>
        <br/>
        <MetaData date={post.frontmatter.date} timeToRead={post.timeToRead}
          category={post.frontmatter.category} pathEdges={pathEdges}/>
        <hr/>
        <br/>
        <MDXRenderer TutorialList={TutorialList} TutorialContents={TutorialContents} currIndex = {post.frontmatter.index} allIndexedPosts={allIndexedPosts} pathEdges={pathEdges}>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $category: String!, $sub_category: String!) {
    markdown: mdx(frontmatter: {path: { eq: $slug }, category: { eq: $category }, sub_category: { eq: $sub_category }}) {
        frontmatter {
          path
          title
          category
          sub_category
          date
          index
        }
        body
        timeToRead
    }
    allConfig: allMdx(filter: {frontmatter: {config: {eq: true}, post_type: {nin: ["header_page", "blog"]}}}) {
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
    allSubcategoryPosts: allMdx(filter: {frontmatter: {config: {ne: true}, 
      post_type: {nin: ["header_page", "blog"]},
      category: {eq: $category}, sub_category: {eq: $sub_category}}}, 
      sort: {fields: frontmatter___index, order: ASC}) {
      edges {
        node {
          frontmatter {
              path
              title
              category
              sub_category
              index
            }
        }
      }
    }
  }
`