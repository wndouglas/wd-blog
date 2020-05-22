import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

import MetaData from "../components/postMetadata"

const DecoratedLink = ({ slug, children }) => (
  <Link to={slug}>
            <h3 css={css`
              display: inline-block;
              transition: all 400ms ease-in;
              position: relative;
              
              :after {
                position: absolute;
                bottom: -1px;
                left: 0;
                right: 0;
                width: 0%;
                content: ".";
                color: transparent;
                background: rgb(159,57,43);
                height: 1px;
                transition: all 0.5s ease-in;
              }
            
              :hover {
                color: rgb(159,57,43);
                ::after {
                  width: 100%;
                }
              }
             `}>
               {children}
             </h3>
  </Link>
)

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <h1> Latest posts</h1>
      <hr/>
      <br/>
      {data.mdxArticles.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <DecoratedLink slug={node.frontmatter.path}>
            {node.frontmatter.title}
          </DecoratedLink>
          &nbsp;&nbsp;&nbsp;
          <MetaData 
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}/>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <br/>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    mdxArticles: allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {ne: "header_page"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
          timeToRead
          excerpt
          id
        }
      }
    }
  }
`