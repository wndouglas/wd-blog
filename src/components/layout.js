import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from "./header/header"
import Footer from "./footer"

export default ({ children }) => (
  <>
  <Header />
  <div
    css={css`
      margin: 0 auto;
      max-width: 1140px;
      min-height: 91vh;
      padding: ${rhythm(5)} ${rhythm(2)} ${rhythm(2)} ${rhythm(2)};
    `}>
    {children}
  </div>
  <Footer/>
  </>
)