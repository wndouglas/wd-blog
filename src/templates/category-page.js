import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import MetaData from "../components/postMetadata"
import { getLearnPostPath } from "../functions/getPaths"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LearnPageDescription } from "../pages/learn"

export default ({ data }) => {
  const allPosts = data.allPosts
  const category = allPosts.edges[0].node.frontmatter.category
  const pathEdges = data.allConfig.edges
  return (
    <Layout>
    <SEO title={category} />
    <Link to="/learn">
        <h1>{LearnPageDescription}</h1>
    </Link>
    <h3>{category}</h3>
      <hr/>
      <br/>
      <MDXRenderer>
        {data.allConfig.edges
        .filter(({ node }) => node.frontmatter.category === category &&
          node.frontmatter.sub_category === null)[0].node.body}
      </MDXRenderer>
      {allPosts.edges.map(({ node }) => node.frontmatter.sub_category)
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort()
      .map(subcategory => (
        <div key={subcategory}>
          <Link to={getLearnPostPath(category, subcategory, null, pathEdges)}>
            <h3>{subcategory}</h3>
          </Link>
          <ul style={{ display: 'inline-block', marginTop: '10px'}}>
            {allPosts.edges.filter(({ node }) => (
                node.frontmatter.category === category 
                  && node.frontmatter.sub_category === subcategory))
                .sort((a, b) => a.node.frontmatter.index - b.node.frontmatter.index)
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
                subcategory, null, pathEdges)}>
                  See all...
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    allPosts: allMdx(filter: {frontmatter: {config: {ne: true}, 
      post_type: {nin: ["header_page", "blog"]},
      category: {eq: $category}}}) {
      edges {
        node {
          frontmatter {
              path
              title
              category
              sub_category
              date
              index
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