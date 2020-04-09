import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

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
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}>
      <Link to={'/'}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
        `}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about`}
        css={css`
          float: right;
          `}>
        About
      </Link>
      <Link
        to={`/posts`}
        css={css`
          float: right;
          padding: 0 ${rhythm(1)};
          `}>
        All Posts
      </Link>
      {children}
    </div>
  )
}
