import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: rhythm(0.75) }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
const data = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`)
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1140px;
        padding: ${rhythm(1.5)};
        padding-top: ${rhythm(1.5)};
      `}>
      <header style={{ marginBottom: `1.5rem`,  position: `sticky` }}>
        <Link to={'/'}>
          <h3 style={{ display: `inline-block` }}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/posts/">Posts</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
