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
      max-width: 1000px;
      min-height: 98vh;
      padding: ${rhythm(3.5)} ${rhythm(2)} ${rhythm(2)} ${rhythm(2)};
      font-size: 80%;
    `}>
    {children}
  </div>
  <Footer/>
  </>
)