import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const DecoratedLink = ({ slug, children }) => (
  <Link to={slug}>
            <h2 css={css`
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
             `}>{children}</h2>
  </Link>
)

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <h1> Latest posts</h1>
      <hr/>
      <br/>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <DecoratedLink slug={node.slug}>
            {node.title}
          </DecoratedLink>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`