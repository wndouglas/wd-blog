import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Navbar from "./navbar/navbar"
import Footer from "./footer"

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
          author
        }
      }
    }`)
  return (
    <>
    <Navbar />
    <div
      css={css`
        margin: 0 auto;
        max-width: 1140px;
        padding: 0 ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}>
      
      {children}
    </div>
    </>
  )
}